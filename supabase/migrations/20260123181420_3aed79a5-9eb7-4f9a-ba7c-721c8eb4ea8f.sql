
-- Create categories table for both blogs and tours
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  type TEXT NOT NULL CHECK (type IN ('blog', 'tour')),
  meta_title_ar TEXT,
  meta_title_en TEXT,
  meta_description_ar TEXT,
  meta_description_en TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table with full SEO support
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  content_ar TEXT NOT NULL,
  content_en TEXT NOT NULL,
  featured_image TEXT,
  meta_title_ar TEXT,
  meta_title_en TEXT,
  meta_description_ar TEXT,
  meta_description_en TEXT,
  meta_keywords_ar TEXT,
  meta_keywords_en TEXT,
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  views_count INTEGER DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tours table with full SEO support
CREATE TABLE public.tours (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  content_ar TEXT NOT NULL,
  content_en TEXT NOT NULL,
  featured_image TEXT,
  gallery TEXT[],
  duration_ar TEXT,
  duration_en TEXT,
  price_from DECIMAL(10,2),
  price_currency TEXT DEFAULT 'EUR',
  included_ar TEXT[],
  included_en TEXT[],
  excluded_ar TEXT[],
  excluded_en TEXT[],
  itinerary_ar JSONB,
  itinerary_en JSONB,
  meeting_point_ar TEXT,
  meeting_point_en TEXT,
  meta_title_ar TEXT,
  meta_title_en TEXT,
  meta_description_ar TEXT,
  meta_description_en TEXT,
  meta_keywords_ar TEXT,
  meta_keywords_en TEXT,
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  views_count INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create inquiries table for contact/booking requests
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  tour_id UUID REFERENCES public.tours(id) ON DELETE SET NULL,
  inquiry_type TEXT DEFAULT 'general',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create site_settings table for global settings
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value_ar TEXT,
  value_en TEXT,
  type TEXT DEFAULT 'text',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies for published content
CREATE POLICY "Anyone can view active categories" ON public.categories FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Anyone can view published tours" ON public.tours FOR SELECT USING (is_published = true);
CREATE POLICY "Anyone can view site settings" ON public.site_settings FOR SELECT USING (true);

-- Public can submit inquiries
CREATE POLICY "Anyone can submit inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_tours_updated_at BEFORE UPDATE ON public.tours FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON public.inquiries FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category_id);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published, published_at DESC);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_tours_category ON public.tours(category_id);
CREATE INDEX idx_tours_published ON public.tours(is_published, sort_order);
CREATE INDEX idx_tours_slug ON public.tours(slug);
CREATE INDEX idx_categories_type ON public.categories(type, is_active);
CREATE INDEX idx_categories_slug ON public.categories(slug);

-- Insert default categories
INSERT INTO public.categories (slug, name_ar, name_en, description_ar, description_en, type, is_active, sort_order) VALUES
('day-trips', 'رحلات اليوم الواحد', 'Day Trips', 'استمتع برحلات يومية مميزة في إيطاليا', 'Enjoy amazing day trips across Italy', 'tour', true, 1),
('multi-day-tours', 'البرامج السياحية', 'Multi-Day Tours', 'برامج سياحية متعددة الأيام', 'Multi-day tour packages across Italy', 'tour', true, 2),
('travel-tips', 'نصائح السفر', 'Travel Tips', 'نصائح ومعلومات للمسافرين', 'Tips and information for travelers', 'blog', true, 1),
('destinations', 'الوجهات', 'Destinations', 'اكتشف أجمل الوجهات في إيطاليا', 'Discover the most beautiful destinations in Italy', 'blog', true, 2),
('culture', 'الثقافة والتاريخ', 'Culture & History', 'تعرف على الثقافة والتاريخ الإيطالي', 'Learn about Italian culture and history', 'blog', true, 3);
