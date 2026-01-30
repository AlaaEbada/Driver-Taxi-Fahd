import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/integrations/supabase/types';

const BASE_URL = 'https://driver.taxi-fahd.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient<Database>(supabaseUrl, supabaseKey);

    // Static Routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/tour-programs',
        '/day-programs',
        '/faq',
        '/driver-rome',
        '/driver-milan',
        '/driver-florence',
        '/driver-venice',
        '/driver-naples',
        '/driver-como-bellagio-lugano',
        '/driver-north-italy-garda',
        '/driver-italy-switzerland',
        '/driver-serravalle',
        '/driver-chamonix-megeve',
        '/driver-interlaken-geneva',
    ];

    // Helper to generate localized entries
    const generateLocalizedEntries = (path: string, lastModified: Date, priority: number): MetadataRoute.Sitemap => {
        return ['ar', 'en'].map(locale => {
            const isAr = locale === 'ar';
            const localePath = isAr ? '' : `/${locale}`;
            return {
                url: `${BASE_URL}${localePath}${path}`,
                lastModified,
                changeFrequency: 'weekly',
                priority,
            };
        });
    };

    const staticEntries: MetadataRoute.Sitemap = routes.flatMap((route) =>
        generateLocalizedEntries(route, new Date(), route === '' ? 1 : 0.8)
    );

    // Dynamic Blog Posts
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('slug, updated_at')
        .eq('is_published', true);

    const postEntries: MetadataRoute.Sitemap = (posts || []).flatMap((post) =>
        generateLocalizedEntries(`/blog/${post.slug}`, new Date(post.updated_at), 0.7)
    );

    // Dynamic Tours - Removed as per user request (Tours are static pages now)
    // const { data: tours } = await supabase
    //     .from('tours')
    //     .select('slug, updated_at')
    //     .eq('is_published', true);

    // const tourEntries: MetadataRoute.Sitemap = (tours || []).flatMap((tour) =>
    //     generateLocalizedEntries(`/tour-programs/${tour.slug}`, new Date(tour.updated_at), 0.9)
    // );

    return [...staticEntries, ...postEntries];
}
