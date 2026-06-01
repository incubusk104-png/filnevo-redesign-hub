// Mock supabase server implementation
export const createClient = () => {
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithPassword: async () => ({ data: { user: null }, error: null }),
      signUp: async () => ({ data: { user: null }, error: null }),
      signOut: async () => ({ error: null }),
      getUser: async () => ({ data: { user: null }, error: null })
    },
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
      }),
      delete: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null })
        })
      })
    })
  };
};

// For backward compatibility
export const createMockSupabaseClient = createClient;