'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import type { Tour } from '@/hooks/useTours';

interface TourCardProps {
  tour: Tour;
  index?: number;
}

const TourCard = ({ tour, index = 0 }: TourCardProps) => {
  const { language, isRTL, t } = useLanguage();

  const title = language === 'ar' ? tour.title_ar : tour.title_en;
  const excerpt = language === 'ar' ? tour.excerpt_ar : tour.excerpt_en;
  const duration = language === 'ar' ? tour.duration_ar : tour.duration_en;
  const categoryName = tour.category
    ? (language === 'ar' ? tour.category.name_ar : tour.category.name_en)
    : null;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden shadow-elegant border border-border hover:border-gold/30 transition-all duration-300"
    >
      <Link href={`/tours/${tour.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          {tour.featured_image ? (
            <Image
              src={tour.featured_image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
          {categoryName && (
            <span className="absolute top-4 start-4 px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
              {categoryName}
            </span>
          )}
          {tour.price_from && (
            <div className="absolute bottom-4 end-4 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-lg">
              <span className="text-gold font-semibold">
                {t('tours.price_from')} €{tour.price_from}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
        </Link>

        {duration && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Clock className="w-4 h-4" />
            <span>{t('tours.duration')}: {duration}</span>
          </div>
        )}

        {excerpt && (
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {excerpt}
          </p>
        )}

        <div className="flex items-center gap-3">
          <Button asChild variant="luxury" className="flex-1 text-primary hover:opacity-90">
            <Link href={`/tours/${tour.slug}`}>
              {t('tours.book_now')}
              <ArrowIcon className="w-4 h-4 ms-2" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default TourCard;
