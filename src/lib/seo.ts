import { Metadata } from 'next';

const BASE_URL = 'https://driver.taxi-fahd.com';

interface SEOConfig {
    title: {
        ar: string;
        en: string;
    };
    description: {
        ar: string;
        en: string;
    };
    path?: string; // Optional: e.g., '/blog/my-post' or '/driver-rome'
    image?: string;
    type?: 'website' | 'article';
}

/**
 * Generates localized Metadata for Next.js App Router
 * Handles titles, descriptions, canonicals, hreflang, OG, and Twitter tags
 */
export function generateSEO({
    title,
    description,
    path,
    image = '/assets/og-image.jpg', // Default OG image
    type = 'website',
}: SEOConfig, locale: string): Metadata {
    const isAr = locale === 'ar';

    const currentTitle = isAr ? title.ar : title.en;
    const currentDescription = isAr ? description.ar : description.en;

    // Base Metadata without Canonicals (for RootLayout defaults)
    const baseMetadata: Metadata = {
        title: currentTitle,
        description: currentDescription,
        openGraph: {
            title: currentTitle,
            description: currentDescription,
            siteName: 'Driver Taxi Fahd',
            locale: isAr ? 'ar_SA' : 'en_US',
            type: type,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: currentTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: currentTitle,
            description: currentDescription,
            images: [image],
        },
    };

    // If path is missing, return base metadata without canonicals/alternates
    // This allows RootLayout to provide defaults without polluting child pages
    if (!path && path !== '') {
        return baseMetadata;
    }

    // Clean path (ensure it starts with / and doesn't end with /)
    const cleanPath = path!.startsWith('/') ? path : `/${path}`;
    const normalizedPath = cleanPath === '/' ? '' : cleanPath;

    const canonicalUrl = `${BASE_URL}${normalizedPath}`;
    const enUrl = `${BASE_URL}/en${normalizedPath}`;
    const arUrl = `${BASE_URL}${normalizedPath}`;

    return {
        ...baseMetadata,
        openGraph: {
            ...baseMetadata.openGraph,
            url: canonicalUrl,
        },
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'ar': arUrl,
                'en': enUrl,
            },
        },
    };

}
