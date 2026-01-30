'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { BlogPost } from '@/hooks/useBlogPosts';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const { language, isRTL, t } = useLanguage();

  const title = language === 'ar' ? post.title_ar : post.title_en;

  const categoryName = post.category
    ? (language === 'ar' ? post.category.name_ar : post.category.name_en)
    : null;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden shadow-elegant border border-border hover:border-gold/30 transition-all duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          {post.featured_image ? (
            <Image
              src={post.featured_image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No Image</span>
            </div>
          )}
          {categoryName && (
            <span className="absolute top-4 start-4 px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
              {categoryName}
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <time>
              {post.published_at
                ? new Date(post.published_at).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')
                : new Date(post.created_at).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')
              }
            </time>
          </div>

          <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 mb-4">
            {(() => {
              const fullContent = language === 'ar' ? post.content_ar : post.content_en;
              // Strip HTML
              const plainText = fullContent?.replace(/<[^>]+>/g, '') || '';
              // Truncate
              return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
            })()}
          </p>

          <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
            {t('common.read_more')}
            <ArrowIcon className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
