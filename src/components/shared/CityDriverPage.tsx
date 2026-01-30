'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star, Check, Car, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export interface CityDriverPageProps {
    city: {
        nameAr: string;
        nameEn: string;
        slug: string;
        descriptionAr: string;
        descriptionEn: string;
        image: string;
        attractions: { ar: string; en: string }[];
    };
    richContent?: React.ReactNode;
}

const CityDriverPage = ({ city, richContent }: CityDriverPageProps) => {
    const { language } = useLanguage();

    const cityName = language === 'ar' ? city.nameAr : city.nameEn;
    const cityDescription = language === 'ar' ? city.descriptionAr : city.descriptionEn;

    const features = [
        {
            icon: Car,
            title: language === 'ar' ? 'سيارات فاخرة' : 'Luxury Vehicles',
            description: language === 'ar'
                ? 'أسطول من السيارات الفاخرة والمريحة'
                : 'Fleet of luxury and comfortable vehicles',
        },
        {
            icon: Shield,
            title: language === 'ar' ? 'سائقون محترفون' : 'Professional Drivers',
            description: language === 'ar'
                ? 'سائقون عرب محترفون ومرخصون'
                : 'Professional and licensed Arabic drivers',
        },
        {
            icon: Clock,
            title: language === 'ar' ? 'متاح 24/7' : 'Available 24/7',
            description: language === 'ar'
                ? 'خدمة متاحة على مدار الساعة'
                : 'Service available around the clock',
        },
        {
            icon: Award,
            title: language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience',
            description: language === 'ar'
                ? 'أكثر من 15 سنوات خبرة'
                : 'Over 15 years of experience',
        },
    ];

    const services = [
        language === 'ar' ? 'توصيل من وإلى المطار' : 'Airport transfers',
        language === 'ar' ? 'جولات سياحية في المدينة' : 'City sightseeing tours',
        language === 'ar' ? 'رحلات يومية' : 'Day trips',
        language === 'ar' ? 'نقل بين المدن' : 'Intercity transportation',
        language === 'ar' ? 'مناسبات خاصة' : 'Special occasions',
        language === 'ar' ? 'برامج سياحية مخصصة' : 'Customized tour programs',
    ];

    return (
        <>
            {/* Hero Section - Premium Design */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background with parallax effect */}
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={city.image}
                            alt={cityName}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 100vw"
                        />
                    </motion.div>
                    {/* Premium gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/70 to-primary/70" />
                    {/* Animated gradient accent */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-gold/20"
                    />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full" />
                    <div className="absolute bottom-20 right-10 w-40 h-40 border border-gold/20 rounded-full" />
                </div>

                <div className="relative z-10 container-luxury text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Premium badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold/30 to-gold/20 border border-gold/40 backdrop-blur-sm mb-8 shadow-lg"
                        >
                            <MapPin className="w-5 h-5 text-gold" />
                            <span className="text-gold text-base font-semibold tracking-wide">{cityName}</span>
                        </motion.div>

                        {/* Main heading with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-white to-gold bg-clip-text text-transparent">
                                {language === 'ar' ? cityName : `Arabic Driver in ${cityName}`}
                            </span>
                        </h1>

                        {/* Subtitle with premium styling */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            {cityDescription}
                        </motion.p>

                        {/* Premium CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Button
                                asChild
                                variant="luxury"
                                size="lg"
                                className="group text-primary hover:opacity-90 font-bold text-lg px-8 py-7 transition-all duration-300 hover:scale-105 min-w-[240px]"
                            >
                                <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center me-3 group-hover:bg-primary/20 transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    </div>
                                    {language === 'ar' ? 'احجز رحلتك عبر واتساب' : 'Book via WhatsApp'}
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                className="group bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-gold/50 font-semibold text-lg px-8 py-7 transition-all duration-300 hover:scale-105 min-w-[240px] rounded-xl backdrop-blur-sm"
                            >
                                <a href="tel:+393888248473">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center me-3 group-hover:bg-gold/20 group-hover:text-gold transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    {language === 'ar' ? 'تواصل مع السائق مباشرة' : 'Call Driver Directly'}
                                </a>
                            </Button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
                        >
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-gold fill-gold" />
                                <span className="text-sm font-medium">4.9/5 {language === 'ar' ? 'تقييم' : 'Rating'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-gold" />
                                <span className="text-sm font-medium">{language === 'ar' ? 'مرخص ومؤمن' : 'Licensed & Insured'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-gold" />
                                <span className="text-sm font-medium">{language === 'ar' ? '15+ سنوات خبرة' : '15+ Years Experience'}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features - Premium Design */}
            <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
                </div>

                <div className="container-luxury relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Card with glassmorphism */}
                                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-gold/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/20 h-full flex flex-col items-center text-center md:items-start md:text-start">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300 shadow-lg">
                                            <feature.icon className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - Premium Design */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="container-luxury">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-start"
                        >
                            <div className="mb-8">
                                <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4">
                                    {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                                    {language === 'ar' ? `خدماتنا في ${cityName}` : `Our Services in ${cityName}`}
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {language === 'ar'
                                        ? `نقدم مجموعة شاملة من خدمات النقل السياحي الفاخر في ${cityName} مع سائقين عرب محترفين ومرخصين.`
                                        : `We offer a comprehensive range of luxury tourism transport services in ${cityName} with professional and licensed Arabic drivers.`
                                    }
                                </p>
                            </div>

                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-gold/50 hover:bg-card transition-all duration-300 text-start"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300">
                                            <Check className="w-6 h-6 text-gold" />
                                        </div>
                                        <span className="text-foreground font-medium group-hover:text-gold transition-colors duration-300">
                                            {service}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Main image with overlay */}
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={city.image}
                                    alt={cityName}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                                {/* Floating badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1">
                                                    {language === 'ar' ? 'متوفر الآن' : 'Available Now'}
                                                </p>
                                                <p className="text-2xl font-serif font-bold text-foreground">
                                                    {language === 'ar' ? 'احجز رحلتك' : 'Book Your Trip'}
                                                </p>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Attractions - Premium Design */}
            {
                city.attractions.length > 0 && (
                    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
                        <div className="container-luxury">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4">
                                    {language === 'ar' ? 'المعالم السياحية' : 'Tourist Attractions'}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                                    {language === 'ar' ? `أهم المعالم في ${cityName}` : `Top Attractions in ${cityName}`}
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                            </motion.div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {city.attractions.map((attraction, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                                        className="group relative"
                                    >
                                        <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-gold/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold/10 h-full flex flex-col items-center text-center md:block md:text-start">
                                            {/* Gradient overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                            <div className="relative flex flex-col items-center md:flex-row md:items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300">
                                                    <Star className="w-6 h-6 text-gold fill-gold group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                                                        {language === 'ar' ? attraction.ar : attraction.en}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Rich Content Section */}
            {
                richContent && (
                    <section className="py-20 bg-primary relative">
                        <div className="container-luxury">
                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
                                >
                                    <div className="prose prose-luxury max-w-none text-right" dir="rtl">
                                        {richContent}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* CTA - Premium Design */}
            <section className="relative py-24 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
                        backgroundSize: '100% 100%',
                    }}
                />

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold/20 rounded-full" />
                <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-gold/20 rounded-full" />

                <div className="container-luxury text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-6 py-2 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-sm mb-8"
                        >
                            <span className="text-gold text-sm font-semibold">
                                {language === 'ar' ? 'ابدأ رحلتك الآن' : 'Start Your Journey Now'}
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            {language === 'ar' ? `جاهز لاستكشاف ${cityName}؟` : `Ready to Explore ${cityName}?`}
                        </h2>

                        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            {language === 'ar'
                                ? 'احجز سائقك العربي الآن واستمتع بتجربة سياحية فاخرة لا تُنسى'
                                : 'Book your Arabic driver now and enjoy an unforgettable luxury tourism experience'
                            }
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button
                                asChild
                                variant="luxury"
                                size="lg"
                                className="group text-primary hover:bg-white/90 font-semibold text-lg px-10 py-7 shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
                            >
                                <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                    <Phone className="w-5 h-5 me-2 group-hover:rotate-12 transition-transform" />
                                    {language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-10 py-7 transition-all duration-300 hover:scale-105"
                            >
                                <a href={language === 'ar' ? '/tours' : '/en/tours'}>
                                    {language === 'ar' ? 'استكشف الجولات' : 'Explore Tours'}
                                </a>
                            </Button>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70"
                        >
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-gold" />
                                <span className="text-sm">{language === 'ar' ? 'دفع آمن' : 'Secure Payment'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-gold" />
                                <span className="text-sm">{language === 'ar' ? 'دعم 24/7' : '24/7 Support'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-gold fill-gold" />
                                <span className="text-sm">{language === 'ar' ? 'تقييم ممتاز' : 'Excellent Rating'}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default CityDriverPage;
