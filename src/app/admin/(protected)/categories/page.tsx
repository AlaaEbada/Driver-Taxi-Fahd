import type { Metadata } from 'next';
import AdminCategoriesClient from './AdminCategoriesClient';

export const metadata: Metadata = {
    title: 'إدارة الفئات - Admin Categories',
};

export default function AdminCategoriesPage() {
    return <AdminCategoriesClient />;
}
