'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

import { Language } from '@/contexts/LanguageContext';
import { LazyMotion, domAnimation } from 'framer-motion';

export function Providers({ children, locale }: { children: React.ReactNode; locale?: Language }) {
    return (
        <LazyMotion features={domAnimation}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <LanguageProvider initialLocale={locale}>
                        <TooltipProvider>
                            {children}
                            <Toaster />
                            <Sonner />
                        </TooltipProvider>
                    </LanguageProvider>
                </AuthProvider>
            </QueryClientProvider>
        </LazyMotion>
    );
}
