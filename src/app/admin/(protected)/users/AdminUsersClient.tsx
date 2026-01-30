'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Trash2, Shield, Loader2, AlertCircle, KeyRound, User } from 'lucide-react';
import { toast } from 'sonner';
import { useEffect } from 'react';
import UnsavedChangesDialog from '@/components/admin/UnsavedChangesDialog';

const AdminUsersClient = () => {
    const { user: currentUser } = useAuth();
    const queryClient = useQueryClient();
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState<string | null>(null);
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Edit User State
    const [editEmail, setEditEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);
    const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

    // Fetch Users from our secure Admin API
    const { data: users, isLoading, error, refetch } = useQuery({
        queryKey: ['admin-users-full'],
        queryFn: async () => {
            const res = await fetch('/api/admin/users');
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Failed to fetch users');
            }
            return res.json();
        },
        staleTime: 0,
        refetchOnMount: 'always',
    });

    // Add User Mutation
    const addUserMutation = useMutation({
        mutationFn: async (data: { email: string; password: string }) => {
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, role: 'admin' })
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Failed to create user');
            }
            return res.json();
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['admin-users-full'] });
            await refetch();
            toast.success('تمت إضافة المستخدم بنجاح وتعيينه كأدمن');
            setIsAddOpen(false);
            setNewUserEmail('');
            setNewUserPassword('');
            setConfirmPassword('');
        },
        onError: (error: any) => {
            toast.error(error.message);
        },
    });

    // Delete User Mutation
    const deleteUserMutation = useMutation({
        mutationFn: async (userId: string) => {
            const res = await fetch(`/api/admin/users?id=${userId}`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Failed to delete user');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-users-full'] });
            toast.success('تم حذف المستخدم بنجاح');
        },
        onError: (error: any) => {
            toast.error(error.message);
        },
    });

    // Update User Mutation (Email & Password)
    const updateUserMutation = useMutation({
        mutationFn: async ({ id, email, password }: { id: string, email?: string, password?: string }) => {
            const body: any = { id };
            if (email) body.email = email;
            if (password) body.password = password;

            const res = await fetch('/api/admin/users', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Failed to update user');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-users-full'] });
            toast.success('تم تحديث بيانات المستخدم بنجاح');
            setOpenEditDialog(null);
            setEditEmail('');
            setNewPassword('');
            setConfirmNewPassword('');
        },
        onError: (error: any) => {
            toast.error(error.message);
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newUserEmail.trim() || !newUserPassword.trim() || !confirmPassword.trim()) {
            toast.error('يرجى إدخال جميع البيانات');
            return;
        }
        if (newUserPassword !== confirmPassword) {
            toast.error('كلمات المرور غير متطابقة');
            return;
        }
        setIsSubmitting(true);
        try {
            await addUserMutation.mutateAsync({ email: newUserEmail.trim(), password: newUserPassword.trim() });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Dirty state tracking for Add/Edit forms
    useEffect(() => {
        const isAddDirty = newUserEmail !== '' || newUserPassword !== '' || confirmPassword !== '';
        const isEditDirty = editEmail !== '' || newPassword !== '' || confirmNewPassword !== '';

        const dirty = isAddDirty || isEditDirty;
        if (typeof window !== 'undefined') {
            (window as any).__adminIsDirty = dirty;
        }
    }, [newUserEmail, newUserPassword, confirmPassword, editEmail, newPassword, confirmNewPassword]);

    const closeAllModals = () => {
        setIsAddOpen(false);
        setOpenEditDialog(null);
        setShowExitConfirmation(false);
        setNewUserEmail('');
        setNewUserPassword('');
        setConfirmPassword('');
        setEditEmail('');
        setNewPassword('');
        setConfirmNewPassword('');
        if (typeof window !== 'undefined') {
            (window as any).__adminIsDirty = false;
        }
    };

    const handleOpenChangeAction = (isOpen: boolean, setter: (open: boolean) => void) => {
        if (!isOpen && (window as any).__adminIsDirty) {
            setPendingAction(() => () => setter(false));
            setShowExitConfirmation(true);
        } else {
            setter(isOpen);
            if (!isOpen) {
                // Clear state when closing normally (after save or non-dirty cancel)
                if (!(window as any).__adminIsDirty) {
                    setNewUserEmail('');
                    setNewUserPassword('');
                    setConfirmPassword('');
                    setEditEmail('');
                    setNewPassword('');
                    setConfirmNewPassword('');
                }
            }
        }
    };

    const handleUserUpdate = async (e: React.FormEvent, userId: string) => {
        e.preventDefault();

        // Validation
        if (newPassword && newPassword !== confirmNewPassword) {
            toast.error('كلمات المرور غير متطابقة');
            return;
        }

        if (!editEmail && !newPassword) {
            toast.error('لم يتم إجراء أي تغييرات');
            return;
        }

        setIsSubmitting(true);
        try {
            await updateUserMutation.mutateAsync({
                id: userId,
                email: editEmail,
                password: newPassword || undefined
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (error) {
        return (
            <div className="p-6 bg-red-50 text-red-600 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 font-bold mb-2">
                    <AlertCircle className="w-5 h-5" />
                    خطأ في تحميل البيانات
                </div>
                <p>{(error as Error).message}</p>
                <p className="text-sm mt-2 text-red-500">تأكد من إعادة تشغيل السيرفر بعد إضافة الـ Service Key.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                        إدارة المستخدمين
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        التحكم الكامل في حسابات الأدمن والمستخدمين
                    </p>
                </div>

                <Dialog open={isAddOpen} onOpenChange={(open) => handleOpenChangeAction(open, setIsAddOpen)}>
                    <DialogTrigger asChild>
                        <Button className="bg-gradient-gold text-primary hover:opacity-90 font-bold">
                            <Plus className="w-5 h-5 me-2" />
                            مستخدم جديد
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className="text-right">
                            <DialogTitle>إضافة مدير جديد</DialogTitle>
                            <DialogDescription>
                                قم بملء البيانات أدناه لإنشاء حساب مدير جديد.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                            <div className="flex flex-col gap-5">
                                <label className="text-sm font-medium">البريد الإلكتروني</label>
                                <Input
                                    type="email"
                                    placeholder="user@example.com"
                                    required
                                    value={newUserEmail}
                                    onChange={(e) => setNewUserEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <label className="text-sm font-medium">كلمة المرور</label>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    required
                                    minLength={6}
                                    value={newUserPassword}
                                    onChange={(e) => setNewUserPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <label className="text-sm font-medium">تأكيد كلمة المرور</label>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    required
                                    minLength={6}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-700">
                                سيتم إنشاء المستخدم وتعيينه تلقائياً كـ <b>Admin</b>.
                            </div>
                            <Button type="submit" className="w-full bg-gradient-gold text-primary font-bold" disabled={isSubmitting}>
                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'إنشاء الحساب'}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Current User Section */}
            {currentUser && (
                <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl border-2 border-primary/20 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-lg">{currentUser.email}</span>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                        أنت
                                    </span>
                                </div>
                                <span className="text-xs text-muted-foreground font-mono">
                                    ID: {currentUser.id.substring(0, 12)}...
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Edit Current User */}
                            <Dialog open={openEditDialog === currentUser.id} onOpenChange={(open) => {
                                handleOpenChangeAction(open, (o) => setOpenEditDialog(o ? currentUser.id : null));
                                if (open) setEditEmail(currentUser.email || '');
                            }}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="gap-1">
                                        <KeyRound className="w-3 h-3" />
                                        تعديل بياناتي
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader className="text-right">
                                        <DialogTitle>تعديل البيانات الخاصة بك</DialogTitle>
                                        <DialogDescription>
                                            يمكنك تحديث البريد الإلكتروني أو تغيير كلمة المرور الخاصة بك هنا.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={(e) => handleUserUpdate(e, currentUser.id)} className="space-y-6 pt-4">
                                        <div className="flex flex-col gap-5">
                                            <label className="text-sm font-medium">البريد الإلكتروني</label>
                                            <Input
                                                type="email"
                                                required
                                                value={editEmail}
                                                onChange={(e) => setEditEmail(e.target.value)}
                                            />
                                        </div>
                                        <hr className="border-muted" />
                                        <div className="flex flex-col gap-5">
                                            <label className="text-sm font-medium">كلمة المرور الجديدة (اختياري)</label>
                                            <Input
                                                type="password"
                                                placeholder="اتركها فارغة إذا لا تريد التغيير"
                                                minLength={6}
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </div>
                                        {newPassword && (
                                            <div className="flex flex-col gap-5">
                                                <label className="text-sm font-medium">تأكيد كلمة المرور</label>
                                                <Input
                                                    type="password"
                                                    placeholder="********"
                                                    required
                                                    minLength={6}
                                                    value={confirmNewPassword}
                                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                />
                                            </div>
                                        )}
                                        <Button type="submit" className="w-full bg-primary text-white" disabled={isSubmitting}>
                                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'حفظ التغييرات'}
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            )}

            {/* Other Users Table */}
            <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-right">المستخدم</TableHead>
                            <TableHead className="text-right">الحالة</TableHead>
                            <TableHead className="text-right">آخر ظهور</TableHead>
                            <TableHead className="text-right">إجراءات</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-gold" />
                                </TableCell>
                            </TableRow>
                        ) : users && users.length > 0 ? (
                            users
                                .filter((user: any) => user.id !== currentUser?.id)
                                .map((user: any) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                                    {(user.email?.[0] || 'U').toUpperCase()}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span dir="ltr" className="text-right font-semibold text-foreground">
                                                        {user.email}
                                                    </span>
                                                    <span className="text-[10px] text-muted-foreground font-mono">
                                                        {user.id.substring(0, 8)}...
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                {user.user_metadata?.role === 'admin' ? (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gold/10 text-gold-dark border border-gold/20">
                                                        <Shield className="w-3 h-3 me-1" />
                                                        Admin
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                        User
                                                    </span>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">
                                            {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('ar-EG') : '-'}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                {/* Edit User Dialog */}
                                                <Dialog open={openEditDialog === user.id} onOpenChange={(open) => {
                                                    handleOpenChangeAction(open, (o) => setOpenEditDialog(o ? user.id : null));
                                                    if (open) setEditEmail(user.email || '');
                                                }}>
                                                    <DialogTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="text-xs h-8 gap-1">
                                                            <KeyRound className="w-3 h-3" />
                                                            تعديل
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader className="text-right">
                                                            <DialogTitle>تعديل بيانات {user.email}</DialogTitle>
                                                            <DialogDescription>
                                                                تعديل البيانات الأساسية وكلمة المرور للمستخدم المختار.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <form onSubmit={(e) => handleUserUpdate(e, user.id)} className="space-y-6 pt-4">
                                                            <div className="flex flex-col gap-5">
                                                                <label className="text-sm font-medium">البريد الإلكتروني</label>
                                                                <Input
                                                                    type="email"
                                                                    required
                                                                    value={editEmail}
                                                                    onChange={(e) => setEditEmail(e.target.value)}
                                                                />
                                                            </div>
                                                            <hr className="border-muted" />
                                                            <div className="flex flex-col gap-5">
                                                                <label className="text-sm font-medium">كلمة المرور الجديدة (اختياري)</label>
                                                                <Input
                                                                    type="password"
                                                                    placeholder="اتركها فارغة إذا لا تريد التغيير"
                                                                    minLength={6}
                                                                    value={newPassword}
                                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                                />
                                                            </div>
                                                            {newPassword && (
                                                                <div className="flex flex-col gap-5">
                                                                    <label className="text-sm font-medium">تأكيد كلمة المرور</label>
                                                                    <Input
                                                                        type="password"
                                                                        placeholder="********"
                                                                        required
                                                                        minLength={6}
                                                                        value={confirmNewPassword}
                                                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                                    />
                                                                </div>
                                                            )}
                                                            <Button type="submit" className="w-full bg-primary text-white" disabled={isSubmitting}>
                                                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'حفظ التغييرات'}
                                                            </Button>
                                                        </form>
                                                    </DialogContent>
                                                </Dialog>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                                    onClick={() => {
                                                        if (confirm('هل أنت متأكد من حذف هذا المستخدم؟ هذا الإجراء لا يمكن التراجع عنه.')) {
                                                            deleteUserMutation.mutate(user.id);
                                                        }
                                                    }}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-muted-foreground/50" />
                                        </div>
                                        <p>لا يوجد مستخدمين آخرين</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <UnsavedChangesDialog
                isOpen={showExitConfirmation}
                onConfirm={() => {
                    if (pendingAction) pendingAction();
                    closeAllModals();
                }}
                onCancel={() => {
                    setShowExitConfirmation(false);
                    setPendingAction(null);
                }}
            />
        </div>
    );
};

export default AdminUsersClient;
