'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Shield, Award, Clock, Heart, Users, Map, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/components/icons';

const WhyChooseUsSection = () => {
    const { language } = useLanguage();

    const features = [
        {
            icon: MessageCircleIcon,
            title: language === 'ar' ? 'كسر حاجز اللغة والتواصل' : 'Language & Communication',
            desc: language === 'ar' ? 'مترجمك الخاص في المطاعم والمحلات، أو حتى في حال حدوث أي طارئ لا قدر الله. وسيط فعال يساعدك في إنهاء إجراءات استرداد الضرائب (Tax Free) في المطار أو الأوت ليت.' : 'Your personal translator in shops and restaurants, helping with Tax Free and emergencies.',
        },
        {
            icon: Shield, // Representing legal safety/ZTL
            title: language === 'ar' ? 'معرفة الطرق والاختصارات' : 'Expert Navigation (ZTL)',
            desc: language === 'ar' ? 'القيادة في ميلانو معقدة بسبب مناطق ZTL والغرامات الباهظة. السائق المحترف يعرف هذه المناطق بدقة ولديه تصاريح لتوصيلك لباب الفندق.' : 'Avoid ZTL fines. Our drivers have permits to drop you right at your hotel door.',
        },
        {
            icon: Map, // Tour Guide
            title: language === 'ar' ? 'مرشد سياحي وخبير محلي' : 'Local Tour Guide',
            desc: language === 'ar' ? 'يقترح عليك مطاعم حلال موثوقة، ويعرف أفضل أوقات الزيارة للمعالم لتجنب الزحام، ويقترح وجهات وقرى صغيرة لا يعرفها السياح.' : 'Halal food suggestions, hidden gems, and avoiding peak tourist crowds.',
        },
        {
            icon: Users,
            title: language === 'ar' ? 'الخصوصية والراحة للعائلات' : 'Family Privacy & Comfort',
            desc: language === 'ar' ? 'نوفر سيارات واسعة ونظيفة تناسب عدد أفراد الأسرة وحقائبهم الكثيرة. نساعد في تحميل وتنزيل الحقائب، وتوفير مقاعد للأطفال.' : 'Spacious vans for big families and luggage, luggage assistance, and child seats provided.',
        },
        {
            icon: Clock, // Time saving
            title: language === 'ar' ? 'توفير الوقت والجهد في البحيرات' : 'Effortless Lake Trips',
            desc: language === 'ar' ? 'زيارة بحيرة كومو أو لوجانو بالقطار متعبة وتتطلب تبديل المواصلات، بينما بالسيارة الخاصة تكون رحلة يومية مريحة جداً.' : 'Comfortable day trips to Como or Lugano without the hassle of changing trains.',
        },
        {
            icon: Award, // Free Consultant
            title: language === 'ar' ? 'مرشد سياحي ومستشار "مجاني"' : 'Free Travel Consultant',
            desc: language === 'ar' ? 'ما هي أفضل ساعات التسوق؟ أي بحيرة أجمل؟ نحذرك من النشالين في المناطق المزدحمة ونقدم لك نصائح أمان قيمة.' : 'Tips on best visiting times and safety warnings to avoid pickpockets.',
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
            <div className="container-luxury">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
                        <span className="text-xs font-bold uppercase tracking-wider">{language === 'ar' ? 'لماذا نحن' : 'Why Choose Us'}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        {language === 'ar' ? 'لماذا تختار سائق عربي في ميلانو؟' : 'Why Choose an Arabic Driver in Milan?'}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {language === 'ar'
                            ? 'نقدم لك أكثر من مجرد "توصيلة". نحن رفيقك الموثوق لرحلة خالية من المتاعب'
                            : 'We offer more than just a ride. We are your trusted companion for a hassle-free trip.'}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 10 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                            className="card-luxury p-5 sm:p-6 md:p-8 hover:border-gold/30 transition-all group text-center"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gold text-primary hover:bg-gold/90 font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-gold/20 hover:-translate-y-1 transition-all"
                    >
                        <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                            <WhatsApp className="w-5 h-5 me-2" />
                            {language === 'ar' ? 'احجز سائقك الخاص الآن' : 'Book Your Private Driver Now'}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

// Quick icon fix
import { MessageCircle as MessageCircleIcon } from 'lucide-react';

export default WhyChooseUsSection;
