import type { Metadata } from 'next';
import ItalySwitzerlandContent from '@/components/city-pages/ItalySwitzerlandContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في ايطاليا سويسرا - تاكسي فهد',
            en: 'Arabic Driver Italy & Switzerland - Driver Taxi Fahd'
        },
        description: {
            ar: 'مخطط سياحي 10 أيام في إيطاليا وسويسرا مع تاكسي فهد. رحلات من ميلانو إلى كومو، لوجانو، وفينيسيا مع أفضل سائق عربي.',
            en: '10-day tour plan in Italy and Switzerland with Driver Taxi Fahd. Trips from Milan to Como, Lugano, and Venice with the best Arabic driver.'
        },
        path: '/driver-italy-switzerland',
    }, locale);
}

export default function DriverItalySwitzerlandPage() {
    return <ItalySwitzerlandContent />;
}
