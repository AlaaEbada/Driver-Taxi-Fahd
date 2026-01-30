-- إنشاء Storage Bucket للصور
-- قم بتشغيل هذا الكود في SQL Editor في Supabase

-- 1. إنشاء الـ Bucket (إذا لم يكن موجوداً)
-- يجب إنشاؤه من واجهة Storage في Supabase Dashboard
-- اسم الـ Bucket: images
-- Public: نعم

-- 2. إعطاء صلاحيات القراءة للجميع
CREATE POLICY "Public can view images"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- 3. السماح للمستخدمين المسجلين برفع الصور
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' AND
  auth.role() = 'authenticated'
);

-- 4. السماح للمستخدمين المسجلين بتحديث الصور
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'images' AND
  auth.role() = 'authenticated'
);

-- 5. السماح للمستخدمين المسجلين بحذف الصور
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' AND
  auth.role() = 'authenticated'
);

-- ملاحظة: تأكد من إنشاء الـ Bucket أولاً من واجهة Storage
