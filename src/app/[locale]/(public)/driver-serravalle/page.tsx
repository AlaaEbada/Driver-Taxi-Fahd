import type { Metadata } from 'next';
import SerravalleContent from '@/components/city-pages/SerravalleContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في أوت لت سيرافالي - تاكسي فهد',
            en: 'Arabic Driver in Serravalle Outlet - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل سائق عربي للتسوق في أوت لت سيرافالي مع تاكسي فهد. رحلات خاصة، مساعدة في الحقائب، ومرونة تامة.',
            en: 'Shop at Serravalle Outlet with a professional Arabic driver. Private trips, luggage assistance, and full flexibility with Driver Taxi Fahd.'
        },
        path: '/driver-serravalle',
    }, locale);
}

export default function DriverSerravallePage() {
    return <SerravalleContent />;
}
