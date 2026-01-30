import type { Metadata } from 'next';
import CityDriverPage from '@/components/shared/CityDriverPage';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في نابولي - تاكسي فهد',
            en: 'Private Arabic Driver in Naples - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل خدمات السائق العربي في نابولي وساحل أمالفي مع تاكسي فهد. توصيلات فاخرة وجولات مخصصة.',
            en: 'Explore Naples and the Amalfi Coast with Driver Taxi Fahd. Luxury transfers and custom tours.'
        },
        path: '/driver-naples',
    }, locale);
}

export default function DriverNaplesPage() {
    const cityData = {
        nameAr: 'نابولي',
        nameEn: 'Naples',
        slug: 'naples',
        descriptionAr: 'استكشف نابولي وساحل أمالفي مع سائق عربي محترف. نوفر خدمات نقل فاخرة وجولات سياحية في جنوب إيطاليا الساحر.',
        descriptionEn: 'Explore Naples and the Amalfi Coast with a professional Arabic driver. We provide luxury transport services and tours in charming southern Italy.',
        image: '/assets/cities/naples.jpg',
        attractions: [
            { ar: 'بومبي الأثرية', en: 'Pompeii Archaeological Site' },
            { ar: 'جبل فيزوف', en: 'Mount Vesuvius' },
            { ar: 'ساحل أمالفي', en: 'Amalfi Coast' },
            { ar: 'جزيرة كابري', en: 'Capri Island' },
            { ar: 'القصر الملكي', en: 'Royal Palace' },
            { ar: 'كاتدرائية نابولي', en: 'Naples Cathedral' },
        ],
    };

    return <CityDriverPage city={cityData} />;
}
