import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سياسة الخصوصية - تاكسي فهد',
            en: 'Privacy Policy - Driver Taxi Fahd'
        },
        description: {
            ar: 'سياسة الخصوصية لخدمة السائق العربي في إيطاليا - كيف نجمع ونستخدم ونحمي معلوماتك الشخصية',
            en: 'Privacy Policy for Arabic Driver service in Italy - How we collect, use, and protect your personal information.'
        },
        path: '/privacy',
    }, locale);
}

export default function PrivacyPage() {
    return <PrivacyClient />;
}
