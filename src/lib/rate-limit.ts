/**
 * Simple in-memory rate limiter using Token Bucket algorithm
 * Note: For production with multiple instances/serverless, use Redis (e.g., Upstash)
 */

type TokenBucket = {
    tokens: number;
    lastRefill: number;
};

const buckets = new Map<string, TokenBucket>();

interface RateLimitOptions {
    uniqueTokenPerInterval?: number; // Max number of unique users per interval
    interval?: number; // Interval in milliseconds (e.g., 60000ms = 1min)
}

export function rateLimit(options?: RateLimitOptions) {
    const limit = options?.uniqueTokenPerInterval || 500;
    const interval = options?.interval || 60000;

    return {
        check: (response: any, limitParams: number, token: string) =>
            new Promise<void>((resolve, reject) => {
                const now = Date.now();
                const bucket = buckets.get(token) || { tokens: limitParams, lastRefill: now };

                // Refill tokens based on time passed
                const timePassed = now - bucket.lastRefill;
                const tokensToAdd = Math.floor(timePassed / interval) * limitParams;

                if (tokensToAdd > 0) {
                    bucket.tokens = Math.min(limitParams, bucket.tokens + tokensToAdd);
                    bucket.lastRefill = now;
                }

                if (bucket.tokens > 0) {
                    bucket.tokens -= 1;
                    buckets.set(token, bucket);
                    resolve();
                } else {
                    reject(new Error('Rate Limit Exceeded'));
                }
            }),
    };
}
