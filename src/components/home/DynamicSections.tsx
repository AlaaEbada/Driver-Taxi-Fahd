'use client';

import dynamic from 'next/dynamic';

export const DynamicToursPreviewSection = dynamic(
    () => import('@/components/home/ToursPreviewSection'),
    { ssr: false }
);

export const DynamicCTASection = dynamic(
    () => import('@/components/home/CTASection'),
    { ssr: false }
);
