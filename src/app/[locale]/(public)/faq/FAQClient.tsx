'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const FAQClient = () => {
    const { language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: language === 'ar' ? 'هل أنت السائق نفسه أم مكتب تنسيق؟' : 'Are you the driver yourself or a coordination office?',
            answer: language === 'ar'
                ? 'أنا أبو فهد أعمل بنفسي مع مجموعة من الإخوة الملتزمين المقيمين في ميلانو منذ سنوات. نحن لسنا مجرد تطبيق، بل نحن أشخاص تعرفونهم مباشرة لضمان أعلى مستوى من الأمان والخصوصية.'
                : 'I am Abu Fahd, working personally with a group of committed brothers who have been residing in Milan for years. We are not just an app, but people you know directly to ensure the highest level of safety and privacy.',
        },
        {
            question: language === 'ar' ? 'كيف نضمن السعر ؟ وهل هناك تكاليف إضافية ؟' : 'How do we guarantee the price? Are there additional costs?',
            answer: language === 'ar'
                ? 'مع أبو فهد الكلمة واحدة. السعر الذي نتفق عليه عبر الواتساب نهائي وشامل لكل شيء: الديزل، ضرائب الطرق السريعة، مواقف السيارات، ودخولية المدن. لن يطلب منك يورو واحد إضافي.'
                : 'With Abu Fahd, our word is our bond. The price we agree upon via WhatsApp is final and all-inclusive: diesel, highway tolls, parking, and city entry fees. You will not be asked for a single extra Euro.',
        },
        {
            question: language === 'ar' ? 'هل تدخل سياراتكم الساحة الدومو ومراكز المدن ؟' : 'Do your cars enter Piazza del Duomo and city centers?',
            answer: language === 'ar'
                ? 'نعم، سياراتنا تحمل ترخيص شركة سياحية. هذا يعني أننا نوصلكم لآخر نقطة مسموح بها بجانب المعالم التاريخية وفنادق السنتر، ولا نترككم تمشون مسافات طويلة مع الحقائب.'
                : 'Yes, our cars carry a tourism company license. This means we take you to the closest permitted point next to historical landmarks and city center hotels, so you don\'t have to walk long distances with luggage.',
        },
        {
            question: language === 'ar' ? 'ماذا لو تأخرت طائرتي في المطار؟' : 'What if my flight is delayed?',
            answer: language === 'ar'
                ? 'لا تقلق أبداً، نحن نتابع رقم الرحلة مباشرة. لو تأخرت الطائرة ساعة أو عشر ساعات، سنكون بانتظارك في الموعد الفعلي لوصولك بدون أي رسوم إضافية على وقت الانتظار.'
                : 'Don\'t worry at all. We track the flight number directly. If the plane is delayed an hour or ten hours, we will be waiting for you at your actual arrival time without any additional fees for waiting time.',
        },
        {
            question: language === 'ar' ? 'هل تساعدنا في استخراج التاكس فري (Tax Free)؟' : 'Do you help with Tax Free refunds?',
            answer: language === 'ar'
                ? 'أبشر بسعدك. بحكم خبرتنا في الأسواق والأوت ليت، نساعدكم في ترتيب الفواتير ونرشدكم لأفضل المكاتب داخل السوق أو في المطار لاستعادة مبالغ الضرائب بكل سهولة.'
                : 'Consider it done. With our experience in markets and outlets, we help you organize invoices and guide you to the best offices within the market or at the airport to reclaim tax amounts easily.',
        },
        {
            question: language === 'ar' ? 'هل السيارة مناسبة للعوائل الكبيرة والشنط ؟' : 'Is the car suitable for large families and luggage?',
            answer: language === 'ar'
                ? 'أسطولنا يضم سيارات فان (V-Class) حديثة تتسع لـ 7 أو 8 ركاب براحة تامة، ومعها مساحة واسعة للحقائب الكبيرة وشنط التسوق. كما نوفر مقاعد للأطفال مجاناً عند الطلب.'
                : 'Our fleet includes modern V-Class vans that accommodate 7 or 8 passengers in complete comfort, with ample space for large luggage and shopping bags. We also provide child seats for free upon request.',
        },
        {
            question: language === 'ar' ? 'هل يمكننا السفر معك من إيطاليا إلى سويسرا أو فرنسا ؟' : 'Can we travel with you to Switzerland or France?',
            answer: language === 'ar'
                ? 'نعم، نقوم برحلات عابرة للحدود بانتظام. نأخذكم من ميلانو إلى لوجانو، إنترلاكن، جنيف، أو حتى شامونيه في فرنسا، مع معرفة تامة بكل القوانين الحدودية والطرق السويسرية.'
                : 'Yes, we regularly conduct cross-border trips taking you from Milan to Lugano, Interlaken, Geneva, or even Chamonix in France, with full knowledge of all border laws and Swiss road regulations.',
        },
        {
            question: language === 'ar' ? 'كيف نضمن الأمان على أغراضنا ومشترياتنا داخل السيارة؟' : 'How do we ensure the safety of our belongings in the car?',
            answer: language === 'ar'
                ? 'سيارتنا هي عهدتنا. عندما تنزلون للتسوق أو الغداء، تبقى السيارة مغلقة وتحت مراقبة السائق. خصوصيتكم وأمان أماناتكم هي خط أحمر عندنا، وهذا ما يذكره كل من تعامل مع "أبو فهد".'
                : 'Our car is our trust. When you get out for shopping or lunch, the car remains locked and under the driver\'s supervision. Your privacy and the safety of your belongings are a red line for us, as attested by everyone who has dealt with "Abu Fahd".',
        },
        {
            question: language === 'ar' ? 'هل يمكننا استئجار السيارة معكم ليوم كامل بالساعات؟' : 'Can we rent the car for a full day by the hour?',
            answer: language === 'ar'
                ? 'نعم، نوفر خدمة السائق الخاص تحت الطلب. يمكنك حجز السيارة لمدة 8 أو 10 ساعات يومياً، نكون فيها معك في جولتك داخل ميلانو أو حولها، ننتظرك عند كل محطة وننقلك حسب رغبتك دون تقييد بجدول محدد.'
                : 'Yes, we provide private driver service on demand. You can book the car for 8 or 10 hours daily, where we accompany you on your tour within or around Milan, waiting for you at every stop and transporting you as you wish without being tied to a specific schedule.',
        },
        {
            question: language === 'ar' ? 'نصيحة من أبو فهد' : 'Advice from Abu Fahd',
            answer: language === 'ar'
                ? 'يا جماعة، نصيحة أخو.. في إيطاليا لا تحجز مع أي شخص إلا وأنت متأكد إنه مرخص شركة سياحية. الأمان والراحة أهم من فرق السعر البسيط، ورحلتكم تستاهل الأفضل.'
                : 'Folks, a brotherly advice... In Italy, do not book with anyone unless you are sure they are a licensed tourism company. Safety and comfort are more important than a small price difference, and your trip deserves the best.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <PageHeader
                title={language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                subtitle={language === 'ar'
                    ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا'
                    : 'Answers to the most common questions about our services'
                }
            />

            <section className="py-16">
                <div className="container-luxury max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-foreground pr-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={cn(
                                            'w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300',
                                            openIndex === index && 'rotate-180'
                                        )}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-2">
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center bg-card rounded-2xl p-8 border border-border"
                    >
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                            {language === 'ar' ? 'لم تجد إجابة لسؤالك؟' : 'Didn\'t find an answer to your question?'}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            {language === 'ar'
                                ? 'تواصل معنا مباشرة وسنكون سعداء بمساعدتك'
                                : 'Contact us directly and we will be happy to help you'
                            }
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FAQClient;
