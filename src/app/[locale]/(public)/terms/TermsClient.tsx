'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsClient = () => {
    const { language } = useLanguage();

    const sections = [
        {
            title: language === 'ar' ? 'قبول الشروط' : 'Acceptance of Terms',
            content: language === 'ar'
                ? 'باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.'
                : 'By using our services, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, please do not use our services.',
        },
        {
            title: language === 'ar' ? 'الحجز والدفع' : 'Booking and Payment',
            content: language === 'ar'
                ? 'يجب تأكيد جميع الحجوزات مسبقاً. نقبل الدفع نقداً أو عبر التحويل البنكي. يجب دفع 30% من قيمة الحجز كعربون غير قابل للاسترداد، والباقي يدفع في نهاية الخدمة.'
                : 'All bookings must be confirmed in advance. We accept payment in cash or via bank transfer. A non-refundable deposit of 30% of the booking value must be paid, with the remainder due at the end of the service.',
        },
        {
            title: language === 'ar' ? 'سياسة الإلغاء' : 'Cancellation Policy',
            content: language === 'ar'
                ? 'يمكن إلغاء الحجز قبل 48 ساعة من موعد الخدمة مع استرداد 70% من المبلغ المدفوع. الإلغاء خلال 48 ساعة من الموعد لا يستحق أي استرداد. في حالة الإلغاء من قبلنا، سيتم استرداد كامل المبلغ.'
                : 'Bookings can be cancelled 48 hours before the service date with a 70% refund of the amount paid. Cancellations within 48 hours of the appointment are not eligible for any refund. In case of cancellation by us, a full refund will be provided.',
        },
        {
            title: language === 'ar' ? 'مسؤولية العميل' : 'Client Responsibility',
            content: language === 'ar'
                ? 'العميل مسؤول عن تقديم معلومات دقيقة للحجز، والتواجد في الوقت والمكان المحددين. أي تأخير من جانب العميل قد يؤدي إلى تكاليف إضافية. العميل مسؤول عن أي أضرار تلحق بالمركبة أثناء الخدمة.'
                : 'The client is responsible for providing accurate booking information and being present at the specified time and location. Any delay on the client\'s part may result in additional costs. The client is responsible for any damage to the vehicle during the service.',
        },
        {
            title: language === 'ar' ? 'مسؤوليتنا' : 'Our Responsibility',
            content: language === 'ar'
                ? 'نلتزم بتقديم خدمة نقل آمنة ومريحة. نحن مسؤولون عن صيانة المركبات وتوفير سائقين محترفين. في حالة حدوث أي مشكلة فنية، سنوفر بديلاً مناسباً في أقرب وقت ممكن.'
                : 'We are committed to providing safe and comfortable transportation services. We are responsible for vehicle maintenance and providing professional drivers. In case of any technical issues, we will provide a suitable alternative as soon as possible.',
        },
        {
            title: language === 'ar' ? 'التأمين' : 'Insurance',
            content: language === 'ar'
                ? 'جميع مركباتنا مؤمنة بالكامل. التأمين يغطي الأضرار الناتجة عن الحوادث، ولكن لا يغطي الأضرار المتعمدة أو الناتجة عن سوء الاستخدام من قبل العميل.'
                : 'All our vehicles are fully insured. Insurance covers damages resulting from accidents, but does not cover intentional damage or damage resulting from client misuse.',
        },
        {
            title: language === 'ar' ? 'تعديل الشروط' : 'Modification of Terms',
            content: language === 'ar'
                ? 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار العملاء بأي تغييرات جوهرية. استمرارك في استخدام خدماتنا بعد التعديلات يعني قبولك للشروط الجديدة.'
                : 'We reserve the right to modify these terms and conditions at any time. Clients will be notified of any material changes. Your continued use of our services after modifications means your acceptance of the new terms.',
        },
        {
            title: language === 'ar' ? 'القانون الحاكم' : 'Governing Law',
            content: language === 'ar'
                ? 'تخضع هذه الشروط والأحكام للقوانين الإيطالية. أي نزاع ناشئ عن هذه الشروط سيتم حله في المحاكم الإيطالية المختصة.'
                : 'These terms and conditions are governed by Italian law. Any dispute arising from these terms will be resolved in the competent Italian courts.',
        },
    ];

    return (
        <>
            <PageHeader
                title={language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                subtitle={language === 'ar'
                    ? 'يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا'
                    : 'Please read these terms carefully before using our services'
                }
            />

            <section className="py-16">
                <div className="container-luxury max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                {language === 'ar'
                                    ? 'آخر تحديث: يناير 2026. تحكم هذه الشروط والأحكام استخدامك لخدماتنا. يرجى قراءتها بعناية.'
                                    : 'Last updated: January 2026. These terms and conditions govern your use of our services. Please read them carefully.'
                                }
                            </p>

                            <div className="space-y-8">
                                {sections.map((section, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                                            {index + 1}. {section.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {section.content}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12 p-6 bg-gold/10 border border-gold/30 rounded-xl"
                            >
                                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                                    {language === 'ar' ? 'الأسئلة والاستفسارات' : 'Questions and Inquiries'}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {language === 'ar'
                                        ? 'إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا عبر البريد الإلكتروني: info@arabicdriver-italy.com أو الهاتف: +39 312 345 6789'
                                        : 'If you have any questions about these terms and conditions, please contact us via email: info@arabicdriver-italy.com or phone: +39 312 345 6789'
                                    }
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TermsClient;
