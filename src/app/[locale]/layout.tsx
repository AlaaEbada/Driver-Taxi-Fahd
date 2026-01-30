import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { Providers } from '../providers';
import '../globals.css';
import { Language } from '@/contexts/LanguageContext';

const tajawal = Tajawal({
  subsets: ['latin', 'arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

import { generateSEO } from '@/lib/seo';
import JsonLd from '../../components/seo/JsonLd';
import GoogleTools from '../../components/seo/GoogleTools';

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const seo = generateSEO({
    title: {
      ar: 'تاكسي فهد - سائق عربي في إيطاليا | خدمات توصيل وسياحة',
      en: 'Driver Taxi Fahd - Arabic Driver in Italy'
    },
    description: {
      ar: 'تاكسي فهد يوفر أفضل خدمات السائق العربي في إيطاليا. رحلات سياحية، توصيل من المطارات، وجولات تسوق في ميلانو وروما وجميع المدن الإيطالية.',
      en: 'Driver Taxi Fahd offers professional Arabic picking and private driver services in Italy. Sightseeing tours, airport transfers, and shopping tours in Milan, Rome, and all Italian cities.'
    },
    // path: '/', // Removed to prevent canonical pollution on child pages
  }, locale);

  return {
    ...seo,
    metadataBase: new URL('https://driver.taxi-fahd.com'),
    authors: [{ name: 'Driver Taxi Fahd' }],
    icons: {
      icon: '/icon-v2.png',
      shortcut: '/icon-v2.png',
      apple: '/apple-icon-v2.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-icon-v2.png',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === 'ar' || locale === 'en') ? (locale as Language) : 'ar';

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className={tajawal.variable} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <JsonLd type="LocalBusiness" language={lang} />
        <Providers locale={lang}>
          <GoogleTools />
          {children}
        </Providers>
      </body>
    </html>
  );
}
