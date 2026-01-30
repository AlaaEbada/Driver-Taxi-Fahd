import type { Metadata } from 'next';
import CityDriverPage from '@/components/shared/CityDriverPage';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في فلورنسا - تاكسي فهد',
            en: 'Private Arabic Driver in Florence - Driver Taxi Fahd'
        },
        description: {
            ar: 'أفضل خدمات السائق العربي في فلورنسا مهد عصر النهضة مع تاكسي فهد. جولات سياحية وتوصيلات فاخرة.',
            en: 'Explore Florence with a professional Arabic private driver. Luxury transfers and tours in the cradle of the Renaissance.'
        },
        path: '/driver-florence',
    }, locale);
}

export default function DriverFlorencePage() {
    const cityData = {
        nameAr: 'فلورنسا',
        nameEn: 'Florence',
        slug: 'florence',
        descriptionAr: 'استمتع بجمال فلورنسا مهد عصر النهضة مع سائق عربي محترف. نوفر خدمات نقل فاخرة وجولات سياحية في مدينة الفن والثقافة.',
        descriptionEn: 'Enjoy the beauty of Florence, the cradle of the Renaissance, with a professional Arabic driver. We provide luxury transport services and tours in the city of art and culture.',
        image: '/assets/cities/florence.jpg',
        attractions: [
            { ar: 'كاتدرائية فلورنسا (الدومو)', en: 'Florence Cathedral (Duomo)' },
            { ar: 'معرض أوفيزي', en: 'Uffizi Gallery' },
            { ar: 'جسر بونتي فيكيو', en: 'Ponte Vecchio' },
            { ar: 'ساحة السيادة', en: 'Piazza della Signoria' },
            { ar: 'قصر بيتي', en: 'Pitti Palace' },
            { ar: 'حدائق بوبولي', en: 'Boboli Gardens' },
        ],
    };

    return <CityDriverPage city={cityData} />;
}
