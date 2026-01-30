
-- Create admin_users table for dashboard access
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE user_id = _user_id
  )
$$;

-- Admin policies for categories
CREATE POLICY "Admins can manage categories" ON public.categories FOR ALL USING (public.is_admin(auth.uid()));

-- Admin policies for blog_posts
CREATE POLICY "Admins can manage blog posts" ON public.blog_posts FOR ALL USING (public.is_admin(auth.uid()));

-- Admin policies for tours
CREATE POLICY "Admins can manage tours" ON public.tours FOR ALL USING (public.is_admin(auth.uid()));

-- Admin policies for inquiries - read and update only
CREATE POLICY "Admins can view inquiries" ON public.inquiries FOR SELECT USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update inquiries" ON public.inquiries FOR UPDATE USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can delete inquiries" ON public.inquiries FOR DELETE USING (public.is_admin(auth.uid()));

-- Admin policies for site_settings
CREATE POLICY "Admins can manage site settings" ON public.site_settings FOR ALL USING (public.is_admin(auth.uid()));

-- Admin users can view themselves
CREATE POLICY "Admin users can view admin list" ON public.admin_users FOR SELECT USING (public.is_admin(auth.uid()));
