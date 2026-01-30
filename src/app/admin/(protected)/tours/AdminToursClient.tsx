'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Map, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminToursClient() {
    const { language } = useLanguage();

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 text-right" dir="rtl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                        <Map className="w-8 h-8 text-gold" />
                        {language === 'ar' ? 'إدارة الجولات السياحية' : 'Tours Management'}
                    </h1>
                    <p className="text-muted-foreground">
                        {language === 'ar' ? 'إضافة وتعديل البرامج السياحية' : 'Manage tour programs and itineraries'}
                    </p>
                </motion.div>

                <Button className="bg-gradient-gold text-primary font-bold">
                    <Plus className="w-5 h-5 me-2" />
                    {language === 'ar' ? 'إضافة برنامج جديد' : 'Add New Program'}
                </Button>
            </div>

            <div className="bg-card rounded-2xl p-12 text-center border border-border shadow-sm">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Map className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                    {language === 'ar' ? 'لا توجد برامج مضافة' : 'No Programs Added'}
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    {language === 'ar'
                        ? 'يمكنك البدء بإضافة برامج سياحية جديدة لعرضها في صفحة البرامج.'
                        : 'Start by adding new tour programs to be displayed on the tours page.'}
                </p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary">
                    {language === 'ar' ? 'إضافة برنامج جديد' : 'Add New Program'}
                </Button>
            </div>
        </div>
    );
}
