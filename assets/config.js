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

// ═══════════════════════════════════════════════════════════
//  TIENDA EN LÍNEA — Envío y pago
// ═══════════════════════════════════════════════════════════

// Envío asegurado GRATIS a partir de este monto (en pesos).
// Debajo de este monto se cobra ENVIO_COSTO.
const ENVIO_GRATIS_DESDE = 3000;
const ENVIO_COSTO = 150;

// Días hábiles de entrega que se muestran en el sitio.
const ENTREGA_DIAS = '4 a 5 días hábiles';

// ── Pago con tarjeta (Mercado Pago) — FASE 2, apagado por ahora ──
// Cuando tengas lista la función de Vercel (ver MERCADOPAGO-SETUP.md),
// pega aquí su URL. Mientras esté vacío, el botón "Pagar con tarjeta"
// NO aparece y el sitio funciona 100% con pedido por WhatsApp.
const MP_CHECKOUT_ENDPOINT = '';
