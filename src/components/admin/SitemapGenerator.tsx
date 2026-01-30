'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileCode } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const SitemapGenerator = () => {
    const { language } = useLanguage();
    const [isGenerating, setIsGenerating] = useState(false);

    const generateSitemap = async () => {
        setIsGenerating(true);
        try {
            const baseUrl = 'https://arabicdriver-italy.com'; // Replace with actual domain
            const staticRoutes = [
                '',
                '/about',
                '/contact',
                '/blog',
                '/tours',
                '/rome-driver',
                '/milan-driver',
                '/florence-driver',
                '/naples-driver',
            ];

            // Fetch dynamic content
            const { data: posts } = await supabase
                .from('blog_posts')
                .select('slug, updated_at')
                .eq('is_published', true);

            const { data: tours } = await supabase
                .from('tours')
                .select('slug, updated_at')
                .eq('is_published', true);

            const { data: categories } = await supabase
                .from('categories')
                .select('slug, type, updated_at')
                .eq('is_active', true);

            let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
            xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

            // Static Routes
            staticRoutes.forEach(route => {
                xml += '  <url>\n';
                xml += `    <loc>${baseUrl}${route}</loc>\n`;
                xml += `    <changefreq>weekly</changefreq>\n`;
                xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
                xml += '  </url>\n';
            });

            // Posts
            posts?.forEach(post => {
                xml += '  <url>\n';
                xml += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
                xml += `    <lastmod>${new Date(post.updated_at).toISOString().split('T')[0]}</lastmod>\n`;
                xml += `    <changefreq>monthly</changefreq>\n`;
                xml += `    <priority>0.7</priority>\n`;
                xml += '  </url>\n';
            });

            // Tours
            tours?.forEach(tour => {
                xml += '  <url>\n';
                xml += `    <loc>${baseUrl}/tours/${tour.slug}</loc>\n`;
                xml += `    <lastmod>${new Date(tour.updated_at).toISOString().split('T')[0]}</lastmod>\n`;
                xml += `    <changefreq>weekly</changefreq>\n`;
                xml += `    <priority>0.9</priority>\n`;
                xml += '  </url>\n';
            });

            // Categories
            categories?.forEach(cat => {
                const prefix = cat.type === 'blog' ? 'blog/category' : 'tours/category';
                xml += '  <url>\n';
                xml += `    <loc>${baseUrl}/${prefix}/${cat.slug}</loc>\n`;
                xml += `    <lastmod>${new Date(cat.updated_at).toISOString().split('T')[0]}</lastmod>\n`;
                xml += `    <changefreq>weekly</changefreq>\n`;
                xml += `    <priority>0.6</priority>\n`;
                xml += '  </url>\n';
            });

            xml += '</urlset>';

            // Create download
            const blob = new Blob([xml], { type: 'text/xml' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'sitemap.xml';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

            toast.success(language === 'ar' ? 'تم إنشاء خريطة الموقع بنجاح' : 'Sitemap generated successfully');
        } catch (error) {
            console.error('Sitemap generation error:', error);
            toast.error(language === 'ar' ? 'فشل إنشاء خريطة الموقع' : 'Failed to generate sitemap');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                    <FileCode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">
                    {language === 'ar' ? 'خريطة الموقع (Sitemap)' : 'Sitemap Generator'}
                </h3>
            </div>
            <p className="text-muted-foreground mb-6">
                {language === 'ar'
                    ? 'قم بإنشاء ملف خريطة الموقع (sitemap.xml) المحدث تلقائياً بجميع صفحات ومقالات الموقع لتحسين الأرشفة في جوجل.'
                    : 'Generate an up-to-date sitemap.xml file containing all site pages and posts to improve Google indexing.'}
            </p>
            <Button
                onClick={generateSitemap}
                disabled={isGenerating}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12"
            >
                {isGenerating ? (
                    <Loader2 className="w-5 h-5 animate-spin me-2" />
                ) : (
                    <Download className="w-5 h-5 me-2" />
                )}
                {language === 'ar' ? 'تحميل خريطة الموقع' : 'Download Sitemap.xml'}
            </Button>
        </div>
    );
};

export default SitemapGenerator;
