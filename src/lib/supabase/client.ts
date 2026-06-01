// Mock supabase client implementation
export const isSupabaseConfigured = () => {
  return !!process.env.SUPABASE_URL && !!process.env.SUPABASE_ANON_KEY;
};

export const createSupabaseClient = () => {
  // Return a mock client
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithPassword: async () => ({ data: { user: null }, error: null }),
      signUp: async () => ({ data: { user: null }, error: null }),
      signOut: async () => ({ error: null })
    }
  };
};