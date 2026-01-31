'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Map, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ToursPreviewSection: React.FC = () => {
    const { language, isRTL } = useLanguage();

    const dayTrips = [
        {
            title: language === 'ar' ? 'برنامج "الرومانسية والطبيعة" كومو ولوجانو' : 'Romance & Nature (Como & Lugano)',
            desc: language === 'ar' ? 'جولة رومانسية تشمل بحيرة كومو الإيطالية، قرية بيلاجيو الساحرة، ومدينة لوجانو السويسرية في يوم واحد.' : 'A romantic tour covering Lake Como, charming Bellagio village, and Swiss Lugano in one day.',
            img: '/assets/cities/como-bellagio-lugano/como.webp',
            link: language === 'ar' ? '/day-programs' : '/en/day-programs'
        },
        {
            title: language === 'ar' ? 'برنامج "التاريخ والبحيرة" فيرونا وسيرميوني' : 'History & Lake (Verona & Sirmione)',
            desc: language === 'ar' ? 'زيارة مدينة روميو وجوليت التاريخية، ثم الانتقال لقرية سيرميوني الساحرة على بحيرة جاردا.' : 'Visit the historic city of Romeo and Juliet, then move to the charming Sirmione village on Lake Garda.',
            img: '/assets/verona.jpg',
            link: language === 'ar' ? '/day-programs' : '/en/day-programs'
        },
        {
            title: language === 'ar' ? 'برنامج "عشاق الموضة" أوت لت سيرافالي' : 'Fashion Lovers (Serravalle Outlet)',
            desc: language === 'ar' ? 'أكبر أوت لت في أوروبا لتجربة تسوق لا مثيل لها للماركات العالمية مع سائق خاص لراحتك.' : 'Europe\'s largest outlet for an unparalleled shopping experience with a private driver for your comfort.',
            img: '/assets/cities/serravalle-outlet/serravalle-cover.jpg',
            link: language === 'ar' ? '/day-programs' : '/en/day-programs'
        }
    ];

    const tourPackages = [
        {
            title: language === 'ar' ? 'برنامج "كلاسيكيات إيطاليا" التاريخ والفن' : '"Italy Classics" Program (History & Art)',
            desc: language === 'ar' ? 'روما 3 ليالي - فلورنسا ليلتان - فينيسيا ليلتان. يناسب محبي الآثار والتصوير والقصص التاريخية.' : 'Rome (3 nights) - Florence (2 nights) - Venice (2 nights). Perfect for archaeology and photography lovers.',
            img: '/assets/cities/italy-classics.webp',
            link: language === 'ar' ? '/tour-programs' : '/en/tour-programs'
        },
        {
            title: language === 'ar' ? 'برنامج شمال إيطاليا والبحيرات الطبيعة والاسترخاء' : 'North Italy & Lakes Program (Nature & Relaxation)',
            desc: language === 'ar' ? 'ميلانو - بحيرة كومو - بحيرة جاردا - فيرونا. يناسب العائلات والعرسان ومحبي الهدوء والمناظر الطبيعية.' : 'Milan - Lake Como - Lake Garda - Verona. Perfect for families, honeymooners, and nature lovers.',
            img: '/assets/cities/northern-italy-and-the-lakes.jpg',
            link: language === 'ar' ? '/tour-programs' : '/en/tour-programs'
        },
        {
            title: language === 'ar' ? 'برنامج "الألب والدولوميت" العشاق الأجواء الجبلية' : '"Alps & Dolomites" Program (Mountain Lovers)',
            desc: language === 'ar' ? 'فينيسيا - كورتينا دامبيتزو - بحيرة كاريزا الملونة. مناسب لعشاق الهايكنج والتزلج والباحثين عن أبرد نقطة في إيطاليا.' : 'Venice - Cortina d\'Ampezzo - Lake Carezza. Perfect for hiking, skiing lovers, and coolest spot seekers.',
            img: '/assets/cities/alps.jpg',
            link: language === 'ar' ? '/tour-programs' : '/en/tour-programs'
        }
    ];

    return (
        <section className="py-16">
            <div className="container-luxury">
                {/* Main Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
                        <Map className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">{language === 'ar' ? 'اكتشف إيطاليا' : 'Discover Italy'}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        {language === 'ar' ? 'استكشف إيطاليا معنا' : 'Explore Italy With Us'}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {language === 'ar'
                            ? 'نقدم لك خيارات متنوعة من الجولات السياحية والتنقلات المريحة'
                            : 'We offer a variety of tour options and comfortable transfers'}
                    </p>
                </div>

                <Tabs defaultValue="day-programs" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-muted/50 p-1 rounded-full border border-border inline-grid grid-cols-2 w-[calc(100%-2rem)] max-w-[600px] mx-4 h-auto">
                            <TabsTrigger
                                value="day-programs"
                                className="rounded-full px-3 sm:px-6 md:px-8 py-3 text-xs sm:text-sm md:text-base data-[state=active]:bg-gold data-[state=active]:text-primary transition-all duration-300 font-bold whitespace-nowrap h-full flex items-center justify-center"
                            >
                                {language === 'ar' ? 'برامج اليوم الواحد' : 'Day Programs'}
                            </TabsTrigger>
                            <TabsTrigger
                                value="tour-programs"
                                className="rounded-full px-3 sm:px-6 md:px-8 py-3 text-xs sm:text-sm md:text-base data-[state=active]:bg-gold data-[state=active]:text-primary transition-all duration-300 font-bold whitespace-nowrap h-full flex items-center justify-center"
                            >
                                {language === 'ar' ? 'البرامج السياحية' : 'Tour Packages'}
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="day-programs" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {dayTrips.map((tour, i) => (
                                <Link key={i} href={tour.link}>
                                    <div className="card-luxury group h-full flex flex-col border border-border/50">
                                        <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={tour.img}
                                                alt={tour.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col flex-1 text-right rtl:text-right ltr:text-left">
                                            <h4 className="font-bold text-2xl mb-4 group-hover:text-gold transition-colors">{tour.title}</h4>
                                            <p className="text-lg text-muted-foreground line-clamp-2 mb-6 leading-relaxed">{tour.desc}</p>

                                            <div className={`mt-auto flex items-center pt-4 border-t border-border/50 ${language === 'ar' ? 'justify-end' : 'justify-between'}`}>
                                                <div className="flex items-center text-gold text-base font-bold gap-2 group-hover:gap-3 transition-all">
                                                    <span>{language === 'ar' ? 'التفاصيل والحجز' : 'Details & Booking'}</span>
                                                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Link href={language === 'ar' ? '/day-programs' : '/en/day-programs'} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background border border-border hover:border-gold/50 hover:bg-gold/5 text-foreground font-bold transition-all group shadow-sm hover:shadow-md">
                                <span className="text-lg">{language === 'ar' ? 'عرض كافة البرامج' : 'View All Programs'}</span>
                                <ArrowRight className={`w-5 h-5 text-gold group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="tour-programs" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {tourPackages.map((tour, i) => (
                                <Link key={i} href={tour.link}>
                                    <div className="card-luxury group h-full flex flex-col border border-border/50">
                                        <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={tour.img}
                                                alt={tour.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col flex-1 text-right rtl:text-right ltr:text-left">
                                            <h4 className="font-bold text-2xl mb-4 group-hover:text-gold transition-colors">{tour.title}</h4>
                                            <p className="text-lg text-muted-foreground line-clamp-2 mb-6 leading-relaxed">{tour.desc}</p>

                                            <div className={`mt-auto flex items-center pt-4 border-t border-border/50 ${language === 'ar' ? 'justify-end' : 'justify-between'}`}>
                                                <div className="flex items-center text-gold text-base font-bold gap-2 group-hover:gap-3 transition-all">
                                                    <span>{language === 'ar' ? 'التفاصيل والحجز' : 'Details & Booking'}</span>
                                                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Link href={language === 'ar' ? '/tour-programs' : '/en/tour-programs'} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background border border-border hover:border-gold/50 hover:bg-gold/5 text-foreground font-bold transition-all group shadow-sm hover:shadow-md">
                                <span className="text-lg">{language === 'ar' ? 'عرض البرامج المتكاملة' : 'View Complete Programs'}</span>
                                <ArrowRight className={`w-5 h-5 text-gold group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default ToursPreviewSection;
