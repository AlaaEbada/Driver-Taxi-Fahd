'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Clock, Quote, Star, ShieldCheck } from 'lucide-react';
import { Snapchat, WhatsApp, Telegram, PhoneIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const AboutClient = () => {
    const { language } = useLanguage();

    const stats = [
        {
            icon: Clock,
            value: '15+',
            label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience',
        },
        {
            icon: Users,
            value: '5000+',
            label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients',
        },
        {
            icon: MapPin,
            value: '15+',
            label: language === 'ar' ? 'مدن رئيسية' : 'Major Cities',
        },
        {
            icon: Star,
            value: '100%',
            label: language === 'ar' ? 'تقييم ممتاز' : 'Top Rated',
        },
    ];

    const values = [
        {
            icon: ShieldCheck,
            title: language === 'ar' ? 'الأمان والخصوصية' : 'Safety & Privacy',
            description: language === 'ar'
                ? 'نضمن لك أقصى درجات الأمان والسرية التامة في تنقلاتك.'
                : 'We guarantee maximum safety and complete confidentiality in your travels.',
        },
        {
            icon: Award,
            title: language === 'ar' ? 'خدمة النخبة' : 'Elite Service',
            description: language === 'ar'
                ? 'تجربة فاخرة تليق بك، مع اهتمام دقيق بكل التفاصيل.'
                : 'A luxury experience worthy of you, with careful attention to every detail.',
        },
        {
            icon: Clock,
            title: language === 'ar' ? 'دقة المواعيد' : 'Punctuality',
            description: language === 'ar'
                ? 'نقدر وقتك، ولذلك نلتزم بالمواعيد المحددة بدقة متناهية.'
                : 'We value your time, so we adhere strictly to scheduled appointments.',
        },
    ];

    return (
        <div className="bg-background overflow-hidden">
            {/* 1. Hero Section - Dark & Premium */}
            {/* 1. Hero Section - Reverted to PageHeader with same image */}
            <PageHeader
                title={language === 'ar' ? 'من أنا' : 'About Me'}
                subtitle={language === 'ar'
                    ? 'أكثر من مجرد سائق، أنا دليلك الشخصي لاستكشاف جمال إيطاليا بعيون عربية.'
                    : 'More than just a driver, I am your personal guide to exploring the beauty of Italy through Arab eyes.'}
                backgroundImage="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1920&auto=format&fit=crop"
            />

            {/* 2. Intro Section - Image Left */}
            <section className="py-20 relative">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/20 relative aspect-[4/3]">
                                <Image
                                    src="/assets/abo-fahd.webp"
                                    alt={language === 'ar' ? 'ابو فهد' : 'Abu Fahd'}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gold text-primary p-6 rounded-xl shadow-xl z-20 hidden md:block">
                                <p className="text-4xl font-serif font-bold">15+</p>
                                <p className="text-sm font-medium">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Quote className="w-8 h-8 text-gold flex-shrink-0" />
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                                    {language === 'ar' ? 'قصتي وخبرتي في خدمتكم' : 'My Story and Experience at Your Service'}
                                </h2>
                            </div>
                            <div className="prose prose-lg text-muted-foreground leading-loose">
                                <p className="mb-4 text-lg font-medium text-primary/80">
                                    {language === 'ar'
                                        ? 'السلام عليكم ورحمة الله وبركاته'
                                        : 'Peace, mercy and blessings of God be upon you'}
                                </p>
                                <p className="text-lg">
                                    {language === 'ar'
                                        ? 'معكم أخوكم أبو فهد. اسم ارتبط بشوارع ميلانو وطرقات إيطاليا وسويسرا لسنوات طويلة. أنا لست مجرد سائق خلف المقود، بل أنا رفيق درب لكل مسافر عربي يطأ أرض إيطاليا باحثاً عن الراحة، الأمان، والتقدير.'
                                        : 'I am your brother Abu Fahd. A name associated with the streets of Milan and the roads of Italy and Switzerland for many years. I am not just a driver behind the wheel, but a companion for every Arab traveler who sets foot in Italy seeking comfort, safety, and appreciation.'}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Why & Experience Section - Darker Background */}
            <section className="py-20 bg-muted/20">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
                                {language === 'ar' ? 'لماذا "أبو فهد"؟' : 'Why "Abu Fahd"?'}
                            </h3>
                            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                                {language === 'ar'
                                    ? 'خبرتي في السياحة الإيطالية لم تأت من فراغ، بل هي نتاج سنوات من العمل الميداني والتعامل مع آلاف العائلات والوفود العربية. تعلمت خلالها أن السائح لا يبحث فقط عن سيارة تنقله، بل يبحث عن:'
                                    : 'My experience in Italian tourism did not come from nowhere, but is the result of years of field work and dealing with thousands of Arab families and delegations. During which I learned that the tourist is not just looking for a car to transport them, but is looking for:'}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    language === 'ar' ? 'الأمانة التي تجعله يترك أهله وحقائبه في السيارة وهو مرتاح البال.' : 'Honesty and peace of mind.',
                                    language === 'ar' ? 'الخبرة التي توفر عليه ساعات من الضياع في طرقات إيطاليا المعقدة.' : 'Experience saving you from getting lost.',
                                    language === 'ar' ? 'الصدق في المواعيد وفي جودة الخدمة التي تبيض الوجه.' : 'Punctuality and quality service.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-background p-4 rounded-xl shadow-sm border border-border">
                                        <div className="p-1.5 rounded-full bg-gold/10 mt-0.5">
                                            <ShieldCheck className="w-4 h-4 text-gold" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-2xl font-serif font-bold text-primary mb-4 mt-8">
                                {language === 'ar' ? 'خبرتي في الميدان' : 'My Experience in the Field'}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {language === 'ar'
                                    ? 'على مدار أعوام، حفظت جبال الألب السويسرية ومنعطفاتها كما أحفظ اسمي، وأصبحت أعرف خبايا بحيرات إيطاليا كومو، غاردا، وماجوري. خبرتي جعلتني خبيراً في قوانين الطرق الإيطالية.'
                                    : 'Over the years, I have memorized the Swiss Alps and their turns as I memorize my name, and I have come to know the secrets of the Italian lakes Como, Garda, and Maggiore.'}
                            </p>
                        </motion.div>

                        <motion.div
                            className="order-1 lg:order-2 relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/20 relative aspect-[4/5] lg:aspect-square">
                                <Image
                                    src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200"
                                    alt="Experience"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Philosophy & Commitment Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 scale-110 z-0" />
                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
                                {language === 'ar' ? 'فلسفتي في الخدمة' : 'My Service Philosophy'}
                            </h3>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                "{language === 'ar'
                                    ? 'أنا أؤمن بمبدأ "الضيف قبل العميل". عندما تحجز معي، أنت لست مجرد رقم في جدول مواعيدي، بل أنت ضيف عند "أبو فهد".'
                                    : 'I believe in "The Guest Before The Client". When you book with me, you are not just a number, but a guest of "Abu Fahd".'}"
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 text-start">
                            <motion.div
                                className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-gold" />
                                    {language === 'ar' ? 'مستشارك السياحي' : 'Your Consultant'}
                                </h4>
                                <p className="text-muted-foreground">
                                    {language === 'ar'
                                        ? 'أدلك على المطعم الذي يقدم الأكل الحلال الصافي، وأختار لك الوقت المناسب لزيارة الأماكن لنتجنب الزحام.'
                                        : 'Guiding you to Halal restaurants and choosing the best times to visit places to avoid crowds.'}
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-gold" />
                                    {language === 'ar' ? 'التزامي معكم' : 'My Commitment'}
                                </h4>
                                <p className="text-muted-foreground">
                                    {language === 'ar'
                                        ? 'أعدكم بأسطول من السيارات الحديثة، والالتزام بالثانية، والتعامل الراقي الذي يعكس هويتنا العربية الأصيلة.'
                                        : 'Promising modern cars, punctuality, and classy service reflecting our Arab identity.'}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="mt-16 pt-10 border-t border-border"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-2xl font-serif font-bold text-primary">
                                {language === 'ar'
                                    ? 'أهلاً بكم في إيطاليا.. أهلاً بكم في ضيافة أخيكم أبو فهد'
                                    : 'Welcome to Italy.. Welcome to the hospitality of your brother Abu Fahd'}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Luxury Stats Bar - Dark with gradients */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px]" />

                <div className="container-luxury relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="text-center group"
                            >
                                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.value}
                                </h3>
                                <p className="text-white/60 font-medium tracking-wide uppercase text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Values / Why Me - Premium Cards */}
            <section className="py-32 bg-background relative">
                <div className="container-luxury">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            {language === 'ar' ? 'لماذا تختارني؟' : 'Why Choose Me?'}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-gold mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group p-8 md:p-10 rounded-3xl bg-white border border-border shadow-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 border border-primary/10 group-hover:bg-primary group-hover:text-gold transition-colors duration-500">
                                        <value.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 5. Contact Methods Section - Added per request */}
            <section className="py-24 bg-muted/30">
                <div className="container-luxury text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                            {language === 'ar' ? 'طرق التواصل المباشر' : 'Direct Contact Methods'}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {language === 'ar' ? 'لحجز جولتك بسهولة' : 'To book your tour easily'}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Phone */}
                        <motion.a
                            href="tel:+393888248473"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg border border-border hover:border-red-500 hover:shadow-red-500/20 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <PhoneIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{language === 'ar' ? 'عن طريق الهاتف' : 'Via Phone'}</h3>
                            <p className="text-lg font-serif" dir="ltr">+39 388 824 8473</p>
                        </motion.a>

                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/393888248473"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg border border-border hover:border-[#25D366] hover:shadow-[#25D366]/20 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <WhatsApp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{language === 'ar' ? 'عن طريق الواتس' : 'Via WhatsApp'}</h3>
                            <p className="text-lg font-serif" dir="ltr">+39 388 824 8473</p>
                        </motion.a>

                        {/* Telegram */}
                        <motion.a
                            href="https://t.me/+393888248473"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg border border-border hover:border-[#0088CC] hover:shadow-[#0088CC]/20 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0088CC] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Telegram className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{language === 'ar' ? 'عن طريق التلجرام' : 'Via Telegram'}</h3>
                            <p className="text-lg font-serif" dir="ltr">+39 388 824 8473</p>
                        </motion.a>

                        {/* Snapchat */}
                        <motion.a
                            href="https://www.snapchat.com/add/elsarag6"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-lg border border-border hover:border-yellow-400 hover:shadow-yellow-400/20 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Snapchat className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{language === 'ar' ? 'عن طريق السناب' : 'Via Snapchat'}</h3>
                            <p className="text-lg font-serif" dir="ltr">elsarag6</p>
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutClient;
