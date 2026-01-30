'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertCircle, LogOut } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface UnsavedChangesDialogProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const UnsavedChangesDialog = ({ isOpen, onConfirm, onCancel }: UnsavedChangesDialogProps) => {
    const { language } = useLanguage();

    return (
        <AlertDialog open={isOpen} onOpenChange={(open) => !open && onCancel()}>
            <AlertDialogContent className="bg-card/80 backdrop-blur-2xl border-gold/20 rounded-[2rem] shadow-2xl max-w-md p-0 overflow-hidden">
                <div className="bg-gradient-gold h-2 w-full" />

                <div className="p-8">
                    <AlertDialogHeader>
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                        </div>

                        <AlertDialogTitle className="text-2xl font-bold text-center text-foreground">
                            {language === 'ar' ? 'تنبيه: محتوى غير محفوظ!' : 'Unsaved Changes!'}
                        </AlertDialogTitle>

                        <AlertDialogDescription className="text-muted-foreground text-center text-base pt-4 leading-relaxed">
                            {language === 'ar'
                                ? 'لقد أجريت تعديلات لم يتم حفظها بعد. هل أنت متأكد من رغبتك في الانتقال لصفحة أخرى؟ قد تفقد كل ما كتبته.'
                                : 'You have changes that haven\'t been saved yet. Are you sure you want to leave this page? You might lose your progress.'}
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 mt-10 w-full sm:justify-center px-4">
                        <AlertDialogCancel
                            onClick={onCancel}
                            className="w-full sm:w-auto px-8 h-12 rounded-xl border-border bg-background hover:bg-muted text-foreground font-bold transition-all"
                        >
                            {language === 'ar' ? 'البقاء هنا' : 'Stay Here'}
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={onConfirm}
                            className="w-full sm:w-auto px-8 h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-600/20 transition-all border-none"
                        >
                            <LogOut className="w-4 h-4 me-2" />
                            {language === 'ar' ? 'مغادرة الصفحة' : 'Leave Anyway'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default UnsavedChangesDialog;
