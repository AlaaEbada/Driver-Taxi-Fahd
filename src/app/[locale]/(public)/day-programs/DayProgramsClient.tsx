'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Phone, Car, Check, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DayProgramsClient() {
    const { language } = useLanguage();

    const dayTrips = [
        {
            title: {
                ar: '1. برنامج "الرومانسية والطبيعة" (كومو ولوجانو)',
                en: '1. Romance & Nature (Como & Lugano)'
            },
            description: {
                ar: '<strong>الصباح:</strong> الذهاب إلى مدينة كومو، جولة قصيرة في الساحة وتناول القهوة.<br/><strong>الظهيرة:</strong> استقلال العبارة إلى بيلاجيو "لؤلؤة البحيرة" لتناول الغداء واستكشاف أزقتها.<br/><strong>المساء:</strong> عبور الحدود السويسرية لزيارة لوجانو والاستمتاع ببحيرتها الهادئة قبل العودة لميلانو.',
                en: '<strong>Morning:</strong> Drive to Como, tour the square and enjoy coffee. <strong>Afternoon:</strong> Ferry to Bellagio (Pearl of the Lake) for lunch and exploring alleys. <strong>Evening:</strong> Cross to Lugano, Switzerland to enjoy the lake before returning to Milan.'
            },
            duration: {
                ar: '9-10 ساعات',
                en: '9-10 Hours'
            },
            image: '/assets/cities/como-bellagio-lugano/como.webp',
        },
        {
            title: {
                ar: '2. برنامج "التاريخ والبحيرة" (فيرونا وسيرميوني)',
                en: '2. History & Lake (Verona & Sirmione)'
            },
            description: {
                ar: '<strong>الصباح:</strong> التوجه إلى فيرونا "مدينة روميو وجوليت" زيارة البيت التاريخي والساحة الرومانية.<br/><strong>الظهيرة:</strong> الانتقال لقرية سيرميوني على بحيرة جاردا.<br/><strong>المساء:</strong> جولة بالقارب حول القلعة في سيرميوني، ثم العودة لميلانو (حوالي ساعة ونصف).',
                en: '<strong>Morning:</strong> Visit Verona (Romeo & Juliet city), see the historic house and Roman arena. <strong>Afternoon:</strong> Move to Sirmione village on Lake Garda. <strong>Evening:</strong> Boat tour around the castle in Sirmione, then return to Milan.'
            },
            duration: {
                ar: '10-11 ساعة',
                en: '10-11 Hours'
            },
            image: '/assets/cities/verona.webp',
        },
        {
            title: {
                ar: '3. برنامج "عشاق الموضة" (أوت لت سيرافالي)',
                en: '3. Fashion Lovers (Serravalle Outlet)'
            },
            description: {
                ar: '<strong>اليوم بالكامل:</strong> التوجه إلى Outlet Serravalle أكبر أوت لت في أوروبا.<br/><strong>المميزات:</strong> هذا البرنامج لا يحتاج مجهوداً ذهنياً، فقط تسوق واستراحة غداء. السائق هنا ضروري جداً لتحميل الحقائب الكثيرة بخصوصية وأمان.',
                en: '<strong>Full Day:</strong> Head to Serravalle Outlet, Europe\'s largest. <strong>Features:</strong> Effortless day focused on shopping and dining. A private driver is essential for handling multiple bags securely and comfortably for families.'
            },
            duration: {
                ar: '8-9 ساعات',
                en: '8-9 Hours'
            },
            image: '/assets/cities/serravalle-outlet/serravalle-cover.jpg',
        },
        {
            title: {
                ar: '4. برنامج "جبال الألب والقطار الأحمر" (برنينا إكسبريس)',
                en: '4. Alps & Red Train (Bernina Express)'
            },
            description: {
                ar: '<strong>الصباح:</strong> الانطلاق من ميلانو إلى منطقة تيرانو على الحدود السويسرية.<br/><strong>النشاط:</strong> ركوب قطار "Bernina Express" المصنف من اليونسكو لرحلة قصيرة عبر الثلوج والقمم.<br/><strong>المساء:</strong> العودة بالسيارة مع السائق لميلانو.',
                en: '<strong>Morning:</strong> Depart Milan to Tirano on the Swiss border. <strong>Activity:</strong> Ride the UNESCO-listed Bernina Express for a short journey through snow and peaks. <strong>Evening:</strong> Return by car with the driver to Milan.'
            },
            duration: {
                ar: '10-12 ساعة',
                en: '10-12 Hours'
            },
            image: '/assets/cities/alps.jpg',
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
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/assets/cities/milan-city/milan-2.jpg"
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                            {language === 'ar' ? 'برامج اليوم الواحد' : 'One Day Programs'}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {language === 'ar'
                                ? (
                                    <>
                                        مع ابو فهد هتشوف اللي عمرك ما شوفته
                                        <br className="my-2" />
                                        ميلانو هي "المايسترو" الذي يدير حركة السياحة في شمال إيطاليا، فهي ليست فقط مركزاً للموضة، بل هي أذكى نقطة انطلاق لبرامج اليوم الواحد بسبب موقعها الاستراتيجي وارتباطها بشبكة طرق سريعة.
                                    </>
                                )
                                : 'Milan is the "Maestro" of northern Italian tourism. More than just a fashion capital, it is the strategic heart for unforgettable day trips across the region.'}
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
                                {language === 'ar' ? 'أولاً: نبذة مختصرة عن سياحة ميلانو' : 'Milan Tourism: Elegance & Style'}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {language === 'ar'
                                    ? 'ميلانو مدينة "عملية" وأنيقة، يكفيها يومان لاستكشاف معالمها الرئيسية:'
                                    : 'Milan is a practical and elegant city; two days are perfect to explore its main highlights:'}
                            </p>
                            <ul className="space-y-4 text-muted-foreground list-none">
                                {language === 'ar' ? (
                                    <>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>ساحة الدومو (Duomo):</strong> قلب المدينة التاريخي، والسطح البانورامي للكنيسة هو أجمل إطلالة.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>جاليريا فيتوريو إيمانويل:</strong> للتسوق الفاخر والتقاط الصور المعمارية المذهلة.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>منطقة نافيلي (Navigli):</strong> قنوات مائية محاطة بالمقاهي وهي الأجمل في المساء.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>قلعة سفورزيسكو:</strong> متنفس العائلات ومحبي التاريخ.</span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>Duomo Square:</strong> The historic heart of the city; the panoramic rooftop offers the best view.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>Galleria Vittorio Emanuele:</strong> For luxury shopping and stunning architectural photos.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>Navigli District:</strong> Canals lined with cafes, most beautiful in the evening.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-gold font-bold">•</span>
                                            <span><strong>Sforzesco Castle:</strong> A haven for families and history lovers.</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/assets/cities/milan-city/milan-1.jpg"
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
                <div className="container-luxury space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            {language === 'ar' ? 'ثانياً: برامج اليوم الواحد انطلاقاً من ميلانو' : 'Day Programs from Milan'}
                        </h2>
                        <p className="text-muted-foreground">
                            {language === 'ar'
                                ? 'هذه البرامج مصممة لتبدأ صباحاً من ميلانو والعودة في المساء، وهي المثالية لتنفيذها مع سائق خاص:'
                                : 'Optimized itineraries starting from Milan in the morning and returning by evening, ideal for private car tours:'}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {dayTrips.map((trip, index) => (
                            <div key={index} className="card-luxury group flex flex-col h-full border border-border">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={trip.image}
                                        alt={trip.title[language]}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs font-medium">
                                        <Clock className="w-3 h-3 inline-block ml-1" />
                                        {trip.duration[language]}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col text-right rtl:text-right ltr:text-left">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-gold transition-colors">{trip.title[language]}</h3>
                                    <p
                                        className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1"
                                        dangerouslySetInnerHTML={{ __html: trip.description[language] }}
                                    />

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                                        <Button asChild variant="luxury" className="w-full text-primary font-bold rounded-xl">
                                            <a href={`https://wa.me/393888248473?text=${encodeURIComponent(language === 'ar' ? 'أرغب في الاستفسار عن ' : 'I want to inquire about ') + trip.title[language]}`} target="_blank" rel="noopener noreferrer">
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

            {/* Advice Section */}
            <section className="py-20 border-t border-border bg-muted/20">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-right rtl:text-right ltr:text-left">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold">
                                {language === 'ar' ? 'نصيحة الخبراء' : 'Expert Advice'}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border">
                                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">{language === 'ar' ? 'ساعات العمل (التوقيت المثالي)' : 'Best Timing'}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {language === 'ar'
                                                ? 'ابدأ رحلتك دائماً الساعة 10:00 صباحاً والعودة بحلول الساعة 7:00 مساءً، لتتجنب زحام الدخول لميلانو وقت الذروة.'
                                                : 'Start at 10:00 AM and return by 7:00 PM to avoid traffic.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border">
                                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">{language === 'ar' ? 'التوفير (باكيج سعر موحد)' : 'Discounts (Package Price)'}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {language === 'ar'
                                                ? 'إذا كنت ستأخذ سائقاً لعدة أيام، اطلب منه "باكيج" سعر موحد لكل هذه الرحلات للحصول على خصم.'
                                                : 'Request a package price for multiple days to get a special discount.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-full border-2 border-dashed border-gold/20 p-8 flex items-center justify-center text-center">
                            <div className="text-center relative z-10 space-y-4">
                                <Car className="w-16 h-16 text-gold mx-auto" />
                                <h3 className="text-2xl font-serif font-bold">
                                    {language === 'ar' ? 'هل لديك وجهة أخرى؟' : 'Other Destinations?'}
                                </h3>
                                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                    {language === 'ar'
                                        ? 'نحن نوفر رحلات مخصصة لأي مكان في إيطاليا وسويسرا.'
                                        : 'We provide custom trips anywhere across Italy and Switzerland.'}
                                </p>
                                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary rounded-full px-8 font-bold">
                                    <a href="https://wa.me/393888248473">
                                        {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
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
