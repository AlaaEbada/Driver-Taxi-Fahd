'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, Utensils, Info, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const SerravalleContent = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/cities/serravalle-outlet/serravalle-cover.jpg"
                        alt={language === 'ar' ? 'أوت لت سيرافالي' : 'Serravalle Designer Outlet'}
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
                            {language === 'ar' ? 'مع أبو فهد' : 'With Abu Fahd'}
                        </span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                            {language === 'ar' ? 'سائق عربي في أوت لت سيرافالي' : 'Arabic Driver in Serravalle Outlet'}
                        </h1>
                        <p className="text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'ar'
                                ? 'أوت لت سيرافالي (Designer Serravalle Outlet) ليس مجرد مركز تسوق، بل هو "مكة المتسوقين" في أوروبا وأكبر أوت لت في القارة.'
                                : 'Serravalle Designer Outlet is not just a shopping center, but the "shopping mecca" of Europe and the largest outlet on the continent.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container-luxury py-12 md:py-16 space-y-16 md:space-y-24">
                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                        {language === 'ar' ? 'نبذة عن سيرافالي (Serravalle Designer Outlet)' : 'About Serravalle Designer Outlet'}
                    </h2>
                    <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                        {language === 'ar'
                            ? 'إليك نبذة مختصرة وشاملة تجعلك مستعداً لزيارته: يقع في منطقة "سيرافالي سكريفي"، ويعد تحفة معمارية مصممة على طراز القرى الإيطالية التقليدية المكشوفة، مع ممرات فسيحة وساحات تضم نوافير، مما يجعل التسوق فيه نزهة ممتعة.'
                            : 'Here is a brief and comprehensive overview to get you ready for your visit: Located in the "Serravalle Scrivia" area, it is an architectural masterpiece designed in the style of traditional open-air Italian villages, with spacious corridors and squares featuring fountains, making shopping there an enjoyable excursion.'}
                    </p>
                </section>

                {/* Info Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                        <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
                        <h3 className="font-bold text-primary mb-2">{language === 'ar' ? 'الموقع' : 'Location'}</h3>
                        <p className="text-sm text-muted-foreground">{language === 'ar' ? 'يبعد عن ميلانو حوالي 50-60 دقيقة.' : 'About 50-60 minutes from Milan.'}</p>
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                        <ShoppingBag className="w-10 h-10 text-gold mx-auto mb-4" />
                        <h3 className="font-bold text-primary mb-2">{language === 'ar' ? 'الماركات' : 'Brands'}</h3>
                        <p className="text-sm text-muted-foreground">{language === 'ar' ? 'أكثر من 230 متجر عالمي متميز.' : 'Over 230 premium global stores.'}</p>
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                        <CreditCard className="w-10 h-10 text-gold mx-auto mb-4" />
                        <h3 className="font-bold text-primary mb-2">{language === 'ar' ? 'التخفيضات' : 'Discounts'}</h3>
                        <p className="text-sm text-muted-foreground">{language === 'ar' ? 'تتراوح بين 30% إلى 70% طوال العام.' : 'Between 30% to 70% all year round.'}</p>
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                        <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
                        <h3 className="font-bold text-primary mb-2">{language === 'ar' ? 'المواعيد' : 'Hours'}</h3>
                        <p className="text-sm text-muted-foreground">{language === 'ar' ? 'يفتح من الساعة 10:00 صباحاً حتى 8:00 مساءً.' : 'Open Daily from 10:00 AM to 8:00 PM.'}</p>
                    </div>
                </div>

                {/* Brands Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-2 lg:order-1' : 'order-1'} space-y-6`}
                    >
                        <h2 className={`text-3xl font-serif font-bold text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                            {language === 'ar' ? 'الماركات الفاخرة والكاجوال' : 'Luxury & Casual Brands'}
                        </h2>
                        <div className="space-y-4">
                            <div className={`bg-card p-5 rounded-2xl border border-border hover:border-gold/30 transition-all shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                                <h3 className="font-bold text-lg text-primary mb-2">{language === 'ar' ? 'الماركات الفاخرة' : 'Luxury Brands'}</h3>
                                <p className="text-muted-foreground text-sm">{language === 'ar' ? 'تجد فيه برادا (Prada)، جوتشي (Gucci)، فندي (Fendi)، سان لوران (Saint Laurent)، وبربري (Burberry).' : 'You will find Prada, Gucci, Fendi, Saint Laurent, and Burberry.'}</p>
                            </div>
                            <div className={`bg-card p-5 rounded-2xl border border-border hover:border-gold/30 transition-all shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                                <h3 className="font-bold text-lg text-primary mb-2">{language === 'ar' ? 'الماركات الرياضية والكاجوال' : 'Sports & Casual Brands'}</h3>
                                <p className="text-muted-foreground text-sm">{language === 'ar' ? 'مثل نايكي (Nike)، أديداس (Adidas)، تومي هيلفيغر (Tommy Hilfiger)، ومايكل كورس (Michael Kors).' : 'Brands like Nike, Adidas, Tommy Hilfiger, and Michael Kors.'}</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-1 lg:order-2' : 'order-2'} relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white`}
                    >
                        <Image
                            src="/assets/cities/serravalle-outlet/serravalle-designer-outlet.jpg"
                            alt="Shopping Experience"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </section>

                {/* Services Section */}
                <section className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border">
                    <h2 className="text-3xl font-serif font-bold text-center mb-10">
                        {language === 'ar' ? 'الخدمات والمميزات للمسافرين' : 'Services & Features for Travelers'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className={`flex gap-4 p-4 bg-background rounded-xl border border-border ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                                <div>
                                    <h4 className="font-bold">{language === 'ar' ? 'استرداد الضرائب (Tax Free)' : 'Tax Free Refund'}</h4>
                                    <p className="text-sm text-muted-foreground">{language === 'ar' ? 'توجد مكاتب مخصصة داخل الأوت لت (Global Blue & Planet) لتسهيل استعادة الأموال في المطار لاحقاً، وفي بعض الأحيان يمكنك استلام المبلغ نقداً هناك.' : 'Dedicated offices inside the outlet (Global Blue & Planet) to facilitate tax refunds at the airport later, and sometimes you can receive the amount in cash there.'}</p>
                                </div>
                            </div>
                            <div className={`flex gap-4 p-4 bg-background rounded-xl border border-border ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <Utensils className="w-6 h-6 text-gold shrink-0" />
                                <div>
                                    <h4 className="font-bold">{language === 'ar' ? 'المطاعم والمقاهي' : 'Restaurants & Cafes'}</h4>
                                    <p className="text-sm text-muted-foreground">{language === 'ar' ? 'يضم خيارات متنوعة من الأكل الإيطالي السريع، المقاهي مثل "Starbucks"، ومطاعم الجيلاتو والباستا.' : 'Features a variety of fast Italian food options, cafes like "Starbucks", and gelato and pasta restaurants.'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className={`flex gap-4 p-4 bg-background rounded-xl border border-border ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                                <div>
                                    <h4 className="font-bold">{language === 'ar' ? 'إنترنت مجاني' : 'Free Wi-Fi'}</h4>
                                    <p className="text-sm text-muted-foreground">{language === 'ar' ? 'تتوفر خدمة الإنترنت في جميع أنحاء المركز.' : 'Internet service is available throughout the entire center.'}</p>
                                </div>
                            </div>
                            <div className={`flex gap-4 p-4 bg-background rounded-xl border border-border ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                                <div>
                                    <h4 className="font-bold">{language === 'ar' ? 'منطقة ألعاب للأطفال' : 'Children\'s Play Area'}</h4>
                                    <p className="text-sm text-muted-foreground">{language === 'ar' ? 'لضمان راحة العائلات أثناء يوم التسوق الطويل.' : 'Ensuring family comfort during a long shopping day.'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Driver Advantage Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-2 lg:order-1' : 'order-1'} relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white`}
                    >
                        <Image
                            src="/assets/cities/serravalle-outlet/serravalle-1.jpg"
                            alt="Luxury Car Service"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`${isRTL ? 'order-1 lg:order-2' : 'order-2'} space-y-6`}
                    >
                        <h2 className={`text-3xl font-serif font-bold text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                            {language === 'ar' ? 'كيفية الوصول - نصيحة السائق' : 'How to Get There - Driver Tip'}
                        </h2>
                        <ul className="space-y-4">
                            {[
                                {
                                    num: '1',
                                    title: language === 'ar' ? 'حمولة المشتريات:' : 'Shopping Load:',
                                    desc: language === 'ar' ? 'بعد يوم طويل، ستكون معك أكياس كثيرة وثقيلة، وجود السائق بانتظارك أمام البوابات يوفر عليك عناء حملها أو انتظار الباصات.' : 'After a long day, you will have many heavy bags; having the driver waiting for you at the gates saves you the fatigue of carrying them or waiting for buses.'
                                },
                                {
                                    num: '2',
                                    title: language === 'ar' ? 'المرونة:' : 'Flexibility:',
                                    desc: language === 'ar' ? 'يمكنك الذهاب والعودة في الوقت الذي يناسبك دون الارتباط بمواعيد الحافلات السياحية.' : 'You can go and return at a time that suits you without being tied to tourist bus schedules.'
                                },
                                {
                                    num: '3',
                                    title: language === 'ar' ? 'الراحة:' : 'Comfort:',
                                    desc: language === 'ar' ? 'الطريق سريع ومباشر والسيارة الخاصة توفر لك خصوصية تامة بعد تعب التسوق.' : 'The road is fast and direct, and the private car provides you with complete privacy after the exhaustion of shopping.'
                                }
                            ].map((item, idx) => (
                                <li key={idx} className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <span className="text-gold font-bold">{item.num}</span>
                                    </div>
                                    <p className="text-muted-foreground font-medium"><strong>{item.title}</strong> {item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>

                {/* Shopping Tips */}
                <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-gold/20">
                    <h2 className="text-2xl font-serif font-bold text-center mb-8">
                        {language === 'ar' ? 'نصائح ذهبية لتجربة تسوق مثالية' : 'Golden Tips for a Perfect Shopping Experience'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h4 className="font-bold text-gold">{language === 'ar' ? 'أفضل توقيت' : 'Best Timing'}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {language === 'ar' ? 'يفضل الوصول مبكراً جداً قبل الافتتاح بـ 15 دقيقة لتجنب الزحام والحصول على مقاساتك قبل نفاذها.' : 'It is preferable to arrive very early, 15 minutes before opening, to avoid crowds and secure your sizes before they run out.'}
                            </p>
                        </div>
                        <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h4 className="font-bold text-gold">{language === 'ar' ? 'أفضل أيام الزيارة' : 'Best Days to Visit'}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {language === 'ar' ? 'تجنب عطلة نهاية الأسبوع (السبت والأحد) لتفادي الطوابير الطويلة أمام الماركات الكبرى.' : 'Avoid weekends (Saturday and Sunday) to bypass long queues at major brands.'}
                            </p>
                        </div>
                        <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h4 className="font-bold text-gold">{language === 'ar' ? 'بطاقة الخصم الإضافي' : 'Extra Discount Card'}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {language === 'ar' ? 'توجه إلى مكتب الاستعلامات (Information Desk) وأظهر جواز سفرك؛ أحياناً يمنحون السياح بطاقة "Fashion Passport" التي تعطيك خصماً إضافياً بنسبة 10% في بعض المحلات.' : 'Head to the Information Desk and show your passport; sometimes they give tourists a "Fashion Passport" which gives you an additional 10% discount in some stores.'}
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
                            <span className="font-bold">
                                {language === 'ar' ? 'تسوق بذكاء' : 'Shop Smart'}
                            </span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'اجعل يوم التسوق في سيرافالي ممتعاً ومريحاً. احجز سيارتك الخاصة الآن ودعنا نهتم بكل تفاصيل النقل.'
                                : 'Make your shopping day at Serravalle enjoyable and comfortable. Book your private car now and let us handle all the transport details.'}
                        </p>

                        <Button
                            asChild
                            size="lg"
                            className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 w-full sm:w-auto h-auto whitespace-normal rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className={`${isRTL ? 'ml-3' : 'mr-3'} w-8 h-8`} />
                                {language === 'ar' ? 'احجز رحلتك للأوت لت الآن' : 'Book Your Outlet Trip Now'}
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SerravalleContent;
