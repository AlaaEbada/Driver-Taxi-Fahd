'use client';

import BlogCard from '@/components/blog/BlogCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';

const BlogPreviewSection = () => {
    const { language, isRTL } = useLanguage();
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await supabase
                    .from('blog_posts')
                    .select('*, category:categories(*)')
                    .eq('is_published', true as any)
                    .order('published_at', { ascending: false })
                    .limit(3);

                if (data) {
                    setPosts(data);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="py-16">
            <div className="container-luxury">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-12">
                    <div className="text-center md:text-start">
                        <span className="text-gold font-bold uppercase tracking-wider text-sm mb-2 block">
                            {language === 'ar' ? 'المدونة' : 'Our Blog'}
                        </span>
                        <h2 className="text-4xl font-serif font-bold">
                            {language === 'ar' ? 'أحدث المقالات والنصائح' : 'Latest Articles & Tips'}
                        </h2>
                    </div>
                    <Link href={language === 'ar' ? '/blog' : '/en/blog'} className="hidden md:flex items-center gap-2 text-gold hover:text-gold/80 font-bold transition-colors">
                        {language === 'ar' ? 'عرض كل المقالات' : 'View All Articles'}
                        <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button asChild variant="outline" className="border-gold text-gold w-full hover:bg-gold hover:text-primary">
                        <Link href={language === 'ar' ? '/blog' : '/en/blog'}>
                            {language === 'ar' ? 'عرض كل المقالات' : 'View All Articles'}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogPreviewSection;
