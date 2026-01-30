import type { Metadata } from 'next';
import AdminPostsClient from './AdminPostsClient';

export const metadata: Metadata = {
    title: 'إدارة المدونة - Admin Blog Posts',
};

export default function AdminPostsPage() {
    return <AdminPostsClient />;
}
