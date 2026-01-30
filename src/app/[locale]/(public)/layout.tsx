import Layout from '@/components/layout/Layout';
import { createClient } from '@/integrations/supabase/server';

export default async function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data } = await supabase
        .from('site_settings')
        .select('key, value_en');

    const settings: Record<string, string> = {};
    (data as any[])?.forEach(row => {
        settings[row.key] = row.value_en || '';
    });

    return <Layout settings={settings}>{children}</Layout>;
}
