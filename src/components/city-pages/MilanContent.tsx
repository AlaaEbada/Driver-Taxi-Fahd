'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Landmark, MapPin, Trophy, Camera, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const MilanContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/milan/milan-cover.jpg"
                        alt={language === 'ar' ? 'ميلانو - مدينة المستقبل' : 'Milan - Future City'}
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
                            {language === 'ar' ? 'مع ابو فهد' : 'With Abu Fahd'}
                        </span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                            {language === 'ar' ? 'افضل سائق عربي في ميلانو' : 'Best Arabic Driver in Milan'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'ميلانو هي عاصمة الشمال الإيطالي، والقلب النابض للموضة والأعمال، والتصميم.'
                                : 'Milan is the capital of Northern Italy, the beating heart of fashion, business, and design.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">
                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'ميلانو هي المستقبل' : 'Milan is the Future'}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {language === 'ar'
                            ? 'إذا كانت روما تمثل "الماضي"، فميلانو هي المستقبل والوجهة الأكثر عصرنة وتنظيماً في إيطاليا. إليك نبذة مختصره عن أهم ما يميز السياحة فيها:'
                            : 'If Rome represents the "past", Milan is the future and the most modern and organized destination in Italy. Here is a brief overview of its tourism highlights:'}
                    </p>
                </section>

                {/* Content Grid */}
                <div className="space-y-20">
                    {/* Art & History */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Landmark className="w-8 h-8 text-gold" />
                                <h2 className="text-3xl font-serif font-bold text-primary">
                                    {language === 'ar' ? 'المعالم التاريخية والفنية' : 'Historical & Artistic Landmarks'}
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    {
                                        title: language === 'ar' ? 'كاتدرائية الدومو (Duomo)' : 'Milan Cathedral (Duomo)',
                                        desc: language === 'ar'
                                            ? 'ثالث أكبر كنيسة في أوروبا، وهي تحفة معمارية من الرخام الأبيض. لا تفوت فرصة الصعود إلى السطح للمشي بين التماثيل ورؤية المدينة من الأعلى.'
                                            : 'The third largest church in Europe, a white marble architectural masterpiece. Don\'t miss climbing to the roof to walk among the statues and see the city from above.'
                                    },
                                    {
                                        title: language === 'ar' ? 'لوحة "العشاء الأخير"' : 'The Last Supper',
                                        desc: language === 'ar'
                                            ? 'للفنان ليوناردو دافنشي، وتوجد في كنيسة "سانتا ماريا ديلي غرازي" (تتطلب حجزاً مسبقاً قبل الرحلة بشهور).'
                                            : 'By Leonardo da Vinci, located in the "Santa Maria delle Grazie" church (requires booking months in advance).'
                                    },
                                    {
                                        title: language === 'ar' ? 'قلعة سفورزيسكو (Sforzesco Castle)' : 'Sforzesco Castle',
                                        desc: language === 'ar'
                                            ? 'قلعة ضخمة تضم متاحف فنية وحديقة "سيمبيوني" الشاسعة خلفها، وهي مثالية للتنزه.'
                                            : 'A massive castle housing art museums with the vast "Sempione" park behind it, perfect for a stroll.'
                                    }
                                ].map((item, idx) => (
                                    <li key={idx} className="bg-card p-5 rounded-2xl border border-border shadow-sm hover:border-gold/30 transition-all">
                                        <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.desc}</p>
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
                                src="/assets/cities/milan/milan-2.jpg"
                                alt="Sforza Castle"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </section>

                    {/* Shopping & Modern Life */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:-rotate-2 transition-transform duration-500"
                        >
                            <Image
                                src="/assets/cities/milan/milan-1.jpg"
                                alt="Milan Fashion Street"
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
                            {/* Shopping */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShoppingBag className="w-8 h-8 text-gold" />
                                    <h2 className="text-2xl font-serif font-bold text-primary">
                                        {language === 'ar' ? 'جنة التسوق والموضة' : 'Shopping & Fashion Paradise'}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    <div className={`${isRTL ? 'border-r-2' : 'border-l-2'} border-gold ${isRTL ? 'pr-4' : 'pl-4'}`}>
                                        <h4 className="font-bold">
                                            {language === 'ar' ? 'جاليريا فيتوريو إيمانويل الثاني' : 'Galleria Vittorio Emanuele II'}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {language === 'ar'
                                                ? 'أقدم مركز تسوق في العالم، يتميز بسقف زجاجي مذهل وأرضيات من الفسيفساء، ويضم أفخم الماركات العالمية.'
                                                : 'The world\'s oldest shopping mall, featuring a stunning glass roof and mosaic floors, housing the most luxurious international brands.'}
                                        </p>
                                    </div>
                                    <div className={`${isRTL ? 'border-r-2' : 'border-l-2'} border-gold ${isRTL ? 'pr-4' : 'pl-4'}`}>
                                        <h4 className="font-bold">
                                            {language === 'ar' ? 'حي الموضة (Quadrilatero della Moda)' : 'Fashion District (Quadrilatero della Moda)'}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {language === 'ar'
                                                ? 'مربع الموضة والشوارع الراقية مثل "مونتي نابوليوني"، حيث تجد أرقى الأزياء العالمية في بيئة فخمة جداً.'
                                                : 'The fashion rectangle and high-end streets like "Via Montenapoleone", where you find the finest international fashion in a very luxurious environment.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Football & Nightlife */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Trophy className="w-8 h-8 text-gold" />
                                    <h2 className="text-2xl font-serif font-bold text-primary">
                                        {language === 'ar' ? 'الرياضة والحياة العصرية' : 'Sports & Modern Life'}
                                    </h2>
                                </div>
                                <ul className={`list-disc list-inside text-muted-foreground space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <li>
                                        <strong>{language === 'ar' ? 'ملعب سان سيرو:' : 'San Siro Stadium:'}</strong>
                                        {language === 'ar' ? ' الوجهة المفضلة لعشاق كرة القدم (ميلان وإنتر ميلان).' : ' The preferred destination for football fans (Milan and Inter Milan).'}
                                    </li>
                                    <li>
                                        <strong>{language === 'ar' ? 'حي نافيلي (Navigli):' : 'Navigli District:'}</strong>
                                        {language === 'ar' ? ' منطقة القنوات المائية، وهي قلب الحياة الاجتماعية في المساء، حيث تمتلئ بالمطاعم والمقاهي التي تقدم تجربة "الأبيريتيفو" (Aperitivo) الميلانية الشهيرة.' : ' The canal area, the heart of social life in the evening, filled with restaurants and cafes offering the famous Milanese "Aperitivo" experience.'}
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>
                </div>

                {/* Location Advantage */}
                <section className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h2 className="text-3xl font-serif font-bold mb-6">
                        {language === 'ar' ? 'الموقع الاستراتيجي' : 'Strategic Location'}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        {language === 'ar' ? 'تعتبر ميلانو أفضل نقطة انطلاق في إيطاليا لأنها:' : 'Milan is considered the best starting point in Italy because it is:'}
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-background p-4 rounded-xl shadow-sm border border-gold/10">
                            <span className="block text-2xl font-bold text-gold mb-1">1h</span>
                            <span className="text-sm text-primary font-bold">
                                {language === 'ar' ? 'تبعد ساعة واحدة فقط عن بحيرة كومو.' : 'Only one hour away from Lake Como.'}
                            </span>
                        </div>
                        <div className="bg-background p-4 rounded-xl shadow-sm border border-gold/10">
                            <span className="block text-2xl font-bold text-gold mb-1">1.5h</span>
                            <span className="text-sm text-primary font-bold">
                                {language === 'ar' ? 'تبعد ساعة ونصف عن سويسرا (مدينة لوجانو).' : 'One and a half hours away from Switzerland (Lugano).'}
                            </span>
                        </div>
                        <div className="bg-background p-4 rounded-xl shadow-sm border border-gold/10">
                            <span className="block text-2xl font-bold text-gold mb-1">Train</span>
                            <span className="text-sm text-primary font-bold">
                                {language === 'ar' ? 'ترتبط بقطارات سريعة جداً مع روما، فينيسيا، وفلورنسا.' : 'Connected by very high-speed trains to Rome, Venice, and Florence.'}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Practical Tip */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Info className="w-5 h-5 text-gold" />
                            <span className="font-bold">{language === 'ar' ? 'نصيحة سريعة' : 'Quick Tip'}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'ميلانو مدينة عملية جداً المترو فيها يغطي كل مكان سياحي بامتياز، لذا لن تحتاج لسائق خاص داخل المدينة نفسها، ووفر ميزانية السائق للرحلات الخارجية مثل كومو، جاردا، أو الأوت لت.'
                                : 'Milan is a very practical city, its Metro covers every tourist spot perfectly. You won\'t need a private driver inside the city itself; save your budget for day trips to places like Como, Garda, or the outlets.'}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز رحلتك الخارجية من ميلانو' : 'Book your day trip from Milan'}
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MilanContent;
