import type { Metadata } from 'next';
import AdminSettingsClient from './AdminSettingsClient';

export const metadata: Metadata = {
    title: 'إعدادات الموقع - Site Settings',
};

export default function AdminSettingsPage() {
    return <AdminSettingsClient />;
}
