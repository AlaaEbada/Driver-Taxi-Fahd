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
            title: language === 'ar' ? '1. برنامج "الرومانسية والطبيعة" كومو ولوجانو' : 'Romance & Nature Program (Como & Lugano)',
            description: language === 'ar'
                ? '<strong>الصباح</strong> الذهاب إلى مدينة كومو، جولة قصيرة في الساحة وتناول القهوة. <strong>الظهيرة:</strong> استقلال العبارة إلى بيلاجيو لؤلؤة البحيرة لتناول الغداء واستكشاف أزقتها. <strong>المساء</strong> عبور الحدود السويسرية لزيارة لوجانو والاستمتاع ببحيرتها الهادئة قبل العودة لميلانو.'
                : '<strong>Morning:</strong> Drive to Como city, take a short tour of the square, and enjoy a coffee. <strong>Afternoon:</strong> Take the ferry to Bellagio, the "Pearl of the Lake," for lunch and an exploration of its charming alleys. <strong>Evening:</strong> Cross the Swiss border to visit Lugano and enjoy its tranquil lake before returning to Milan.',
            duration: language === 'ar' ? '9-10 ساعات' : '9-10 Hours',
            image: '/assets/cities/como-bellagio-lugano/como.webp',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
        {
            title: language === 'ar' ? '2 برنامج "التاريخ والبحيرة" فيرونا وسيرميوني' : 'History & Lake Program (Verona & Sirmione)',
            description: language === 'ar'
                ? '<strong>الصباح</strong> التوجه إلى فيرونا مدينة روميو وجوليت زيارة البيت التاريخي والساحة الرومانية. <strong>الظهيرة</strong> الانتقال القرية سير ميوني على بحيرة جاردا. <strong>المساء:</strong> جولة بالقارب حول القلعة في سيرميوني، ثم العودة لميلانو حوالي ساعة ونصف.'
                : '<strong>Morning:</strong> Head to Verona, the city of Romeo and Juliet; visit the historical house and the Roman arena. <strong>Afternoon:</strong> Transfer to the village of Sirmione on Lake Garda. <strong>Evening:</strong> Take a boat tour around the castle in Sirmione, then return to Milan (about an hour and a half journey).',
            duration: language === 'ar' ? '10-11 ساعة' : '10-11 Hours',
            image: '/assets/cities/Verona.webp',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
        {
            title: language === 'ar' ? '3. برنامج "عشاق الموضة" أوت لت سيرافالي' : 'Fashion Lovers Program (Serravalle Outlet)',
            description: language === 'ar'
                ? '<strong>اليوم بالكامل:</strong> التوجه إلى Outlet Serravalle أكبر أوت لت في أوروبا. <strong>المميزات</strong> هذا البرنامج لا يحتاج مجهوداً ذهنيا،ً فقط تسوق واستراحة غداء السائق هنا ضروري جداً لتحميل الحقائب الكثيرة بخصوصية وأمان خصوصاً للعوائل.'
                : '<strong>Full Day:</strong> Head to Serravalle Outlet, the largest outlet in Europe. <strong>Features:</strong> This program requires no mental effort; just shopping and a lunch break. A driver is essential here for loading many bags with privacy and safety, especially for families.',
            duration: language === 'ar' ? '8-9 ساعات' : '8-9 Hours',
            image: '/assets/cities/serravalle-outlet/serravalle-cover.jpg',
            price: language === 'ar' ? 'تواصل للسعر' : 'Contact for Price',
        },
        {
            title: language === 'ar' ? '4. برنامج جبال الألب والقطار الأحمر برنينا إكسبريس' : 'Alps & Red Train "Bernina Express"',
            description: language === 'ar'
                ? '<strong>الصباح</strong> الانطلاق من ميلانو إلى منطقة تيرانو على الحدود السويسرية. <strong>النشاط</strong> ركوب قطار Bernina Express المصنف من اليونسكو لرحلة قصيرة عبر الثلوج والقمم. <strong>المساء</strong> العودة بالسيارة مع السائق الميلانو.'
                : '<strong>Morning:</strong> Departure from Milan to the Tirano area on the Swiss border. <strong>Activity:</strong> Ride the Bernina Express, a UNESCO World Heritage site, for a short journey through snow and peaks. <strong>Evening:</strong> Return by car with the driver to Milan.',
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                            {language === 'ar' ? 'برنامج اليوم الواحد' : 'One Day Program'}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {language === 'ar'
                                ? 'برنامج اليوم الواحد مع ابو فهد هتشوف اللي عمرك ما شوفته - ميلانو هي المايسترو الذي يدير حركة السياحة في شمال إيطاليا، فهي ليست فقط مركزاً للموضة، بل هي أذكى نقطة انطلاق لبرامج اليوم الواحد بسبب موقعها الاستراتيجي وارتباطها بشبكة طرق سريعة.'
                                : 'One-day programs with Abu Fahd, you will see what you have never seen before - Milan is the "Maestro" that manages the tourism movement in northern Italy. It is not only a center for fashion but also the smartest starting point for one-day programs due to its strategic location and connection to a high-speed road network.'}
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
                                {language === 'ar' ? 'أولاً: نبذة مختصرة عن سياحة ميلانو' : 'Milan Tourism: Elegance & Beauty'}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {language === 'ar'
                                    ? 'ميلانو مدينة عملية" وأنيقة، يكفيها يومان لاستكشاف معالمها الرئيسية:'
                                    : 'Milan is a "practical" and elegant city; two days are enough to explore its main landmarks:'}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'ساحة الدومو' : 'Duomo Square'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'ساحة الدومو قلب المدينة التاريخي، والسطح البانورامي للكنيسة هو أجمل إطلالة .' : 'Duomo Square is the historical heart of the city, and the church\'s panoramic rooftop offers the most beautiful view.'}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'جاليريا فيتوريو إيمانويل' : 'Galleria Vittorio Emanuele'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'جاليريا فيتوريو إيمانويل: للتسوق الفاخر والتقاط الصور المعمارية المذهلة.' : 'Galleria Vittorio Emanuele: For luxury shopping and capturing stunning architectural photos.'}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'منطقة نافيلي' : 'Navigli Area'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'منطقة نافيلي قنوات مائية محاطة بالمقاهي، وهي الأجمل في المساء .' : 'Navigli Area: Water canals surrounded by cafes, most beautiful in the evening.'}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                                    <h4 className="font-bold text-gold mb-1">{language === 'ar' ? 'قلعة سفورزيسكو' : 'Sforzesco Castle'}</h4>
                                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'قلعة سفورزيسكو: متنفس العائلات ومحبي التاريخ.' : 'Sforzesco Castle: A breath of fresh air for families and history lovers.'}</p>
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
                <div className="container-luxury space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            {language === 'ar' ? 'ثانياً: برامج اليوم الواحد انطلاقاً من ميلانو' : 'Day Programs from Milan'}
                        </h2>
                        <p className="text-muted-foreground">
                            {language === 'ar' ? 'هذه البرامج مصممة لتبدأ صباحاً من ميلانو والعودة في المساء، وهي المثالية لتنفيذها مع سائق خاص:' : 'These programs are designed to start in the morning from Milan and return in the evening, making them ideal for executing with a private driver:'}
                        </p>
                    </div>
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
                                    <p
                                        className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1"
                                        dangerouslySetInnerHTML={{ __html: trip.description }}
                                    />

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
                                {language === 'ar' ? 'نصيحة الخبراء البرامج اليوم الواحد' : 'Expert Advice for Day Programs'}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {language === 'ar'
                                                ? 'ساعات العمل: ابدأ رحلتك دائماً الساعة 10:00 صباحاً والعودة بحلول الساعة 7:00 مساءً، لتتجنب زحام الدخول لميلانو وقت الذروة.'
                                                : 'Start at 10:00 AM and return by 7:00 PM to avoid peak hour traffic in Milan.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold mb-1">{language === 'ar' ? 'التوفير' : 'Saving'}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {language === 'ar'
                                                ? 'التوفير: إذا كنت ستأخذ سائقاً لعدة أيام، اطلب منه باكيج سعر موحد لكل هذه الرحلات، فغالباً ما يقدم السائقون العرب خصومات عند حجز أكثر من يوم'
                                                : 'Savings: If you are taking a driver for several days, ask him for a unified price package for all these trips. Arabic drivers often provide discounts when booking for more than one day.'}
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
