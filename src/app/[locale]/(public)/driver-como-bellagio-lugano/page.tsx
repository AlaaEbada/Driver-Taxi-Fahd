import type { Metadata } from 'next';
import ComoBellagioContent from '@/components/city-pages/ComoBellagioContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في كومو وبحيرة لوجانو - تاكسي فهد',
            en: 'Private Arabic Driver in Como & Lugano - Driver Taxi Fahd'
        },
        description: {
            ar: 'جولات سياحية راقية في كومو، بيلاجيو، ولوجانو مع تاكسي فهد. استكشف المثلث الذهبي مع سائق عربي محترف.',
            en: 'High-end tours in Como, Bellagio, and Lugano with Driver Taxi Fahd. Explore the Golden Triangle with a professional Arabic driver.'
        },
        path: '/driver-como-bellagio-lugano',
    }, locale);
}

export default function DriverComoBellagioLuganoPage() {
    return <ComoBellagioContent />;
}
