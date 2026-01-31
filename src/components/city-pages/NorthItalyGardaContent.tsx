'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Map, Camera, Palmtree, RollerCoaster, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const NorthItalyGardaContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/north-italy-garda/north-italy.jpg" // Lake Garda Sirmione/Cinque Terre style
                        alt={language === 'ar' ? 'الشمال الإيطالي وبحيرة جاردا' : 'North Italy & Lake Garda'}
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
                            {language === 'ar' ? 'سائق عربي في الشمال الايطالي وبحيرة جاردا' : 'Arabic Driver in North Italy & Lake Garda'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'الشمال الإيطالي هو الوجهة المفضلة للمسافرين الذين يبحثون عن مزيج من الطبيعة الخلابة، الرفاهية، والأجواء الهادئة.'
                                : 'Northern Italy is the preferred destination for travelers seeking a mix of stunning nature, luxury, and tranquil atmospheres.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">

                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'نبذة عن الشمال الإيطالي' : 'About Northern Italy'}
                    </h2>
                    <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {language === 'ar'
                            ? 'هو المنطقة الأكثر تنظيماً وثراء في إيطاليا، ويشتهر بسلسلة جبال الألب وبحيراته الساحرة. تتنوع التضاريس هنا بين قمم جبال الدولوميت (Dolomites) المشرشرة، والسهول الخضراء في توسكانا الشمالية، والمدن التاريخية العريقة.'
                            : 'It is the most organized and wealthiest region in Italy, famous for the Alps and its enchanting lakes. The terrain varies between the jagged peaks of the Dolomites, the green plains of Northern Tuscany, and ancient historical cities.'}
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className={`bg-card p-5 rounded-xl border border-border shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="font-bold text-gold mb-2 flex items-center gap-2">
                                <Map className="w-5 h-5" />
                                {language === 'ar' ? 'أهم المدن' : 'Key Cities'}
                            </h3>
                            <p className="text-muted-foreground">
                                {language === 'ar' ? 'ميلانو (الموضة)، فينيسيا (القنوات المائية)، فيرونا (الرومانسية).' : 'Key Cities: Milan (Fashion), Venice (Canals), Verona (Romance).'}
                            </p>
                        </div>
                        <div className={`bg-card p-5 rounded-xl border border-border shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="font-bold text-gold mb-2 flex items-center gap-2">
                                <Mountain className="w-5 h-5" />
                                {language === 'ar' ? 'الطبيعة' : 'Nature'}
                            </h3>
                            <p className="text-muted-foreground">
                                {language === 'ar' ? 'يضم أجمل البحيرات في أوروبا (كومو، جاردا، وماجيوري).' : 'Nature: Home to the most beautiful lakes in Europe (Como, Garda, and Maggiore).'}
                            </p>
                        </div>
                        <div className={`bg-card p-5 rounded-xl border border-border shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="font-bold text-gold mb-2 flex items-center gap-2">
                                <Camera className="w-5 h-5" />
                                {language === 'ar' ? 'الأنشطة' : 'Activities'}
                            </h3>
                            <p className="text-muted-foreground">
                                {language === 'ar' ? 'التزلج في الشتاء، الهايكنج في الصيف، والقيادة بين القرى الجبلية.' : 'Activities: Skiing in winter, hiking in summer, and driving between mountain villages.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Grid: Lake Garda */}
                <div className="space-y-20">

                    {/* Intro to Garda */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                        >
                            <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <Palmtree className="w-8 h-8 text-gold" />
                                <h2 className={`text-3xl font-serif font-bold text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'ثانياً: بحيرة جاردا (Lago di Garda)' : 'Second: Lake Garda (Lago di Garda)'}
                                </h2>
                            </div>
                            <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                {language === 'ar'
                                    ? 'هي أكبر بحيرة في إيطاليا، وتعتبر الوجهة العائلية الأولى بامتياز. ما يميز جاردا هو تنوعها؛ فالجنوب مسطح ودافئ ومشمس، والشمال جبلي ومهيب.'
                                    : 'It is the largest lake in Italy and is considered the premier family destination. What distinguishes Garda is its diversity; the south is flat, warm, and sunny, while the north is mountainous and majestic.'}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    {
                                        title: language === 'ar' ? 'سيرميوني (Sirmione):' : 'Sirmione:',
                                        desc: language === 'ar' ? 'لؤلؤة البحيرة، وهي شبه جزيرة تمتد داخل الماء، تشتهر بقلعتها التاريخية "سكاليجيرو" ومياهها الكبريتية الحرارية، وزقاقاتها الضيقة المليئة بمطاعم الجيلاتو.' : 'The pearl of the lake, a peninsula stretching into the water. It is famous for its historic "Scaligero" castle, thermal sulfur waters, and narrow alleys filled with gelato shops.'
                                    },
                                    {
                                        title: language === 'ar' ? 'ريفال ديل جاردا (Riva del Garda):' : 'Riva del Garda:',
                                        desc: language === 'ar' ? 'تقع في أقصى الشمال، حيث تلتقي البحيرة بالجبال الشاهقة. هي جنة لمحبي التصوير وركوب الدراجات الهوائية.' : 'Located in the far north, where the lake meets towering mountains. It is a paradise for photography and cycling enthusiasts.'
                                    }
                                ].map((item, idx) => (
                                    <li key={idx} className={`bg-card p-4 rounded-xl border border-border hover:border-gold/30 transition-colors shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                                        <h3 className={`font-bold text-lg text-primary mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{item.title}</h3>
                                        <p className={`text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>{item.desc}</p>
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
                                src="/assets/cities/north-italy-garda/lake-garda.jpg" // Sirmione Castle
                                alt="Sirmione Castle"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </section>

                    {/* More Garda & Theme Parks */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:-rotate-2 transition-transform duration-500"
                        >
                            <Image
                                src="/assets/cities/north-italy-garda/malcesine.webp" // Malcesine Cable Car or View
                                alt="Malcesine & Garda View"
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
                            {/* Malcesine */}
                            {/* Malcesine */}
                            <div className={`bg-card p-6 rounded-2xl border border-border shadow-sm hover:border-gold/30 transition-all ${isRTL ? 'text-right' : 'text-left'}`}>
                                <h3 className={`font-bold text-xl text-primary mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'مالسيسيني (Malcesine)' : 'Malcesine'}
                                </h3>
                                <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar'
                                        ? 'تشتهر بالتلفريك الذي يصعد بك إلى جبل "بالدو" لتشاهد البحيرة كاملة من الأعلى في مشهد يخطف الأنفاس.'
                                        : 'Famous for the panoramic cable car that takes you up to Mount Baldo to see the entire lake from above in a breathtaking, unforgettable scene.'}
                                </p>
                            </div>

                            {/* Gardaland */}
                            <div className={`bg-white p-6 rounded-2xl border border-primary/10 shadow-md ${isRTL ? 'text-right' : 'text-left'}`}>
                                <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <RollerCoaster className="w-8 h-8 text-gold" />
                                    <h2 className={`text-xl font-bold text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                                        {language === 'ar' ? 'مدينة الألعاب جاردا لاند (Gardaland)' : 'Gardaland Theme Park'}
                                    </h2>
                                </div>
                                <p className={`text-foreground mb-3 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'أكبر وأشهر مدينة ملاهي في إيطاليا، وهي وجهة أساسية إذا كان معك أطفال.' : 'The largest and most famous amusement park in Italy, and an essential destination if you are traveling with children.'}
                                </p>
                            </div>

                            {/* Comparison */}
                            <div className={`border-t border-gold/20 pt-6 mt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                                <h4 className={`font-bold text-gold mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'لماذا يفضل السياح "جاردا" على "كومو"؟' : 'Why do tourists prefer Garda over Como?'}
                                </h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className={`flex gap-2 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                                        <span className={`${isRTL ? 'text-right' : 'text-left'}`}><strong>{language === 'ar' ? 'للعائلات:' : 'For Families:'}</strong> {language === 'ar' ? 'جاردا أفضل لوجود مدن الملاهي والحدائق المائية والمساحات الواسعة.' : 'Garda is better due to amusement parks, water parks, and wide spaces.'}</span>
                                    </li>
                                    <li className={`flex gap-2 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                                        <span className={`${isRTL ? 'text-right' : 'text-left'}`}><strong>{language === 'ar' ? 'للنشاط:' : 'For Activity:'}</strong> {language === 'ar' ? 'جاردا توفر أنشطة رياضية مائية وجبلية أكثر.' : 'Garda offers more water and mountain sports activities.'}</span>
                                    </li>
                                    <li className={`flex gap-2 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                                        <span className={`${isRTL ? 'text-right' : 'text-left'}`}><strong>{language === 'ar' ? 'للسعر:' : 'For Price:'}</strong> {language === 'ar' ? 'غالباً ما تكون خيارات السكن في جاردا أكثر تنوعاً وأقل سعراً من الفلل الفارهة في كومو.' : 'Accommodation options in Garda are often more diverse and cheaper than luxury villas in Como.'}</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>
                </div>

                {/* Driver Tip */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Info className="w-5 h-5 text-gold" />
                            <span className="font-bold">
                                {language === 'ar' ? 'نصيحة السائق في جاردا' : 'Driver\'s Tip in Garda'}
                            </span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'القيادة حول بحيرة جاردا ممتعة جداً ولكنها طويلة (محيط البحيرة حوالي 160 كم). إذا كنت ترغب في زيارة أكثر من قرية في يوم واحد، فإن السائق الخاص سيوفر عليك عناء البحث عن مواقف خاصة في "سيرميوني" التي يمنع دخول السيارات الخاصة إلى قلبها التاريخي.'
                                : 'Driving around Lake Garda is very enjoyable but long (lake circumference is about 160 km). If you want to visit more than one village in one day, a private driver will save you the trouble of searching for private parking in Sirmione, which prohibits private cars from entering its historic heart.'}
                        </p>

                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز جولتك في جاردا والشمال' : 'Book Your Garda & North Tour'}
                            </a>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default NorthItalyGardaContent;
