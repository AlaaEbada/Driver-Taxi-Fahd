import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Category } from './useBlogPosts';

export interface Tour {
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
  gallery: string[] | null;
  duration_ar: string | null;
  duration_en: string | null;
  price_from: number | null;
  price_currency: string;
  included_ar: string[] | null;
  included_en: string[] | null;
  excluded_ar: string[] | null;
  excluded_en: string[] | null;
  itinerary_ar: any;
  itinerary_en: any;
  meeting_point_ar: string | null;
  meeting_point_en: string | null;
  meta_title_ar: string | null;
  meta_title_en: string | null;
  meta_description_ar: string | null;
  meta_description_en: string | null;
  meta_keywords_ar: string | null;
  meta_keywords_en: string | null;
  is_published: boolean;
  is_featured: boolean;
  views_count: number;
  sort_order: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  category?: Category | null;
}

export const useTours = (categorySlug?: string) => {
  return useQuery({
    queryKey: ['tours', categorySlug],
    queryFn: async () => {
      let query = supabase
        .from('tours')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('is_published', true)
        .order('sort_order')
        .order('created_at', { ascending: false });

      if (categorySlug) {
        const { data: category } = await supabase
          .from('categories')
          .select('id')
          .eq('slug', categorySlug)
          .eq('type', 'tour')
          .maybeSingle();

        if (category) {
          query = query.eq('category_id', category.id);
        }
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Tour[];
    },
  });
};

export const useTour = (slug: string) => {
  return useQuery({
    queryKey: ['tour', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tours')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      return data as Tour | null;
    },
    enabled: !!slug,
  });
};

export const useTourCategories = () => {
  return useQuery({
    queryKey: ['tour-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('id, slug, name_ar, name_en, type, image_url')
        .eq('type', 'tour')
        .eq('is_active', true)
        .order('sort_order');

      if (error) throw error;
      return data as Category[];
    },
  });
};
