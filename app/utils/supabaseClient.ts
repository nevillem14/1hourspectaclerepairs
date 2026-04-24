import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Forces session to stay after refresh
    autoRefreshToken: true,
    detectSessionInUrl: true,
    // Explicitly target localStorage for browser environments
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  },
});