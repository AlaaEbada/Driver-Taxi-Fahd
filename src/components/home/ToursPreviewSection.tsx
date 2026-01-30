'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Map, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ToursPreviewSection: React.FC = () => {
    const { language, isRTL } = useLanguage();

    const featuredTours = [
        {
            title: language === 'ar' ? 'كومو ولوجانو (سويسرا)' : 'Como & Lugano (Swiss)',
            desc: language === 'ar' ? 'جولة رومانسية تشمل بحيرة كومو الإيطالية ومدينة لوجانو السويسرية في يوم واحد.' : 'A romantic tour covering Italy\'s Lake Como and Swiss Lugano in one day.',
            img: '/assets/cities/como-bellagio-lugano/como.webp',
            link: language === 'ar' ? '/day-programs' : '/en/day-programs'
        },
        {
            title: language === 'ar' ? 'فيرونا وبحيرة جاردا' : 'Verona & Lake Garda',
            desc: language === 'ar' ? 'زيارة مدينة روميو وجوليت وقضاء وقت ممتع في قرية سيرميوني الساحرة.' : 'Visit the city of Romeo and Juliet and enjoy time in the charming Sirmione village.',
            img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&q=80&w=800',
            link: language === 'ar' ? '/day-programs' : '/en/day-programs'
        },
        {
            title: language === 'ar' ? 'جبال الألب والقطار الأحمر' : 'Alps & Red Train',
            desc: language === 'ar' ? 'تجربة فريدة في قطار "برنينا إكسبريس" عبر الثلوج والقمم السويسرية.' : 'Unique experience in the Bernina Express through Swiss snow and peaks.',
            img: '/assets/cities/alps.jpg',
            link: language === 'ar' ? '/day-programs' : '/en/day-programs'
        }
    ];

    const tourPackages = [
        {
            title: language === 'ar' ? 'روائع الشمال (10 أيام)' : 'North Italy (10 Days)',
            desc: language === 'ar' ? 'مخطط احترافي يشمل ميلانو، كومو، فينيسيا، وجبال الألب مع سائق خاص.' : 'Professional plan covering Milan, Como, Venice, and the Alps with private driver.',
            img: '/assets/cities/Northern Italy and the lakes.jpg',
            link: language === 'ar' ? '/tour-programs' : '/en/tour-programs'
        },
        {
            title: language === 'ar' ? 'روما والجنوب الساحر (8 أيام)' : 'Rome & South (8 Days)',
            desc: language === 'ar' ? 'زيارة العاصمة روما ثم الانطلاق إلى ساحل أمالفي وجزيرة كابري الخلابة.' : 'Visit Rome then head to the Amalfi Coast and the stunning Capri Island.',
            img: '/assets/cities/rome.jpg',
            link: language === 'ar' ? '/tour-programs' : '/en/tour-programs'
        },
        {
            title: language === 'ar' ? 'إيطاليا الكبرى (14 يوم)' : 'Grand Italy Tour (14 Days)',
            desc: language === 'ar' ? 'رحلة العمر من الشمال إلى الجنوب، تغطي أهم المعالم والمدن التاريخية.' : 'The trip of a lifetime from North to South, covering major landmarks and historic cities.',
            img: '/assets/cities/Italy classics.webp',
            link: language === 'ar' ? '/tour-programs' : '/en/tour-programs'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-background via-gold/5 to-background">
            <div className="container-luxury">
                {/* Main Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
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
                        <TabsList className="bg-muted/50 p-1 rounded-full border border-border">
                            <TabsTrigger
                                value="day-programs"
                                className="rounded-full px-8 py-3 text-base data-[state=active]:bg-gold data-[state=active]:text-primary transition-all duration-300"
                            >
                                {language === 'ar' ? 'برامج اليوم الواحد' : 'Day Programs'}
                            </TabsTrigger>
                            <TabsTrigger
                                value="tour-programs"
                                className="rounded-full px-8 py-3 text-base data-[state=active]:bg-gold data-[state=active]:text-primary transition-all duration-300"
                            >
                                {language === 'ar' ? 'البرامج السياحية' : 'Tour Packages'}
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="day-programs" className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {featuredTours.map((tour, i) => (
                                <Link key={i} href={tour.link}>
                                    <div className="group bg-card rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-border hover:border-gold/30 hover:shadow-xl transition-all h-full flex flex-col">
                                        <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={tour.img}
                                                alt={tour.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-5 md:p-6 flex flex-col flex-1">
                                            <h4 className={`font-bold text-lg md:text-xl mb-2 md:mb-3 group-hover:text-gold transition-colors text-center md:${language === 'ar' ? 'text-right' : 'text-left'}`}>{tour.title}</h4>
                                            <p className={`text-sm text-muted-foreground line-clamp-2 mb-3 md:mb-4 leading-relaxed text-center md:${language === 'ar' ? 'text-right' : 'text-left'}`}>{tour.desc}</p>

                                            <div className={`mt-auto flex items-center pt-3 md:pt-4 border-t border-border/50 justify-center md:${language === 'ar' ? 'justify-end' : 'justify-between'}`}>
                                                <div className="flex items-center text-gold text-xs md:text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                                                    <span>{language === 'ar' ? 'التفاصيل والحجز' : 'Details & Booking'}</span>
                                                    <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-4 md:mt-8">
                            <Link href={language === 'ar' ? '/day-programs' : '/en/day-programs'} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border hover:border-gold/50 hover:bg-gold/5 text-foreground font-bold transition-all group shadow-sm hover:shadow-md">
                                <span className="text-sm">{language === 'ar' ? 'عرض كافة البرامج' : 'View All Programs'}</span>
                                <ArrowRight className={`w-4 h-4 text-gold group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="tour-programs" className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {tourPackages.map((tour, i) => (
                                <Link key={i} href={tour.link}>
                                    <div className="group bg-card rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-border hover:border-gold/30 hover:shadow-xl transition-all h-full flex flex-col">
                                        <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={tour.img}
                                                alt={tour.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-5 md:p-6 flex flex-col flex-1">
                                            <h4 className={`font-bold text-lg md:text-xl mb-2 md:mb-3 group-hover:text-gold transition-colors text-center md:${language === 'ar' ? 'text-right' : 'text-left'}`}>{tour.title}</h4>
                                            <p className={`text-sm text-muted-foreground line-clamp-2 mb-3 md:mb-4 leading-relaxed text-center md:${language === 'ar' ? 'text-right' : 'text-left'}`}>{tour.desc}</p>

                                            <div className={`mt-auto flex items-center pt-3 md:pt-4 border-t border-border/50 justify-center md:${language === 'ar' ? 'justify-end' : 'justify-between'}`}>
                                                <div className="flex items-center text-gold text-xs md:text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                                                    <span>{language === 'ar' ? 'التفاصيل والحجز' : 'Details & Booking'}</span>
                                                    <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-4 md:mt-8">
                            <Link href={language === 'ar' ? '/tour-programs' : '/en/tour-programs'} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border hover:border-gold/50 hover:bg-gold/5 text-foreground font-bold transition-all group shadow-sm hover:shadow-md">
                                <span className="text-sm">{language === 'ar' ? 'عرض البرامج المتكاملة' : 'View Complete Programs'}</span>
                                <ArrowRight className={`w-4 h-4 text-gold group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default ToursPreviewSection;
