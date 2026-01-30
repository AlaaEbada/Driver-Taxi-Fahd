'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email('البريد الإلكتروني غير صالح'),
    password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
});

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { signIn, user, isAdmin, isLoading: authLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectedFrom = searchParams.get('redirectedFrom');
    const { language } = useLanguage();

    // Redirect if already logged in as admin
    useEffect(() => {
        if (user && isAdmin) {
            // Prevent infinite redirect loop:
            // If redirectedFrom is present, it means the server rejected our session (cookie missing/expired).
            // In that case, do NOT auto-redirect. Let the user sign in again to refresh cookies.
            if (!redirectedFrom) {
                router.push('/admin');
            }
        }
    }, [user, isAdmin, router, redirectedFrom]);

    // Handle errors separately to avoid race conditions
    useEffect(() => {
        // Only show "Not Admin" error if authentication is finished loading,
        // we have a user, but they are definitively NOT an admin.
        if (!authLoading && user && !isAdmin && !isLoading) {
            // Small delay to ensure we don't flash error during state transitions
            const timer = setTimeout(() => {
                if (!isAdmin) {
                    setError(language === 'ar'
                        ? `عذراً، ليس لديك صلاحيات المدير`
                        : `Sorry, you do not have admin privileges`);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [user, isAdmin, authLoading, isLoading, language]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validate input
        const validation = loginSchema.safeParse({ email, password });
        if (!validation.success) {
            setError(validation.error.issues[0].message);
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await signIn(email, password);
            if (error) {
                if (error.message.includes('Invalid login credentials')) {
                    setError(language === 'ar' ? 'بيانات الدخول غير صحيحة' : 'Invalid login credentials');
                    setIsLoading(false); // Only stop loading on actual error
                } else {
                    setError(error.message);
                    setIsLoading(false);
                }
            } else {
                // Success! Force redirect to admin, bypassing the useEffect guard if redirectedFrom is present.
                router.refresh();
                router.push('/admin');
            }
        } catch (err) {
            setError(language === 'ar' ? 'حدث خطأ غير متوقع' : 'An unexpected error occurred');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-navy flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-gold opacity-5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gold opacity-5 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold/20 p-8 md:p-10">
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <div className="relative w-48 h-32 mx-auto mb-6 transition-transform hover:scale-105">
                            <Image
                                src="/assets/driver-taxi-fahd-logo.png"
                                alt="Driver Taxi Fahd"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                            لوحة التحكم
                        </h1>
                        <p className="text-muted-foreground">
                            سجل دخولك للمتابعة
                        </p>
                    </motion.div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-destructive"
                        >
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{error}</span>
                        </motion.div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
                        <div className="space-y-2 text-right">
                            <Label htmlFor="email" className="text-foreground">
                                البريد الإلكتروني
                            </Label>
                            <div className="relative">
                                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@example.com"
                                    className="ps-10 h-12 bg-background/50 border-border focus:border-gold text-right"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2 text-right">
                            <Label htmlFor="password" className="text-foreground">
                                كلمة المرور
                            </Label>
                            <div className="relative">
                                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="ps-10 pe-10 h-12 bg-background/50 border-border focus:border-gold text-right"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 justify-end">
                            <Label htmlFor="rememberMe" className="text-sm font-medium cursor-pointer">
                                تذكرني
                            </Label>
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 rounded border-border text-gold focus:ring-gold bg-background/50"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading || authLoading}
                            className="w-full h-12 bg-gradient-gold text-primary hover:opacity-90 font-semibold text-lg shadow-gold transition-all duration-300 hover:shadow-xl"
                        >
                            {isLoading || authLoading ? (
                                <div className="flex items-center gap-2 justify-center">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>جاري التحقق...</span>
                                </div>
                            ) : (
                                'تسجيل الدخول'
                            )}
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            جميع الحقوق محفوظة © 2024
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const AdminLoginPage = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-navy flex items-center justify-center p-4">
                <Loader2 className="w-10 h-10 animate-spin text-gold" />
            </div>
        }>
            <LoginForm />
        </Suspense>
    );
};

export default AdminLoginPage;
