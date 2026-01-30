import type { Metadata } from 'next';
import DayProgramsClient from './DayProgramsClient';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'برامج اليوم الواحد - تاكسي فهد',
            en: 'Day Programs - Driver Taxi Fahd'
        },
        description: {
            ar: 'احجز رحلة اليوم الواحد في إيطاليا مع تاكسي فهد. جولات إلى بحيرة كومو، فيرونا، وبيرنينا إكسبريس.',
            en: 'Book daily tours in Italy with Driver Taxi Fahd. Tours to Lake Como, Verona, and Bernina Express.'
        },
        path: '/day-programs',
    }, locale);
}

export default function DayProgramsPage() {
    // Rendering Client Component to handle animations
    return <DayProgramsClient />;
}
