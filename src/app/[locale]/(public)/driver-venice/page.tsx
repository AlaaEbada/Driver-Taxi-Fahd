import type { Metadata } from 'next';
import CityDriverPage from '@/components/shared/CityDriverPage';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في البندقية - تاكسي فهد',
            en: 'Private Arabic Driver in Venice - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل خدمات السائق العربي في البندقية مدينة القنوات مع تاكسي فهد. توصيلات فاخرة وجولات مخصصة.',
            en: 'Experience Venice with a professional Arabic private driver. Luxury transfers and custom tours in the City of Canals.'
        },
        path: '/driver-venice',
    }, locale);
}

export default function DriverVenicePage() {
    const cityData = {
        nameAr: 'البندقية',
        nameEn: 'Venice',
        slug: 'venice',
        descriptionAr: 'اكتشف سحر البندقية مدينة القنوات مع سائق عربي محترف. نوفر خدمات نقل فاخرة من وإلى البندقية وجولات سياحية مميزة.',
        descriptionEn: 'Discover the magic of Venice, the city of canals, with a professional Arabic driver. We provide luxury transport services to and from Venice and exceptional tours.',
        image: '/assets/cities/venice.jpg',
        attractions: [
            { ar: 'ساحة سان ماركو', en: 'St. Mark\'s Square' },
            { ar: 'كاتدرائية سان ماركو', en: 'St. Mark\'s Basilica' },
            { ar: 'قصر دوجي', en: 'Doge\'s Palace' },
            { ar: 'جسر ريالتو', en: 'Rialto Bridge' },
            { ar: 'جسر التنهدات', en: 'Bridge of Sighs' },
            { ar: 'جزيرة مورانو', en: 'Murano Island' },
        ],
    };

    return <CityDriverPage city={cityData} />;
}
