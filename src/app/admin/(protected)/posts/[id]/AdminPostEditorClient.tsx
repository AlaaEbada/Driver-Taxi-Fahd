'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, Save, Loader2 } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';
import ImageUpload from '@/components/admin/ImageUpload';
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
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import UnsavedChangesDialog from '@/components/admin/UnsavedChangesDialog';

const AdminPostEditorClient = () => {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const { language, isRTL } = useLanguage();
    const queryClient = useQueryClient();
    const isNew = id === 'new';
    const BackArrow = isRTL ? ArrowRight : ArrowLeft;

    const [formData, setFormData] = useState({
        slug: '',
        category_id: '',
        title_ar: '',
        title_en: '',
        excerpt_ar: '',
        excerpt_en: '',
        content_ar: '',
        content_en: '',
        featured_image: '',
        meta_title_ar: '',
        meta_title_en: '',
        meta_description_ar: '',
        meta_description_en: '',
        meta_keywords_ar: '',
        meta_keywords_en: '',
        is_published: false,
        is_featured: false,
    });

    const { data: post, isLoading: postLoading } = useQuery({
        queryKey: ['admin-post', id],
        queryFn: async () => {
            if (isNew) return null;
            const { data, error } = await (supabase as any)
                .from('blog_posts')
                .select('*')
                .eq('id', id)
                .maybeSingle();
            if (error) throw error;
            return data as any;
        },
        enabled: !isNew,
    });

    const { data: categories, isLoading: categoriesLoading } = useQuery({
        queryKey: ['blog-categories-admin'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('categories')
                .select('*')
                .eq('type' as any, 'blog' as any)
                .order('sort_order');
            if (error) throw error;
            return data as any;
        },
    });

    useEffect(() => {
        if (post) {
            setFormData({
                slug: post.slug || '',
                category_id: post.category_id || '',
                title_ar: post.title_ar || '',
                title_en: post.title_en || '',
                excerpt_ar: post.excerpt_ar || '',
                excerpt_en: post.excerpt_en || '',
                content_ar: post.content_ar || '',
                content_en: post.content_en || '',
                featured_image: post.featured_image || '',
                meta_title_ar: post.meta_title_ar || '',
                meta_title_en: post.meta_title_en || '',
                meta_description_ar: post.meta_description_ar || '',
                meta_description_en: post.meta_description_en || '',
                meta_keywords_ar: post.meta_keywords_ar || '',
                meta_keywords_en: post.meta_keywords_en || '',
                is_published: post.is_published || false,
                is_featured: post.is_featured || false,
            });
        }
    }, [post]);

    const saveMutation = useMutation({
        mutationFn: async (data: typeof formData) => {
            const payload: any = {
                slug: data.slug,
                category_id: data.category_id || null,
                title_ar: data.title_ar,
                title_en: data.title_en,
                // excerpt_ar: data.excerpt_ar, // Removed manually
                // excerpt_en: data.excerpt_en, // Removed manually
                content_ar: data.content_ar,
                content_en: data.content_en,
                featured_image: data.featured_image,
                is_published: data.is_published,
                is_featured: data.is_featured,
                published_at: data.is_published ? new Date().toISOString() : null,
            };

            if (isNew) {
                console.log('Sending payload:', payload);
                const { error } = await (supabase as any).from('blog_posts').insert([payload]);
                if (error) {
                    console.error('Supabase Insert Error:', error.message, error.details, error.hint);
                    throw error;
                }
            } else {
                const { error } = await (supabase as any)
                    .from('blog_posts')
                    .update(payload)
                    .eq('id', id);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
            toast.success(language === 'ar' ? 'تم الحفظ بنجاح' : 'Saved successfully');
            if (typeof window !== 'undefined') {
                (window as any).__adminIsDirty = false;
            }
            router.push('/admin/posts');
        },
        onError: (error) => {
            console.error('Save POST error:', error);
            toast.error(language === 'ar' ? 'فشل الحفظ' : 'Failed to save');
        },
    });

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleTitleChange = (field: 'title_ar' | 'title_en', value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
            slug: prev.slug || generateSlug(value),
        }));
    };

    const [isDirty, setIsDirty] = useState(false);

    // Track changes to set dirty state
    useEffect(() => {
        if (!post && !isNew) return;

        const checkIsDirty = () => {
            if (isNew) {
                return (
                    formData.title_ar !== '' ||
                    formData.title_en !== '' ||
                    formData.content_ar !== '' ||
                    formData.content_en !== '' ||
                    formData.slug !== '' ||
                    formData.featured_image !== ''
                );
            }

            if (!post) return false;

            return (
                formData.slug !== (post.slug || '') ||
                formData.category_id !== (post.category_id || '') ||
                formData.title_ar !== (post.title_ar || '') ||
                formData.title_en !== (post.title_en || '') ||
                formData.content_ar !== (post.content_ar || '') ||
                formData.content_en !== (post.content_en || '') ||
                formData.featured_image !== (post.featured_image || '') ||
                formData.is_published !== (post.is_published || false) ||
                formData.is_featured !== (post.is_featured || false)
            );
        };

        const dirty = checkIsDirty();
        setIsDirty(dirty);
        if (typeof window !== 'undefined') {
            (window as any).__adminIsDirty = dirty;
        }
    }, [formData, post, isNew]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined') {
                (window as any).__adminIsDirty = false;
            }
        };
    }, []);

    // Warning on browser close/refresh
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    const [showExitConfirmation, setShowExitConfirmation] = useState(false);

    const handleBack = () => {
        if (isDirty) {
            setShowExitConfirmation(true);
        } else {
            router.push('/admin/posts');
        }
    };

    const [showValidation, setShowValidation] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowValidation(true);

        const errors: string[] = [];
        if (!formData.title_ar) errors.push(language === 'ar' ? 'العنوان بالعربية' : 'Arabic Title');
        if (!formData.title_en) errors.push(language === 'ar' ? 'العنوان بالإنجليزية' : 'English Title');
        if (!formData.content_ar) errors.push(language === 'ar' ? 'المحتوى العربي' : 'Arabic Content');
        if (!formData.content_en) errors.push(language === 'ar' ? 'المحتوى الإنجليزي' : 'English Content');

        if (errors.length > 0) {
            const errorMessage = language === 'ar'
                ? `يرجى ملء الحقول التالية: ${errors.join('، ')}`
                : `Please fill in the following fields: ${errors.join(', ')}`;
            toast.error(errorMessage);
            return;
        }

        // Auto-generate slug if empty
        let finalSlug = formData.slug;
        if (!finalSlug) {
            finalSlug = generateSlug(formData.title_en || formData.title_ar);
        }

        saveMutation.mutate({ ...formData, slug: finalSlug });
    };

    if (postLoading || categoriesLoading) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleBack}
                    >
                        <BackArrow className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            {isNew
                                ? (language === 'ar' ? 'مقالة جديدة' : 'New Post')
                                : (language === 'ar' ? 'تعديل المقالة' : 'Edit Post')
                            }
                        </h1>
                    </div>
                </div>
                <Button
                    type="submit"
                    disabled={saveMutation.isPending}
                    className="bg-gradient-gold text-primary hover:opacity-90"
                >
                    {saveMutation.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin me-2" />
                    ) : (
                        <Save className="w-4 h-4 me-2" />
                    )}
                    {language === 'ar' ? 'حفظ' : 'Save'}
                </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Arabic Content */}
                    <div className={`bg-card rounded-xl p-6 border transition-colors space-y-4 ${showValidation && (!formData.title_ar || !formData.content_ar) ? 'border-destructive/50' : 'border-border'}`}>
                        <h2 className="text-lg font-semibold border-b border-border pb-2">
                            {language === 'ar' ? 'المحتوى العربي' : 'Arabic Content'}
                        </h2>
                        <div className="space-y-2">
                            <Label className={showValidation && !formData.title_ar ? 'text-destructive' : ''}>{language === 'ar' ? 'العنوان بالعربية *' : 'Arabic Title *'}</Label>
                            <Input
                                value={formData.title_ar}
                                onChange={(e) => handleTitleChange('title_ar', e.target.value)}
                                dir="rtl"
                                className={showValidation && !formData.title_ar ? 'border-destructive' : ''}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className={showValidation && !formData.content_ar ? 'text-destructive' : ''}>{language === 'ar' ? 'المحتوى بالعربية *' : 'Arabic Content *'}</Label>
                            <RichTextEditor
                                content={formData.content_ar}
                                onChange={(content) => setFormData({ ...formData, content_ar: content })}
                                placeholder={language === 'ar' ? 'ابدأ الكتابة...' : 'Start writing...'}
                                dir="rtl"
                            />
                        </div>
                    </div>

                    {/* English Content */}
                    <div className={`bg-card rounded-xl p-6 border transition-colors space-y-4 ${showValidation && (!formData.title_en || !formData.content_en) ? 'border-destructive/50' : 'border-border'}`}>
                        <h2 className="text-lg font-semibold border-b border-border pb-2">
                            {language === 'ar' ? 'المحتوى الإنجليزي' : 'English Content'}
                        </h2>
                        <div className="space-y-2">
                            <Label className={showValidation && !formData.title_en ? 'text-destructive' : ''}>{language === 'ar' ? 'العنوان بالإنجليزية *' : 'English Title *'}</Label>
                            <Input
                                value={formData.title_en}
                                onChange={(e) => handleTitleChange('title_en', e.target.value)}
                                dir="ltr"
                                className={showValidation && !formData.title_en ? 'border-destructive' : ''}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className={showValidation && !formData.content_en ? 'text-destructive' : ''}>{language === 'ar' ? 'المحتوى بالإنجليزية *' : 'English Content *'}</Label>
                            <RichTextEditor
                                content={formData.content_en}
                                onChange={(content) => setFormData({ ...formData, content_en: content })}
                                placeholder="Start writing..."
                                dir="ltr"
                            />
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                        <h2 className="text-lg font-semibold border-b border-border pb-2">SEO</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Meta Title (AR)</Label>
                                <Input
                                    value={formData.meta_title_ar}
                                    onChange={(e) => setFormData({ ...formData, meta_title_ar: e.target.value })}
                                    dir="rtl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Meta Title (EN)</Label>
                                <Input
                                    value={formData.meta_title_en}
                                    onChange={(e) => setFormData({ ...formData, meta_title_en: e.target.value })}
                                    dir="ltr"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Meta Description (AR)</Label>
                                <Textarea
                                    value={formData.meta_description_ar}
                                    onChange={(e) => setFormData({ ...formData, meta_description_ar: e.target.value })}
                                    dir="rtl"
                                    rows={2}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Meta Description (EN)</Label>
                                <Textarea
                                    value={formData.meta_description_en}
                                    onChange={(e) => setFormData({ ...formData, meta_description_en: e.target.value })}
                                    dir="ltr"
                                    rows={2}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Meta Keywords (AR)</Label>
                                <Input
                                    value={formData.meta_keywords_ar}
                                    onChange={(e) => setFormData({ ...formData, meta_keywords_ar: e.target.value })}
                                    dir="rtl"
                                    placeholder="كلمات مفتاحية مفصولة بفاصلة"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Meta Keywords (EN)</Label>
                                <Input
                                    value={formData.meta_keywords_en}
                                    onChange={(e) => setFormData({ ...formData, meta_keywords_en: e.target.value })}
                                    dir="ltr"
                                    placeholder="Keywords separated by comma"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Settings */}
                    <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                        <h2 className="text-lg font-semibold border-b border-border pb-2">
                            {language === 'ar' ? 'الإعدادات' : 'Settings'}
                        </h2>

                        <div className="space-y-2">
                            <Label>Slug</Label>
                            <Input
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                dir="ltr"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>{language === 'ar' ? 'الفئة' : 'Category'}</Label>
                            <Select
                                value={formData.category_id}
                                onValueChange={(value: string) => setFormData({ ...formData, category_id: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder={language === 'ar' ? 'اختر فئة' : 'Select category'} />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories?.map((cat: any) => (
                                        <SelectItem key={cat.id} value={cat.id}>
                                            {language === 'ar' ? cat.name_ar : cat.name_en}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>{language === 'ar' ? 'صورة الغلاف' : 'Featured Image'}</Label>
                            <ImageUpload
                                value={formData.featured_image}
                                onChange={(url) => setFormData({ ...formData, featured_image: url })}
                                bucket="images"
                                folder="posts"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label>{language === 'ar' ? 'منشور' : 'Published'}</Label>
                            <Switch
                                checked={formData.is_published}
                                onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label>{language === 'ar' ? 'مميز' : 'Featured'}</Label>
                            <Switch
                                checked={formData.is_featured}
                                onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <UnsavedChangesDialog
                isOpen={showExitConfirmation}
                onConfirm={() => {
                    if (typeof window !== 'undefined') {
                        (window as any).__adminIsDirty = false;
                    }
                    router.push('/admin/posts');
                }}
                onCancel={() => setShowExitConfirmation(false)}
            />
        </form >
    );
};

export default AdminPostEditorClient;
