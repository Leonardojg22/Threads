import { createClient } from '@supabase/supabase-js';

// Corregido: Lee variables de entorno con el prefijo VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
