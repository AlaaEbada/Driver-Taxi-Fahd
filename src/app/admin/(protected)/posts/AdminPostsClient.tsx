'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2, FileText, Search, Filter, CheckCircle2, AlertCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface PostRecord {
    id: string;
    title_ar: string;
    title_en: string;
    slug: string;
    is_published: boolean;
    created_at: string;
    featured_image: string | null;
    category_id: string | null;
    category: { name_ar: string; name_en: string } | null;
}

const AdminPostsClient = () => {
    const { language } = useLanguage();
    const queryClient = useQueryClient();
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const { data: posts, isLoading: postsLoading } = useQuery<PostRecord[]>({
        queryKey: ['admin-posts'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('id, title_ar, title_en, slug, is_published, created_at, featured_image, category_id, category:categories(name_ar, name_en)')
                .order('created_at', { ascending: false });

            if (error) throw error;

            // Transform category if it's an array (sometimes Supabase return arrays for joined objects)
            return (data as any[]).map(post => ({
                ...post,
                category: Array.isArray(post.category) ? post.category[0] : post.category
            }));
        },
    });

    const { data: categories, isLoading: categoriesLoading } = useQuery({
        queryKey: ['admin-blog-categories'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('categories')
                .select('id, name_ar, name_en')
                .eq('type' as any, 'blog' as any);
            if (error) throw error;
            return data as any[];
        },
    });

    const isLoading = postsLoading || categoriesLoading;

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('blog_posts').delete().eq('id' as any, id as any);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
            toast.success(language === 'ar' ? 'تم حذف المقالة بنجاح' : 'Post deleted successfully');
            setDeleteId(null);
        },
        onError: () => {
            toast.error(language === 'ar' ? 'فشل حذف المقالة' : 'Failed to delete post');
        },
    });

    const togglePublishMutation = useMutation({
        mutationFn: async ({ id, isPublished }: { id: string; isPublished: boolean }) => {
            const { error } = await supabase
                .from('blog_posts')
                .update({
                    is_published: !isPublished,
                    published_at: !isPublished ? new Date().toISOString() : null
                } as any)
                .eq('id' as any, id as any);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
            toast.success(language === 'ar' ? 'تم تحديث حالة النشر' : 'Publish status updated');
        },
    });

    const filteredPosts = posts?.filter(post => {
        const title = (language === 'ar' ? post.title_ar : post.title_en) || '';
        const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all'
            ? true
            : statusFilter === 'published' ? post.is_published : !post.is_published;
        const matchesCategory = categoryFilter === 'all' || post.category_id === categoryFilter;

        return matchesSearch && matchesStatus && matchesCategory;
    });

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                        <FileText className="w-8 h-8 text-gold" />
                        {language === 'ar' ? 'مقالات المدونة' : 'Blog Posts'}
                    </h1>
                    <p className="text-muted-foreground">
                        {language === 'ar' ? 'إدارة ونشر مقالات الموقع' : 'Manage and publish website articles'}
                    </p>
                </motion.div>

                <Link href="/admin/posts/new" className="bg-gradient-gold text-primary hover:opacity-90 shadow-gold font-bold px-6 h-11 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    <Plus className="w-5 h-5 me-2" />
                    {language === 'ar' ? 'إضافة مقالة جديدة' : 'Add New Post'}
                </Link>
            </div>

            {/* Filters & Search */}
            <div className="bg-card rounded-2xl p-4 border border-border mb-6 flex flex-wrap gap-4 items-center">
                <div className="relative w-full md:w-80">
                    <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder={language === 'ar' ? 'البحث عن مقالة...' : 'Search posts...'}
                        className="ps-10 bg-background/50 border-border focus:border-gold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Select value={statusFilter} onValueChange={(val: any) => setStatusFilter(val)}>
                        <SelectTrigger className="w-40 bg-background/50 border-border h-11 rounded-xl">
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-gold opacity-50" />
                                <SelectValue placeholder={language === 'ar' ? 'الحالة' : 'Status'} />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gold/10">
                            <SelectItem value="all">{language === 'ar' ? 'جميع الحالات' : 'All Status'}</SelectItem>
                            <SelectItem value="published">{language === 'ar' ? 'المنشورة' : 'Published'}</SelectItem>
                            <SelectItem value="draft">{language === 'ar' ? 'المسودات' : 'Drafts'}</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className="w-48 bg-background/50 border-border h-11 rounded-xl">
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-gold opacity-50" />
                                <SelectValue placeholder={language === 'ar' ? 'الفئة' : 'Category'} />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gold/10">
                            <SelectItem value="all">{language === 'ar' ? 'جميع الفئات' : 'All Categories'}</SelectItem>
                            {categories?.map((cat: any) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                    {language === 'ar' ? cat.name_ar : cat.name_en}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {(searchTerm || statusFilter !== 'all' || categoryFilter !== 'all') && (
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setSearchTerm('');
                                setStatusFilter('all');
                                setCategoryFilter('all');
                            }}
                            className="text-xs text-muted-foreground hover:text-gold"
                        >
                            {language === 'ar' ? 'تصفير' : 'Reset'}
                        </Button>
                    )}
                </div>
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-gold" />
                    <p className="text-muted-foreground animate-pulse font-medium">
                        {language === 'ar' ? 'جاري تحميل المقالات...' : 'Loading posts...'}
                    </p>
                </div>
            ) : filteredPosts && filteredPosts.length > 0 ? (
                <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-muted/50">
                                    <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                        {language === 'ar' ? 'المقالة' : 'Post Detail'}
                                    </th>
                                    <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                        {language === 'ar' ? 'الفئة' : 'Category'}
                                    </th>
                                    <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                        {language === 'ar' ? 'الحالة' : 'Status'}
                                    </th>
                                    <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                        {language === 'ar' ? 'تاريخ النشر' : 'Date'}
                                    </th>
                                    <th className="text-end p-4 font-semibold text-foreground border-b border-border">
                                        {language === 'ar' ? 'الإجراءات' : 'Actions'}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <AnimatePresence mode="popLayout">
                                    {filteredPosts.map((post, index) => (
                                        <motion.tr
                                            key={post.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="border-b border-border last:border-0 hover:bg-gold/5 transition-colors group"
                                        >
                                            <td className="p-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-border bg-muted flex-shrink-0">
                                                        {post.featured_image ? (
                                                            <img
                                                                src={post.featured_image}
                                                                alt=""
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <FileText className="w-6 h-6 text-muted-foreground/30" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-foreground line-clamp-1 group-hover:text-gold transition-colors">
                                                            {language === 'ar' ? post.title_ar : post.title_en}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground font-mono mt-0.5">/{post.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                {post.category ? (
                                                    <Badge variant="secondary" className="bg-gold/5 text-gold border-gold/10 hover:bg-gold/10">
                                                        {language === 'ar' ? post.category.name_ar : post.category.name_en}
                                                    </Badge>
                                                ) : (
                                                    <span className="text-muted-foreground text-xs italic">
                                                        {language === 'ar' ? 'بدون فئة' : 'No Category'}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4">
                                                {post.is_published ? (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                        {language === 'ar' ? 'منشور' : 'Published'}
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {language === 'ar' ? 'مسودة' : 'Draft'}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4 text-xs">
                                                <p className="font-medium text-foreground">
                                                    {new Date(post.created_at).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')}
                                                </p>
                                                <p className="text-muted-foreground">
                                                    {language === 'ar' ? 'أضيف بواسطة الأدمن' : 'Added by Admin'}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="hover:bg-gold/10 hover:text-gold rounded-xl px-3"
                                                        onClick={() => togglePublishMutation.mutate({ id: post.id, isPublished: post.is_published })}
                                                        title={post.is_published ? (language === 'ar' ? 'إلغاء النشر' : 'Unpublish') : (language === 'ar' ? 'نشر' : 'Publish')}
                                                    >
                                                        {post.is_published ? (
                                                            <EyeOff className="w-4 h-4" />
                                                        ) : (
                                                            <Eye className="w-4 h-4" />
                                                        )}
                                                    </Button>
                                                    <Link href={`/admin/posts/${post.id}`} className="hover:bg-gold/10 hover:text-gold rounded-xl px-3 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9">
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-destructive hover:bg-destructive/10 rounded-xl px-3"
                                                        onClick={() => setDeleteId(post.id)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="text-center py-32 bg-card rounded-2xl border-2 border-dashed border-border px-4">
                    <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText className="w-10 h-10 text-muted-foreground opacity-30" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                        {language === 'ar' ? 'لا توجد مقالات الآن' : 'No Posts Found'}
                    </h3>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                        {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
                            ? (language === 'ar' ? 'لا توجد مقالات تطابق هذا البحث' : 'No posts match your search criteria')
                            : (language === 'ar' ? 'ابدأ بكتابة مقالات رحلاتك وتجاربك المفيدة لزوار الموقع.' : 'Start writing articles about your trips and tips for visitors.')}
                    </p>
                    {!(searchTerm || statusFilter !== 'all' || categoryFilter !== 'all') && (
                        <Link href="/admin/posts/new" className="bg-gradient-gold text-primary hover:opacity-90 shadow-gold font-bold px-8 inline-flex items-center justify-center rounded-md text-sm font-medium h-10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                            <Plus className="w-5 h-5 me-2" />
                            {language === 'ar' ? 'أنشئ أول مقالة' : 'Create First Post'}
                        </Link>
                    )}
                </div>
            )}

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent className="bg-card border-destructive/20 rounded-3xl shadow-2xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-bold flex items-center gap-3 text-destructive">
                            <Trash2 className="w-6 h-6" />
                            {language === 'ar' ? 'تأكيد حذف المقالة' : 'Confirm Post Deletion'}
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-muted-foreground pt-2 font-medium">
                            {language === 'ar'
                                ? 'هل أنت متأكد تماماً من حذف هذه المقالة؟ لا يمكن التراجع عن هذا الإجراء وسيتم إزالتها نهائياً من الموقع.'
                                : 'Are you sure you want to delete this post? This action is permanent and cannot be undone.'
                            }
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-2 mt-6 pt-6 border-t border-border">
                        <AlertDialogCancel className="font-bold rounded-xl">{language === 'ar' ? 'إلغاء' : 'Cancel'}</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteId && deleteMutation.mutate(deleteId)}
                            className="bg-destructive text-white hover:bg-destructive/90 font-bold rounded-xl px-8"
                        >
                            {language === 'ar' ? 'نعم، احذف' : 'Yes, Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default AdminPostsClient;
