import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import BlogPostClient from './BlogPostClient';
import { Database } from '@/integrations/supabase/types';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const revalidate = 3600;

export async function generateStaticParams() {
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('slug')
        .eq('is_published', true);

    if (!posts) return [];

    const locales = ['ar', 'en'];

    return posts.flatMap(post =>
        locales.map(locale => ({
            slug: post.slug,
            locale,
        }))
    );
}

interface Props {
    params: Promise<{ slug: string; locale: string }>;
}

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, locale } = await params;
    const isAr = locale === 'ar';

    const { data: post } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

    if (!post) return { title: 'Post Not Found' };

    return generateSEO({
        title: {
            ar: post.meta_title_ar || post.title_ar || post.meta_title_en || post.title_en || 'المدونة',
            en: post.meta_title_en || post.title_en || post.meta_title_ar || post.title_ar || 'Blog'
        },
        description: {
            ar: post.meta_description_ar || post.excerpt_ar || post.meta_description_en || post.excerpt_en || '',
            en: post.meta_description_en || post.excerpt_en || post.meta_description_ar || post.excerpt_ar || ''
        },
        path: `/blog/${slug}`,
        image: post.featured_image || undefined,
        type: 'article',
    }, locale);
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*, category:categories(*)')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

    if (error || !post) {
        notFound();
    }

    return (
        <>
            <JsonLd
                type="Article"
                data={{
                    headline: post.title_ar || post.title_en,
                    description: post.excerpt_ar || post.excerpt_en,
                    image: post.featured_image ? [post.featured_image] : [],
                    datePublished: post.published_at,
                    dateModified: post.updated_at,
                    author: { '@type': 'Person', name: 'Fahd' }
                }}
            />
            <BlogPostClient post={post} />
        </>
    );
}
