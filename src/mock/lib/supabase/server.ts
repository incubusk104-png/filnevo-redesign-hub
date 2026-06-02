import { createClient as supabaseCreateClient } from '@supabase/supabase-js';

export const createMockSupabaseClient = () => {
  return {
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null })
        })
      }),
      insert: () => ({
        single: async () => ({ data: null, error: null })
      }),
      update: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null })
        })
      })
    }),
    auth: {
      signInWithPassword: async () => ({ data: { session: null }, error: null }),
      signUp: async () => ({ data: { user: null }, error: null }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null })
    }
  };
};