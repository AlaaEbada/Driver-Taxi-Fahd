'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

// Add proper imports
import { DotButton, useDotButton } from '@/components/home/CarouselDots';

interface TestimonialsSectionProps {
  reviewImages?: string[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ reviewImages = [] }) => {
  const { language, isRTL } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    direction: isRTL ? 'rtl' : 'ltr',
    skipSnaps: false,
    duration: 30, // Smoother transition
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // 4s interval
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  if (!reviewImages || reviewImages.length === 0) return null;

  return (
    <section className="relative py-12 overflow-hidden w-full bg-zinc-950" id="testimonials">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black opacity-80" />
      <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 mb-4 backdrop-blur-sm shadow-sm ring-1 ring-emerald-500/10">
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold tracking-wider text-emerald-400">WhatsApp Reviews</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {language === 'ar' ? 'آراء عملاء تاكسي فهد' : 'Recent Client Stories'}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <Star className="w-4 h-4 text-gold fill-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        <div className="relative max-w-md mx-auto group">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-8" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {reviewImages.length > 0 ? (
                reviewImages.map((src, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative flex justify-center px-4 perspective-1000">
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative w-full max-w-[280px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-zinc-900 group/card"
                    >
                      {/* Premium Card Border Gradient */}
                      <div className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />

                      <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-[#F3F0E8]">
                        <Image
                          src={src}
                          alt={`Review-${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 280px"
                          priority={index === 0}
                        />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg shadow-emerald-500/20 border border-white/20 backdrop-blur-md z-10 hover:scale-105 transition-transform cursor-default">
                        <div className="bg-white rounded-full p-0.5">
                          <Check className="w-2 h-2 text-emerald-600" />
                        </div>
                        {language === 'ar' ? 'تقييم موثوق' : 'Verified Client'}
                      </div>
                    </motion.div>
                  </div>
                ))
              ) : null}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-border shadow-xl items-center justify-center text-primary hover:bg-gold hover:text-primary transition-all z-20 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-border shadow-xl items-center justify-center text-primary hover:bg-gold hover:text-primary transition-all z-20 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_: number, index: number) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'w-2 h-2 rounded-full transition-all duration-300 ' + (index === selectedIndex ? 'bg-gold w-6' : 'bg-primary/20')}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="px-8 py-4 rounded-3xl bg-muted/30 border border-border flex flex-col md:flex-row items-center gap-6 shadow-sm text-center md:text-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gold flex items-center justify-center text-[10px] font-bold text-primary">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-center md:text-start">
              <p className="text-sm font-bold">{language === 'ar' ? 'أكثر من 500+ تقييم إيجابي' : '500+ Top Reviews'}</p>
              <div className="flex gap-1 mt-1 text-gold justify-center md:justify-start">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
