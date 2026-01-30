'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyClient = () => {
    const { language } = useLanguage();

    const sections = [
        {
            title: language === 'ar' ? 'المعلومات التي نجمعها' : 'Information We Collect',
            content: language === 'ar'
                ? 'نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند حجز خدماتنا، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل الحجز. نستخدم هذه المعلومات فقط لتقديم خدماتنا وتحسين تجربتك.'
                : 'We collect information that you provide to us directly when booking our services, including name, email, phone number, and booking details. We use this information only to provide our services and improve your experience.',
        },
        {
            title: language === 'ar' ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information',
            content: language === 'ar'
                ? 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا، والتواصل معك بشأن حجوزاتك، وإرسال تحديثات مهمة، وتحسين خدماتنا. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك.'
                : 'We use the information we collect to provide our services, communicate with you about your bookings, send important updates, and improve our services. We will not share your personal information with third parties without your consent.',
        },
        {
            title: language === 'ar' ? 'حماية البيانات' : 'Data Protection',
            content: language === 'ar'
                ? 'نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير. نستخدم تقنيات التشفير والخوادم الآمنة لحماية بياناتك.'
                : 'We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use encryption technologies and secure servers to protect your data.',
        },
        {
            title: language === 'ar' ? 'ملفات تعريف الارتباط' : 'Cookies',
            content: language === 'ar'
                ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك اختيار قبول أو رفض ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.'
                : 'We use cookies to improve your experience on our website. You can choose to accept or decline cookies through your browser settings.',
        },
        {
            title: language === 'ar' ? 'حقوقك' : 'Your Rights',
            content: language === 'ar'
                ? 'لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك أيضاً الاعتراض على معالجة بياناتك أو طلب تقييد المعالجة. للقيام بذلك، يرجى الاتصال بنا.'
                : 'You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request restriction of processing. To do so, please contact us.',
        },
        {
            title: language === 'ar' ? 'التغييرات على سياسة الخصوصية' : 'Changes to Privacy Policy',
            content: language === 'ar'
                ? 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات من خلال نشر سياسة الخصوصية الجديدة على هذه الصفحة.'
                : 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.',
        },
    ];

    return (
        <>
            <PageHeader
                title={language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                subtitle={language === 'ar'
                    ? 'نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية'
                    : 'We respect your privacy and are committed to protecting your personal information'
                }
            />

            <section className="py-16 bg-background">
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
                                    ? 'آخر تحديث: يناير 2026. تصف سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام خدماتنا.'
                                    : 'Last updated: January 2026. This privacy policy describes how we collect, use, and protect your personal information when using our services.'
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
                                            {section.title}
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
                                    {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {language === 'ar'
                                        ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا عبر البريد الإلكتروني: info@arabicdriver-italy.com'
                                        : 'If you have any questions about this privacy policy, please contact us via email: info@arabicdriver-italy.com'
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

export default PrivacyClient;
