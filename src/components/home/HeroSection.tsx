'use client';

import { m } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { WhatsApp, PhoneIcon } from '@/components/icons';
import Image from 'next/image';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden hardware-accelerated">
      {/* Background Image */}
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <m.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/hero-bg.jpg"
            alt="Luxury car in Rome"
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="100vw"
          />
        </m.div>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4 flex-1 flex flex-col justify-center pt-16 pb-12 sm:pt-40 sm:pb-32 lg:pt-24">
        <m.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0
              }
            }
          }}
          className="max-w-4xl mx-auto relative z-30 overflow-visible"
        >
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center flex-wrap gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-8 mx-auto"
          >
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="text-gold text-xs sm:text-sm font-medium">
              {language === 'ar' ? 'ايطاليا • سويسرا • ميلانو • كومو • روما' : 'Italy • Switzerland • Milan • Como • Rome'}
            </span>
          </m.div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 pt-4 pb-2 overflow-visible" style={{ lineHeight: '1.7' }}>
            <span className="text-gold-gradient overflow-visible inline-block">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <m.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              variant="luxury"
              size="lg"
              className="text-primary hover:opacity-90 font-semibold text-lg px-8 py-6 scale-90 sm:scale-100"
            >
              <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                <WhatsApp className="w-6 h-6 me-3" />
                {language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Chat'}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-gold/50 text-white hover:bg-gold/10 font-semibold text-lg px-8 py-6 rounded-xl scale-90 sm:scale-100"
            >
              <a href="tel:+393888248473">
                <PhoneIcon className="w-6 h-6 me-3 text-gold" />
                {language === 'ar' ? 'إتصال مباشر' : 'Direct Call'}
              </a>
            </Button>
          </m.div>
        </m.div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 z-10"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <ArrowDown className="w-6 h-6" />
          </m.div>
        </m.div>
      </div>

      {/* Trust Badges */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative md:absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm border-t border-gold/20 z-20"
      >
        <div className="container-luxury py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-gold">15+</p>
              <p className="text-sm text-white/70">
                {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-gold">5000+</p>
              <p className="text-sm text-white/70">
                {language === 'ar' ? 'عميل سعيد' : 'Happy Clients'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-gold">15+</p>
              <p className="text-sm text-white/70">
                {language === 'ar' ? 'مدن رئيسية' : 'Major Cities'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-gold">100%</p>
              <p className="text-sm text-white/70">
                {language === 'ar' ? 'تقييم ممتاز' : 'Excellent Rating'}
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </section>

  );
};

export default HeroSection;
