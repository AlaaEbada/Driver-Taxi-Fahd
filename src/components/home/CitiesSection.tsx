'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const cities = [
  { slug: 'rome', nameKey: 'cities.rome', image: '/assets/cities/rome.jpg' },
  { slug: 'milan', nameKey: 'cities.milan', image: '/assets/cities/milan.jpg' },
  { slug: 'florence', nameKey: 'cities.florence', image: '/assets/cities/florence.jpg' },
  { slug: 'venice', nameKey: 'cities.venice', image: '/assets/cities/venice.jpg' },
  { slug: 'naples', nameKey: 'cities.naples', image: '/assets/cities/naples.jpg' },
];

const CitiesSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-luxury">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('cities.title')}
          </h2>
          <div className="divider-luxury mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('cities.subtitle')}
          </p>
        </m.div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <m.div
              key={city.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
            >
              <Link href={language === 'ar' ? `/cities/${city.slug}` : `/en/cities/${city.slug}`}>
                <div className={`relative ${index === 0 ? 'aspect-[16/9] lg:aspect-square' : 'aspect-[4/3]'}`}>
                  <Image
                    src={city.image}
                    alt={t(city.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center md:items-start md:text-start">
                    <h3 className={`font-serif font-bold text-white mb-2 ${index === 0 ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'
                      }`}>
                      {language === 'ar' ? 'سائق عربي في' : 'Arabic Driver in'} {t(city.nameKey)}
                    </h3>
                    <div className="flex items-center gap-2 text-gold group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm font-medium">{t('cities.view_driver')}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        {/* View All Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="border-gold text-foreground hover:bg-gold hover:text-primary font-semibold">
            <Link href={language === 'ar' ? '/cities' : '/en/cities'}>
              {t('common.see_all')}
              <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" />
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
};

export default CitiesSection;
