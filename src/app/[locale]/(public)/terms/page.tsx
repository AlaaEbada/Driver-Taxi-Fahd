import type { Metadata } from 'next';
import TermsClient from './TermsClient';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'الشروط والأحكام - تاكسي فهد',
            en: 'Terms and Conditions - Driver Taxi Fahd'
        },
        description: {
            ar: 'الشروط والأحكام لخدمة السائق العربي في إيطاليا - اقرأ شروط الاستخدام والحجز',
            en: 'Terms and Conditions for Arabic Driver service in Italy - Read our usage and booking terms.'
        },
        path: '/terms',
    }, locale);
}

export default function TermsPage() {
    return <TermsClient />;
}
