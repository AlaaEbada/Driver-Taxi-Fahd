'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Wind, Car, Info, CheckCircle2, Star, Coffee, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const ChamonixMegeveContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/chamonix-megeve/chamonix.jpg"
                        alt={language === 'ar' ? 'شامونيه وميجيف في جبال الألب الفرنسية' : 'Chamonix & Megève Mont Blanc'}
                        fill
                        className="object-cover object-bottom"
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
                            {language === 'ar' ? 'مع أبو فهد' : 'With Abu Fahd'}
                        </span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                            {language === 'ar' ? 'سائق عربي في شامونيه وميجيف' : 'Arabic Driver in Chamonix & Megeve'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'أرقى وأجمل الوجهات الجبلية في جبال الألب الفرنسية'
                                : 'The most refined and beautiful mountain destinations in the French Alps'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">
                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'جمال الألب الفرنسية' : 'Beauty of the French Alps'}
                    </h2>
                    <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right md:text-center' : 'text-left md:text-center'}`}>
                        {language === 'ar'
                            ? 'تعد شامونيه وميجيف من الوجهات التي تجمع بين سحر الطبيعة والرفاهية العالية. قريبتان من الحدود السويسرية والإيطالية، مما يجعلهما امتداداً مثالياً لرحلتك من ميلانو أو جنيف.'
                            : 'Chamonix and Megeve are destinations that combine natural charm with high luxury. Close to the Swiss and Italian borders, they are a perfect extension of your trip from Milan or Geneva.'}
                    </p>
                </section>

                {/* Chamonix Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-2 lg:order-1' : 'order-1'} space-y-6`}
                    >
                        <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Mountain className="w-8 h-8 text-gold" />
                            <h2 className="text-3xl font-serif font-bold text-primary">
                                {language === 'ar' ? '1. شامونيه (Chamonix) - عاصمة المغامرة' : '1. Chamonix - Capital of Adventure'}
                            </h2>
                        </div>
                        <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            <p>{language === 'ar' ? 'تقع عند سفح جبل "مون بلان" أعلى قمة في أوروبا، وهي وجهة عالمية نابضة بالحياة طوال العام.' : 'Located at the foot of Mont Blanc, Europe\'s highest peak, it’s a vibrant year-round global destination.'}</p>
                            <p><strong>{language === 'ar' ? 'الأجواء:' : 'Atmosphere:'}</strong> {language === 'ar' ? 'تمزج بين الروح الرياضية والرفاهية الفرنسية، شوارعها مليئة بمقاهٍ أنيقة وبوتيكات مميزة.' : 'Blends a sporty spirit with French luxury; streets are lined with elegant cafes and unique boutiques.'}</p>
                            <ul className="space-y-3">
                                <li className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-primary">{language === 'ar' ? 'قمة "إيغوي دي ميدي" (Aiguille du Midi)' : 'Aiguille du Midi Summit'}</h4>
                                    <p className="text-sm">{language === 'ar' ? 'الصعد بالتلفريك لأعلى نقطة لرؤية قمة المون بلان وتجربة "المشي في الفراغ" في الصندوق الزجاجي.' : 'Take the cable car to the highest point to see Mont Blanc and experience "Step into the Void" in the glass box.'}</p>
                                </li>
                                <li className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-primary">{language === 'ar' ? 'قطار مير دي غلاس (Mer de Glace)' : 'Mer de Glace Train'}</h4>
                                    <p className="text-sm">{language === 'ar' ? 'قطار أحمر تاريخي يأخذك إلى بحر الجليد والكهوف الجليدية الزرقاء تحت الأرض.' : 'A historic red train that takes you to the Sea of Ice and blue ice caves underground.'}</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-1 lg:order-2' : 'order-2'} relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:rotate-1 transition-transform`}
                    >
                        <Image
                            src="/assets/cities/chamonix-megeve/chamonix-2.jpg"
                            alt="Chamonix View"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </section>

                {/* Megeve Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:-rotate-1 transition-transform"
                    >
                        <Image
                            src="/assets/cities/chamonix-megeve/megeve.jpg"
                            alt="Megeve Village"
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
                        <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Star className="w-8 h-8 text-gold" />
                            <h2 className="text-3xl font-serif font-bold text-primary">
                                {language === 'ar' ? '2. ميجيف (Megeve) - سحر الريف والرفاهية' : '2. Megeve - Country Charm & Luxury'}
                            </h2>
                        </div>
                        <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            <p>{language === 'ar' ? 'إذا كانت شامونيه للمغامرة، فإن ميجيف هي للهدوء، الاسترخاء، والطبقة المخملية.' : 'If Chamonix is for adventure, Megeve is for peace, relaxation, and high society.'}</p>
                            <p><strong>{language === 'ar' ? 'الأجواء:' : 'Atmosphere:'}</strong> {language === 'ar' ? 'قرية قروسطية حافظت على هويتها الأصلية بوسط خالٍ من السيارات، حيث عربات الخيول هي الوسيلة الأجمل للتنقل.' : 'A medieval village that kept its original identity with a car-free center, where horse-drawn carriages are the best way to get around.'}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                                    <Coffee className="w-5 h-5 text-gold mb-2" />
                                    <h4 className="font-bold text-sm">{language === 'ar' ? 'المطاعم الراقية' : 'Fine Dining'}</h4>
                                    <p className="text-xs">{language === 'ar' ? 'تضم مطاعم حائزة على نجوم ميشلان لعشاق الـ Fine Dining.' : 'Features Michelin-starred restaurants for fine dining enthusiasts.'}</p>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                                    <Plane className="w-5 h-5 text-gold mb-2" />
                                    <h4 className="font-bold text-sm">{language === 'ar' ? 'الرحلات الجوية' : 'Aerial Tours'}</h4>
                                    <p className="text-xs">{language === 'ar' ? 'جولات طائرة بانورامية لرؤية جبال الألب من الأعلى.' : 'Panoramic flight tours to see the Alps from above.'}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Comparison/Choice */}
                <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-gold/20">
                    <h2 className="text-2xl font-serif font-bold text-center mb-8 text-primary">
                        {language === 'ar' ? 'أيهما تختار لرحلتك؟' : 'Which one to choose for your trip?'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-background rounded-2xl border border-border shadow-sm text-center">
                            <Wind className="w-10 h-10 text-gold mx-auto mb-4" />
                            <h4 className="text-xl font-bold mb-3 italic">{language === 'ar' ? 'شامونيه' : 'Chamonix'}</h4>
                            <p className="text-muted-foreground">{language === 'ar' ? 'اذهب إليها إذا كنت تريد "أكشن" ومشاهد جبلية صاعقة ومغامرة حقيقية.' : 'Go there if you want "action", stunning mountain views, and real adventure.'}</p>
                        </div>
                        <div className="p-6 bg-background rounded-2xl border border-border shadow-sm text-center">
                            <Star className="w-10 h-10 text-gold mx-auto mb-4" />
                            <h4 className="text-xl font-bold mb-3 italic">{language === 'ar' ? 'ميجيف' : 'Megeve'}</h4>
                            <p className="text-muted-foreground">{language === 'ar' ? 'اذهب إليها إذا كنت تريد "رومانسية" وراحة وتجربة معيشة ريفية فاخرة وخصوصية.' : 'Go there if you want "romance", comfort, and a luxury rustic experience with privacy.'}</p>
                        </div>
                    </div>
                </section>

                {/* Driver Info */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-gold">
                            {language === 'ar' ? 'نصيحة التنقل مع السائق الخاص' : 'Private Driver Travel Tip'}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className={`flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <Car className="w-6 h-6 text-gold shrink-0" />
                                <p className="text-sm">{language === 'ar' ? 'المسافة بين شامونيه وميجيف حوالي 30-40 دقيقة فقط، مما يسمح بزيارتهما معاً.' : 'The distance between Chamonix and Megeve is only about 30-40 minutes, allowing you to visit both.'}</p>
                            </div>
                            <div className={`flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <Info className="w-6 h-6 text-gold shrink-0" />
                                <p className="text-sm">{language === 'ar' ? 'من ميلانو، تستغرق الرحلة حوالي ساعتين ونصف عبر نفق "مون بلان" الشهير الذي يربط إيطاليا بفرنسا.' : 'From Milan, the journey takes about two and a half hours via the famous Mont Blanc tunnel connecting Italy and France.'}</p>
                            </div>
                        </div>

                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز رحلتك للألب الفرنسية الآن' : 'Book Your French Alps Trip Now'}
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ChamonixMegeveContent;
