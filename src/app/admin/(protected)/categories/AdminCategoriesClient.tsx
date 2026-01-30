'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Edit, Trash2, Loader2, Tag, Layers, CheckCircle2, XCircle, Save, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
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
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import UnsavedChangesDialog from '@/components/admin/UnsavedChangesDialog';

interface Category {
    id: string;
    slug: string;
    name_ar: string;
    name_en: string;
    description_ar: string | null;
    description_en: string | null;
    meta_title_ar: string | null;
    meta_title_en: string | null;
    meta_description_ar: string | null;
    meta_description_en: string | null;
    type: 'blog';
    is_active: boolean;
    sort_order: number;
}

const AdminCategoriesClient = () => {
    const { language } = useLanguage();
    const queryClient = useQueryClient();
    const [editCategory, setEditCategory] = useState<Category | null>(null);
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'inactive'>('all');
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);

    const [formData, setFormData] = useState({
        slug: '',
        name_ar: '',
        name_en: '',
        description_ar: '',
        description_en: '',
        meta_title_ar: '',
        meta_title_en: '',
        meta_description_ar: '',
        meta_description_en: '',
        type: 'blog' as const,
        is_active: true,
        sort_order: 0,
    });

    const { data: categories, isLoading } = useQuery({
        queryKey: ['admin-categories'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('categories')
                .select('id, slug, name_ar, name_en, type, is_active, sort_order')
                .order('type')
                .order('sort_order');
            if (error) throw error;
            return data as unknown as Category[];
        },
    });

    const saveMutation = useMutation({
        mutationFn: async (data: typeof formData) => {
            if (editCategory && !isNewCategory) {
                const { error } = await supabase
                    .from('categories')
                    .update(data as any)
                    .eq('id' as any, editCategory.id as any);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('categories').insert([data] as any);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-categories'] });
            toast.success(language === 'ar' ? 'تم حفظ التغييرات بنجاح' : 'Changes saved successfully');
            if (typeof window !== 'undefined') {
                (window as any).__adminIsDirty = false;
            }
            closeDialog();
        },
        onError: (error) => {
            console.error(error);
            toast.error(language === 'ar' ? 'حدث خطأ أثناء الحفظ' : 'Error saving category');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('categories').delete().eq('id' as any, id as any);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-categories'] });
            toast.success(language === 'ar' ? 'تم حذف الفئة بنجاح' : 'Category deleted successfully');
            setDeleteId(null);
        },
        onError: () => {
            toast.error(language === 'ar' ? 'فشل الحذف. قد تكون الفئة مرتبطة بمحتوى آخر' : 'Failed to delete. Category may be linked to content');
        }
    });

    const generateSlug = (name: string) => {
        return name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleNameChange = (field: 'name_ar' | 'name_en', value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
            slug: prev.slug || (field === 'name_en' ? generateSlug(value) : prev.slug)
        }));
    };

    const openNewDialog = () => {
        setIsNewCategory(true);
        setFormData({
            slug: '',
            name_ar: '',
            name_en: '',
            description_ar: '',
            description_en: '',
            meta_title_ar: '',
            meta_title_en: '',
            meta_description_ar: '',
            meta_description_en: '',
            type: 'blog' as const,
            is_active: true,
            sort_order: 0,
        });
        setEditCategory({} as Category);
    };

    const openEditDialog = (category: Category) => {
        setIsNewCategory(false);
        setEditCategory(category);
        setFormData({
            slug: category.slug,
            name_ar: category.name_ar,
            name_en: category.name_en,
            description_ar: category.description_ar || '',
            description_en: category.description_en || '',
            meta_title_ar: category.meta_title_ar || '',
            meta_title_en: category.meta_title_en || '',
            meta_description_ar: category.meta_description_ar || '',
            meta_description_en: category.meta_description_en || '',
            type: category.type,
            is_active: category.is_active,
            sort_order: category.sort_order,
        });
    };

    const closeDialog = () => {
        setEditCategory(null);
        setIsNewCategory(false);
        setShowExitConfirmation(false);
        if (typeof window !== 'undefined') {
            (window as any).__adminIsDirty = false;
        }
    };

    const handleOpenChange = (open: boolean) => {
        if (!open && (window as any).__adminIsDirty) {
            setShowExitConfirmation(true);
        } else if (!open) {
            closeDialog();
        }
    };

    // Track changes for dirty state
    useEffect(() => {
        if (!editCategory) return;

        const checkIsDirty = () => {
            if (isNewCategory) {
                return (
                    formData.name_ar !== '' ||
                    formData.name_en !== '' ||
                    formData.slug !== ''
                );
            }

            return (
                formData.slug !== (editCategory.slug || '') ||
                formData.name_ar !== (editCategory.name_ar || '') ||
                formData.name_en !== (editCategory.name_en || '') ||
                formData.description_ar !== (editCategory.description_ar || '') ||
                formData.description_en !== (editCategory.description_en || '') ||
                formData.meta_title_ar !== (editCategory.meta_title_ar || '') ||
                formData.meta_title_en !== (editCategory.meta_title_en || '') ||
                formData.meta_description_ar !== (editCategory.meta_description_ar || '') ||
                formData.meta_description_en !== (editCategory.meta_description_en || '') ||
                formData.is_active !== (editCategory.is_active ?? true) ||
                formData.sort_order !== (editCategory.sort_order ?? 0)
            );
        };

        const dirty = checkIsDirty();
        if (typeof window !== 'undefined') {
            (window as any).__adminIsDirty = dirty;
        }
    }, [formData, editCategory, isNewCategory]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.slug || !formData.name_ar || !formData.name_en) {
            toast.error(language === 'ar' ? 'يرجى ملء الحقول المطلوبة' : 'Please fill required fields');
            return;
        }
        saveMutation.mutate(formData);
    };

    const filteredCategories = categories?.filter(cat => {
        const matchesSearch = (language === 'ar' ? cat.name_ar : cat.name_en).toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = activeFilter === 'all'
            ? true
            : activeFilter === 'active' ? cat.is_active : !cat.is_active;
        return matchesSearch && matchesStatus;
    }) || [];

    const blogCategories = filteredCategories.filter(c => c.type === 'blog');

    const renderCategoryTable = (cats: Category[], title: string, typeIcon: any) => (
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
            <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold/10 rounded-lg">
                        {typeIcon}
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{title}</h2>
                </div>
                <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full border border-border">
                    {cats.length} {language === 'ar' ? 'فئات' : 'Categories'}
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-muted/50">
                            <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                {language === 'ar' ? 'الاسم' : 'Name'}
                            </th>
                            <th className="text-start p-4 font-semibold text-foreground border-b border-border">Slug</th>
                            <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                {language === 'ar' ? 'الترتيب' : 'Order'}
                            </th>
                            <th className="text-start p-4 font-semibold text-foreground border-b border-border">
                                {language === 'ar' ? 'الحالة' : 'Status'}
                            </th>
                            <th className="text-end p-4 font-semibold text-foreground border-b border-border">
                                {language === 'ar' ? 'الإجراءات' : 'Actions'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence mode="popLayout">
                            {cats.map((cat, index) => (
                                <motion.tr
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border-b border-border last:border-0 hover:bg-gold/5 transition-colors group"
                                >
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-foreground group-hover:text-gold transition-colors">
                                                {language === 'ar' ? cat.name_ar : cat.name_en}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {language === 'ar' ? cat.name_en : cat.name_ar}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <code className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                                            {cat.slug}
                                        </code>
                                    </td>
                                    <td className="p-4 font-medium text-foreground">
                                        {cat.sort_order}
                                    </td>
                                    <td className="p-4">
                                        {cat.is_active ? (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                                                <CheckCircle2 className="w-3 h-3" />
                                                {language === 'ar' ? 'نشط' : 'Active'}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20">
                                                <XCircle className="w-3 h-3" />
                                                {language === 'ar' ? 'معطل' : 'Inactive'}
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-end gap-2 text-primary">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => openEditDialog(cat)}
                                                className="hover:bg-gold/10 hover:text-gold"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-destructive hover:bg-destructive/10"
                                                onClick={() => setDeleteId(cat.id)}
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
    );

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                        <Layers className="w-8 h-8 text-gold" />
                        {language === 'ar' ? 'إدارة الفئات' : 'Manage Categories'}
                    </h1>
                    <p className="text-muted-foreground">
                        {language === 'ar' ? 'تنظيم المقالات والبرامج السياحية في أقسام' : 'Organize posts and tours into categories'}
                    </p>
                </motion.div>
                <Button
                    onClick={openNewDialog}
                    className="bg-gradient-gold text-primary hover:opacity-90 shadow-gold h-11 px-6 font-bold"
                >
                    <Plus className="w-5 h-5 me-2" />
                    {language === 'ar' ? 'فئة جديدة' : 'New Category'}
                </Button>
            </div>

            {/* Filters & Search */}
            <div className="bg-card rounded-2xl p-4 border border-border mb-6 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:w-80">
                    <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder={language === 'ar' ? 'البحث عن فئة...' : 'Search categories...'}
                        className="ps-10 bg-background/50 border-border focus:border-gold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <Select value={activeFilter} onValueChange={(val: any) => setActiveFilter(val)}>
                        <SelectTrigger className="w-40 bg-background/50 border-border h-11 rounded-xl">
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-gold opacity-50" />
                                <SelectValue placeholder={language === 'ar' ? 'الحالة' : 'Status'} />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gold/10">
                            <SelectItem value="all">{language === 'ar' ? 'جميع الحالات' : 'All Status'}</SelectItem>
                            <SelectItem value="active">{language === 'ar' ? 'نشط' : 'Active'}</SelectItem>
                            <SelectItem value="inactive">{language === 'ar' ? 'غير نشط' : 'Inactive'}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {(searchTerm || activeFilter !== 'all') && (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setSearchTerm('');
                            setActiveFilter('all');
                        }}
                        className="text-xs text-muted-foreground hover:text-gold"
                    >
                        {language === 'ar' ? 'تصفير' : 'Reset'}
                    </Button>
                )}
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-gold" />
                    <p className="text-muted-foreground animate-pulse font-medium">
                        {language === 'ar' ? 'جاري تحميل الفئات...' : 'Loading categories...'}
                    </p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {renderCategoryTable(
                        blogCategories,
                        language === 'ar' ? 'فئات المقالات' : 'Blog Categories',
                        <Tag className="w-5 h-5 text-gold" />
                    )}

                    {categories?.length === 0 && (
                        <div className="text-center py-20 bg-card rounded-2xl border-2 border-dashed border-border">
                            <Layers className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-20" />
                            <p className="text-xl font-medium text-muted-foreground">
                                {language === 'ar' ? 'لا توجد فئات حتى الآن' : 'No categories found'}
                            </p>
                            <Button onClick={openNewDialog} variant="link" className="text-gold font-bold">
                                {language === 'ar' ? 'أنشئ أول فئة الآن' : 'Create your first category'}
                            </Button>
                        </div>
                    )}
                </motion.div>
            )}

            {/* Edit/Create Dialog */}
            <Dialog open={!!editCategory} onOpenChange={handleOpenChange}>
                <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-gold/20 shadow-2xl rounded-3xl overflow-hidden p-0 flex flex-col">
                    <div className="bg-gradient-gold p-6 text-primary flex-shrink-0">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                                {isNewCategory ? <Plus className="w-6 h-6" /> : <Edit className="w-6 h-6" />}
                                {isNewCategory
                                    ? 'إضافة فئة جديدة'
                                    : 'تعديل تفاصيل الفئة'
                                }
                            </DialogTitle>
                            <DialogDescription className="text-primary/70">
                                {language === 'ar'
                                    ? 'قم بتعديل بيانات الفئة وإعدادات الأرشفة والـ SEO.'
                                    : 'Manage category details, slug, and SEO settings.'}
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">الاسم بالعربية *</Label>
                                    <Input
                                        value={formData.name_ar}
                                        onChange={(e) => handleNameChange('name_ar', e.target.value)}
                                        className="bg-background/50 border-border focus:border-gold h-11"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">الاسم بالإنجليزية *</Label>
                                    <Input
                                        value={formData.name_en}
                                        onChange={(e) => handleNameChange('name_en', e.target.value)}
                                        className="bg-background/50 border-border focus:border-gold h-11"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">Slug (URL) *</Label>
                                    <Input
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        className="bg-background/50 border-border focus:border-gold h-11"
                                        required
                                    />
                                    <p className="text-[10px] text-muted-foreground">
                                        سيظهر في الرابط: example.com/category/slug
                                    </p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">نوع الفئة</Label>
                                    <Select
                                        value={formData.type}
                                        onValueChange={(value: 'blog') => setFormData({ ...formData, type: value })}
                                    >
                                        <SelectTrigger className="bg-background/50 border-border focus:border-gold h-11">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="blog">مقالات المدونة</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">الوصف بالعربية</Label>
                                    <Textarea
                                        value={formData.description_ar}
                                        onChange={(e) => setFormData({ ...formData, description_ar: e.target.value })}
                                        dir="rtl"
                                        rows={3}
                                        className="bg-background/50 border-border focus:border-gold resize-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">الوصف بالإنجليزية</Label>
                                    <Textarea
                                        value={formData.description_en}
                                        onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                                        rows={3}
                                        className="bg-background/50 border-border focus:border-gold resize-none"
                                    />
                                </div>
                            </div>

                            <div className="bg-muted/20 p-4 rounded-2xl border border-border space-y-4">
                                <h3 className="font-bold text-lg text-foreground">تحسين محركات البحث</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-5">
                                        <Label className="text-foreground font-bold">Meta Title (AR)</Label>
                                        <Input
                                            value={formData.meta_title_ar}
                                            onChange={(e) => setFormData({ ...formData, meta_title_ar: e.target.value })}
                                            className="bg-background border-border focus:border-gold"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <Label className="text-foreground font-bold">Meta Title (EN)</Label>
                                        <Input
                                            value={formData.meta_title_en}
                                            onChange={(e) => setFormData({ ...formData, meta_title_en: e.target.value })}
                                            className="bg-background border-border focus:border-gold"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-5 md:col-span-2">
                                        <Label className="text-foreground font-bold">Meta Description (AR)</Label>
                                        <Textarea
                                            value={formData.meta_description_ar}
                                            onChange={(e) => setFormData({ ...formData, meta_description_ar: e.target.value })}
                                            rows={2}
                                            className="bg-background border-border focus:border-gold resize-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-5 md:col-span-2">
                                        <Label className="text-foreground font-bold">Meta Description (EN)</Label>
                                        <Textarea
                                            value={formData.meta_description_en}
                                            onChange={(e) => setFormData({ ...formData, meta_description_en: e.target.value })}
                                            rows={2}
                                            className="bg-background border-border focus:border-gold resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-muted/20 p-4 rounded-2xl border border-border">
                                <div className="flex flex-col gap-5">
                                    <Label className="text-foreground font-bold">ترتيب العرض</Label>
                                    <Input
                                        type="number"
                                        value={formData.sort_order}
                                        onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                                        className="bg-background border-border focus:border-gold w-32"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-foreground font-bold">حالة التفعيل</Label>
                                        <p className="text-[10px] text-muted-foreground">إظهار أو إخفاء الفئة من الموقع</p>
                                    </div>
                                    <Switch
                                        checked={formData.is_active}
                                        onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-border">
                                <Button type="button" variant="ghost" onClick={closeDialog} className="font-bold">
                                    إلغاء
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={saveMutation.isPending}
                                    className="bg-gradient-gold text-primary hover:opacity-90 px-8 font-bold shadow-gold"
                                >
                                    {saveMutation.isPending ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <Save className="w-5 h-5 me-2" />
                                            حفظ البيانات
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent className="bg-card border-destructive/20 rounded-3xl shadow-2xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-bold flex items-center gap-3 text-destructive">
                            <Trash2 className="w-6 h-6" />
                            {language === 'ar' ? 'تأكيد عملية الحذف' : 'Confirm Deletion'}
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-muted-foreground pt-2">
                            {language === 'ar'
                                ? 'هل أنت متأكد تماماً من حذف هذه الفئة؟ سيتم إزالة الفئة من جميع المقالات/البرامج المرتبطة بها.'
                                : 'Are you sure you want to delete this category? It will be removed from all associated posts and tours.'}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-2 mt-6 pt-6 border-t border-border">
                        <AlertDialogCancel className="font-bold rounded-xl">{language === 'ar' ? 'تراجع' : 'Cancel'}</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteId && deleteMutation.mutate(deleteId)}
                            className="bg-destructive text-white hover:bg-destructive/90 font-bold rounded-xl px-6"
                        >
                            {language === 'ar' ? 'نعم، قم بالحذف' : 'Yes, Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <UnsavedChangesDialog
                isOpen={showExitConfirmation}
                onConfirm={closeDialog}
                onCancel={() => setShowExitConfirmation(false)}
            />
        </>
    );
};

export default AdminCategoriesClient;
