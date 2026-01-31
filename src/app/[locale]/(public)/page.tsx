import fs from 'fs';
import path from 'path';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import { DynamicToursPreviewSection, DynamicCTASection } from '@/components/home/DynamicSections';

import type { Metadata } from 'next';

import { generateSEO } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return generateSEO({
        title: {
            ar: 'سائق عربي في ايطاليا وسويسرا | ميلانو - روما',
            en: 'Arabic Driver in Italy & Switzerland | Milan - Rome'
        },
        description: {
            ar: 'أفضل خدمات السائق العربي في إيطاليا مع تاكسي فهد. جولات سياحية، توصيل مطارات، جولات تسوق، وبرامج سياحية متكاملة في ميلانو وروما وكافة المدن الإيطالية.',
            en: 'Best Arabic driver services in Italy with Driver Taxi Fahd. Sightseeing tours, airport transfers, shopping tours, and complete travel programs in Milan, Rome, and all Italian cities.'
        },
        path: '/',
    }, locale);
}

async function getReviewImages() {
    const reviewsDir = path.join(process.cwd(), 'public', 'assets', 'reviews');
    try {
        if (fs.existsSync(reviewsDir)) {
            const files = fs.readdirSync(reviewsDir);
            return files
                .filter(file => /\.(jpe?g|png|webp)$/i.test(file))
                .map(file => `/assets/reviews/${file}`);
        }
    } catch (error) {
        console.error('Error reading reviews directory:', error);
    }
    return [];
}

export default async function HomePage() {
    const reviewImages = await getReviewImages();

    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <DynamicToursPreviewSection />
            <DynamicCTASection reviewImages={reviewImages} />
            <BlogPreviewSection />
        </>
    );
}
