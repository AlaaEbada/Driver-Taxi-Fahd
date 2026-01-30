'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostClientProps {
    post: any;
}

const BlogPostClient = ({ post }: BlogPostClientProps) => {
    const { language, isRTL, t } = useLanguage();

    const BackArrow = isRTL ? ArrowRight : ArrowLeft;

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h1 className="text-3xl font-serif font-bold mb-4">
                    {language === 'ar' ? 'المقالة غير موجودة' : 'Article Not Found'}
                </h1>
                <Link href="/blog" className="text-gold hover:underline">
                    {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
                </Link>
            </div>
        );
    }

    const title = language === 'ar' ? post.title_ar : post.title_en;
    const content = language === 'ar' ? post.content_ar : post.content_en;
    const categoryName = post.category
        ? (language === 'ar' ? post.category.name_ar : post.category.name_en)
        : null;

    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                {post.featured_image ? (
                    <Image
                        src={post.featured_image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-primary/90" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/60 to-primary/30" />

                <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6">
                    <div className="container-luxury max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors mb-6 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full w-fit"
                        >
                            <BackArrow className="w-4 h-4" />
                            {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                {categoryName && (
                                    <Link
                                        href={`/blog/category/${post.category?.slug}`}
                                        className="px-4 py-1.5 bg-gold text-primary font-bold rounded-full text-sm shadow-lg shadow-gold/20 hover:bg-white hover:text-primary transition-colors"
                                    >
                                        {categoryName}
                                    </Link>
                                )}
                                <div className="flex items-center gap-2 text-white/80 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-sm">
                                    <Calendar className="w-4 h-4 text-gold" />
                                    <time>
                                        {post.published_at
                                            ? new Date(post.published_at).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                                                year: 'numeric', month: 'long', day: 'numeric'
                                            })
                                            : new Date(post.created_at).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                                                year: 'numeric', month: 'long', day: 'numeric'
                                            })
                                        }
                                    </time>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                                {title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            <article className="container-luxury max-w-4xl mx-auto -mt-10 relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-white/5"
                >
                    <div
                        className="prose prose-lg md:prose-xl max-w-none 
                        [&_h1]:!text-gold [&_h1]:!font-serif [&_h1]:!font-bold [&_h1]:!mt-8 md:[&_h1]:!mt-12 [&_h1]:!mb-6
                        [&_h2]:!text-gold [&_h2]:!font-serif [&_h2]:!font-bold [&_h2]:!text-2xl md:[&_h2]:!text-3xl [&_h2]:!mt-10 md:[&_h2]:!mt-12 [&_h2]:!mb-6
                        [&_h3]:!text-gold [&_h3]:!font-serif [&_h3]:!font-bold [&_h3]:!text-xl md:[&_h3]:!text-2xl [&_h3]:!mt-8 md:[&_h3]:!mt-10 [&_h3]:!mb-4
                        [&_h4]:!text-gold [&_h4]:!font-serif [&_h4]:!font-bold
                        [&_p]:!text-foreground/80 [&_p]:!leading-relaxed md:[&_p]:!leading-[2] [&_p]:!mb-6 md:[&_p]:!mb-8 [&_p]:!text-base md:[&_p]:!text-lg
                        [&_li]:!text-foreground/80 [&_li]:!leading-relaxed md:[&_li]:!leading-loose [&_li]:!mb-2 md:[&_li]:!text-base md:[&_li]:!text-lg
                        [&_a]:!text-gold [&_a]:!no-underline hover:[&_a]:!underline
                        [&_img]:!rounded-3xl [&_img]:!shadow-2xl [&_img]:!my-10"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </motion.div>
            </article>

            <div className="container-luxury max-w-4xl mx-auto mt-12 text-center">
                <p className="text-muted-foreground italic">
                    {language === 'ar' ? 'هل أعجبك المقال؟ شاركه مع أصدقائك' : 'Liked this article? Share it with your friends'}
                </p>
            </div>
        </div>
    );
};

export default BlogPostClient;
