import type { Metadata } from 'next';
import AdminPostEditorClient from './AdminPostEditorClient';

export const metadata: Metadata = {
    title: 'محرر المقالات - Post Editor',
};

export default function AdminPostEditorPage() {
    return <AdminPostEditorClient />;
}
