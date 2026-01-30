import type { Metadata } from 'next';
import MilanContent from '@/components/city-pages/MilanContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في ميلانو - تاكسي فهد',
            en: 'Private Arabic Driver in Milan - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل سائق عربي في ميلانو مع تاكسي فهد. استكشف الدومو، التسوق في جاليربا، وبحيرة كومو.',
            en: 'Professional Arabic-speaking driver in Milan with Driver Taxi Fahd. Explore Duomo, Galleria shopping, and Lake Como.'
        },
        path: '/driver-milan',
    }, locale);
}

export default function DriverMilanPage() {
    return <MilanContent />;
}
