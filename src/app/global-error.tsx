'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="ar" dir="rtl">
            <body>
                <div className="min-h-screen flex items-center justify-center bg-background p-4">
                    <div className="text-center max-w-md mx-auto">
                        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-12 h-12 text-gold" />
                        </div>

                        <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
                            خطأ جسيم في النظام | Critical Error
                        </h1>

                        <p className="text-muted-foreground mb-8">
                            حدث خطأ غير متوقع منع الموقع من التحميل.
                        </p>

                        <Button onClick={() => reset()} size="lg" variant="luxury" className="text-primary font-bold">
                            تحديث الصفحة | Refresh Page
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    );
}
