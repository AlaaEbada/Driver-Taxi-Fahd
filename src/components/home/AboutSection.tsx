'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
    const { language, isRTL } = useLanguage();

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container-luxury">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side - Falcon concept */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
                            <Image
                                src="/assets/abo-fahd.webp"
                                alt="Fahd Taxi Milan"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className={`absolute bottom-6 left-6 right-6 flex flex-col ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                                <span className="px-4 py-2 bg-gold text-primary font-bold rounded-full text-sm inline-block mb-3">
                                    {language === 'ar' ? 'تاكسي فهد' : 'Taxi Fahd'}
                                </span>
                                <p className="text-white text-lg font-bold">
                                    {language === 'ar' ? 'رحلاتك في إيطاليا تبدأ معنا' : 'Your journey in Italy starts here'}
                                </p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-gold/10 rounded-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-center lg:text-start"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider">{language === 'ar' ? 'من أنا' : 'Who Am I'}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            {language === 'ar' ? 'أكثر من مجرد سائق' : 'More Than Just A Driver'}
                        </h2>
                        <h3 className="text-2xl text-gold mb-6 font-semibold">
                            {language === 'ar' ? 'أخوكم أبو فهد' : 'Your Brother Abu Fahd'}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {language === 'ar'
                                ? 'اسم ارتبط بشوارع ميلانو وطرقات إيطاليا وسويسرا لسنوات طويلة. أنا لست مجرد سائق خلف المقود، بل أنا رفيق درب لكل مسافر عربي يطأ أرض إيطاليا باحثاً عن الراحة والأمان. فلسفتي هي "الضيف قبل العميل"، وهدفي أن تغادر إيطاليا وأنت تشعر أنك اكتسبت أخاً وصديقاً.'
                                : 'A name associated with the streets of Milan, Italy, and Switzerland. I am not just a driver; I am a companion for every Arab traveler seeking comfort and safety. My philosophy is "The Guest Before The Client," and my goal is for you to leave Italy feeling you have gained a brother and a friend.'}
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                variant="outline"
                                className="border-gold text-gold hover:bg-gold hover:text-primary font-bold px-8 py-6 rounded-xl text-lg"
                            >
                                <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
