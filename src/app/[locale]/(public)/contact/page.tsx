import type { Metadata } from 'next';
import ContactClient from './ContactClient';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'اتصل بنا - تاكسي فهد',
            en: 'Contact Us - Driver Taxi Fahd'
        },
        description: {
            ar: 'تواصل مع تاكسي فهد للحجز أو الاستفسار عن خدمات السائق العربي في إيطاليا.',
            en: 'Contact Driver Taxi Fahd for bookings and inquiries about Arabic driver services in Italy.'
        },
        path: '/contact',
    }, locale);
}

export default function ContactPage() {
    return <ContactClient />;
}
