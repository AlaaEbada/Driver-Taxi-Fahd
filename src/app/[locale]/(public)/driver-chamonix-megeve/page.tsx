import type { Metadata } from 'next';
import ChamonixMegeveContent from '@/components/city-pages/ChamonixMegeveContent';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في شامونيه وميجيف - تاكسي فهد',
            en: 'Arabic Driver in Chamonix & Megeve - Driver Taxi Fahd'
        },
        description: {
            ar: 'استكشف جبال الألب الفرنسية في شامونيه وميجيف مع أفضل سائق عربي من تاكسي فهد. رحلات من ميلانو وجنيف.',
            en: 'Explore the French Alps in Chamonix and Megeve with the best Arabic driver from Driver Taxi Fahd. Trips from Milan and Geneva.'
        },
        path: '/driver-chamonix-megeve',
    }, locale);
}

export default function DriverChamonixMegevePage() {
    return <ChamonixMegeveContent />;
}
