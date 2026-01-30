import type { Metadata } from 'next';
import RomeContent from '@/components/city-pages/RomeContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في روما - تاكسي فهد',
            en: 'Private Arabic Driver in Rome - Driver Taxi Fahd'
        },
        description: {
            ar: 'استكشف روما مع أفضل سائق عربي. جولات سياحية في الكولوسيوم، الفاتيكان، وتوصيلات VIP.',
            en: 'Discover Rome with a professional Arabic private driver. Tours to Colosseum, Vatican, and VIP transfers.'
        },
        path: '/driver-rome',
    }, locale);
}

export default function DriverRomePage() {
    return <RomeContent />;
}
