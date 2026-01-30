import type { Metadata } from 'next';
import TourProgramsServer from './TourProgramsServer';
import { Language } from '@/contexts/LanguageContext';

export const revalidate = 3600; // revalidate at most every hour

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'البرامج السياحية - تاكسي فهد',
            en: 'Tour Programs - Driver Taxi Fahd'
        },
        description: {
            ar: 'خطط رحلتك المتكاملة في إيطاليا مع تاكسي فهد. برامج سياحية مخصصة، جولات الشمال، والبحيرات مع سائق عربي محترف.',
            en: 'Plan your complete trip in Italy with Driver Taxi Fahd. Custom tour packages, Northern tours, and Lakes with a professional Arabic driver.'
        },
        path: '/tour-programs',
    }, locale);
}

export default async function TourProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const lang = (locale === 'ar' || locale === 'en') ? (locale as Language) : 'ar';

    return <TourProgramsServer language={lang} />;
}
