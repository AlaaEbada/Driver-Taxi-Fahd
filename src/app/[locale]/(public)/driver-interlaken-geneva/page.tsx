import type { Metadata } from 'next';
import InterlakenGenevaContent from '@/components/city-pages/InterlakenGenevaContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في انترلاكن وجنيف - تاكسي فهد',
            en: 'Arabic Driver in Interlaken & Geneva - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل سائق عربي في سويسرا لاستكشاف جنيف وانترلاكن مع تاكسي فهد. جولات مخصصة في جبال الألب.',
            en: 'Best Arabic driver in Switzerland to explore Geneva and Interlaken with Driver Taxi Fahd. Custom tours in the Alps.'
        },
        path: '/driver-interlaken-geneva',
    }, locale);
}

export default function DriverInterlakenGenevaPage() {
    return <InterlakenGenevaContent />;
}
