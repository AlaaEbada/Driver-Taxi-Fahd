'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { WhatsApp, PhoneIcon, Telegram, Snapchat } from '@/components/icons';
import { supabase } from '@/integrations/supabase/client';
interface FooterProps {
  settings?: Record<string, string>;
}

const Footer = ({ settings }: FooterProps) => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: language === 'ar' ? '/' : '/en', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { href: language === 'ar' ? '/about' : '/en/about', label: language === 'ar' ? 'من أنا' : 'About' },
    { href: language === 'ar' ? '/blog' : '/en/blog', label: language === 'ar' ? 'المدونة' : 'Blog' },
    { href: language === 'ar' ? '/tours' : '/en/tours', label: language === 'ar' ? 'البرامج السياحية' : 'Tour Programs' },
    { href: language === 'ar' ? '/day-programs' : '/en/day-programs', label: language === 'ar' ? 'برامج اليوم الواحد' : 'Day Programs' },
    { href: language === 'ar' ? '/faq' : '/en/faq', label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
    { href: language === 'ar' ? '/contact' : '/en/contact', label: language === 'ar' ? 'تواصل معنا' : 'Contact' },
  ];

  const cities = [

    { href: language === 'ar' ? '/driver-italy-switzerland' : '/en/driver-italy-switzerland', label: language === 'ar' ? 'سائق عربي في ايطاليا سويسرا' : 'Arabic Driver in Italy & Switzerland' },
    { href: language === 'ar' ? '/driver-rome' : '/en/driver-rome', label: language === 'ar' ? 'سائق عربي في روما' : 'Arabic Driver in Rome' },
    { href: language === 'ar' ? '/driver-milan' : '/en/driver-milan', label: language === 'ar' ? 'سائق عربي في ميلانو' : 'Arabic Driver in Milan' },
    { href: language === 'ar' ? '/driver-north-italy-garda' : '/en/driver-north-italy-garda', label: language === 'ar' ? 'سائق عربي في الشمال الايطالي وبحيرة جاردا' : 'Arabic Driver in North Italy & Garda' },
    { href: language === 'ar' ? '/driver-serravalle' : '/en/driver-serravalle', label: language === 'ar' ? 'سائق عربي في الاوت ليت السيرافالي' : 'Arabic Driver in Serravalle Outlet' },
    { href: language === 'ar' ? '/driver-como-bellagio-lugano' : '/en/driver-como-bellagio-lugano', label: language === 'ar' ? 'سائق عربي في كومو بيلاجيو لوجانو' : 'Arabic Driver in Como, Bellagio, Lugano' },
    { href: language === 'ar' ? '/driver-chamonix-megeve' : '/en/driver-chamonix-megeve', label: language === 'ar' ? 'سائق عربي في شامونيه مجييف' : 'Arabic Driver in Chamonix & Megeve' },
    { href: language === 'ar' ? '/driver-interlaken-geneva' : '/en/driver-interlaken-geneva', label: language === 'ar' ? 'سائق عربي في انترلاكن جنييف' : 'Arabic Driver in Interlaken & Geneva' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-start">
          {/* About */}
          <div>
            <div className="mb-6 flex justify-center md:justify-start">
              <div className="relative w-50 h-20">
                <Image
                  src="/assets/driver-taxi-fahd-logo.png"
                  alt="Arabic Driver in Italy"
                  fill
                  className="object-contain object-center md:object-left rtl:md:object-right"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              {t('cities.title')}
            </h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              {t('footer.contact_info')}
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  {language === 'ar' ? 'ميلانو، ايطاليا' : 'Milan, Italy'}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <PhoneIcon className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+393888248473"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  dir="ltr"
                >
                  +39 388 824 8473
                </a>
              </li>
            </ul>

            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href={`https://wa.me/${settings?.whatsapp_number?.replace(/\s+/g, '') || '393888248473'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#25D366]/90 transition-all shadow-lg"
                aria-label="WhatsApp"
              >
                <WhatsApp className="w-5 h-5" />
              </a>
              <a
                href={`tel:${settings?.contact_phone?.replace(/\s+/g, '') || '393888248473'}`}
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-lg"
                aria-label="Phone"
              >
                <PhoneIcon className="w-5 h-5" />
              </a>
              <a
                href={settings?.telegram_url || "https://t.me/italydriverconnect"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0088CC] flex items-center justify-center text-white hover:bg-[#0088CC]/90 transition-all shadow-lg"
                aria-label="Telegram"
              >
                <Telegram className="w-5 h-5" />
              </a>
              <a
                href={settings?.snapchat_url || "https://www.snapchat.com/add/elsarag6"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:bg-yellow-500 transition-all shadow-lg"
                aria-label="Snapchat"
              >
                <Snapchat className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="container-luxury py-6 flex items-center justify-center">
          <p className="text-primary-foreground/50 text-sm text-center dir-ltr">
            All Rights Reserved © {new Date().getFullYear()} – Designed & Developed by <a href="https://alaaebada.com" target="_blank" rel="noopener noreferrer">Alaa Ebada</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
