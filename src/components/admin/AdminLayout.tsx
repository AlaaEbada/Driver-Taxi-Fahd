'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  FileText,
  Map,
  Tag,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  Users
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import UnsavedChangesDialog from './UnsavedChangesDialog';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [showExitDialog, setShowExitDialog] = useState(false);

  // Force Arabic language in admin dashboard
  useEffect(() => {
    if (language !== 'ar') {
      setLanguage('ar');
    }
    // Ensure DOM is RTL immediate visual fix
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, [language, setLanguage]);

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      router.push(`/admin/login?redirectedFrom=${encodeURIComponent(pathname)}`);
    }
  }, [user, isAdmin, isLoading, router, pathname]);


  if (isLoading && !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-navy flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/assets/driver-taxi-fahd-logo.png"
              alt="Driver Taxi Fahd"
              fill
              className="object-contain animate-pulse"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!isAdmin && !isLoading) {
    return null; // Will trigger redirect in useEffect
  }

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'لوحة التحكم',
      href: '/admin',
    },
    {
      icon: FileText,
      label: 'المقالات',
      href: '/admin/posts',
    },
    {
      icon: Tag,
      label: 'الفئات',
      href: '/admin/categories',
    },
    {
      icon: User, // Changed icon to User generically, handled unique import below
      label: 'المستخدمين',
      href: '/admin/users',
    },
    {
      icon: Settings,
      label: 'الإعدادات',
      href: '/admin/settings',
    },
  ];

  const handleSignOut = async () => {
    if ((window as any).__adminIsDirty) {
      setPendingHref('SIGNOUT');
      setShowExitDialog(true);
      return;
    }
    await signOut();
    router.push('/admin/login');
  };

  const confirmNavigation = async () => {
    const href = pendingHref;
    setShowExitDialog(false);
    setPendingHref(null);
    (window as any).__adminIsDirty = false;

    if (href === 'SIGNOUT') {
      await signOut();
      router.push('/admin/login');
    } else if (href) {
      router.push(href);
    }
  };

  const cancelNavigation = () => {
    setShowExitDialog(false);
    setPendingHref(null);
  };

  return (
    <div className="min-h-screen bg-background flex" dir="rtl">

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-primary via-primary to-navy z-[60] shadow-2xl transition-transform duration-300 border-l border-white/10",
          sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo Section */}
        <div className="h-24 flex items-center gap-3 px-6 border-b border-white/10 bg-black/20">
          <div className="relative w-36 h-36 ">
            <Image
              src="/assets/driver-taxi-fahd-logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-9rem)]">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const handleClick = (e: React.MouseEvent) => {
              if ((window as any).__adminIsDirty) {
                e.preventDefault();
                setPendingHref(item.href);
                setShowExitDialog(true);
                return;
              }
              setSidebarOpen(false);
            };

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  "group relative overflow-hidden",
                  isActive
                    ? "bg-gold text-primary font-bold shadow-lg shadow-gold/20"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-primary" : "text-gold/80"
                )} />
                <span className="relative z-10 text-sm">{item.label}</span>
                {!isActive && <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity" />}
              </Link>
            );
          })}
        </nav>

        {/* Sign Out Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Button
            variant="ghost"
            className="w-full justify-start text-white/70 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5 me-3" />
            <span className="font-medium">تسجيل الخروج</span>
          </Button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 lg:mr-64 w-full">

        {/* Header */}
        <header className="sticky top-0 h-20 bg-background/80 backdrop-blur-xl border-b border-border z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:bg-gold/10 hover:text-gold"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                {menuItems.find(item => item.href === pathname)?.label || 'لوحة التحكم'}
              </h2>
              <p className="text-xs text-muted-foreground hidden md:block">
                مرحباً بك، {user?.email?.split('@')[0]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <User className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Exit Dialog */}
      <UnsavedChangesDialog
        isOpen={showExitDialog}
        onConfirm={confirmNavigation}
        onCancel={cancelNavigation}
      />
    </div>
  );
};

export default AdminLayout;
