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

// Tiempos de entrega que se muestran en el sitio (por tipo de pieza).
const ENTREGA_BROQUELES = '2 a 3 días';
const ENTREGA_OTRAS     = '1 semana';
function entregaPara(categoria) {
  return categoria === 'broqueles' ? ENTREGA_BROQUELES : ENTREGA_OTRAS;
}
// Texto general (cuando no se sabe la pieza)
const ENTREGA_GENERAL = `${ENTREGA_BROQUELES} en broqueles y ${ENTREGA_OTRAS} en las demás piezas`;

// ── Pago con tarjeta (Stripe) ──
// URL de la función de Vercel (proyecto senores-del-oro-pagos), p. ej.
// 'https://senores-del-oro-pagos.vercel.app/api/checkout'.
// Mientras esté vacío, el botón "Pagar con tarjeta" NO aparece y el sitio
// funciona 100% con pedido por WhatsApp.
const CHECKOUT_ENDPOINT = 'https://senores-del-oro-pagos.vercel.app/api/checkout';

// ¿Stripe ya cobra de verdad (clave sk_live_ en Vercel)? Mientras sea false,
// el botón "Pagar con tarjeta" sólo aparece abriendo el sitio con ?pruebas=1
// (para probar con tarjetas ficticias). Los clientes ven sólo WhatsApp.
const STRIPE_LIVE = true;
const CARD_ENABLED = !!CHECKOUT_ENDPOINT && (STRIPE_LIVE || (() => {
  try {
    if (new URLSearchParams(location.search).has('pruebas')) sessionStorage.setItem('sdo_pruebas', '1');
    return sessionStorage.getItem('sdo_pruebas') === '1';
  } catch (_) { return false; }
})());
