'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ShieldCheck, Clock, Award, Globe, HelpCircle, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WhatsApp, PhoneIcon, Telegram, Snapchat } from '@/components/icons';

import PageHeader from '@/components/shared/PageHeader';

const ContactClient = () => {
    const { language } = useLanguage();

    const contactMethods = [
        {
            icon: PhoneIcon,
            title: language === 'ar' ? 'الاتصال المباشر' : 'Direct Call',
            description: language === 'ar' ? 'تحدث معي مباشرة لأي استفسار' : 'Speak with me directly for any inquiry',
            value: '+39 388 824 8473',
            href: 'tel:+393888248473',
            color: 'bg-red-600',
            hoverBorder: 'hover:border-red-500',
            hoverShadow: 'hover:shadow-red-500/20'
        },
        {
            icon: WhatsApp,
            title: language === 'ar' ? 'واتساب' : 'WhatsApp',
            description: language === 'ar' ? 'تواصل معي عبر الواتساب' : 'Message me on WhatsApp',
            value: '+39 388 824 8473',
            href: 'https://wa.me/393888248473',
            color: 'bg-[#25D366]',
            hoverBorder: 'hover:border-[#25D366]',
            hoverShadow: 'hover:shadow-[#25D366]/20'
        },
        {
            icon: Telegram,
            title: language === 'ar' ? 'تلجرام' : 'Telegram',
            description: language === 'ar' ? 'تواصل عبر تطبيق التلجرام' : 'Contact via Telegram app',
            value: '+39 388 824 8473',
            href: 'https://t.me/+393888248473',
            color: 'bg-[#0088CC]',
            hoverBorder: 'hover:border-[#0088CC]',
            hoverShadow: 'hover:shadow-[#0088CC]/20'
        },
        {
            icon: Snapchat,
            title: language === 'ar' ? 'سناب شات' : 'Snapchat',
            description: language === 'ar' ? 'تابعني وتواصل عبر السناب' : 'Follow and contact via Snap',
            value: 'elsarag6',
            href: 'https://www.snapchat.com/add/elsarag6',
            color: 'bg-yellow-400',
            hoverBorder: 'hover:border-yellow-400',
            hoverShadow: 'hover:shadow-yellow-400/20'
        }
    ];

    const values = [
        {
            icon: ShieldCheck,
            title: language === 'ar' ? 'الأمان والخصوصية' : 'Safety & Privacy',
            desc: language === 'ar' ? 'نضمن لك رحلة آمنة وخصوصية تامة لك ولعائلتك.' : 'We ensure a safe trip and complete privacy for you and your family.'
        },
        {
            icon: Clock,
            title: language === 'ar' ? 'الالتزام بالمواعيد' : 'Punctuality',
            desc: language === 'ar' ? 'نقدر وقتك، لذا نلتزم بالدقة المتناهية في المواعيد.' : 'We value your time, so we adhere to extreme punctuality.'
        },
        {
            icon: Award,
            title: language === 'ar' ? 'خدمة VIP' : 'VIP Service',
            desc: language === 'ar' ? 'تجربة سياحية فاخرة تليق بتطلعاتك.' : 'A luxury tourist experience that meets your expectations.'
        }
    ];

    return (
        <div className="">
            {/* 1. Hero Section - With specific text */}
            <PageHeader
                title={language === 'ar' ? 'تواصل معي' : 'Contact Me'}
                subtitle={language === 'ar'
                    ? 'سائق ومرشد سياحي في ميلانو وخبير بالشمال الإيطالي لرحلة مثالية. مع "تاكسي فهد"، أنت لست مجرد زائر بل ضيف مميز نهتم بكل تفاصيل راحته.'
                    : 'Driver & Guide in Milan - Expert in Northern Italy. With "Taxi Fahd," you are not just a visitor, but a special guest.'
                }
                backgroundImage="/assets/contact-hero.png"
            />

            {/* 2. Direct Contact Cards Section */}
            <section className="py-12 md:py-24 relative z-20">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={method.href.startsWith('http') ? "_blank" : undefined}
                                rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col items-center p-5 md:p-10 bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-border transition-all duration-300 group ${method.hoverBorder} ${method.hoverShadow} hover:-translate-y-2 md:hover:-translate-y-4`}
                            >
                                <div className={`w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl ${method.color} flex items-center justify-center mb-3 md:mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                                    <method.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3 text-foreground group-hover:text-gold transition-colors text-center">
                                    {method.title}
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground text-center mb-3 md:mb-6 min-h-0 md:min-h-[40px]">
                                    {method.description}
                                </p>
                                <p className="text-sm md:text-lg font-serif font-semibold text-primary py-1.5 px-4 md:py-2 md:px-6 bg-muted rounded-full" dir="ltr">
                                    {method.value}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us Section */}
            <section className="py-16 md:py-24">
                <div className="container-luxury">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                            {language === 'ar' ? 'لماذا تختار خدماتنا؟' : 'Why Choose Our Services?'}
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground px-4 md:px-0">
                            {language === 'ar' ? 'نحن نقدم لك أكثر من مجرد وسيلة نقل' : 'We offer you more than just a means of transport'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: language === 'ar' ? '1. الخبرة الميدانية العميقة' : '1. Deep Field Experience',
                                desc: language === 'ar'
                                    ? 'أبو فهد ليس سائقاً جديداً، نحن نعرف مخارج الطرق، وأوقات الزحام، وأفضل المطلات السرية التي لا يعرفها السياح العاديون. خبرتنا في التعامل مع قوانين المرور الإيطالية والملصقات السويسرية توفر عليك الكثير من المخالفات.'
                                    : 'Abu Fahd is not a new driver. We know the road exits, traffic times, and the best secret views that ordinary tourists don\'t know. Our experience with Italian traffic laws and Swiss stickers saves you many fines.'
                            },
                            {
                                icon: ShieldCheck,
                                title: language === 'ar' ? '2. الالتزام بالأمانة والخصوصية' : '2. Commitment to Honesty & Privacy',
                                desc: language === 'ar'
                                    ? 'نحن نتفهم تماماً طبيعة العائلة العربية. مع أبو فهد ستشعر وكأنك مع أحد أفراد عائلتك. خصوصية تامة، سيارات مريحة بزجاج مظلل، وأمان مطلق على أهلك وحقائبك. شعارنا دائماً: "أمانتكم هي عهدتنا".'
                                    : 'We fully understand the nature of the Arab family. With Abu Fahd, you will feel like you are with a family member. Complete privacy, comfortable cars with tinted glass, and absolute safety for your family and bags. Our motto always: "Your trust is our responsibility".'
                            },
                            {
                                icon: PhoneIcon,
                                title: language === 'ar' ? '3. التواصل المباشر (لغتنا واحدة)' : '3. Direct Communication (One Language)',
                                desc: language === 'ar'
                                    ? 'وداعاً لسوء الفهم مع السائقين الأجانب أو تطبيقات الترجمة. مع أبو فهد، تواصلك بالعربي، وطلباتك مفهومة من نظرة عين، ونحن نكون لسانك وصوتك في حال احتجت لأي مساعدة في الفندق أو مع أي جهة رسمية.'
                                    : 'Goodbye to misunderstandings with foreign drivers or translation apps. With Abu Fahd, your communication is in Arabic, your requests are understood at a glance, and we are your tongue and voice if you need any help at the hotel or with any official body.'
                            },
                            {
                                icon: Award,
                                title: language === 'ar' ? '4. الشفافية المطلقة' : '4. Absolute Transparency',
                                desc: language === 'ar'
                                    ? 'لا توجد لدينا مفاجآت اللحظة الأخيرة. السعر الذي نتفق عليه في البداية هو الذي تدفعه في النهاية. لا رسوم خفية، ولا عمولات مستترة، وصدقنا هو رأسمالنا.'
                                    : 'We have no last-minute surprises. The price we agree on at the beginning is what you pay at the end. No hidden fees, no hidden commissions, and our honesty is our capital.'
                            }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                                    <v.icon className="w-7 h-7 text-gold" />
                                </div>
                                <h3 className="text-lg font-bold mb-4 text-primary">{v.title}</h3>
                                <p className="text-sm text-muted-foreground leading-loose">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-block relative p-8 rounded-2xl bg-primary text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
                            <Quote className="w-12 h-12 text-gold/20 absolute top-4 left-4" />
                            <p className="text-2xl md:text-3xl font-serif font-bold relative z-10">
                                {language === 'ar' ? '"جئت ضيفاً.. وستغادر أخاً وصديقاً"' : '"You came as a guest.. and you will leave as a brother and a friend"'}
                            </p>
                            <p className="mt-4 text-gold font-medium uppercase tracking-widest text-sm">
                                {language === 'ar' ? '- أبو فهد' : '- Abu Fahd'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Coverage Area Section */}
            <section className="py-16 md:py-24 overflow-hidden">
                <div className="container-luxury flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 md:mb-8 leading-tight text-center lg:text-start">
                                {language === 'ar' ? 'نغطي جميع أنحاء إيطاليا وسويسرا' : 'Coverage Across Italy & Switzerland'}
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-center lg:text-start">
                                {language === 'ar'
                                    ? 'سواء كنت في روما، ميلانو، فينيسيا أو في جبال الألب السويسرية، نحن نصل إليك أينما كنت لنقدم لك تجربة سياحية لا تضاهى.'
                                    : 'Whether you are in Rome, Milan, Venice, or the Swiss Alps, we reach you wherever you are to provide an incomparable tourist experience.'
                                }
                            </p>
                            <ul className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
                                {['Rome', 'Milan', 'Florence', 'Venice', 'Naples', 'Lugano'].map((city, idx) => (
                                    <li key={idx} className="flex items-center gap-2 md:gap-3 text-base md:text-lg font-medium text-foreground">
                                        <Globe className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/20 relative h-[300px] md:h-[400px]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000"
                                alt="Venice Map View"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. How It Works Section */}
            <section className="py-16 md:py-24">
                <div className="container-luxury">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                            {language === 'ar' ? 'كيف تبدأ رحلتك؟' : 'How It Works?'}
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground px-4 md:px-0">
                            {language === 'ar' ? 'خطوات بسيطة لتنظيم رحلة لا تُنسى' : 'Simple steps to organize an unforgettable trip'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gold/20 -translate-y-1/2 z-0" />

                        {[
                            { step: '01', title: language === 'ar' ? 'تواصل معنا' : 'Contact Us', desc: language === 'ar' ? 'اختر الوسيلة التي تفضلها وأرسل لنا استفسارك.' : 'Choose your preferred method and send your inquiry.' },
                            { step: '02', title: language === 'ar' ? 'تخطيط البرنامج' : 'Plan the Trip', desc: language === 'ar' ? 'سنقوم بتصميم برنامج سياحي مخصص حسب رغبتك.' : 'We will design a customized tourist program according to your wishes.' },
                            { step: '03', title: language === 'ar' ? 'استمتع بالرحلة' : 'Enjoy the Journey', desc: language === 'ar' ? 'سائقك سيكون بانتظارك لتبدأ مغامرتك الإيطالية.' : 'Your driver will be waiting for you to start your Italian adventure.' }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative z-10 bg-white p-8 md:p-10 rounded-3xl border border-border flex flex-col items-center text-center group hover:border-gold transition-colors"
                            >
                                <span className="text-4xl md:text-5xl font-serif font-bold text-gold/20 mb-4 md:mb-6 group-hover:text-gold/40 transition-colors">{s.step}</span>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{s.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section Preview */}
            <section className="py-16 md:py-24 bg-primary text-white">
                <div className="container-luxury text-center px-4">
                    <HelpCircle className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-6 md:mb-8 animate-bounce" />
                    <h2 className="text-2xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
                        {language === 'ar' ? 'لديك المزيد من الأسئلة؟' : 'Have More Questions?'}
                    </h2>
                    <p className="text-base md:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto">
                        {language === 'ar'
                            ? 'نحن هنا لمساعدتك في أي وقت. لا تتردد في طرح أي استفسار حول المواقع، الأسعار، أو ترتيب الجداول.'
                            : 'We are here to help anytime. Feel free to ask any questions about locations, prices, or itinerary arrangements.'
                        }
                    </p>
                    <motion.a
                        href="https://wa.me/393888248473"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-gold text-primary font-bold text-lg md:text-xl rounded-2xl shadow-xl transition-all w-full sm:w-auto justify-center"
                    >
                        <WhatsApp className="w-5 h-5 md:w-6 md:h-6" />
                        {language === 'ar' ? 'اسأل الآن عبر واتساب' : 'Ask Now on WhatsApp'}
                    </motion.a>
                </div>
            </section>
        </div>
    );
};

export default ContactClient;
