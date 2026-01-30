'use client';

import { useState, useRef } from 'react';
import { Upload, X, Loader2, Image as ImageIcon, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    bucket?: string;
    folder?: string;
}

const ImageUpload = ({
    value,
    onChange,
    bucket = 'images',
    folder = 'posts'
}: ImageUploadProps) => {
    const { language } = useLanguage();
    const [isUploading, setIsUploading] = useState(false);
    const [showUrlInput, setShowUrlInput] = useState(false);
    const [urlInput, setUrlInput] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast.error(language === 'ar' ? 'يرجى اختيار صورة' : 'Please select an image');
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error(language === 'ar' ? 'حجم الصورة كبير جداً (الحد الأقصى 5 ميجا)' : 'Image too large (max 5MB)');
            return;
        }

        setIsUploading(true);

        try {
            // Generate unique filename
            const fileExt = file.name.split('.').pop();
            const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

            // Upload to Supabase Storage
            const { data, error } = await supabase.storage
                .from(bucket)
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (error) {
                // If bucket doesn't exist, show URL input option
                if (error.message.includes('Bucket not found')) {
                    toast.error(
                        language === 'ar'
                            ? 'التخزين غير متاح. استخدم رابط صورة خارجي بدلاً من ذلك.'
                            : 'Storage not available. Use an external image URL instead.'
                    );
                    setShowUrlInput(true);
                    setIsUploading(false);
                    if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }
                    return;
                }
                throw error;
            }

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from(bucket)
                .getPublicUrl(data.path);

            onChange(publicUrl);
            toast.success(language === 'ar' ? 'تم رفع الصورة بنجاح' : 'Image uploaded successfully');
        } catch (error) {
            console.error('Upload error:', error);
            toast.error(language === 'ar' ? 'فشل رفع الصورة. جرب استخدام رابط خارجي.' : 'Failed to upload image. Try using an external URL.');
            setShowUrlInput(true);
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleUrlSubmit = () => {
        if (!urlInput.trim()) {
            toast.error(language === 'ar' ? 'يرجى إدخال رابط الصورة' : 'Please enter image URL');
            return;
        }

        // Basic URL validation
        try {
            new URL(urlInput);
            onChange(urlInput);
            setUrlInput('');
            setShowUrlInput(false);
            toast.success(language === 'ar' ? 'تم إضافة الصورة' : 'Image added successfully');
        } catch {
            toast.error(language === 'ar' ? 'رابط غير صالح' : 'Invalid URL');
        }
    };

    const handleRemove = () => {
        onChange('');
        setShowUrlInput(false);
    };

    return (
        <div className="space-y-3">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
            />

            {value ? (
                <div className="relative group">
                    <img
                        src={value}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border border-border"
                        onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImage Error%3C/text%3E%3C/svg%3E';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                        >
                            <Upload className="w-4 h-4 me-2" />
                            {language === 'ar' ? 'تغيير' : 'Change'}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            onClick={() => setShowUrlInput(true)}
                            disabled={isUploading}
                        >
                            <Link className="w-4 h-4 me-2" />
                            {language === 'ar' ? 'رابط' : 'URL'}
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={handleRemove}
                            disabled={isUploading}
                        >
                            <X className="w-4 h-4 me-2" />
                            {language === 'ar' ? 'حذف' : 'Remove'}
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    {showUrlInput ? (
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <Input
                                    type="url"
                                    placeholder={language === 'ar' ? 'أدخل رابط الصورة (https://...)' : 'Enter image URL (https://...)'}
                                    value={urlInput}
                                    onChange={(e) => setUrlInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleUrlSubmit()}
                                    className="flex-1"
                                />
                                <Button
                                    type="button"
                                    onClick={handleUrlSubmit}
                                    size="sm"
                                >
                                    {language === 'ar' ? 'إضافة' : 'Add'}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowUrlInput(false)}
                                    size="sm"
                                >
                                    {language === 'ar' ? 'إلغاء' : 'Cancel'}
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {language === 'ar'
                                    ? 'يمكنك استخدام روابط من Unsplash أو Imgur أو أي مصدر آخر'
                                    : 'You can use links from Unsplash, Imgur, or any other source'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                                className="w-full h-48 border-2 border-dashed border-border rounded-lg hover:border-gold hover:bg-gold/5 transition-all flex flex-col items-center justify-center gap-3 group"
                            >
                                {isUploading ? (
                                    <>
                                        <Loader2 className="w-8 h-8 text-gold animate-spin" />
                                        <p className="text-sm text-muted-foreground">
                                            {language === 'ar' ? 'جاري الرفع...' : 'Uploading...'}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                                            <ImageIcon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium text-foreground mb-1">
                                                {language === 'ar' ? 'اضغط لرفع صورة' : 'Click to upload image'}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                PNG, JPG, GIF {language === 'ar' ? 'حتى' : 'up to'} 5MB
                                            </p>
                                        </div>
                                    </>
                                )}
                            </button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowUrlInput(true)}
                                className="w-full"
                                size="sm"
                            >
                                <Link className="w-4 h-4 me-2" />
                                {language === 'ar' ? 'أو استخدم رابط صورة خارجي' : 'Or use external image URL'}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ImageUpload;
