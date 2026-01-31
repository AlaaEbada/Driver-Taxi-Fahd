'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Calendar, DollarSign, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const ItalySwitzerlandContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Hero Section - Reduced Fade */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/italy-switzerland/italy-switzerland-cover.webp"
                        alt={language === 'ar' ? 'إيطاليا وسويسرا' : 'Italy and Switzerland'}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Optimized gradient for text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center container-luxury px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-gold/80 text-primary border border-white/30 mb-6 backdrop-blur-sm font-bold shadow-lg">
                            {language === 'ar' ? 'مع ابو فهد وتاكسي فهد' : 'With Abu Fahd & Taxi Fahd'}
                        </span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                            {language === 'ar' ? 'افضل سائق عربي في ايطاليا سويسرا' : 'Best Arabic Driver in Italy & Switzerland'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'إليك نبذة سياحية تجمع بين سحر التاريخ الإيطالي وجمال الطبيعة السويسرية، فهما الثنائي الأكثر شعبية للمسافرين الباحثين عن التنوع'
                                : 'A tourism overview combining Italian historical charm and Swiss natural beauty'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">

                {/* Intro Section: Italy vs Switzerland Grid */}
                <div className="space-y-20">

                    {/* Italy Section (Image Left / Text Right) */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${isRTL ? 'order-2 lg:order-1' : 'order-2'} space-y-6`}
                        >
                            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                                {language === 'ar' ? 'أولاً: إيطاليا بلد الفن والجمال والطعام' : 'First: Italy (Land of Art, Beauty, & Food)'}
                            </h2>
                            <div className={`prose prose-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                <p>
                                    {language === 'ar'
                                        ? 'تتميز إيطاليا بأنها متحف مفتوح، كل مدينة فيها تحكي قصة مختلفة تماماً عن الأخرى:'
                                        : 'Italy is an "open-air museum," where every city tells a completely different story:'}
                                </p>
                                <ul className="space-y-4 mt-4 list-none p-0">
                                    {[
                                        {
                                            title: language === 'ar' ? 'ميلانو الشمال:' : 'Milan (North):',
                                            desc: language === 'ar' ? 'عاصمة الموضة والتسوق، ونقطة الانطلاق المثالية للرحلات نحو سويسرا وبحيرات الشمال كومو وجاردا.' : 'Fashion and shopping capital, the perfect gateway for trips to Switzerland and northern lakes.'
                                        },
                                        {
                                            title: language === 'ar' ? 'روما الوسط:' : 'Rome (Central):',
                                            desc: language === 'ar' ? 'التاريخ العظيم، حيث الكولوسيوم ونافورة تريفي مدينة لا تكتمل الرحلة بدونها لهواة الآثار.' : 'Great history, with the Colosseum and Trevi Fountain. A city no trip is complete without.'
                                        },
                                        {
                                            title: language === 'ar' ? 'فينيسيا البندقية:' : 'Venice:',
                                            desc: language === 'ar' ? 'المدينة العائمة الأكثر رومانسية في العالم، التنقل فيها بالقوارب تجربة لا تنسى.' : 'The most romantic floating city in the world; boat travel is an unforgettable experience.'
                                        },
                                        {
                                            title: language === 'ar' ? 'فلورنسا وتوسكانا:' : 'Florence & Tuscany:',
                                            desc: language === 'ar' ? 'موطن الفن الكلاسيكي والمناظر الريفية والبيوت الحجرية القديمة.' : 'Home of classic art, rural landscapes, and ancient stone houses.'
                                        }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                                            <span><strong>{item.title}</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className={`mt-4 bg-white shadow-md p-4 rounded-xl border-gold/20 border ${isRTL ? 'border-r-4' : 'border-l-4'}`}>
                                    <strong>{language === 'ar' ? 'ما يميز سياحة إيطاليا:' : 'What makes Italy unique:'}</strong>
                                    {language === 'ar'
                                        ? ' تنوع الطعام بيتزا، باستا، جيلاتو، الدفء الاجتماعي، كثرة المهرجانات، والأسعار التي تعتبر أرخص نسبياً مقارنة بجارتها سويسرا.'
                                        : ' Food diversity (pizza, pasta, gelato), social warmth, numerous festivals, and prices that are relatively cheaper than Swiss neighbor.'}
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
                                src="/assets/cities/italy-switzerland/italy-switzerland-1.jpg" // Rome/Italy placeholder
                                alt="Italy Tourism"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </section>

                    {/* Switzerland Section (Text Left / Image Right) -> Reversed for RTL: Image Right / Text Left visually */}
                    <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:-rotate-2 transition-transform duration-500"
                        >
                            <Image
                                src="/assets/cities/italy-switzerland/italy-switzerland-2.jpg" // Switzerland Nature placeholder
                                alt="Switzerland Nature"
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
                            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                                {language === 'ar' ? 'ثانياً: سويسرا جنة الأرض والطبيعة البكر' : 'Second: Switzerland (Paradise on Earth & Untouched Nature)'}
                            </h2>
                            <div className={`prose prose-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                <p>
                                    {language === 'ar'
                                        ? 'إذا كانت إيطاليا تخاطب التاريخ فسويسرا تخاطب الحواس. هي بلد النظام النظافة، والمناظر الطبيعية التي تبدو كأنها بطاقة بريدية.'
                                        : 'If Italy speaks history, Switzerland speaks to the senses. It is a land of order, cleanliness, and postcard landscapes.'}
                                </p>
                                <ul className="space-y-4 mt-4 list-none p-0">
                                    {[
                                        { title: language === 'ar' ? 'انترلاكن:' : 'Interlaken:', desc: language === 'ar' ? 'القلب النابض للسياحة، تقع بين بحيرتين وتحيط بها قمم جبال الألب هي المكان المفضل للأنشطة الجبلية والباراشوت.' : 'The heart of tourism, nestled between two lakes and surrounded by Alpine peaks. Famous for mountain activities.' },
                                        { title: language === 'ar' ? 'جنيف:' : 'Geneva:', desc: language === 'ar' ? 'مدينة المنظمات الدولية هادئة وراقية وتطل على بحيرة جنيف الشهيرة ونافورتها.' : 'City of international organizations, quiet and upscale, overlooking Lake Geneva and its famous fountain.' },
                                        { title: language === 'ar' ? 'لوجانو:' : 'Lugano:', desc: language === 'ar' ? 'تقع على الحدود الإيطالية، وهي مزيج فريد الطبيعة والجبال سويسرية، لكن الروح واللغة والعمارة إيطالية.' : 'A unique blend. Nature and mountains are Swiss, but the spirit, language, and architecture are Italian.' },
                                        { title: language === 'ar' ? 'زيرمات:' : 'Zermatt:', desc: language === 'ar' ? 'قرية جبلية خالية من السيارات، تشتهر بقمة ماترهورن الشهيرة الموجودة على غلاف شوكولاتة توبليرون.' : 'A car-free mountain village, famous for the "Matterhorn" peak (Toblerone chocolate wrapper).' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                                            <span><strong>{item.title}</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className={`mt-4 bg-white shadow-md p-4 rounded-xl border border-primary/10 ${isRTL ? 'border-r-4' : 'border-l-4'}`}>
                                    <strong>{language === 'ar' ? 'ما يميز سياحة سويسرا:' : 'What makes Switzerland unique:'}</strong>
                                    {language === 'ar'
                                        ? ' الهدوء التام، دقة المواعيد المتناهية، جودة الشوكولاتة والأجبان، والقطارات التي تعتبر الأجمل في العالم من حيث الإطلالات.'
                                        : ' Complete peace, extreme punctuality, quality chocolate and cheeses, and trains considered the most beautiful in the world from an aesthetic viewpoint.'}
                                </p>
                            </div>
                        </motion.div>
                    </section>
                </div>

                {/* How to Combine Section */}
                <section className="bg-white shadow-xl p-8 md:p-12 rounded-3xl border border-border text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        {language === 'ar' ? 'كيف تدمج بينهما في رحلة واحدة؟' : 'How to Combine Them in One Trip?'}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                        {language === 'ar'
                            ? <>أفضل طريقة لدمج البلدين هي التركيز على <strong>"شمال إيطاليا"</strong> و <strong>"وسط سويسرا"</strong> نظراً للقرب الجغرافي.</>
                            : <>The best way to combine both is focusing on <strong>"Northern Italy"</strong> and <strong>"Central Switzerland"</strong> due to geographic proximity.</>}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className={`bg-white p-6 rounded-xl shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="font-bold text-gold mb-3 flex items-center gap-2">
                                <Map className="w-5 h-5" />
                                {language === 'ar' ? 'نقطة الربط' : 'Connecting Point'}
                            </h3>
                            <p className="text-sm">
                                {language === 'ar' ? 'مدينة ميلانو إيطاليا ومدينة لوجانو سويسرا. المسافة بينهما حوالي ساعة واحدة فقط بالسيارة.' : 'Milan (Italy) and Lugano (Switzerland). Only about 1 hour apart by car.'}
                            </p>
                        </div>
                        <div className={`bg-white p-6 rounded-xl shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="font-bold text-gold mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                {language === 'ar' ? 'التنقل' : 'Transportation'}
                            </h3>
                            <p className="text-sm">
                                {language === 'ar' ? 'يمكنك الاستعانه بأبو فهد بـ سائق خاص ليأخذك عبر ممرات جبال الألب الساحرة مثل ممر سينت غوتهارد.' : 'Hire Abu Fahd as a private driver to take you through enchanting Alpine passes like "St. Gotthard Pass".'}
                            </p>
                        </div>
                        <div className={`bg-white p-6 rounded-xl shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className="font-bold text-gold mb-3 flex items-center gap-2">
                                <DollarSign className="w-5 h-5" />
                                {language === 'ar' ? 'العملة' : 'Currency'}
                            </h3>
                            <p className="text-sm">
                                {language === 'ar' ? 'إيطاليا تستخدم اليورو، بينما سويسرا تستخدم الفرنك السويسري، لكن أغلب الأماكن السياحية في سويسرا تقبل اليورو مع إرجاع الباقي بالفرنك.' : 'Italy uses Euro, Switzerland uses Swiss Franc (though most places accept Euro and give change in Francs).'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10-Day Itinerary Section */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold tracking-wider uppercase text-sm">
                            {language === 'ar' ? 'مخطط 2026' : '2026 Planner'}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-4">
                            {language === 'ar' ? 'مخطط "الألب والجمال": 10 أيام' : '"Alps & Beauty" Planner: 10 Days'}
                        </h2>
                        <p className="text-muted-foreground">{language === 'ar' ? 'إيطاليا & سويسرا مع ابو فهد' : 'Italy & Switzerland with Abu Fahd'}</p>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold/50 before:to-transparent">

                        {/* Station 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gold text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="font-bold text-xs">1</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-gold/20 shadow-lg hover:shadow-xl transition-all">
                                <h3 className={`text-xl font-bold text-primary mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'المحطة الأولى: ميلانو وبحيراتها (3 أيام) - إيطاليا' : 'Station 1: Milan & Its Lakes (3 Days) - Italy'}
                                </h3>
                                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <li><strong>{language === 'ar' ? 'اليوم 1:' : 'Day 1:'}</strong> {language === 'ar' ? 'الوصول إلى ميلانو استكشاف الدومو والتسوق في جاليريا فيتوريو إيمانويل. لا تحتاج سائق.' : 'Arrival in Milan, Duomo exploration, and Galleria Vittorio Emanuele shopping. (No driver needed in city).'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 2:' : 'Day 2:'}</strong> {language === 'ar' ? 'بحيرة كومو رحلة نهارية لزيارة بلاجيو وفارينا. يفضل سائق خاص للاستمتاع بالمناظر دون قلق المواقف.' : 'Lake Como (Day Trip). Visit Bellagio and Varenna. Private driver recommended to enjoy views without parking stress.'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 3:' : 'Day 3:'}</strong> {language === 'ar' ? 'لوجانو السويسرية مدينة سويسرية بروح إيطالية. زيارة سويس مينييتور وقمة سان سالفاتوري. يمكن العودة لميلانو أو المبيت هناك.' : 'Lugano, Switzerland. Swiss city with an Italian spirit. Visit Swissminiatur and San Salvatore peak. Return to Milan or stay overnight.'}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Station 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gold text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="font-bold text-xs">2</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-gold/20 shadow-lg hover:shadow-xl transition-all">
                                <h3 className={`text-xl font-bold text-primary mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'المحطة الثانية: قلب الطبيعة (4 أيام) - سويسرا' : 'Station 2: Heart of Nature (4 Days) - Switzerland'}
                                </h3>
                                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <li><strong>{language === 'ar' ? 'اليوم 4:' : 'Day 4:'}</strong> {language === 'ar' ? 'الانتقال إلى انترلاكن الطريق من ميلانو إلى انترلاكن حوالي 3 ساعات هو أحد أجمل طرق القيادة في العالم عبر نفق غوتارد.' : 'Transfer to Interlaken (3 hours from Milan). One of the world\'s most beautiful drives via Gotthard Tunnel.'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 5:' : 'Day 5:'}</strong> {language === 'ar' ? 'قمة يونغفراو يوخ قمة أوروبا. ركوب القطار المسنن لأعلى قمة في أوروبا واللعب بالثلوج حتى في الصيف.' : 'Jungfraujoch (Top of Europe). Cogwheel train ride and snow play even in summer.'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 6:' : 'Day 6:'}</strong> {language === 'ar' ? 'وادي لوتر برونين وقرية جريندلوالد. وادي الـ 72 شلالاً، مكان خيالي للتصوير والمشي البسيط.' : 'Lauterbrunnen Valley and Grindelwald. Valley of 72 waterfalls, a dream spot for photos and hiking.'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 7:' : 'Day 7:'}</strong> {language === 'ar' ? 'بحيرة براينز و شلالات جيس باخ. استجمام في البحيرة الفيروزية وزيارة جراند أوتيل التاريخي.' : 'Lake Brienz and Giessbach Falls. Relaxation by the turquoise lake and visiting the historic Grand Hotel.'}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Station 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gold text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="font-bold text-xs">3</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-gold/20 shadow-lg hover:shadow-xl transition-all">
                                <h3 className={`text-xl font-bold text-primary mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {language === 'ar' ? 'المحطة الثالثة: العودة عبر فيرونا (3 أيام) - إيطاليا' : 'Station 3: Return via Verona (3 Days) - Italy'}
                                </h3>
                                <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <li><strong>{language === 'ar' ? 'اليوم 8:' : 'Day 8:'}</strong> {language === 'ar' ? 'التوجه إلى فيرونا وبحيرة جاردا. العودة للأجواء الإيطالية الدافئة زيارة قرية سيرميوني التاريخية وسط البحيرة.' : 'Heading to Verona and Lake Garda. Visit historic Sirmione village in the lake center.'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 9:' : 'Day 9:'}</strong> {language === 'ar' ? 'فيرونا مدينة الحب. زيارة شرفة جوليت وساحة أرينا الرومانية.' : 'Verona (City of Love). Visit Juliet\'s Balcony and the Roman Arena.'}</li>
                                    <li><strong>{language === 'ar' ? 'اليوم 10:' : 'Day 10:'}</strong> {language === 'ar' ? 'العودة لمطار ميلانو مالبينسا. تسوق أخير في أوت لت سيرافالي في الطريق للمطار.' : 'Return to Milan Malpensa Airport. Last-minute shopping at Serravalle Outlet on the way.'}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Budget & Tips Section */}
                <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12">
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                            <h2 className="text-3xl font-serif font-bold text-gold mb-6">
                                {language === 'ar' ? 'الميزانية التقريبية (للفردين - متوسط)' : 'Estimated Budget (Per Couple - Average)'}
                            </h2>
                            <ul className="space-y-4">
                                <li className={`flex justify-between items-center border-b border-white/10 pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <span>{language === 'ar' ? 'الفنادق (4 نجوم)' : 'Hotels (4 Stars)'}</span>
                                    <span className="font-bold text-gold">180 - 250 {language === 'ar' ? 'يورو / ليلة' : 'EUR / Night'}</span>
                                </li>
                                <li className={`flex justify-between items-center border-b border-white/10 pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <span>{language === 'ar' ? 'الوجبات (يومياً)' : 'Meals (Daily)'}</span>
                                    <span className="font-bold text-gold">60 - 100 {language === 'ar' ? 'يورو' : 'EUR'}</span>
                                </li>
                                <li className="text-sm opacity-80 mt-2">
                                    {language === 'ar' ? 'سويسرا أغلى بنسبة 30% من إيطاليا.' : 'Switzerland is approx. 30% more expensive than Italy.'}
                                </li>
                                <li className={`flex justify-between items-center border-b border-white/10 pb-2 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <span>{language === 'ar' ? 'السائق الخاص (رحلات طويلة)' : 'Private Driver (Long Trips)'}</span>
                                    <span className="font-bold text-gold">400 - 600 {language === 'ar' ? 'يورو' : 'EUR'}</span>
                                </li>
                            </ul>
                        </div>

                        <div className={isRTL ? 'text-right' : 'text-left'}>
                            <h2 className="text-3xl font-serif font-bold text-gold mb-6">
                                {language === 'ar' ? 'نصائح إضافية لعام 2026' : 'Additional Tips for 2026'}
                            </h2>
                            <div className="space-y-4">
                                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <Calendar className="w-6 h-6 text-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">{language === 'ar' ? 'الحجز المسبق' : 'Advance Booking'}</h4>
                                        <p className="text-muted-foreground">{language === 'ar' ? 'في عام 2026، أصبحت إيطاليا وسويسرا وجهات مزدحمة جداً، لذا احجز تذاكر الدومو في ميلانو وقطار اليونغفراو في سويسرا قبل رحلتك بشهر على الأقل.' : 'Italy and Switzerland are very busy in 2026. Book Duomo and Jungfraujoch tickets at least a month in advance.'}</p>
                                    </div>
                                </div>
                                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <Info className="w-6 h-6 text-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">{language === 'ar' ? 'الطقس' : 'Weather'}</h4>
                                        <p className="text-muted-foreground">{language === 'ar' ? 'أفضل وقت: مايو إلى سبتمبر (طبيعة خضراء)، أو ديسمبر (أجواء الكريسماس والثلوج).' : 'Best time: May to September (green nature), or December (Christmas atmosphere and snow).'}</p>
                                    </div>
                                </div>
                                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">{language === 'ar' ? 'الإنترنت' : 'Internet'}</h4>
                                        <p className="text-muted-foreground">{language === 'ar' ? 'اشتر شريحة eSIM Airalo تعمل في أوروبا بالكامل لتشمل إيطاليا وسويسرا معاً دون تغيير الشريحة.' : 'Buy an eSIM (like Airalo) that works across all of Europe (both Italy and Switzerland) without changing the chip.'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز رحلة العمر الآن' : 'Book the Trip of a Lifetime Now'}
                            </a>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ItalySwitzerlandContent;
