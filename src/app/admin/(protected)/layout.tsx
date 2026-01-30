'use client';

import AdminLayout from '@/components/admin/AdminLayout';

export default function ProtectedAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AdminLayout>{children}</AdminLayout>;
}
