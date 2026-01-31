'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, ChevronDown, MapPin, Star, Car, Clock, Map, ShoppingBag, Mountain } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Helper to prefix links with the current language
  // Helper to prefix links with the current language
  const getLink = (path: string) => {
    if (language === 'ar') return path;
    return `/en${path === '/' ? '' : path}`;
  };

  useEffect(() => {
    setMounted(true);
    console.log('Header mounted');
  }, []);

  const toursDropdown = [
    { href: getLink('/tour-programs'), label: language === 'ar' ? 'البرامج السياحية' : 'Tour Programs' },
    { href: getLink('/day-programs'), label: language === 'ar' ? 'برنامج اليوم الواحد' : 'One Day Programs' },
    { href: getLink('/driver-italy-switzerland'), label: language === 'ar' ? 'سائق عربي في ايطاليا سويسرا' : 'Arabic Driver in Italy & Switzerland' },
    { href: getLink('/driver-rome'), label: language === 'ar' ? 'سائق عربي في روما' : 'Arabic Driver in Rome' },
    { href: getLink('/driver-milan'), label: language === 'ar' ? 'سائق عربي في ميلانو' : 'Arabic Driver in Milan' },
    { href: getLink('/driver-north-italy-garda'), label: language === 'ar' ? 'سائق عربي في الشمال الايطالي وبحيرة جاردا' : 'Arabic Driver in North Italy & Garda' },
    { href: getLink('/driver-serravalle'), label: language === 'ar' ? 'سائق عربي في الاوت ليت السيرافالي' : 'Arabic Driver in Serravalle Outlet' },
    { href: getLink('/driver-como-bellagio-lugano'), label: language === 'ar' ? 'سائق عربي في كومو بيلاجيو لوجانو' : 'Arabic Driver in Como, Bellagio, Lugano' },
    { href: getLink('/driver-chamonix-megeve'), label: language === 'ar' ? 'سائق عربي في شامونيه مجييف' : 'Arabic Driver in Chamonix & Megeve' },
    { href: getLink('/driver-interlaken-geneva'), label: language === 'ar' ? 'سائق عربي في انترلاكن جنييف' : 'Arabic Driver in Interlaken & Geneva' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const toggleMobileDropdown = (key: string) => {
    setOpenMobileDropdown(openMobileDropdown === key ? null : key);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={getLink('/')} className="relative w-32 h-20 transition-transform hover:scale-105">
            <Image
              src="/assets/driver-taxi-fahd-logo.png"
              alt="Arabic Driver in Italy"
              fill
              className="object-contain"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Link>

          {/* Desktop Navigation */}
          {mounted ? (
            <NavigationMenu className="hidden lg:flex" dir={isRTL ? 'rtl' : 'ltr'}>
              <NavigationMenuList className="gap-1">
                {/* Home */}
                <NavigationMenuItem>
                  <Link
                    href={getLink('/')}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                      pathname === getLink('/') || pathname === `/${language}`
                        ? 'text-gold'
                        : 'text-primary-foreground/80 hover:text-gold hover:bg-gold/10'
                    )}
                  >
                    {language === 'ar' ? 'الرئيسية' : 'Home'}
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <Link
                    href={getLink('/about')}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                      pathname === getLink('/about')
                        ? 'text-gold'
                        : 'text-primary-foreground/80 hover:text-gold hover:bg-gold/10'
                    )}
                  >
                    {language === 'ar' ? 'من أنا' : 'About'}
                  </Link>
                </NavigationMenuItem>

                {/* Blog */}
                <NavigationMenuItem>
                  <Link
                    href={getLink('/blog')}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                      pathname === getLink('/blog')
                        ? 'text-gold'
                        : 'text-primary-foreground/80 hover:text-gold hover:bg-gold/10'
                    )}
                  >
                    {language === 'ar' ? 'المدونة' : 'Blog'}
                  </Link>
                </NavigationMenuItem>

                {/* Tours Dropdown - Using DropdownMenu for better positioning */}
                {/* Tours Dropdown - Hover & Enhanced Style */}
                <NavigationMenuItem
                  onMouseEnter={() => setOpenMobileDropdown('desktop-tours')}
                  onMouseLeave={() => setOpenMobileDropdown(null)}
                >
                  <DropdownMenu open={openMobileDropdown === 'desktop-tours'} modal={false}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
                          "text-primary-foreground/80 hover:text-gold hover:bg-gold/5 focus:outline-none",
                          openMobileDropdown === 'desktop-tours' && "text-gold bg-gold/10"
                        )}
                        onClick={(e) => e.preventDefault()} // Prevent click for pure hover
                      >
                        {language === 'ar' ? 'البرامج السياحية' : 'Tour Programs'}
                        <ChevronDown
                          className={cn(
                            "relative top-[1px] ms-1 h-3 w-3 transition-transform duration-300",
                            openMobileDropdown === 'desktop-tours' && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="center"
                      sideOffset={15}
                      className="w-[850px] p-0 bg-primary/95 backdrop-blur-xl border border-gold/20 shadow-2xl rounded-3xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200 text-primary-foreground"
                      onMouseEnter={() => setOpenMobileDropdown('desktop-tours')}
                      onMouseLeave={() => setOpenMobileDropdown(null)}
                    >
                      <div className="flex flex-row-reverse h-[400px]">
                        {/* Sidebar - Main Programs */}
                        <div className="w-[280px] bg-gold/5 border-l border-gold/10 p-6 flex flex-col gap-4">
                          <div className="mb-2">
                            <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                              <Star className="w-4 h-4 text-gold" />
                              {language === 'ar' ? 'أهم البرامج' : 'Featured Programs'}
                            </span>
                          </div>

                          <Link
                            href={getLink('/tour-programs')}
                            className="bg-white/5 hover:bg-gradient-gold hover:text-primary border border-white/10 hover:border-gold/30 p-4 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-gold/20"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-gold/10 group-hover:bg-white/20 flex items-center justify-center text-gold group-hover:text-primary transition-colors">
                                <Map className="w-5 h-5" />
                              </div>
                              <span className="font-bold text-lg">{language === 'ar' ? 'البرامج السياحية' : 'Tour Programs'}</span>
                            </div>
                            <p className="text-xs text-primary-foreground/70 group-hover:text-primary/80 leading-relaxed">
                              {language === 'ar' ? 'بكجات متكاملة تشمل الفنادق والمواصلات' : 'Complete packages including hotels & transfer'}
                            </p>
                          </Link>

                          <Link
                            href={getLink('/day-programs')}
                            className="bg-white/5 hover:bg-gradient-gold hover:text-primary border border-white/10 hover:border-gold/30 p-4 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-gold/20"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-gold/10 group-hover:bg-white/20 flex items-center justify-center text-gold group-hover:text-primary transition-colors">
                                <Clock className="w-5 h-5" />
                              </div>
                              <span className="font-bold text-lg">{language === 'ar' ? 'برامج اليوم الواحد' : 'Day Trips'}</span>
                            </div>
                            <p className="text-xs text-primary-foreground/70 group-hover:text-primary/80 leading-relaxed">
                              {language === 'ar' ? 'جولات يومية من ميلانو للبحيرات والمدن' : 'Daily tours from Milan to lakes & cities'}
                            </p>
                          </Link>
                        </div>

                        {/* Main Grid - Driver Services */}
                        <div className="flex-1 p-6">
                          <div className="mb-6 pb-4 border-b border-white/10">
                            <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                              <Car className="w-4 h-4 text-gold" />
                              {language === 'ar' ? 'خدمات السائق الخاص (حسب المنطقة)' : 'Private Driver Services'}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            <Link href={getLink('/driver-milan')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <MapPin className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في ميلانو' : 'Driver in Milan'}</span>
                            </Link>
                            <Link href={getLink('/driver-rome')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <MapPin className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في روما' : 'Driver in Rome'}</span>
                            </Link>
                            <Link href={getLink('/driver-north-italy-garda')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <MapPin className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في الشمال الايطالي وبحيرة جاردا' : 'North & Garda'}</span>
                            </Link>
                            <Link href={getLink('/driver-como-bellagio-lugano')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <MapPin className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في كومو بيلاجيو لوجانو' : 'Como, Bellagio, Lugano'}</span>
                            </Link>
                            <Link href={getLink('/driver-serravalle')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <ShoppingBag className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في الاوت ليت السيرافالي' : 'Serravalle Outlet'}</span>
                            </Link>
                            <Link href={getLink('/driver-chamonix-megeve')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <Mountain className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في شامونيه مجييف' : 'Chamonix & Megeve'}</span>
                            </Link>
                            <Link href={getLink('/driver-interlaken-geneva')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <Mountain className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في انترلاكن جنييف' : 'Interlaken & Geneva'}</span>
                            </Link>
                            <Link href={getLink('/driver-italy-switzerland')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 group-hover:text-gold transition-colors">
                                <Car className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium group-hover:text-gold transition-colors">{language === 'ar' ? 'سائق عربي في ايطاليا سويسرا' : 'Italy & Switzerland'}</span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="bg-gold/5 p-3 text-center border-t border-gold/10">
                        <p className="text-[12px] text-gold/80 flex items-center justify-center gap-2">
                          <Star className="w-3 h-3" />
                          {language === 'ar' ? 'نضمن لك أفضل الأسعار مع خدمة VIP' : 'Best Prices with VIP Service Guaranteed'}
                          <Star className="w-3 h-3" />
                        </p>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>

                {/* FAQ */}
                <NavigationMenuItem>
                  <Link
                    href={getLink('/faq')}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                      pathname === getLink('/faq')
                        ? 'text-gold'
                        : 'text-primary-foreground/80 hover:text-gold hover:bg-gold/10'
                    )}
                  >
                    {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    href={getLink('/contact')}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                      pathname === getLink('/contact')
                        ? 'text-gold'
                        : 'text-primary-foreground/80 hover:text-gold hover:bg-gold/10'
                    )}
                  >
                    {language === 'ar' ? 'تواصل معنا' : 'Contact'}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <div className="hidden lg:flex flex-1" />
          )}

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <Link
              href={language === 'ar'
                ? `/en${pathname === '/' ? '' : pathname}`
                : (pathname?.replace(/^\/en/, '') || '/')
              }
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gold/30 text-primary-foreground hover:bg-gold/10 transition-colors"
            >
              <Globe className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </Link>

            {/* Book Now Button - Desktop */}
            <Button
              asChild
              variant="luxury"
              className="hidden md:flex text-primary hover:opacity-90 font-semibold"
            >
              <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 me-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('nav.book_now')}
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-gold/20 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="container-luxury py-6 flex flex-col gap-2">
              {/* Home */}
              <Link
                href={getLink('/')}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  pathname === getLink('/') ? 'text-gold' : 'text-primary-foreground/80 hover:text-gold'
                )}
              >
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>

              {/* About */}
              <Link
                href={getLink('/about')}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  pathname === getLink('/about') ? 'text-gold' : 'text-primary-foreground/80 hover:text-gold'
                )}
              >
                {language === 'ar' ? 'من أنا' : 'About'}
              </Link>

              {/* Blog */}
              <Link
                href={getLink('/blog')}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  pathname === getLink('/blog') ? 'text-gold' : 'text-primary-foreground/80 hover:text-gold'
                )}
              >
                {language === 'ar' ? 'المدونة' : 'Blog'}
              </Link>

              {/* Tours Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('tours')}
                  className="flex items-center justify-between w-full text-base font-medium py-2 text-primary-foreground/80 hover:text-gold"
                >
                  <span>{language === 'ar' ? 'البرامج السياحية' : 'Tour Programs'}</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === 'tours' && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'tours' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ps-4 border-s border-gold/20 ms-2"
                    >
                      {toursDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-primary-foreground/70 hover:text-gold"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FAQ */}
              <Link
                href={getLink('/faq')}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  pathname === getLink('/faq') ? 'text-gold' : 'text-primary-foreground/80 hover:text-gold'
                )}
              >
                {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </Link>

              {/* Contact */}
              <Link
                href={getLink('/contact')}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  pathname === getLink('/contact') ? 'text-gold' : 'text-primary-foreground/80 hover:text-gold'
                )}
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact'}
              </Link>

              <Button
                asChild
                variant="luxury"
                className="mt-4 text-primary hover:opacity-90 font-semibold w-full"
              >
                <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 me-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t('nav.book_now')}
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
