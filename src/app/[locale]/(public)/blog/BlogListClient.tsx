'use client';

import { useParams } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import CategoryFilter from '@/components/shared/CategoryFilter';
import BlogCard from '@/components/blog/BlogCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Loader2, Tag } from 'lucide-react';
import type { Tables } from '@/integrations/supabase/types';

interface BlogListClientProps {
    initialPosts: any[]; // Using any temporarily for mapped data or stricter types if available
    categories: any[];
}

const BlogListClient = ({ initialPosts, categories }: BlogListClientProps) => {
    const params = useParams();
    const categorySlug = params?.categorySlug as string | undefined;
    const { language, t } = useLanguage();

    // Map the raw data if it hasn't been mapped already by parent
    // Normally we should do this on the server, but doing it here ensures consistency
    const mappedCategories = categories.map(cat => ({
        ...cat,
        is_active: cat.is_active ?? false,
    }));

    const mappedPosts = initialPosts.map(post => ({
        ...post,
        is_published: post.is_published ?? false,
        is_featured: post.is_featured ?? false,
        views_count: post.views_count ?? 0,
        category: post.category || (post.category_id && mappedCategories.find(c => c.id === post.category_id))
    }));

    const isLoading = false;

    const currentCategory = categorySlug && mappedCategories?.find(c => c.slug === categorySlug);
    const categoryTitle = currentCategory
        ? (language === 'ar' ? currentCategory.name_ar : currentCategory.name_en)
        : null;

    return (
        <>
            <PageHeader
                title={categoryTitle || t('nav.blog')}
                subtitle={currentCategory
                    ? (language === 'ar' ? currentCategory.description_ar : currentCategory.description_en) || ''
                    : (language === 'ar' ? 'اكتشف أحدث المقالات والنصائح السياحية في إيطاليا' : 'Discover the latest articles and travel tips in Italy')
                }
            />

            <section className="py-20 bg-background min-h-screen">
                <div className="container-luxury">
                    {/* Category Filter */}
                    {mappedCategories && mappedCategories.length > 0 && (
                        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
                            <CategoryFilter
                                categories={mappedCategories}
                                baseUrl="/blog"
                                allLabel={language === 'ar' ? 'الكل' : 'All'}
                            />
                        </div>
                    )}

                    {/* Posts Grid */}
                    {mappedPosts && mappedPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {mappedPosts.map((post, index) => (
                                <BlogCard key={post.id} post={post} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/20 rounded-xl">
                            <Tag className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                {language === 'ar' ? 'لا توجد مقالات' : 'No articles found'}
                            </h3>
                            <p className="text-muted-foreground">
                                {language === 'ar' ? 'لم يتم نشر أي مقالات في هذا القسم بعد' : 'No articles have been published in this section yet'}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlogListClient;
