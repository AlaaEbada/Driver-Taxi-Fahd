'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Map, Info, CheckCircle2, Navigation, Coffee, ShoppingBag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const InterlakenGenevaContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/interlaken-geneva/interlaken-cover.jpg"
                        alt={language === 'ar' ? 'جنيف وانترلاكن، سويسرا' : 'Geneva & Interlaken Switzerland'}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center container-luxury px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-gold/80 text-primary border border-white/30 mb-6 backdrop-blur-sm font-bold shadow-lg">
                            {language === 'ar' ? 'مع تاكسي فهد' : 'With Taxi Fahd'}
                        </span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                            {language === 'ar' ? 'سائق عربي في انترلاكن وجنيف' : 'Arabic Driver in Interlaken & Geneva'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'تعتبر جنيف وانترلاكن الوجهين الأكثر شهرة لسويسرا، فبينما تمثل جنيف الأناقة والخدمات العالمية، تمثل انترلاكن قلب الطبيعة والمغامرة.'
                                : 'Geneva and Interlaken are Switzerland\'s most famous faces; while Geneva represents elegance and global services, Interlaken represents the heart of nature and adventure.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">
                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'سويسرا: بين رفاهية المدن وسحر القمم' : 'Switzerland: Between City Luxury & Peak Charm'}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {language === 'ar'
                            ? 'تقع جنيف في أقصى غرب سويسرا على ضفاف بحيرة جنيف، وهي مدينة دولية بامتياز تجمع بين الثقافة الفرنسية والنظام السويسري. أما انترلاكن فتقع في قلب سويسرا بين بحيرتي "تون" و"براينز".'
                            : 'Geneva is located in the far west of Switzerland on the shores of Lake Geneva, a truly international city combining French culture and Swiss system. Interlaken is located in the heart of Switzerland between Lake Thun and Lake Brienz.'}
                    </p>
                </section>

                {/* Geneva Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Navigation className="w-8 h-8 text-gold" />
                            <h2 className="text-3xl font-serif font-bold text-primary">
                                {language === 'ar' ? '1. جنيف (Geneva) - مدينة السلام والرفاهية' : '1. Geneva - City of Peace & Luxury'}
                            </h2>
                        </div>
                        <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            <p>
                                {language === 'ar'
                                    ? 'تقع في أقصى غرب سويسرا على ضفاف بحيرة جنيف، وهي مدينة دولية بامتياز تجمع بين الثقافة الفرنسية والنظام السويسري.'
                                    : 'Located in the far west of Switzerland on the shores of Lake Geneva, it is an international city par excellence that combines French culture and the Swiss system.'}
                            </p>
                            <ul className="space-y-3">
                                {[{
                                    title: language === 'ar' ? "نافورة جنيف (Jet d'eau)" : "Geneva Jet d'eau",
                                    desc: language === 'ar' ? "الرمز الأشهر للمدينة، تنطلق المياه منها لارتفاع 140 متراً." : "The city's most famous symbol, shooting water 140 meters high."
                                }, {
                                    title: language === 'ar' ? "البلدة القديمة (Vieille Ville)" : "Old Town (Vieille Ville)",
                                    desc: language === 'ar' ? "شوارع مرصوفة بالحصى، محلات أنتيك، وكاتدرائية القديس بيير التاريخية." : "Cobblestone streets, antique shops, and the historic St. Pierre Cathedral."
                                }, {
                                    title: language === 'ar' ? "حديقة الزهور (Jardin Anglais)" : "Flower Garden (Jardin Anglais)",
                                    desc: language === 'ar' ? "حيث توجد ساعة الزهور الشهيرة التي تعكس دقة الساعات السويسرية." : "Where the famous flower clock is located, reflecting the precision of Swiss watches."
                                }].map((item, idx) => (
                                    <li key={idx} className={`flex gap-4 p-4 bg-card rounded-xl border border-border shadow-sm ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold font-bold">{idx + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-primary">{item.title}</h4>
                                            <p className="text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className={`text-sm bg-primary/5 p-4 rounded-xl border-gold italic ${isRTL ? 'border-r-4' : 'border-l-4'}`}>
                                <strong>{language === 'ar' ? 'الأجواء والتنقل:' : 'Atmosphere & Transit:'}</strong>
                                {language === 'ar'
                                    ? ' راقية جداً، مثالية للتسوق في شارع "الرون" (Rue du Rhône) وزيارة متاحف الساعات (مثل متحف باتيك فيليب). إذا كنت تسكن في فندق، ستحصل على بطاقة نقل مجانية للباصات والقوارب.'
                                    : ' Very upscale, perfect for shopping on Rue du Rhône and visiting watch museums (like Patek Philippe Museum). If staying in a hotel, you receive a free transport card for buses and boats.'}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-1 lg:order-2' : 'order-1'} relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white`}
                    >
                        <Image
                            src="/assets/cities/interlaken-geneva/geneva.jpg"
                            alt="Geneva Jet d'eau"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </section>

                {/* Interlaken Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <Image
                            src="/assets/cities/interlaken-geneva/interlaken-2.jpg"
                            alt="Interlaken Switzerland"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Mountain className="w-8 h-8 text-gold" />
                            <h2 className="text-3xl font-serif font-bold text-primary">
                                {language === 'ar' ? '2. انترلاكن (Interlaken) - عاصمة الألب' : '2. Interlaken - Capital of the Alps'}
                            </h2>
                        </div>
                        <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            <p>
                                {language === 'ar'
                                    ? 'تقع في قلب سويسرا بين بحيرتي "تون" و"براينز"، وهي نقطة الانطلاق الرئيسية لكل القمم الشهيرة.'
                                    : 'Located in the heart of Switzerland between Lake Thun and Lake Brienz, the main gateway for all famous peaks.'}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                                    <CheckCircle2 className={`w-5 h-5 text-gold mb-2 ${isRTL ? 'ml-auto' : ''}`} />
                                    <h4 className="font-bold text-sm">
                                        {language === 'ar' ? 'هوهيمات (Höhemathe)' : 'Höhemathe Square'}
                                    </h4>
                                    <p className="text-xs">
                                        {language === 'ar' ? 'ساحة خضراء شاسعة في وسط المدينة ترى منها قمة "يونغفراو"، وهي المكان الذي يهبط فيه محترفو الطيران الشراعي (الباراشوت).' : 'A vast green square in the town center with a view of "Jungfrau" peak, and where paragliders land.'}
                                    </p>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                                    <CheckCircle2 className={`w-5 h-5 text-gold mb-2 ${isRTL ? 'ml-auto' : ''}`} />
                                    <h4 className="font-bold text-sm">
                                        {language === 'ar' ? 'القمم القريبة' : 'Nearby Peaks'}
                                    </h4>
                                    <p className="text-xs">
                                        {language === 'ar' ? '"يونغفراو يوخ" (أعلى محطة قطار في أوروبا) و "شيلتهورن" (مكان تصوير فيلم جيمس بوند).' : '"Jungfraujoch" (Europe\'s highest train station) and "Schilthorn" (James Bond filming location).'}
                                    </p>
                                </div>
                            </div>
                            <p className={`${isRTL ? 'border-r-4' : 'border-l-4'} border-gold ${isRTL ? 'pr-4' : 'pl-4'}`}>
                                <strong>{language === 'ar' ? 'القرى المجاورة والأجواء:' : 'Neighboring Villages & Vibe:'}</strong>
                                {language === 'ar' ? ' لا تفوت زيارة "لوتربرونين" (وادي الشلالات) و"جريندلوالد" (قرية الأكواخ الجبلية). الأجواء سياحية بامتياز نابضة بالحياة، ومناسبة جداً للعائلات بسبب توفر المطاعم والخدمات.' : ' Don\'t miss visiting Lauterbrunnen (Valley of Waterfalls) and Grindelwald (the village of mountain chalets). The atmosphere is touristy and vibrant, very suitable for families due to available restaurants and services.'}
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Driver & Distance Info */}
                <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-gold/20">
                    <h2 className="text-3xl font-serif font-bold text-center mb-10 text-primary">
                        {language === 'ar' ? 'نصيحة السائق والتنقل' : 'Driver\'s Tip & Transit'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <Clock className="w-10 h-10 text-gold mx-auto" />
                            <h4 className="font-bold">{language === 'ar' ? 'المسافة' : 'Distance'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'تستغرق الرحلة بالسيارة بين جنيف وانترلاكن حوالي ساعتين ونصف، وإذا كنت قادماً من ميلانو، فإن انترلاكن أقرب لك جغرافياً.' : 'The journey between Geneva and Interlaken takes about 2.5 hours; if coming from Milan, Interlaken is geographically closer to you.'}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <ShoppingBag className="w-10 h-10 text-gold mx-auto" />
                            <h4 className="font-bold">{language === 'ar' ? 'ميزة السائق' : 'Driver Benefit'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'لماذا السائق؟ الطريق يمر بمصانع الشوكولاتة والجبن في "جريير" (Gruyères)، حيث يمكن للسائق التوقف بك هناك، وهو ما يصعب فعله بالقطار.' : 'Why a driver? The road passes by chocolate and cheese factories in Gruyères, where the driver can stop for you, which is difficult by train.'}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Map className="w-10 h-10 text-gold mx-auto" />
                            <h4 className="font-bold">{language === 'ar' ? 'ميلانو وسويسرا' : 'Milan & Switzerland'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'إذا كنت قادماً من ميلانو، فإن انترلاكن تعتبر جغرافياً أقرب إليك من جنيف.' : 'If you\'re coming from Milan, Interlaken is geographically closer than Geneva.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <Info className="w-5 h-5 text-gold" />
                            </div>
                            <span className="font-bold">{language === 'ar' ? 'رحلة الألب السويسرية' : 'Swiss Alps Journey'}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'عش تجربة سويسرية متكاملة تجمع بين أناقة جنيف وجمال جبال انترلاكن مع تاكسي فهد.'
                                : 'Experience a complete Swiss adventure combining Geneva\'s elegance with the beauty of Interlaken\'s mountains with Taxi Fahd.'}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز جولتك في سويسرا الآن' : 'Book Your Swiss Tour Now'}
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InterlakenGenevaContent;
