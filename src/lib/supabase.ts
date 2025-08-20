import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (to be updated when actual schema is created)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name?: string;
          organization?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string;
          organization?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          organization?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      comments: {
        Row: {
          id: string;
          article_id: string;
          user_id: string;
          content: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          article_id: string;
          user_id: string;
          content: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          article_id?: string;
          user_id?: string;
          content?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

// Utility functions for future use
export const auth = {
  signUp: async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  },
  
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  },
  
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  
  getUser: async () => {
    return await supabase.auth.getUser();
  },
};

export const database = {
  profiles: {
    create: async (profile: Database['public']['Tables']['profiles']['Insert']) => {
      return await supabase.from('profiles').insert(profile);
    },
    
    get: async (id: string) => {
      return await supabase.from('profiles').select('*').eq('id', id).single();
    },
    
    update: async (id: string, updates: Database['public']['Tables']['profiles']['Update']) => {
      return await supabase.from('profiles').update(updates).eq('id', id);
    },
  },
  
  comments: {
    getByArticle: async (articleId: string) => {
      return await supabase
        .from('comments')
        .select('*, profiles(*)')
        .eq('article_id', articleId)
        .order('created_at', { ascending: false });
    },
    
    create: async (comment: Database['public']['Tables']['comments']['Insert']) => {
      return await supabase.from('comments').insert(comment);
    },
  },
};