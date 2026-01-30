import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-background relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            </div>

            <div className="container-luxury text-center relative z-10 px-4">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <h1 className="text-[150px] font-serif font-bold text-gold/10 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <MapPin className="w-16 h-16 text-gold animate-bounce" />
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    الصفحة غير موجودة | Page Not Found
                </h2>

                <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                    عذراً، الوجهة التي تبحث عنها غير متوفرة حالياً. قد يكون الرابط خاطئاً أو تم نقل الصفحة.
                    <br />
                    <span className="text-sm opacity-80 block mt-2 font-sans">
                        Sorry, the destination you are looking for is not available. The link might be broken or the page has been moved.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        variant="luxury"
                        size="lg"
                        className="text-primary hover:opacity-90 font-bold min-w-[200px]"
                    >
                        <Link href="/">
                            <Home className="w-4 h-4 me-2" />
                            العودة للرئيسية | Go Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-primary/20 hover:bg-primary/5 min-w-[200px]"
                    >
                        <Link href="/contact">
                            تواصل معنا | Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
