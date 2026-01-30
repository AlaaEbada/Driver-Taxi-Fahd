import { Metadata } from 'next';
import AdminToursClient from './AdminToursClient';

export const metadata: Metadata = {
    title: 'Admin - Tours Management',
};

export default function AdminToursPage() {
    return <AdminToursClient />;
}
