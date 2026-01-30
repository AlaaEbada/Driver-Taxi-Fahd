'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Category } from '@/hooks/useBlogPosts';

interface CategoryFilterProps {
  categories: Category[];
  baseUrl: string;
  allLabel?: string;
}

const CategoryFilter = ({ categories, baseUrl, allLabel }: CategoryFilterProps) => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const currentPath = pathname;

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <Link
        href={baseUrl}
        className={cn(
          "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
          (currentPath === baseUrl || currentPath === `/en${baseUrl}` || currentPath === `/ar${baseUrl}`)
            ? "bg-gradient-gold text-primary shadow-gold"
            : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold border border-border"
        )}
      >
        {allLabel || (language === 'ar' ? 'الكل' : 'All')}
      </Link>

      {categories.map((category) => {
        // Construct localized URL
        const isEnglish = currentPath?.startsWith('/en');
        const prefix = isEnglish ? '/en' : '';
        // Ensure baseUrl doesn't already have language prefix to avoid double prefixing if passed incorrectly
        const cleanBaseUrl = baseUrl.replace(/^\/(en|ar)/, '');
        const categoryUrl = `${prefix}${cleanBaseUrl}/category/${category.slug}`;

        // Normalize paths for comparison (remove locale prefixes)
        const cleanCurrentPath = currentPath?.replace(/^\/(en|ar)/, '').replace(/\/$/, '') || '';
        const targetPath = `${cleanBaseUrl}/category/${category.slug}`;

        const isActive = cleanCurrentPath === targetPath;
        const name = language === 'ar' ? category.name_ar : category.name_en;

        return (
          <Link
            key={category.id}
            href={categoryUrl}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-gradient-gold text-primary shadow-gold"
                : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold border border-border"
            )}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
