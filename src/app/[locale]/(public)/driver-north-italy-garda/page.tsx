import type { Metadata } from 'next';
import NorthItalyGardaContent from '@/components/city-pages/NorthItalyGardaContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في الشمال الايطالي - تاكسي فهد',
            en: 'Private Arabic Driver in North Italy - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل سائق عربي في الشمال الإيطالي وبحيرة جاردا مع تاكسي فهد. استكشف سيرميوني، ريفا ديل جاردا، وجاردا لاند.',
            en: 'Best Arabic driver in North Italy and Lake Garda with Driver Taxi Fahd. Explore Sirmione, Riva del Garda, and Gardaland.'
        },
        path: '/driver-north-italy-garda',
    }, locale);
}

export default function DriverNorthItalyGardaPage() {
    return <NorthItalyGardaContent />;
}
