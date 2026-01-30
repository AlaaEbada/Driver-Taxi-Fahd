import React from 'react';

type SchemaType = 'LocalBusiness' | 'Article' | 'Product' | 'Website';

interface JsonLdProps {
    type?: SchemaType;
    data?: Record<string, any>;
    language?: 'ar' | 'en';
}

const JsonLd = ({ type = 'LocalBusiness', data = {}, language = 'ar' }: JsonLdProps) => {
    const isAr = language === 'ar';
    const baseSchema = {
        '@context': 'https://schema.org',
        '@type': type,
    };

    let schema: Record<string, any> = { ...baseSchema };

    if (type === 'LocalBusiness') {
        schema = {
            ...schema,
            name: isAr ? 'Driver Taxi Fahd - تاكسي فهد' : 'Driver Taxi Fahd',
            image: 'https://driver.taxi-fahd.com/assets/driver-taxi-fahd-logo.png',
            description: isAr
                ? 'تاكسي فهد يوفر خدمات سائق عربي خاص في إيطاليا - توصيل مطارات وجولات سياحية فاخرة.'
                : 'Driver Taxi Fahd provides professional private driver services in Italy - Airport transfers and luxury tours.',
            telephone: '+39 388 824 8473',
            areaServed: { '@type': 'Country', name: 'Italy' },
            url: 'https://driver.taxi-fahd.com',
            priceRange: '$$',
            address: { '@type': 'PostalAddress', addressCountry: 'IT' },
            ...data
        };
    } else if (type === 'Article') {
        schema = {
            ...schema,
            publisher: {
                '@type': 'Organization',
                name: 'Driver Taxi Fahd',
                logo: { '@type': 'ImageObject', url: 'https://driver.taxi-fahd.com/assets/driver-taxi-fahd-logo.png' }
            },
            ...data
        };
    } else if (type === 'Product') {
        schema = {
            ...schema,
            brand: { '@type': 'Brand', name: 'Driver Taxi Fahd' },
            ...data
        };
    } else {
        schema = { ...schema, ...data };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
