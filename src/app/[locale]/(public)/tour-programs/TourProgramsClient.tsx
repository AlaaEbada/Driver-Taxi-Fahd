'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Phone, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TourProgramsClient() {
    const { language } = useLanguage();

    const programs = [
        {
            title: {
                ar: '1. برنامج "كلاسيكيات إيطاليا" (التاريخ والفن)',
                en: '1. "Italy Classics" Program (History & Art)'
            },
            duration: {
                ar: '7 ليالي',
                en: '7 Nights'
            },
            image: '/assets/cities/Italy classics.webp',
            path: {
                ar: 'روما (3 ليالي) - فلورنسا (ليلتان) - فينيسيا (ليلتان).',
                en: 'Rome (3 Nights) - Florence (2 Nights) - Venice (2 Nights).'
            },
            suitability: {
                ar: 'يناسب محبي الآثار، التصوير، والقصص التاريخية.',
                en: 'Ideal for history buffs, photographers, and culture lovers.'
            },
            landmarks: {
                ar: 'الكولوسيوم في روما، برج بيزا المائل (رحلة نهارية)، وقنوات فينيسيا.',
                en: 'Colosseum in Rome, Leaning Tower of Pisa, and Venice Canals.'
            },
            transport: {
                ar: 'يفضل القطار السريع (Italo / Trenitalia) لربط مراكز المدن بسرعة.',
                en: 'High-speed trains (Italo / Trenitalia) are recommended for speed.'
            },
            highlights: {
                ar: ['الكولوسيوم في روما', 'برج بيزا المائل', 'قنوات فينيسيا', 'محبي الآثار والتصوير'],
                en: ['Colosseum', 'Leaning Tower', 'Venice Canals', 'History & Art']
            }
        },
        {
            title: {
                ar: '2. برنامج شمال إيطاليا والبحيرات (الطبيعة والاسترخاء)',
                en: '2. North Italy & Lakes (Nature & Relaxation)'
            },
            duration: {
                ar: '7-10 أيام',
                en: '7-10 Days'
            },
            image: '/assets/cities/Northern Italy and the lakes.jpg',
            path: {
                ar: 'ميلانو - بحيرة كومو - بحيرة جاردا - فيرونا.',
                en: 'Milan - Lake Como - Lake Garda - Verona.'
            },
            suitability: {
                ar: 'يناسب العائلات، العرسان، ومحبي الهدوء والمناظر الطبيعية.',
                en: 'Perfect for families, honeymooners, and nature lovers.'
            },
            landmarks: {
                ar: 'ساحة الدومو، قرية "بيلاجيو"، ومدينة ألعاب "جاردا لاند".',
                en: 'Duomo Square, Bellagio Village, and Gardaland Park.'
            },
            transport: {
                ar: 'السائق الخاص هو الخيار الأفضل بامتياز للتنقل بين القرى.',
                en: 'Private driver is the best option for navigating small villages.'
            },
            highlights: {
                ar: ['ساحة الدومو في ميلانو', 'قرية "بيلاجيو" في كومو', 'مدينة ألعاب "جاردا لاند"', 'بيت جوليت في فيرونا'],
                en: ['Milan Duomo', 'Bellagio Village', 'Gardaland', 'Juliet\'s House']
            }
        },
        {
            title: {
                ar: '3. برنامج "الألب والدولوميت" (لعشاق الأجواء الجبلية)',
                en: '3. "Alps & Dolomites" Program (Mountain Lovers)'
            },
            duration: {
                ar: '5-7 أيام',
                en: '5-7 Days'
            },
            image: '/assets/cities/alps.jpg',
            path: {
                ar: 'فينيسيا - كورتينا دامبيزو - جبال الدولوميت - بحيرة برايس.',
                en: 'Venice - Cortina d\'Ampezzo - Dolomites - Lake Braies.'
            },
            suitability: {
                ar: 'يناسب محبي الهايكنج، التزلج، والباحثين عن البرودة صيفاً.',
                en: 'Ideal for hiking, skiing, and escaping summer heat.'
            },
            landmarks: {
                ar: 'بحيرة كاريزا الملونة وقمم "سيسيليا" الصخرية.',
                en: 'Lake Carezza and Seceda peaks.'
            },
            transport: {
                ar: 'السيارة الخاصة ضرورية جداً بسبب الطرق الجبلية المتعرجة.',
                en: 'Private car is essential for winding mountain roads.'
            },
            highlights: {
                ar: ['بحيرة كاريزا الملونة', 'قمم سيسيليا الصخرية', 'السيارة الخاصة ضرورية', 'أبرد نقطة في إيطاليا'],
                en: ['Lake Carezza', 'Seceda Peaks', 'Private Car Essential', 'Cool Weather']
            }
        }
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
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/assets/cities/Milan/milan-1.jpg"
                            alt="Tour Programs Italy"
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
                            <MapPin className="w-5 h-5 text-gold" />
                            <span className="text-gold text-base font-semibold tracking-wide">
                                {language === 'ar' ? 'البرامج السياحية مع ابو فهد' : 'Tour Packages with Abu Fahd'}
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                            {language === 'ar' ? 'البرامج السياحية المتكاملة' : 'Complete Tour Programs'}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {language === 'ar'
                                ? 'إليك مخططات سياحية احترافية مصممة بعناية، لتجعل رحلتك في إيطاليا مريحة، منظمة، ولا تُنسى.'
                                : 'Carefully designed professional tour itineraries to make your Italian journey comfortable, organized, and unforgettable.'}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20">
                <div className="container-luxury space-y-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            {language === 'ar' ? 'أكثر 3 برامج سياحية شهرة وطلباً لعام 2026' : 'Top 3 Most Popular Programs for 2026'}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {language === 'ar'
                                ? 'تعتمد البرامج السياحية بشكل أساسي على اهتماماتك (طبيعة، تاريخ، أو تسوق). إليك تفاصيل أكثر البرامج تميزاً:'
                                : 'Tour programs depend mainly on your interests (nature, history, or shopping). Here are our most distinctive options:'}
                        </p>
                    </div>

                    {programs.map((program, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                            <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={program.image}
                                    alt={program.title[language]}
                                    fill
                                    className="relative object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                    {program.duration[language]}
                                </div>
                            </div>

                            <div className="flex-1 space-y-8 text-right rtl:text-right ltr:text-left">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{program.title[language]}</h2>
                                    <div className="w-20 h-1 bg-gold rounded-full mb-6" />

                                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            <strong className="text-foreground">{language === 'ar' ? 'المسار:' : 'Path:'} </strong>
                                            {program.path[language]}
                                        </p>
                                        <p>
                                            <strong className="text-foreground">{language === 'ar' ? 'المناسبة:' : 'Suitable for:'} </strong>
                                            {program.suitability[language]}
                                        </p>
                                        <p>
                                            <strong className="text-foreground">{language === 'ar' ? 'أهم المعالم:' : 'Key Landmarks:'} </strong>
                                            {program.landmarks[language]}
                                        </p>
                                        <p>
                                            <strong className="text-foreground">{language === 'ar' ? 'التنقل:' : 'Transport:'} </strong>
                                            {program.transport[language]}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {program.highlights[language].map((highlight, hIndex) => (
                                        <div key={hIndex} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium text-foreground">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button asChild variant="luxury" size="lg" className="text-primary font-bold rounded-full px-8">
                                        <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                            <Phone className="w-5 h-5 ml-2" />
                                            {language === 'ar' ? 'احجز هذا البرنامج' : 'Book This Program'}
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-gold text-gold hover:bg-gold hover:text-primary">
                                        <a href="https://wa.me/393888248473">
                                            {language === 'ar' ? 'طلب تخصيص رحلة' : 'Request Custom Trip'}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selection Advice */}
            <section className="py-20 bg-muted/30">
                <div className="container-luxury">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center">{language === 'ar' ? 'نصيحة عند اختيار برنامجك' : 'Advice for Choosing Your Program'}</h2>
                        <div className="grid gap-6">
                            {[
                                {
                                    title: language === 'ar' ? 'موسم السفر' : 'Travel Season',
                                    desc: language === 'ar'
                                        ? 'إذا كانت رحلتك في الصيف (يونيو - أغسطس)، اتجه شمالاً لميلانو والبحيرات هرباً من حرارة روما والجنوب.'
                                        : 'If traveling in summer (June-August), head north to Milan and the lakes to escape heat.'
                                },
                                {
                                    title: language === 'ar' ? 'مدة الرحلة' : 'Trip Duration',
                                    desc: language === 'ar'
                                        ? 'أقل مدة لتغطية برنامج واحد بشكل مريح هي 7 إلى 10 أيام.'
                                        : 'Minimum duration to cover one program comfortably is 7 to 10 days.'
                                },
                                {
                                    title: language === 'ar' ? 'التسوق' : 'Shopping',
                                    desc: language === 'ar'
                                        ? 'اجعل ميلانو هي المحطة الأخيرة دائماً لتتمكن من التسوق في "سيرافالي" وشحن الحقائب للمطار بسهولة.'
                                        : 'Always make Milan your last stop to shop at Serravalle and ship bags to the airport.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-card p-6 rounded-2xl border border-border flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                                        <Star className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Design Form/CTA */}
            <section className="py-20 relative overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                </div>
                <div className="container-luxury relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{language === 'ar' ? 'كيف أصمم لك برنامجاً خاصاً؟' : 'How Do I Design a Custom Program for You?'}</h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {language === 'ar'
                            ? 'بما أنك تبحث عن سائق عربي، يمكنني صياغة جدول يومي دقيق لك إذا أخبرتني بـ:'
                            : 'Since you are looking for an Arabic driver, I can create a precise daily schedule if you share:'}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
                            <p className="font-bold">{language === 'ar' ? 'عدد الأيام الإجمالي لرحلتك.' : 'Total days of your trip.'}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                            <p className="font-bold">{language === 'ar' ? 'تاريخ الرحلة (الأعرف حالة الطقس).' : 'Trip dates (to check weather).'}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <Users className="w-8 h-8 text-gold mx-auto mb-4" />
                            <p className="font-bold">
                                {language === 'ar'
                                    ? 'هل تفضل السكن في مدينة واحدة أم التنقل بين المدن؟'
                                    : 'Preference: stay in one city or travel between cities.'}
                            </p>
                        </div>
                    </div>
                    <Button asChild variant="luxury" size="lg" className="text-primary font-bold rounded-full px-12">
                        <a href="https://wa.me/393888248473">
                            <Phone className="w-5 h-5 ml-2" />
                            {language === 'ar' ? 'تواصل معي الآن لتصميم جدولك' : 'Contact Me to Design Your Schedule'}
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
