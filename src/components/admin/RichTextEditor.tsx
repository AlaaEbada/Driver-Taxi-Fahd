'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { useState } from 'react';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    List,
    ListOrdered,
    Heading2,
    Heading3,
    Quote,
    Undo,
    Redo,
    Link as LinkIcon,
    Unlink,
    RemoveFormatting
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    placeholder?: string;
    dir?: 'ltr' | 'rtl';
}

const RichTextEditor = ({ content, onChange, placeholder, dir = 'ltr' }: RichTextEditorProps) => {
    const [linkDialogOpen, setLinkDialogOpen] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                // Explicitly disable these to avoid duplicate warnings if included in bundle
                // @ts-ignore - these might not exist in standard StarterKit but help if they are present
                link: false,
                // @ts-ignore
                underline: false,
            }),
            Placeholder.configure({
                placeholder: placeholder || 'Start writing...',
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-600 underline hover:text-blue-800 cursor-pointer',
                    rel: 'noopener noreferrer',
                    target: '_blank',
                },
            }),
            Underline,
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[300px] max-w-none p-4',
                dir,
            },
        },
        immediatelyRender: false,
    });

    if (!editor) {
        return null;
    }

    const handleSetLink = () => {
        const existingLink = editor.getAttributes('link').href;
        setLinkUrl(existingLink || '');
        setLinkDialogOpen(true);
    };

    const handleSaveLink = () => {
        if (linkUrl) {
            editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: linkUrl })
                .run();
        }
        setLinkDialogOpen(false);
        setLinkUrl('');
    };

    const handleRemoveLink = () => {
        editor.chain().focus().unsetLink().run();
    };

    const MenuButton = ({
        onClick,
        isActive,
        icon: Icon,
        label,
        disabled = false
    }: {
        onClick: () => void;
        isActive?: boolean;
        icon: any;
        label: string;
        disabled?: boolean;
    }) => (
        <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "h-8 w-8 p-0 hover:bg-gold/10 hover:text-gold transition-colors",
                isActive && "bg-gold/20 text-gold"
            )}
            title={label}
        >
            <Icon className="w-4 h-4" />
        </Button>
    );

    return (
        <div className="border border-border rounded-lg overflow-hidden bg-background">
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-border bg-muted/30 flex-wrap">
                <MenuButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive('bold')}
                    icon={Bold}
                    label="Bold (Ctrl+B)"
                />
                <MenuButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive('italic')}
                    icon={Italic}
                    label="Italic (Ctrl+I)"
                />
                <MenuButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    isActive={editor.isActive('underline')}
                    icon={UnderlineIcon}
                    label="Underline (Ctrl+U)"
                />

                <div className="w-px h-6 bg-border mx-1" />

                <MenuButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editor.isActive('heading', { level: 2 })}
                    icon={Heading2}
                    label="Heading 2"
                />
                <MenuButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    isActive={editor.isActive('heading', { level: 3 })}
                    icon={Heading3}
                    label="Heading 3"
                />

                <div className="w-px h-6 bg-border mx-1" />

                <MenuButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive('bulletList')}
                    icon={List}
                    label="Bullet List"
                />
                <MenuButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editor.isActive('orderedList')}
                    icon={ListOrdered}
                    label="Ordered List"
                />

                <div className="w-px h-6 bg-border mx-1" />

                <MenuButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    isActive={editor.isActive('blockquote')}
                    icon={Quote}
                    label="Quote"
                />

                <div className="w-px h-6 bg-border mx-1" />

                <MenuButton
                    onClick={handleSetLink}
                    isActive={editor.isActive('link')}
                    icon={LinkIcon}
                    label="Add Link (Ctrl+K)"
                />
                <MenuButton
                    onClick={handleRemoveLink}
                    disabled={!editor.isActive('link')}
                    icon={Unlink}
                    label="Remove Link"
                />

                <div className="w-px h-6 bg-border mx-1" />

                <MenuButton
                    onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
                    icon={RemoveFormatting}
                    label="Clear Formatting"
                />

                <div className="w-px h-6 bg-border mx-1" />

                <MenuButton
                    onClick={() => editor.chain().focus().undo().run()}
                    icon={Undo}
                    label="Undo (Ctrl+Z)"
                />
                <MenuButton
                    onClick={() => editor.chain().focus().redo().run()}
                    icon={Redo}
                    label="Redo (Ctrl+Y)"
                />
            </div>

            {/* Editor */}
            <EditorContent editor={editor} />

            {/* Link Dialog */}
            <Dialog open={linkDialogOpen} onOpenChange={setLinkDialogOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>إضافة رابط / Add Link</DialogTitle>
                        <DialogDescription>
                            أدخل عنوان URL للرابط / Enter the URL for the link
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="link-url">URL</Label>
                            <Input
                                id="link-url"
                                placeholder="https://example.com"
                                value={linkUrl}
                                onChange={(e) => setLinkUrl(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSaveLink();
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setLinkDialogOpen(false);
                                setLinkUrl('');
                            }}
                        >
                            إلغاء / Cancel
                        </Button>
                        <Button type="button" onClick={handleSaveLink}>
                            حفظ / Save
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RichTextEditor;
