// ═══════════════════════════════════════════════════════════
//  SEÑORES DEL ORO — Configuración de Supabase
//  Rellena estos dos valores con los de tu proyecto:
//  Supabase Dashboard → Project Settings → API
// ═══════════════════════════════════════════════════════════
const SUPABASE_URL = 'https://gsncaioyfgoompidstay.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzbmNhaW95Zmdvb21waWRzdGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1Njk2NjYsImV4cCI6MjEwMDE0NTY2Nn0.dGjxtJbJmnvpKNy7-i-CZXE4VMqmL8Hoo8gJtRGjsWk';

// La "anon key" es pública por diseño (así funciona Supabase) —
// la seguridad real la dan las políticas RLS en supabase/schema.sql,
// NO el secreto de esta clave. Nunca pongas aquí el "service_role key".
