'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Phone, Car, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DayProgramsClient() {
    const { language, t } = useLanguage();

    const dayTrips = [
        {
            title: language === 'ar' ? 'برنامج "الرومانسية والطبيعة" (كومو ولوجانو)' : 'Romance & Nature Program (Como & Lugano)',
            description: language === 'ar'
                ? 'الصباح: جولة في مدينة كومو وتناول القهوة. الظهيرة: ركوب العبارة لبيلاجيو. المساء: زيارة لوجانو السويسرية ثم العودة لميلانو.'
                : 'Morning: Tour in Como city and coffee. Afternoon: Ferry ride to Bellagio. Evening: Visit Swiss Lugano then return to Milan.',
            duration: language === 'ar' ? '9-10 ساعات' : '9-10 Hours',
            image: '/assets/cities/como-bellagio-lugano/como.webp',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
        {
            title: language === 'ar' ? 'برنامج "التاريخ والبحيرة" (فيرونا وسيرميوني)' : 'History & Lake Program (Verona & Sirmione)',
            description: language === 'ar'
                ? 'الصباح: زيارة فيرونا "مدينة روميو وجوليت". الظهيرة: الانتقال لقرية سيرميوني ببحيرة جاردا. المساء: جولة بالقارب حول القلعة ثم العودة.'
                : 'Morning: Visit Verona "City of Romeo & Juliet". Afternoon: Transfer to Sirmione village on Lake Garda. Evening: Boat tour around the castle then return.',
            duration: language === 'ar' ? '10-11 ساعة' : '10-11 Hours',
            image: '/assets/cities/Verona.webp',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
        {
            title: language === 'ar' ? 'برنامج "عشاق الموضة" (أوت لت سيرافالي)' : 'Fashion Lovers Program (Serravalle Outlet)',
            description: language === 'ar'
                ? 'يوم كامل للتسوق في أكبر أوت لت في أوروبا. برنامج مريح لا يحتاج مجهود، والسائق ضروري لتحميل المشتريات بأمان.'
                : 'Full day shopping at Europe\'s largest outlet. Relaxed program, driver is essential to safely load purchases.',
            duration: language === 'ar' ? '8-9 ساعات' : '8-9 Hours',
            image: '/assets/cities/serravalle-outlet/serravalle-cover.jpg',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
        {
            title: language === 'ar' ? 'برنامج جبال الألب والقطار الأحمر' : 'Alps & Red Train Program',
            description: language === 'ar'
                ? 'رحلة إلى تيرانو (على الحدود السويسرية) لركوب قطار "برنينا إكسبريس" عبر الثلوج والقمم المصنفة من اليونسكو، والعودة بالسيارة.'
                : 'Trip to Tirano (Swiss border) to ride the Bernina Express through UNESCO-listed snow and peaks, returning by car.',
            duration: language === 'ar' ? '12 ساعة' : '12 Hours',
            image: '/assets/cities/alps.jpg',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/assets/cities/Milan/milan-2.jpg"
                            alt="Day Programs Italy"
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/90" />
                </div>

                <div className="relative z-10 container-luxury text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold/30 to-gold/20 border border-gold/40 backdrop-blur-sm mb-8 shadow-lg"
                        >
                            <Clock className="w-5 h-5 text-gold" />
                            <span className="text-gold text-base font-semibold tracking-wide">
                                {language === 'ar' ? 'برنامج اليوم الواحد' : 'One Day Programs'}
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                            {language === 'ar' ? 'رحلات سياحية يومية' : 'Daily Tourist Tours'}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {language === 'ar'
                                ? 'ميلانو هي "المايسترو" وأذكى نقطة انطلاق لبرامج اليوم الواحد بسبب موقعها الاستراتيجي وارتباطها بكل الوجهات.'
                                : 'Milan is the "Maestro" and the smartest starting point for day programs due to its strategic location and connections.'}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Milan Overview Section */}
            <section className="py-20 bg-muted/30">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-right rtl:text-right ltr:text-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                                {language === 'ar' ? 'سياحة ميلانو: الأناقة والجمال' : 'Milan Tourism: Elegance & Beauty'}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {language === 'ar'
                                    ? 'ميلانو مدينة عملية وأنيقة، يكفيها يومان لاستكشاف معالمها الرئيسية قبل الانطلاق للوجهات الأخرى.'
                                    : 'Milan is a practical and elegant city, two days are enough to explore its main landmarks before heading to other destinations.'}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'ساحة الدومو' : 'Duomo Square'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'قلب المدينة التاريخي والسطح البانورامي.' : 'Historical city heart and panoramic roof.'}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'جاليريا فيتوريو' : 'Galleria Vittorio'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'للتسوق الفاخر والعمارة المذهلة.' : 'Luxury shopping and stunning architecture.'}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'منطقة نافيلي' : 'Navigli Area'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'قنوات مائية ومقاهٍ ساحرة في المساء.' : 'Canals and charming cafes in the evening.'}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'قلعة سفورزيسكو' : 'Sforzesco Castle'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'متنفس العائلات ومحبين التاريخ.' : 'Escape for families and history lovers.'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/assets/cities/Milan/milan-1.jpg"
                                alt="Milan Duomo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trip Grid */}
            <section className="py-20">
                <div className="container-luxury">
                    <div className="grid md:grid-cols-2 gap-8">
                        {dayTrips.map((trip, index) => (
                            <div key={index} className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300 shadow-xl">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={trip.image}
                                        alt={trip.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs font-medium">
                                        <Clock className="w-3 h-3 inline-block ml-1" />
                                        {trip.duration}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col text-right rtl:text-right ltr:text-left">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-gold transition-colors">{trip.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                        {trip.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                                        <div className="text-gold font-bold">
                                            <span className="text-xs text-muted-foreground block mb-1">
                                                {language === 'ar' ? 'السعر التقريبي' : 'Approximate Price'}
                                            </span>
                                            {trip.price}
                                        </div>
                                        <Button asChild className="bg-gradient-gold text-primary hover:shadow-gold font-bold rounded-xl">
                                            <a href={`https://wa.me/393888248473?text=${encodeURIComponent(language === 'ar' ? 'أرغب في الاستفسار عن ' : 'I want to inquire about ') + trip.title}`} target="_blank" rel="noopener noreferrer">
                                                <Phone className="w-4 h-4 ml-2" />
                                                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ/Info Section */}
            <section className="py-20 border-t border-border bg-muted/20">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-right rtl:text-right ltr:text-left">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold">
                                {language === 'ar' ? 'معلومات هامة لبرامج اليوم الواحد' : 'Important Info for Day Programs'}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">{language === 'ar' ? 'وقت الانطلاق' : 'Departure Time'}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {language === 'ar'
                                                ? 'نوصي دائماً بالانطلاق في تمام الساعة 9:00 صباحاً لتجنب الزحام والاستمتاع باليوم كاملاً.'
                                                : 'We always recommend departing at 9:00 AM to avoid crowds and enjoy the full day.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">{language === 'ar' ? 'السيارة والسائق' : 'Car & Driver'}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {language === 'ar'
                                                ? 'السعر يشمل السيارة، السائق العربي، البنزين، ومواقف السيارات. لا يشمل الرسوم السياحية أو تذاكر دخول المعالم.'
                                                : 'Price includes car, Arabic driver, fuel, and parking. Does not include tourist fees or entrance tickets.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-full border-2 border-dashed border-gold/20 p-8 flex items-center justify-center text-center">
                            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full" />
                            <div className="text-center relative z-10 space-y-4">
                                <Car className="w-16 h-16 text-gold mx-auto" />
                                <h3 className="text-2xl font-serif font-bold">
                                    {language === 'ar' ? 'هل لديك وجهة أخرى؟' : 'Have another destination?'}
                                </h3>
                                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                    {language === 'ar'
                                        ? 'نحن نوفر رحلات مخصصة لأي مكان في إيطاليا وسويسرا حسب طلبكم.'
                                        : 'We provide customized trips anywhere in Italy and Switzerland according to your request.'}
                                </p>
                                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary rounded-full px-8 font-bold">
                                    <a href="https://wa.me/393888248473">
                                        {language === 'ar' ? 'تواصل معنا للتخصيص' : 'Contact for Customization'}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
