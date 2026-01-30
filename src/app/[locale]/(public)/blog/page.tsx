import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import BlogListClient from './BlogListClient';
import { Database } from '@/integrations/supabase/types';

// Use environment variables for server-side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const revalidate = 3600; // Cache for 1 hour

import { generateSEO } from '@/lib/seo';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'المدونة - سائق عربي في إيطاليا',
            en: 'Blog - Arabic Driver in Italy'
        },
        description: {
            ar: 'مقالات ونصائح سياحية حول السفر في إيطاليا. دليلك الشامل للسياحة في ميلانو، روما، والمدن الإيطالية.',
            en: 'Travel articles and tips about Italy. Your comprehensive guide to tourism in Milan, Rome, and Italian cities.'
        },
        path: '/blog',
        type: 'website',
    }, locale);
}

export default async function BlogPage() {
    // Fetch Categories
    const { data: categories } = await supabase
        .from('categories')
        .select('*')
        .eq('type', 'blog')
        .eq('is_active', true)
        .order('sort_order');

    // Fetch Posts with category details
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('*, category:categories(*)')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    return (
        <BlogListClient
            initialPosts={posts || []}
            categories={categories || []}
        />
    );
}
