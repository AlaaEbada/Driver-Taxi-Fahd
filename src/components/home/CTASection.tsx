'use client';

import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '@/components/home/CarouselDots';

const CTASection: React.FC<{ reviewImages?: string[] }> = ({ reviewImages = [] }) => {
  const { t, language, isRTL } = useLanguage();
  const [isPaused, setIsPaused] = React.useState(false);

  // Testimonials Carousel Logic
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    direction: isRTL ? 'rtl' : 'ltr',
    skipSnaps: false,
    duration: 30,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);
    return () => clearInterval(intervalId);
  }, [emblaApi, isPaused]);

  return (
    <section className="relative w-full overflow-hidden" id="cta">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg-new.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-luxury relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Testimonials Section (Desktop Left) */}
          {reviewImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="text-center mb-8">

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  {language === 'ar' ? 'آراء عملائنا' : 'Client Reviews'}
                </h3>
              </div>

              <div className="relative">
                <div className="relative w-full max-w-full md:max-w-2xl lg:max-w-sm mx-auto overflow-hidden">
                  <div
                    className="overflow-hidden cursor-grab active:cursor-grabbing"
                    ref={emblaRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                  >
                    <div className="flex touch-pan-y">
                      {reviewImages.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 flex justify-center px-4">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative w-full max-w-[600px] h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-[#F3F0E8] p-0 mx-auto"
                          >
                            <div className="relative w-full h-full bg-[#F3F0E8]">
                              <Image
                                src={src}
                                alt={`Review-${index + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 600px"
                                priority={index === 0}
                              />
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 mt-6">
                    {scrollSnaps.map((_: number, index: number) => (
                      <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'w-1.5 h-1.5 rounded-full transition-all duration-300 ' + (index === selectedIndex ? 'bg-gold w-4' : 'bg-white/20')}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows - At Wrapper Edges */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 md:left-4 lg:left-12 top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gold hover:text-gold-dark transition-all z-20"
                >
                  <ChevronLeft className="w-8 h-8 stroke-[3]" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 md:right-4 lg:right-12 top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gold hover:text-gold-dark transition-all z-20"
                >
                  <ChevronRight className="w-8 h-8 stroke-[3]" />
                </button>
              </div>
            </motion.div>
          )}

          {/* CTA Content (Desktop Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center ${reviewImages.length > 0 ? 'lg:text-start' : 'text-center'} max-w-3xl mx-auto lg:mx-0`}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
              {t('cta.subtitle')}
            </p>

            <div className={`flex flex-col sm:flex-row items-center ${reviewImages.length > 0 ? 'justify-center lg:justify-start' : 'justify-center'} gap-4`}>
              <Button
                asChild
                variant="luxury"
                size="lg"
                className="text-primary hover:opacity-90 font-semibold text-lg px-10 py-7 w-full sm:w-auto"
              >
                <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 me-2" />
                  {t('cta.button')}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 rounded-xl w-full sm:w-auto"
              >
                <a href="tel:+393888248473">
                  <Phone className="w-5 h-5 me-2" />
                  +39 388 824 8473
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
