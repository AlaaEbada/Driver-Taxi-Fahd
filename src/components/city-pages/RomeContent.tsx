'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Palmtree, MapPin, Coffee, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const RomeContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/rome-city/rome-1.webp"
                        alt={language === 'ar' ? 'روما - المدينة الخالدة' : 'Rome - The Eternal City'}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/40" />
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
                            {language === 'ar' ? 'سائق عربي في روما' : 'Arabic Driver in Rome'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'روما، "المدينة الخالدة"، هي قلب إيطاليا النابض وتاريخ العالم الحي'
                                : 'Rome, "The Eternal City", is the beating heart of Italy and the living history of the world'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">
                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'رحلة عبر الزمن تعود بك إلى 2000 عام' : 'A Journey Through Time, 2000 Years Back'}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {language === 'ar'
                            ? 'السياحة فيها ليست مجرد زيارة لمدينة، بل هي رحلة عبر الزمن تعود بك إلى 2000 عام. إليك نبذة مختصرة تلخص أهم معالمها وأجوائها:'
                            : 'Tourism here is not just a city visit, but a journey through time going back 2000 years. Here is a brief summary of its key landmarks and atmosphere:'}
                    </p>
                </section>

                {/* Historical Landmarks (Alternating Layout) */}
                <div className="space-y-20">
                    {/* Ancient Rome */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Store className="w-8 h-8 text-gold" />
                                <h2 className="text-3xl font-serif font-bold text-primary">
                                    {language === 'ar' ? 'أهم المعالم التاريخية' : 'Key Historical Landmarks'}
                                </h2>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    {
                                        title: language === 'ar' ? 'الكولوسیوم Colosseum:' : 'The Colosseum:',
                                        desc: language === 'ar'
                                            ? 'أعظم مدرج روماني في العالم، ورمز الإمبراطورية القديمة.'
                                            : 'The greatest Roman amphitheater in the world, and a symbol of the ancient empire.'
                                    },
                                    {
                                        title: language === 'ar' ? 'المنتدى الروماني Forum Roman:' : 'The Roman Forum:',
                                        desc: language === 'ar'
                                            ? 'كان مركز الحياة السياسية والاجتماعية في روما القديمة، ويضم أطلال المعابد والقصور.'
                                            : 'The center of political and social life in ancient Rome, featuring ruins of temples and palaces.'
                                    },
                                    {
                                        title: language === 'ar' ? 'البانثيون Pantheon:' : 'The Pantheon:',
                                        desc: language === 'ar'
                                            ? 'معبد تاريخي يتميز بأكبر قبة خرسانية غير مدعمة في العالم، وهو من أكثر المباني المحفوظة من العصور القديمة.'
                                            : 'A historic temple featuring the world\'s largest unreinforced concrete dome, one of the best-preserved ancient buildings.'
                                    }
                                ].map((item, idx) => (
                                    <li key={idx} className="bg-card p-4 rounded-xl border border-border hover:border-gold/30 transition-colors shadow-sm">
                                        <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-1 lg:order-2' : 'order-1'} relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:rotate-2 transition-transform duration-500`}
                        >
                            <Image
                                src="/assets/cities/rome-city/rome-2.webp"
                                alt="Colosseum Rome"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </section>

                    {/* Piazzas & Vatican */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:-rotate-2 transition-transform duration-500"
                        >
                            <Image
                                src="/assets/cities/rome-city/rome-3.webp"
                                alt="Rome Piazzas"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 space-y-8"
                        >
                            {/* Piazzas */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Palmtree className="w-8 h-8 text-gold" />
                                    <h2 className="text-2xl font-serif font-bold text-primary">
                                        {language === 'ar' ? 'الساحات والجمال الفني' : 'Piazzas & Artistic Beauty'}
                                    </h2>
                                </div>
                                <ul className={`space-y-3 list-disc list-inside text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <li>
                                        <strong>{language === 'ar' ? 'نافورة تريفي Trevi Fountain:' : 'Trevi Fountain:'}</strong>
                                        {language === 'ar' ? ' أشهر نافورة في العالم؛ تقول الأسطورة إن من يرمي فيها عملة معدنية سيعود إلى روما مجدداً.' : ' The world\'s most famous fountain; legend says tossing a coin ensures a return to Rome.'}
                                    </li>
                                    <li>
                                        <strong>{language === 'ar' ? 'ساحة نافونا Pizza Navona:' : 'Piazza Navona:'}</strong>
                                        {language === 'ar' ? ' ساحة نابضة بالحياة تضم نوافير باروكية رائعة ورسامين وعازفين في الهواء الطلق.' : ' A vibrant square with magnificent Baroque fountains, street painters, and musicians.'}
                                    </li>
                                    <li>
                                        <strong>{language === 'ar' ? 'السلالم الإسبانية Spanish Steps:' : 'Spanish Steps:'}</strong>
                                        {language === 'ar' ? ' مكان مثالي للجلوس والاستمتاع بأجواء المدينة والتقاط الصور.' : ' A perfect spot to sit, enjoy the city atmosphere, and take photos.'}
                                    </li>
                                </ul>
                            </div>

                            {/* Vatican */}
                            <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-md">
                                <div className="flex items-center gap-3 mb-3">
                                    <MapPin className="w-6 h-6 text-gold" />
                                    <h2 className="text-xl font-bold text-primary">
                                        {language === 'ar' ? 'دولة الفاتيكان' : 'Vatican City'}
                                    </h2>
                                </div>
                                <p className="text-muted-foreground mb-3">
                                    {language === 'ar' ? 'تقع في قلب روما، وهي أصغر دولة في العالم، وتضم:' : 'Located in the heart of Rome, the smallest country in the world, featuring:'}
                                </p>
                                <ul className="space-y-2 text-foreground font-medium">
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                        {language === 'ar' ? 'كنيسة القديس بطرس من أضخم وأجمل الكنائس في العالم.' : 'St. Peter\'s Basilica (one of the largest and most beautiful in the world).'}
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                        {language === 'ar' ? 'متاحف الفاتيكان التي تحتوي على كنيسة سيستينا بلوحات میکیلانجيلو الشهيرة.' : 'Vatican Museums housing the Sistine Chapel with Michelangelo\'s famous ceiling.'}
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>
                </div>

                {/* Food & Atmosphere */}
                <section className="bg-white p-8 md:p-12 rounded-3xl border border-border text-center shadow-xl">
                    <Coffee className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h2 className="text-3xl font-serif font-bold mb-6">
                        {language === 'ar' ? 'الأجواء والطعام' : 'Atmosphere & Food'}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        {language === 'ar'
                            ? 'روما مدينة "المشي"، أفضل طريقة لاستكشافها هي التجول في زقاقاتها الضيقة. تتميز بمطبخ غني، يجب عليك تجربة:'
                            : 'Rome is a walking city; the best way to explore it is by wandering through its narrow alleys. It features a rich cuisine; you must try:'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-border font-bold text-primary hover:border-gold transition-colors">
                            {language === 'ar' ? 'الباستا الرومانية الأصيلة مثل الكاربونارا والأماتريتشيانا' : 'Authentic Roman Pasta (Carbonara & Amatriciana)'}
                        </span>
                        <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-border font-bold text-primary hover:border-gold transition-colors">
                            {language === 'ar' ? 'البيتزا الرقيقة المقرمشة' : 'Thin Crispy Pizza'}
                        </span>
                        <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-border font-bold text-primary hover:border-gold transition-colors">
                            {language === 'ar' ? 'الجيلاتو الآيس كريم في المحلات التاريخية قريباً من الساحات' : 'Gelato (Ice Cream) in historic shops near piazzas'}
                        </span>
                    </div>
                </section>

                {/* Tips & CTA */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Info className="w-5 h-5 text-gold" />
                            <span className="font-bold">{language === 'ar' ? 'نصيحة سريعة للمسافر' : 'Quick Traveler Tip'}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'روما مزدحمة في أغلب أوقات السنة، لذا حجز تذاكر الكولوسيوم والفاتيكان مسبقاً عبر الإنترنت أمر لا غنى عنه لتجنب الطوابير التي قد تمتد لساعات.'
                                : 'Rome is crowded most of the year, so booking Colosseum and Vatican tickets online in advance is essential to avoid lines that can last for hours.'}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز سائق في روما الآن' : 'Book a Driver in Rome Now'}
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RomeContent;
