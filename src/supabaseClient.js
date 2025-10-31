import { createClient } from '@supabase/supabase-js';

// Reemplaza estas variables con tus claves reales de Supabase
const supabaseUrl = 'https://swtaxcbvohjviywnytud.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dGF4Y2J2b2hqdml5d255dHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MzAxODQsImV4cCI6MjA3NzMwNjE4NH0.kXdqMLsxqr3CWgpCGUJ1EIpK7E_Dw5OgLbqrjJkdNOM'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

