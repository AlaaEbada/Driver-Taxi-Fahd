'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Settings, Save, Loader2, Globe, Mail, Phone, Share2, Search, Instagram, Facebook, Twitter, MessageSquare, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useSearchParams } from 'next/navigation';

interface SiteSettings {
    site_name_ar: string;
    site_name_en: string;
    contact_email: string;
    contact_phone: string;
    whatsapp_number: string;
    telegram_url: string;
    snapchat_url: string;
    facebook_url: string;
    instagram_url: string;
    meta_description_ar: string;
    meta_description_en: string;
    google_analytics_id: string;
    google_tag_manager_id: string;
    google_search_console_id: string;
    [key: string]: string;
}

const defaultSettings: SiteSettings = {
    site_name_ar: 'سائق عربي في إيطاليا',
    site_name_en: 'Arabic Driver Italy',
    contact_email: 'info@italydriverconnect.com',
    contact_phone: '+39 388 824 8473',
    whatsapp_number: '+39 388 824 8473',
    telegram_url: '',
    snapchat_url: '',
    facebook_url: '',
    instagram_url: '',
    meta_description_ar: '',
    meta_description_en: '',
    google_analytics_id: '',
    google_tag_manager_id: '',
    google_search_console_id: '',
};

const AdminSettingsClient = () => {
    const { language } = useLanguage();
    const searchParams = useSearchParams();
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState('main');

    useEffect(() => {
        if (searchParams.get('google_connected') === 'true') {
            toast.success(language === 'ar' ? 'تم ربط حساب جوجل بنجاح' : 'Google account connected successfully');
        }
    }, [searchParams, language]);


    const { data: settings, isLoading } = useQuery<SiteSettings>({
        queryKey: ['site-settings'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('site_settings')
                .select('key, value_ar, value_en');

            if (error) {
                console.error('Error fetching settings:', error);
                return defaultSettings;
            }

            const result: SiteSettings = { ...defaultSettings };

            if (data && Array.isArray(data)) {
                data.forEach((row: any) => {
                    if (row.key) {
                        if (row.value_ar !== null) result[`${row.key}_ar`] = row.value_ar || '';
                        if (row.value_en !== null) result[`${row.key}_en`] = row.value_en || '';
                        if (!row.key.endsWith('_ar') && !row.key.endsWith('_en')) {
                            result[row.key] = row.value_en || row.value_ar || '';
                        }
                    }
                });
            }

            return result;
        },
    });

    const saveMutation = useMutation({
        mutationFn: async (updatedSettings: Partial<SiteSettings>) => {
            const promises = Object.entries(updatedSettings).map(async ([key, value]) => {
                const baseKey = key.replace(/_(ar|en)$/, '');
                const isAr = key.endsWith('_ar');
                const isEn = key.endsWith('_en');
                const column = isAr ? 'value_ar' : 'value_en';

                const payload: any = {
                    key: baseKey,
                    updated_at: new Date().toISOString(),
                };
                payload[column] = value;

                return (supabase
                    .from('site_settings')
                    .upsert(payload, { onConflict: 'key' }) as any);
            });

            await Promise.all(promises);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['site-settings'] });
            toast.success(language === 'ar' ? 'تم حفظ التعديلات بنجاح' : 'Settings updated successfully');
        },
        onError: (error: any) => {
            toast.error(language === 'ar' ? `خطأ: ${error.message}` : `Error: ${error.message}`);
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updates: Partial<SiteSettings> = {};
        formData.forEach((value, key) => {
            updates[key as keyof SiteSettings] = value as string;
        });
        saveMutation.mutate(updates);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-10 h-10 animate-spin text-gold" />
            </div>
        );
    }

    return (
        <div className="space-y-10 pb-20">
            {/* Page Header */}
            <motion.div
                key="settings-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
                <div>
                    <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
                        {language === 'ar' ? 'إعدادات المنصة' : 'Platform Settings'}
                    </h1>
                    <p className="text-muted-foreground">
                        {language === 'ar' ? 'إدارة هوية الموقع، التواصل، والنمو' : 'Manage site identity, contact, and growth'}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-full text-sm font-medium flex items-center gap-2 border border-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                        {language === 'ar' ? 'آمن ومتصل' : 'Secure & Connected'}
                    </div>
                </div>
            </motion.div>

            <form onSubmit={handleSubmit}>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    {/* Premium Tabs Navigation */}
                    <div className="flex justify-center">
                        <TabsList className="bg-background/50 backdrop-blur-xl p-1.5 rounded-2xl border border-border/50 shadow-2xl h-auto">
                            <TabsTrigger value="main" className="tabs-luxury rounded-xl px-8 py-3 font-bold transition-all duration-300">
                                <Settings className="w-4 h-4 me-2" />
                                {language === 'ar' ? 'الهوية والاتصال' : 'Identity'}
                            </TabsTrigger>
                            <TabsTrigger value="social" className="tabs-luxury rounded-xl px-8 py-3 font-bold transition-all duration-300">
                                <Share2 className="w-4 h-4 me-2" />
                                {language === 'ar' ? 'سوشيال ميديا' : 'Social'}
                            </TabsTrigger>
                            <TabsTrigger value="growth" className="tabs-luxury rounded-xl px-8 py-3 font-bold transition-all duration-300">
                                <TrendingUp className="w-4 h-4 me-2" />
                                {language === 'ar' ? 'الأرشفة والنمو' : 'SEO & Growth'}
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            {activeTab === 'main' && (
                                <TabsContent value="main" key="main-content" forceMount className="m-0 focus-visible:outline-none">
                                    <motion.div
                                        key="main-motion"
                                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                        className="space-y-8"
                                    >
                                        {/* Brand Identity Card */}
                                        <div className="bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-gold/10 transition-all duration-700" />
                                            <div className="relative z-10 space-y-8">
                                                <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                                                    <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold/20">
                                                        <Globe className="w-7 h-7 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl font-bold">{language === 'ar' ? 'هوية الموقع' : 'Brand Identity'}</h2>
                                                        <p className="text-muted-foreground text-sm">{language === 'ar' ? 'الاسم الرسمي للمنصة باللغتين' : 'Official site name for both languages'}</p>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <Label className="text-sm font-bold opacity-70 px-1">{language === 'ar' ? 'الاسم بالعربية' : 'Arabic Name'}</Label>
                                                        <Input name="site_name_ar" defaultValue={settings?.site_name_ar} className="h-14 rounded-2xl bg-background/50 border-border/50 focus:border-gold focus:ring-gold/20 text-lg px-6" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-sm font-bold opacity-70 px-1">{language === 'ar' ? 'الاسم بالإنجليزية' : 'English Name'}</Label>
                                                        <Input name="site_name_en" defaultValue={settings?.site_name_en} className="h-14 rounded-2xl bg-background/50 border-border/50 focus:border-gold focus:ring-gold/20 text-lg px-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Info Card */}
                                        <div className="bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-primary/10 transition-all duration-700" />
                                            <div className="relative z-10 space-y-8">
                                                <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                                        <Mail className="w-7 h-7 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl font-bold">{language === 'ar' ? 'بيانات التواصل العلنية' : 'Public Contact'}</h2>
                                                        <p className="text-muted-foreground text-sm">{language === 'ar' ? 'كيف سيصل إليك العملاء مباشرة' : 'Direct channels for your customers'}</p>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <Label className="text-sm font-bold opacity-70 px-1">{language === 'ar' ? 'البريد الرسمي' : 'Official Email'}</Label>
                                                        <div className="relative">
                                                            <Mail className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                            <Input name="contact_email" defaultValue={settings?.contact_email} type="email" className="h-14 ps-14 rounded-2xl bg-background/50 border-border/50 focus:border-gold" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-sm font-bold opacity-70 px-1">{language === 'ar' ? 'رقم الهاتف الأساسي' : 'Primary Phone'}</Label>
                                                        <div className="relative">
                                                            <Phone className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                            <Input name="contact_phone" defaultValue={settings?.contact_phone} dir="ltr" className="h-14 ps-14 rounded-2xl bg-background/50 border-border/50 focus:border-gold" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            )}

                            {activeTab === 'social' && (
                                <TabsContent value="social" key="social-content" forceMount className="m-0 focus-visible:outline-none">
                                    <motion.div
                                        key="social-motion"
                                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                        className="bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50 shadow-2xl space-y-10"
                                    >
                                        <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 border border-purple-500/20">
                                                <Share2 className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold">{language === 'ar' ? 'منصات التواصل' : 'Social Presence'}</h2>
                                                <p className="text-muted-foreground text-sm">{language === 'ar' ? 'إدارة الروابط والمنصات النشطة' : 'Manage your active social media links'}</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label className="text-sm font-bold text-green-600 px-1">WhatsApp</Label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                                                    <Input name="whatsapp_number" defaultValue={settings?.whatsapp_number} placeholder="+39xxx" className="h-14 ps-14 rounded-2xl bg-background/50 border-green-500/20" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-sm font-bold text-pink-500 px-1">Instagram</Label>
                                                <div className="relative">
                                                    <Instagram className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-500" />
                                                    <Input name="instagram_url" defaultValue={settings?.instagram_url} placeholder="https://..." className="h-14 ps-14 rounded-2xl bg-background/50 border-pink-500/20" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-sm font-bold text-blue-500 px-1">Telegram</Label>
                                                <div className="relative">
                                                    <Share2 className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                                                    <Input name="telegram_url" defaultValue={settings?.telegram_url} placeholder="https://t.me/..." className="h-14 ps-14 rounded-2xl bg-background/50 border-blue-500/20" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-sm font-bold text-yellow-600 px-1">Snapchat</Label>
                                                <div className="relative">
                                                    <Zap className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-600" />
                                                    <Input name="snapchat_url" defaultValue={settings?.snapchat_url} placeholder="https://snapchat.com/..." className="h-14 ps-14 rounded-2xl bg-background/50 border-yellow-500/20" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            )}

                            {activeTab === 'growth' && (
                                <TabsContent value="growth" key="growth-content" forceMount className="m-0 focus-visible:outline-none">
                                    <motion.div
                                        key="growth-motion"
                                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                        className="space-y-8"
                                    >
                                        <div className="bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50 shadow-2xl space-y-8">
                                            <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                                                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 border border-orange-500/20">
                                                    <TrendingUp className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold">{language === 'ar' ? 'تحسين محركات البحث' : 'SEO Optimization'}</h2>
                                                    <p className="text-muted-foreground text-sm">{language === 'ar' ? 'كيف يراك جوجل والمستخدمون في البحث' : 'Control how you appear in search results'}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="space-y-3">
                                                    <Label className="text-sm font-bold opacity-70 px-1">{language === 'ar' ? 'وصف الموقع (عربي)' : 'Meta Description (AR)'}</Label>
                                                    <Textarea name="meta_description_ar" defaultValue={settings?.meta_description_ar} rows={3} className="rounded-2xl bg-background/50 border-border/50 p-4" />
                                                </div>
                                                <div className="space-y-3">
                                                    <Label className="text-sm font-bold opacity-70 px-1">{language === 'ar' ? 'وصف الموقع (إنجليزي)' : 'Meta Description (EN)'}</Label>
                                                    <Textarea name="meta_description_en" defaultValue={settings?.meta_description_en} rows={3} className="rounded-2xl bg-background/50 border-border/50 p-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50 shadow-2xl space-y-8">
                                            <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                                                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600 border border-red-500/20">
                                                    <Search className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold">{language === 'ar' ? 'أدوات جوجل (Search & Track)' : 'Google Search & Tracking'}</h2>
                                                    <p className="text-muted-foreground text-sm">{language === 'ar' ? 'تتبع الزوار وأرشفة الموقع' : 'Track visitors and index your site'}</p>
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-1 gap-8">
                                                <div className="space-y-3">
                                                    <Label className="text-sm font-bold text-red-500 px-1">Google Analytics ID</Label>
                                                    <Input name="google_analytics_id" defaultValue={settings?.google_analytics_id} placeholder="G-XXXXXXXXXX" className="h-14 rounded-2xl bg-background/50 border-red-500/20 font-mono" />
                                                </div>
                                                <div className="space-y-3">
                                                    <Label className="text-sm font-bold text-blue-600 px-1">Search Console Token</Label>
                                                    <Input name="google_search_console_id" defaultValue={settings?.google_search_console_id} placeholder="Verification code" className="h-14 rounded-2xl bg-background/50 border-blue-500/20 font-mono" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            )}
                        </AnimatePresence>

                        {/* Floating Sticky Save Button */}
                        <motion.div
                            key="floating-save-btn"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            className="sticky bottom-8 left-0 right-0 z-50 flex justify-center"
                        >
                            <Button
                                type="submit"
                                disabled={saveMutation.isPending}
                                className="h-16 px-12 rounded-full bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 font-bold text-xl min-w-[280px]"
                            >
                                {saveMutation.isPending ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin me-3" />
                                        {language === 'ar' ? 'جاري الحفظ...' : 'Saving Changes...'}
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-6 h-6 me-3" />
                                        {language === 'ar' ? 'حفظ كافة التغييرات' : 'Save All Changes'}
                                    </>
                                )}
                            </Button>
                        </motion.div>
                    </div>
                </Tabs>
            </form>
        </div>
    );
};

export default AdminSettingsClient;
