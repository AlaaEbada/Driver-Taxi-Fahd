import type { Metadata } from 'next';
import FAQClient from './FAQClient';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'الأسئلة الشائعة - تاكسي فهد',
            en: 'FAQ - Driver Taxi Fahd'
        },
        description: {
            ar: 'إجابات على الأسئلة الشائعة حول خدمات تاكسي فهد (سائق عربي في إيطاليا).',
            en: 'Answers to frequently asked questions about Driver Taxi Fahd services (Arabic driver in Italy).'
        },
        path: '/faq',
    }, locale);
}

export default function FAQPage() {
    return <FAQClient />;
}
