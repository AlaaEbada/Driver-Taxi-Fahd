'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Anchor, Mountain, Info, CheckCircle2, Navigation, Coffee, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const ComoBellagioContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/como-bellagio-lugano/como-3.jpg"
                        alt={language === 'ar' ? 'بحيرة كومو، بيلاجيو، لوجانو' : 'Lake Como, Bellagio, Lugano'}
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
                            {language === 'ar' ? 'سائق عربي في كومو، بيلاجيو، ولوجانو' : 'Arabic Driver in Como, Bellagio, & Lugano'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'الثلاثية الذهبية للسياحة الراقية في شمال إيطاليا والجنوب السويسري'
                                : 'The Golden Trio of luxury tourism in Northern Italy and Southern Switzerland'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">
                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'رحلة بين سحر البحيرات والأناقة السويسرية' : 'A Journey Between Lake Charm & Swiss Elegance'}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {language === 'ar'
                            ? 'استمتع بتجربة فريدة تجمع بين جمال قرى بحيرة كومو الملونة ونظام ومرونة مدينة لوجانو السويسرية في يوم واحد مليء بالمشاهد الخلابة.'
                            : 'Enjoy a unique experience combining the beauty of colorful Lake Como villages with the order and flexibility of Lugano, Switzerland, in a day full of breathtaking views.'}
                    </p>
                </section>

                {/* Places Grid */}
                <div className="space-y-20">
                    {/* Lake Como */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Anchor className="w-8 h-8 text-gold" />
                                <h2 className="text-3xl font-serif font-bold text-primary">
                                    {language === 'ar' ? '1. بحيرة كومو (Lago di Como)' : '1. Lake Como (Lago di Como)'}
                                </h2>
                            </div>
                            <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                <p>
                                    {language === 'ar'
                                        ? 'هي البحيرة الأكثر شهرة عالمياً، وتعرف بأنها وجهة الأثرياء والمشاهير (مثل جورج كلوني).'
                                        : 'The most world-famous lake, known as a destination for the wealthy and celebrities (like George Clooney).'}
                                </p>
                                <p>
                                    <strong>{language === 'ar' ? 'الأجواء:' : 'Atmosphere:'}</strong>
                                    {language === 'ar'
                                        ? ' تمتاز بالفيلات التاريخية الفاخرة الممتدة على ضفاف الماء، والجبال الخضراء التي تحتضن القرى الملونة.'
                                        : ' Characterized by luxurious historic villas along the water and green mountains embracing colorful villages.'}
                                </p>
                                <p className={`bg-gold/10 p-4 rounded-xl text-primary font-medium border-gold ${isRTL ? 'border-r-4' : 'border-l-4'}`}>
                                    <strong>{language === 'ar' ? 'النشاط الأبرز:' : 'Highlight Activity:'}</strong>
                                    {language === 'ar'
                                        ? ' استئجار قارب خشبي كلاسيكي للتجول ورؤية الفيلات من الماء مثل "فيلا ديل بالبيانيلو".'
                                        : ' Renting a classic wooden boat to tour and see villas from the water, such as "Villa del Balbianello".'}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-1 lg:order-2' : 'order-1'} relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:rotate-2 transition-transform duration-500`}
                        >
                            <Image
                                src="/assets/cities/como-bellagio-lugano/como.webp"
                                alt="Lake Como Villa"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </section>

                    {/* Bellagio */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:-rotate-2 transition-transform duration-500"
                        >
                            <Image
                                src="/assets/cities/como-bellagio-lugano/bellagio.webp"
                                alt="Bellagio Streets"
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
                                <Navigation className="w-8 h-8 text-gold" />
                                <h2 className="text-3xl font-serif font-bold text-primary">
                                    {language === 'ar' ? '2. بيلاجيو (Bellagio) - لؤلؤة البحيرة' : '2. Bellagio - Pearl of the Lake'}
                                </h2>
                            </div>
                            <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                <p>
                                    {language === 'ar'
                                        ? 'تقع بيلاجيو في نقطة التقاء فرعي البحيرة، وتعتبر أجمل قرية في إيطاليا بلا منازع.'
                                        : 'Located at the meeting point of the lake\'s arms, Bellagio is arguably Italy\'s most beautiful village.'}
                                </p>
                                <p>
                                    <strong>{language === 'ar' ? 'الأجواء:' : 'Atmosphere:'}</strong>
                                    {language === 'ar'
                                        ? ' شوارعها عبارة عن أدراج حجرية ضيقة (Salite) مليئة بمحلات الحرير، العطور، والمطاعم الراقية.'
                                        : ' Its streets are narrow stone stairways (Salite) filled with silk shops, perfumes, and upscale restaurants.'}
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                        <strong>{language === 'ar' ? 'المعالم:' : 'Landmarks:'}</strong>
                                        {language === 'ar' ? ' "فيلا ميرزي" بحدائقها المذهلة المطلة على البحيرة.' : ' "Villa Melzi" with its stunning gardens overlooking the lake.'}
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                        <strong>{language === 'ar' ? 'نصيحة:' : 'Tip:'}</strong>
                                        {language === 'ar' ? ' الوصول إليها من مدينة كومو بالعبارة (Ferry) يمنحك مناظر خلابة.' : ' Arriving from Como city via ferry offers breathtaking view.'}
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>

                    {/* Lugano */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Mountain className="w-8 h-8 text-gold" />
                                <h2 className="text-3xl font-serif font-bold text-primary">
                                    {language === 'ar' ? '3. لوجانو (Lugano) - سويسرا' : '3. Lugano - Switzerland'}
                                </h2>
                            </div>
                            <div className={`space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                <p>
                                    {language === 'ar'
                                        ? 'تبعد عن كومو حوالي 30-40 دقيقة فقط، وهي مدينة سويسرية نظيفة جداً وبنظام فريد.'
                                        : 'Just 30-40 minutes from Como, a very clean Swiss city with a unique system.'}
                                </p>
                                <p>
                                    <strong>{language === 'ar' ? 'الأجواء:' : 'Atmosphere:'}</strong>
                                    {language === 'ar'
                                        ? ' تجمع بين "النظام السويسري" و"الروح الإيطالية". هادئة وتعتبر مركزاً للتسوق الفاخر.'
                                        : ' Combines "Swiss order" with "Italian spirit". Quiet and a center for luxury shopping.'}
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                        <strong>{language === 'ar' ? 'المعالم:' : 'Landmarks:'}</strong>
                                        {language === 'ar' ? ' بحيرة لوجانو، منتزه "باركو سيفيكو"، وشارع "فيا ناسا".' : ' Lake Lugano, "Parco Civico", and "Via Nassa" street.'}
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                        <strong>{language === 'ar' ? 'نصيحة:' : 'Tip:'}</strong>
                                        {language === 'ar' ? ' اصعد جبل "سان سالفاتوري" بالتلفريك لمشاهدة بانورامية للحدود.' : ' Take the funicular up Mount "San Salvatore" for a panoramic border view.'}
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-1 lg:order-2' : 'order-1'} relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:rotate-2 transition-transform duration-500`}
                        >
                            <Image
                                src="/assets/cities/como-bellagio-lugano/lugano.jpg"
                                alt="Lugano Switzerland"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </section>
                </div>

                {/* Driver Tip Section */}
                <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-gold/20">
                    <h2 className="text-3xl font-serif font-bold text-center mb-8">
                        {language === 'ar' ? 'نصيحة السائق لهذه الرحلة' : 'Driver\'s Tip for This Trip'}
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <p className="text-lg font-medium text-primary">
                            {language === 'ar'
                                ? 'مسار ميلانو - كومو - بيلاجيو - لوجانو - ميلانو هو المسار الأكثر طلباً.'
                                : 'The Milan - Como - Bellagio - Lugano - Milan route is our most requested.'}
                        </p>
                        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                            <h4 className="font-bold text-gold mb-3">
                                {language === 'ar' ? 'لماذا السائق الخاص ضروري؟' : 'Why is a Private Driver Essential?'}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {language === 'ar'
                                    ? 'الطرق في هذه المناطق ضيقة جداً (خاصة الطريق لبيلاجيو)، ومواقف السيارات شبه مستحيلة في الصيف. السائق سينزلك في قلب القرية ويذهب للانتظار بعيداً، وتطلبه بلمسة زر على الواتساب عند انتهائك.'
                                    : 'Roads here are very narrow (especially to Bellagio), and parking is near-impossible in summer. A driver will drop you in the heart of the village and wait elsewhere, ready at a WhatsApp touch when you\'re done.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Daily Program */}
                <section className="text-center">
                    <h2 className="text-3xl font-serif font-bold mb-10">
                        {language === 'ar' ? 'برنامج يوم واحد مقترح' : 'Suggested One-Day Itinerary'}
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4 relative">
                        <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                            <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                            <h4 className="font-bold mb-2">{language === 'ar' ? 'الصباح' : 'Morning'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'الانطلاق وجولة سريعة في كومو.' : 'Departure and a quick tour of Como.'}
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                            <Anchor className="w-8 h-8 text-gold mx-auto mb-3" />
                            <h4 className="font-bold mb-2">{language === 'ar' ? 'الظهيرة' : 'Noon'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'غداء في بيلاجيو وجولة في أزقتها.' : 'Lunch in Bellagio and exploring its alleys.'}
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                            <Coffee className="w-8 h-8 text-gold mx-auto mb-3" />
                            <h4 className="font-bold mb-2">{language === 'ar' ? 'بعد الظهر' : 'Afternoon'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'عبور الحدود للوجانو للتسوق والقهوة.' : 'Crossing to Lugano for shopping and coffee.'}
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                            <Navigation className="w-8 h-8 text-gold mx-auto mb-3" />
                            <h4 className="font-bold mb-2">{language === 'ar' ? 'المساء' : 'Evening'}</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'ar' ? 'العودة لميلانو (ساعة ونصف تقريباً).' : 'Return to Milan (approx. 1.5 hours).'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Info className="w-5 h-5 text-gold" />
                            <span className="font-bold">{language === 'ar' ? 'رحلة ملكية' : 'A Royal Journey'}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'عش تجربة المثلث الذهبي في الشمال الإيطالي والسويسري بأعلى معايير الراحة والخصوصية مع تاكسي فهد.'
                                : 'Experience the Golden Triangle of Northern Italy and Switzerland with the highest standards of comfort and privacy with Taxi Fahd.'}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز رحلة البحيرة الآن' : 'Book Lake Tour Now'}
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ComoBellagioContent;
