import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Exclude static files and API routes from i18n
    const isInternal = pathname.startsWith('/_next') ||
        pathname.includes('/api/') ||
        pathname.includes('/favicon.ico');

    // 2. Handle Localization redirection/rewrite
    if (!isInternal && !pathname.startsWith('/admin')) {
        const pathnameIsArabic = pathname.startsWith('/ar/') || pathname === '/ar';
        const pathnameIsEnglish = pathname.startsWith('/en/') || pathname === '/en';

        // Redirect /ar to root
        if (pathnameIsArabic) {
            const newPath = pathname.replace(/^\/ar/, '') || '/';
            return NextResponse.redirect(new URL(newPath, request.url));
        }

        // Rewrite root to /ar (internal) if not English
        if (!pathnameIsEnglish) {
            return NextResponse.rewrite(
                new URL(`/ar${pathname === '/' ? '' : pathname}`, request.url)
            );
        }
    }

    // 3. Create an unmodified response for Supabase
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    // 4. Create the Supabase client
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // 5. Refresh session if expired
    const {
        data: { user },
    } = await supabase.auth.getUser()

    // 6. Protect admin routes
    if (pathname.startsWith('/admin')) {
        if (pathname === '/admin/login') {
            if (user) {
                return NextResponse.redirect(new URL('/admin', request.url))
            }
            return response
        }

        if (!user) {
            const redirectUrl = request.nextUrl.clone()
            redirectUrl.pathname = '/admin/login'
            redirectUrl.searchParams.set('redirectedFrom', pathname)
            return NextResponse.redirect(redirectUrl)
        }
    }

    // 7. Security Headers
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' blob: data: https://xppqpevjoeptatzoxgya.supabase.co https://images.unsplash.com https://www.googletagmanager.com;
        font-src 'self' data: https://fonts.gstatic.com;
        connect-src 'self' https://xppqpevjoeptatzoxgya.supabase.co https://www.google-analytics.com;
        frame-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    response.headers.set('Content-Security-Policy', cspHeader);
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    return response
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
