'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { t, language } = useLanguage();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-background p-4">
            <div className="text-center max-w-md mx-auto">
                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-10 h-10 text-destructive" />
                </div>

                <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                    {language === 'ar' ? 'حدث خطأ ما' : 'Something went wrong'}
                </h1>

                <p className="text-muted-foreground mb-8">
                    {language === 'ar'
                        ? 'نعتذر عن هذا الخطأ الفني. يرجى المحاولة مرة أخرى أو التواصل مع الدعم الفني.'
                        : 'We apologize for this technical error. Please try again or contact support.'}
                </p>

                <div className="flex flex-col gap-3">
                    <Button
                        onClick={reset}
                        size="lg"
                        className="bg-primary text-white hover:bg-primary/90 w-full"
                    >
                        <RefreshCcw className="w-4 h-4 me-2" />
                        {language === 'ar' ? 'إعادة المحاولة' : 'Try Again'}
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Link href="/">
                            {language === 'ar' ? 'العودة للرئيسية' : 'Return Home'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
