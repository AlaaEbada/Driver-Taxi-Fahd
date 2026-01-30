import type { Metadata } from 'next';
import AboutClient from './AboutClient';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'من نحن - تاكسي فهد',
            en: 'About Us - Driver Taxi Fahd'
        },
        description: {
            ar: 'تعرف على تاكسي فهد - خبرة أكثر من 15 سنة في تقديم خدمات السائق العربي في إيطاليا وسويسرا.',
            en: 'Learn more about Driver Taxi Fahd - Professional Arabic driver services in Italy and Switzerland with over 15 years of experience.'
        },
        path: '/about',
    }, locale);
}

export default function AboutPage() {
    return <AboutClient />;
}
