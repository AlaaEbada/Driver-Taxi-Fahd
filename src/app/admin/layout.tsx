import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { Providers } from '../providers';
import '../globals.css';

const tajawal = Tajawal({
    subsets: ['latin', 'arabic'],
    weight: ['200', '300', '400', '500', '700', '800', '900'],
    variable: '--font-tajawal',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Admin Dashboard - Driver Taxi Fahd',
    description: 'Admin Dashboard for Driver Taxi Fahd',
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="ltr" className={tajawal.variable} data-scroll-behavior="smooth">
            <body suppressHydrationWarning={true}>
                <Providers locale="en">
                    {children}
                </Providers>
            </body>
        </html>
    );
}
