'use client';

import { useQuery } from '@tanstack/react-query';
import { FileText, Map, MessageSquare, TrendingUp, Eye, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const AdminDashboard = () => {
    const { language } = useLanguage();

    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const [posts, publishedPosts] = await Promise.all([
                supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
                supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('is_published' as any, true as any),
            ]);

            return {
                totalPosts: posts.count || 0,
                publishedPosts: publishedPosts.count || 0,
            };
        },
    });



    const quickActions = [
        {
            icon: FileText,
            label: 'مقالة جديدة',
            href: '/admin/posts/new',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Tag,
            label: 'فئة جديدة',
            href: '/admin/categories',
            color: 'from-amber-500 to-amber-600'
        },
        {
            icon: Eye,
            label: 'عرض الموقع',
            href: '/',
            color: 'from-purple-500 to-purple-600',
            external: true
        },
    ];

    return (
        <>
            {/* Welcome Section */}
            <div className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-navy shadow-2xl border border-white/10 p-8 md:p-12">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                    }}
                ></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        مرحباً بك في <span className="text-gold">لوحة التحكم</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mb-8 leading-relaxed">
                        قم بإدارة المحتوى، البرامج السياحية، والمستخدمين بسهولة من مكان واحد.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/" target="_blank" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl backdrop-blur-md transition-all flex items-center gap-2 border border-white/10">
                            <Eye className="w-5 h-5" />
                            <span>عرض الموقع</span>
                        </Link>
                        <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
                        <p className="text-white/40 flex items-center gap-2 self-center text-sm">
                            <Calendar className="w-4 h-4" />
                            {new Date().toLocaleDateString('ar-EG', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Quick Actions Grid */}
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-gold rounded-full"></span>
                    روابط سريعة
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quickActions.map((action, index) => (
                        <motion.div
                            key={action.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link href={action.href} className="group block">
                                <div className="bg-card hover:bg-card/50 border border-border hover:border-gold/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 group-hover:-translate-y-1 h-full flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <action.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{action.label}</h3>
                                    <p className="text-sm text-muted-foreground">اضغط للوصول المباشر</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
