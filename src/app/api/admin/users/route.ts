import { createClient as createClientJS } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

import { createClient } from '@/integrations/supabase/server';

// Helper to get admin client safely
function getAdminClient() {
    if (!supabaseUrl || !supabaseServiceKey) {
        return null;
    }
    return createClientJS(supabaseUrl, supabaseServiceKey);
}

// Helper to verify admin session
async function verifyAdminSession() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) return false;

    // Check if user is in admin_users table
    // We can use the same check as middleware or a direct DB check
    // Since RLS is enabled, we can try to select from admin_users
    const { data: adminUser } = await supabase
        .from('admin_users')
        .select('user_id')
        .eq('user_id', user.id)
        .single();

    return !!adminUser;
}

export async function GET(req: NextRequest) {
    try {
        const isAdmin = await verifyAdminSession();
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabaseAdmin = getAdminClient();
        if (!supabaseAdmin) {
            return NextResponse.json(
                { error: 'Server configuration error: SUPABASE_SERVICE_ROLE_KEY is missing.' },
                { status: 500 }
            );
        }

        // Fetch all users from Auth API
        const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers();

        if (error) throw error;

        console.log(`[API] Extracted ${users.length} users from Supabase Auth`);
        return NextResponse.json(users);

    } catch (error: any) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const isAdmin = await verifyAdminSession();
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabaseAdmin = getAdminClient();
        if (!supabaseAdmin) {
            return NextResponse.json({ error: 'Configuration Error: Missing Service Key' }, { status: 500 });
        }
        const body = await req.json();
        const { email, password, role } = body;

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // Create user
        const { data: user, error } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true, // Auto confirm email
            user_metadata: { role: role || 'user' }
        });

        if (error) throw error;

        // Always add to admin_users table if user creation was successful
        if (user.user) {
            const emailToInsert = user.user.email || email;
            console.log(`[API] Attempting to add user to admin_users table.`);
            console.log(`[API] Data to insert -> user_id: ${user.user.id}, email: ${emailToInsert}`);

            if (!emailToInsert) {
                console.error('[API] Critical Error: Email is missing for admin_users insert!');
            }

            const { error: adminError } = await supabaseAdmin
                .from('admin_users')
                .insert([{
                    user_id: user.user.id,
                    email: emailToInsert
                }]);

            if (adminError) {
                console.error('[API] Failed to add to admin_users table:', adminError);
            } else {
                console.log('[API] Successfully added to admin_users table');
            }
        }

        return NextResponse.json(user);

    } catch (error: any) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const isAdmin = await verifyAdminSession();
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabaseAdmin = getAdminClient();
        if (!supabaseAdmin) {
            return NextResponse.json({ error: 'Configuration Error: Missing Service Key' }, { status: 500 });
        }
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('id');

        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

        if (error) throw error;

        // Cleanup admin_users table if needed
        await supabaseAdmin.from('admin_users').delete().eq('user_id', userId);

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const isAdmin = await verifyAdminSession();
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabaseAdmin = getAdminClient();
        if (!supabaseAdmin) {
            return NextResponse.json({ error: 'Configuration Error: Missing Service Key' }, { status: 500 });
        }
        const body = await req.json();
        const { id, password, email } = body;

        if (!id) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        const updates: any = {};
        if (password) updates.password = password;
        if (email) updates.email = email;

        const { data: user, error } = await supabaseAdmin.auth.admin.updateUserById(id, updates);

        if (error) throw error;

        return NextResponse.json(user);

    } catch (error: any) {
        console.error('Error updating user:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
