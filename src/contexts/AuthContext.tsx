'use client';

import { useState, useEffect, createContext, useContext, ReactNode, useRef } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  connectGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const mountedRef = useRef(true);

  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  // optimistic admin state from localStorage - fixed to avoid hydration mismatch
  const [isAdmin, setIsAdmin] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await (supabase as any)
        .from('admin_users')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();

      if (!mountedRef.current) return;

      if (error) {
        console.warn('Admin check failed:', error.message);
        return;
      }

      const admin = !!data;
      setIsAdmin(admin);

      if (admin) localStorage.setItem('app_role', 'admin');
      else localStorage.removeItem('app_role');

    } catch (err) {
      console.warn('Admin check exception:', err);
    }
  };

  useEffect(() => {
    mountedRef.current = true;

    const init = async () => {
      // Optimistic check immediately on mount
      if (typeof window !== 'undefined' && localStorage.getItem('app_role') === 'admin') {
        setIsAdmin(true);
      }

      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!mountedRef.current) return;

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          // Wait for admin check so Layout doesn't kick us out
          await checkAdminStatus(session.user.id);
        } else {
          setIsAdmin(false);
          localStorage.removeItem('app_role');
        }

      } catch (err) {
        console.warn('Auth init failed:', err);
      } finally {
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mountedRef.current) return;

        setSession(session);
        setUser(session?.user ?? null);

        if (event === 'SIGNED_OUT') {
          setIsAdmin(false);
          localStorage.removeItem('app_role');
        }

        if (session?.user) {
          // background verify (no blocking UI)
          checkAdminStatus(session.user.id);
        }
      }
    );

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error as any };
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/admin`,
      },
    });
    return { error: error as any };
  };

  const connectGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/webmasters',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: `${window.location.origin}/admin/settings?google_connected=true`,
      },
    });
    return { error: error as any };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    localStorage.removeItem('app_role');
  };

  return (
    <AuthContext.Provider value={{ user, session, isAdmin, isLoading, signIn, signInWithGoogle, connectGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
