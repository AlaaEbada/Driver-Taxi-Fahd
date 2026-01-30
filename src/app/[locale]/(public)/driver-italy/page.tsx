import type { Metadata } from 'next';
import CityDriverPage from '@/components/shared/CityDriverPage';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في إيطاليا - تاكسي فهد',
            en: 'Arabic Driver in Italy - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل خدمات السائق العربي في إيطاليا مع تاكسي فهد. نقل فاخر، توصيل مطارات، وجولات سياحية مخصصة.',
            en: 'Book a professional Arabic-speaking driver in Italy with Driver Taxi Fahd. Luxury transfers, airport pickups, and custom tours.'
        },
        path: '/driver-italy',
    }, locale);
}

export default function DriverItalyPage() {
    const cityData = {
        nameAr: 'إيطاليا',
        nameEn: 'Italy',
        slug: 'italy',
        descriptionAr: 'استكشف إيطاليا بأكملها مع سائق عربي محترف. نوفر خدمات نقل فاخرة وجولات سياحية في جميع أنحاء إيطاليا من الشمال إلى الجنوب.',
        descriptionEn: 'Explore all of Italy with a professional Arabic driver. We provide luxury transport services and tours throughout Italy from north to south.',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200',
        attractions: [
            { ar: 'روما - المدينة الأبدية', en: 'Rome - The Eternal City' },
            { ar: 'ميلانو - عاصمة الموضة', en: 'Milan - Fashion Capital' },
            { ar: 'فلورنسا - مهد عصر النهضة', en: 'Florence - Cradle of Renaissance' },
            { ar: 'البندقية - مدينة القنوات', en: 'Venice - City of Canals' },
            { ar: 'نابولي وساحل أمالفي', en: 'Naples and Amalfi Coast' },
            { ar: 'توسكانا - الريف الإيطالي', en: 'Tuscany - Italian Countryside' },
        ],
    };

    return <CityDriverPage city={cityData} />;
}
