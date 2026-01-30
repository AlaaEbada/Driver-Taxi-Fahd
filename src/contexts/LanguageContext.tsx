'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.tours': 'الجولات السياحية',
    'nav.cities': 'المدن',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.book_now': 'احجز الآن',

    // Hero
    'hero.title': 'سائق عربي في ايطاليا وسويسرا | ميلانو - روما - انترلاكن',
    'hero.subtitle': 'إكتشف سحر إيطاليا بسيارة خاصة وفخامة التنقل وسائق خبير',
    'hero.cta': 'احجز رحلتك الآن',
    'hero.secondary_cta': 'تصفح الجولات',

    // Services
    'services.title': 'خدماتنا المميزة',
    'services.subtitle': 'نقدم أفضل تجربة سياحية في إيطاليا',
    'services.airport': 'توصيل المطار',
    'services.airport_desc': 'استقبال وتوصيل من وإلى جميع مطارات إيطاليا',
    'services.city_tours': 'جولات المدن',
    'services.city_tours_desc': 'اكتشف جمال المدن الإيطالية مع مرشد عربي',
    'services.day_trips': 'رحلات يومية',
    'services.day_trips_desc': 'رحلات يومية مميزة إلى أجمل الوجهات',
    'services.multi_day': 'برامج متعددة الأيام',
    'services.multi_day_desc': 'برامج سياحية شاملة تغطي أفضل المعالم',

    // Cities
    'cities.title': 'المدن التي نخدمها',
    'cities.subtitle': 'سائقون عرب محترفون في جميع أنحاء إيطاليا',
    'cities.rome': 'روما',
    'cities.milan': 'ميلانو',
    'cities.florence': 'فلورنسا',
    'cities.venice': 'البندقية',
    'cities.naples': 'نابولي',
    'cities.view_driver': 'اطلب سائق',

    // Tours
    'tours.title': 'جولاتنا السياحية',
    'tours.subtitle': 'اختر من بين مجموعة متنوعة من الجولات',
    'tours.view_all': 'عرض جميع الجولات',
    'tours.book_now': 'احجز الآن',
    'tours.duration': 'المدة',
    'tours.price_from': 'يبدأ من',

    // Testimonials
    'testimonials.title': 'آراء عملائنا',
    'testimonials.subtitle': 'ماذا يقول عملاؤنا عن تجربتهم معنا',

    // Fleet
    'fleet.title': 'أسطولنا الفاخر',
    'fleet.subtitle': 'سيارات فاخرة ومريحة لرحلتك',

    // CTA
    'cta.title': 'هل أنت مستعد لاستكشاف إيطاليا؟',
    'cta.subtitle': 'احجز رحلتك الآن واستمتع بتجربة لا تُنسى',
    'cta.button': 'تواصل معنا عبر واتساب',

    // Footer
    'footer.description': 'خدمة سائق عربي في إيطاليا - نوفر أفضل تجربة سياحية مع سائقين عرب محترفين',
    'footer.quick_links': 'روابط سريعة',
    'footer.contact_info': 'معلومات الاتصال',
    'footer.follow_us': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.read_more': 'اقرأ المزيد',
    'common.see_all': 'عرض الكل',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.tours': 'Tours',
    'nav.cities': 'Cities',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.book_now': 'Book Now',

    // Hero
    'hero.title': 'Arabic Driver in Italy & Switzerland | Milan - Rome - Interlaken',
    'hero.subtitle': 'Discover the magic of Italy with a private car, luxury transport, and an expert driver',
    'hero.cta': 'Book Your Trip Now',
    'hero.secondary_cta': 'Browse Tours',

    // Services
    'services.title': 'Our Premium Services',
    'services.subtitle': 'We offer the best travel experience in Italy',
    'services.airport': 'Airport Transfers',
    'services.airport_desc': 'Pickup and drop-off from all Italian airports',
    'services.city_tours': 'City Tours',
    'services.city_tours_desc': 'Discover the beauty of Italian cities with an Arabic guide',
    'services.day_trips': 'Day Trips',
    'services.day_trips_desc': 'Special day trips to the most beautiful destinations',
    'services.multi_day': 'Multi-Day Programs',
    'services.multi_day_desc': 'Comprehensive travel programs covering the best attractions',

    // Cities
    'cities.title': 'Cities We Serve',
    'cities.subtitle': 'Professional Arabic drivers across Italy',
    'cities.rome': 'Rome',
    'cities.milan': 'Milan',
    'cities.florence': 'Florence',
    'cities.venice': 'Venice',
    'cities.naples': 'Naples',
    'cities.view_driver': 'Request Driver',

    // Tours
    'tours.title': 'Our Tours',
    'tours.subtitle': 'Choose from a variety of tours',
    'tours.view_all': 'View All Tours',
    'tours.book_now': 'Book Now',
    'tours.duration': 'Duration',
    'tours.price_from': 'From',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Read about their experiences with us',

    // Fleet
    'fleet.title': 'Our Luxury Fleet',
    'fleet.subtitle': 'Comfortable and luxurious vehicles for your journey',

    // CTA
    'cta.title': 'Ready to Explore Italy?',
    'cta.subtitle': 'Book your trip now and enjoy an unforgettable experience',
    'cta.button': 'Contact Us on WhatsApp',

    // Footer
    'footer.description': 'Arabic Driver in Italy - Providing the best travel experience with professional Arabic-speaking drivers',
    'footer.quick_links': 'Quick Links',
    'footer.contact_info': 'Contact Info',
    'footer.follow_us': 'Follow Us',
    'footer.rights': 'All Rights Reserved',

    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send',

    // Common
    'common.loading': 'Loading...',
    'common.read_more': 'Read More',
    'common.see_all': 'See All',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { useRouter, usePathname } from 'next/navigation';

export const LanguageProvider: React.FC<{ children: ReactNode; initialLocale?: Language }> = ({ children, initialLocale = 'ar' }) => {
  const [language, setLanguageState] = useState<Language>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: Language) => {
    // 1. Update State
    setLanguageState(lang);

    // 2. Update Storage and DOM
    localStorage.setItem('preferred-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // 3. Update Cookie for Middleware
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;

    // 4. Update URL
    // 4. Update URL
    if (pathname) {
      const segments = pathname.split('/');

      const isEnglishPath = segments.length > 1 && segments[1] === 'en';
      const isArabicPath = segments.length > 1 && segments[1] === 'ar';

      if (lang === 'ar') {
        // Switch to Arabic: Remove 'en' or 'ar' from path
        if (isEnglishPath || isArabicPath) {
          segments.splice(1, 1);
        }
      } else {
        // Switch to English
        if (isEnglishPath) {
          // Already on English, do nothing
        } else if (isArabicPath) {
          segments[1] = 'en';
        } else {
          // Root path (Arabic implied) -> Add 'en'
          segments.splice(1, 0, 'en');
        }
      }

      const newPath = segments.join('/') || '/';
      router.push(newPath);
    }
  };

  useEffect(() => {
    // Sync DOM on mount/update (state is source of truth for UI direction immediately)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
