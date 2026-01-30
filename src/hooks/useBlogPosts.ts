import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  slug: string;
  category_id: string | null;
  title_ar: string;
  title_en: string;
  excerpt_ar: string | null;
  excerpt_en: string | null;
  content_ar: string;
  content_en: string;
  featured_image: string | null;
  meta_title_ar: string | null;
  meta_title_en: string | null;
  meta_description_ar: string | null;
  meta_description_en: string | null;
  meta_keywords_ar: string | null;
  meta_keywords_en: string | null;
  is_published: boolean;
  is_featured: boolean;
  views_count: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  category?: Category | null;
}

export interface Category {
  id: string;
  slug: string;
  name_ar: string;
  name_en: string;
  description_ar: string | null;
  description_en: string | null;
  meta_title_ar: string | null;
  meta_title_en: string | null;
  meta_description_ar: string | null;
  meta_description_en: string | null;
  type: string;
  image_url: string | null;
  is_active: boolean;
}

export const useBlogPosts = (categorySlug?: string) => {
  return useQuery({
    queryKey: ['blog-posts', categorySlug],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (categorySlug) {
        const { data: category } = await supabase
          .from('categories')
          .select('id')
          .eq('slug', categorySlug)
          .eq('type', 'blog')
          .maybeSingle();

        if (category) {
          query = query.eq('category_id', category.id);
        }
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as BlogPost[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });
};

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ['blog-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('id, slug, name_ar, name_en, type, image_url')
        .eq('type', 'blog')
        .eq('is_active', true)
        .order('sort_order');

      if (error) throw error;
      return data as Category[];
    },
  });
};
