import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import BlogListClient from '../../BlogListClient';
import { Database } from '@/integrations/supabase/types';
import { notFound } from 'next/navigation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const revalidate = 3600;

interface Props {
    params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categorySlug } = await params;

    const { data: category } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', categorySlug)
        .eq('type', 'blog')
        .maybeSingle();

    if (!category) return { title: 'Category Not Found' };

    return {
        title: `${category.name_ar || category.name_en} - المدونة`,
        description: category.description_ar || category.description_en || 'مقالات في هذا التصنيف',
    };
}

export default async function BlogCategoryPage({ params }: Props) {
    const { categorySlug } = await params;

    // 1. Get current category
    const { data: currentCategory } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', categorySlug)
        .eq('type', 'blog')
        .maybeSingle();

    if (!currentCategory) {
        notFound();
    }

    // 2. Get all blog categories for the filter
    const { data: categories } = await supabase
        .from('categories')
        .select('*')
        .eq('type', 'blog')
        .eq('is_active', true)
        .order('sort_order');

    // 3. Get posts for THIS category
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('*, category:categories(*)')
        .eq('is_published', true)
        .eq('category_id', currentCategory.id)
        .order('published_at', { ascending: false });

    return (
        <BlogListClient
            initialPosts={posts || []}
            categories={categories || []}
        />
    );
}
