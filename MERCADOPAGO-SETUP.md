# Pago con tarjeta (Mercado Pago) — Fase 2

El sitio ya funciona 100% con **pedido por WhatsApp**. Esto es opcional: agrega un botón
**"Pagar con tarjeta"** en el carrito que cobra en línea con Mercado Pago (tarjeta, OXXO, SPEI).

GitHub Pages sólo sirve archivos estáticos, así que el cobro necesita **una función de servidor**.
La forma más simple es un proyecto chico en **Vercel** (Pablo ya usa Vercel para la app de finanzas).

---

## Lo que necesitas conseguir (Pablo)

1. **Cuenta de Mercado Pago** a nombre del negocio → https://www.mercadopago.com.mx/
2. En el panel de desarrolladores de Mercado Pago, crea una aplicación y copia el
   **Access Token de producción** (empieza con `APP_USR-...`). Guárdalo, no lo compartas.
3. Avísame cuando tengas esos dos datos y yo dejo el resto conectado.

---

## Lo que se hace del lado técnico (una sola vez)

### 1. Proyecto Vercel nuevo

Carpeta con un archivo `api/crear-preferencia.js` y un `package.json` con
`{ "dependencies": { "mercadopago": "^2" } }`.

```js
// api/crear-preferencia.js
import { MercadoPagoConfig, Preference } from 'mercadopago';

const SUPABASE_URL = 'https://gsncaioyfgoompidstay.supabase.co';
const SUPABASE_ANON = process.env.SUPABASE_ANON_KEY;        // el mismo anon de assets/config.js
const MP_TOKEN      = process.env.MP_ACCESS_TOKEN;          // APP_USR-...
const SITE          = 'https://senoresdeloro.com';

const ENVIO_GRATIS_DESDE = 3000;
const ENVIO_COSTO        = 150;

export default async function handler(req, res) {
  // CORS — sólo el sitio
  res.setHeader('Access-Control-Allow-Origin', SITE);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });

  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  const skus = [...new Set(items.map(i => String(i.sku)))].filter(Boolean);
  if (!skus.length) return res.status(400).json({ error: 'carrito vacío' });

  // ── Re-cotizar SIEMPRE contra la base. Nunca confiar en precios del navegador. ──
  const url = `${SUPABASE_URL}/rest/v1/products?select=sku,nombre,precio,categoria,activo`
            + `&sku=in.(${skus.map(s => `"${s}"`).join(',')})&activo=eq.true`;
  const rows = await fetch(url, {
    headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}` },
  }).then(r => r.json());

  const bySku = Object.fromEntries(rows.map(r => [r.sku, r]));
  const mpItems = [];
  let subtotal = 0;

  for (const it of items) {
    const p = bySku[it.sku];
    if (!p || typeof p.precio !== 'number' || p.precio <= 0) continue;   // pieza no disponible
    const qty = p.categoria === 'unicas' ? 1 : Math.max(1, parseInt(it.qty, 10) || 1);
    subtotal += p.precio * qty;
    mpItems.push({ title: `${p.sku} · ${p.nombre}`, quantity: qty, unit_price: p.precio, currency_id: 'MXN' });
  }
  if (!mpItems.length) return res.status(400).json({ error: 'sin piezas válidas' });

  const envio = subtotal >= ENVIO_GRATIS_DESDE ? 0 : ENVIO_COSTO;
  if (envio) mpItems.push({ title: 'Envío asegurado', quantity: 1, unit_price: envio, currency_id: 'MXN' });

  const mp = new MercadoPagoConfig({ accessToken: MP_TOKEN });
  const pref = await new Preference(mp).create({
    body: {
      items: mpItems,
      back_urls: {
        success: `${SITE}/gracias.html`,
        failure: `${SITE}/coleccion.html`,
        pending: `${SITE}/gracias.html`,
      },
      auto_return: 'approved',
      statement_descriptor: 'SENORES DEL ORO',
    },
  });

  return res.status(200).json({ init_point: pref.init_point });
}
```

### 2. Variables de entorno en Vercel

- `MP_ACCESS_TOKEN` = el Access Token de producción de Mercado Pago
- `SUPABASE_ANON_KEY` = el mismo valor que está en `assets/config.js`

### 3. Conectar el sitio

En `assets/config.js`, poner la URL desplegada:

```js
const MP_CHECKOUT_ENDPOINT = 'https://TU-PROYECTO.vercel.app/api/crear-preferencia';
```

Con eso, el botón **"Pagar con tarjeta"** aparece solo en el checkout del carrito.
Si se deja en `''`, no aparece y el sitio sigue funcionando con WhatsApp.

---

## Registrar el pedido (opcional, fase 2.1)

Para guardar cada pedido pagado hace falta una tabla `orders` en Supabase y un webhook de
Mercado Pago que la escriba. **Ojo con la seguridad:** el estado actual de RLS está en
`supabase/hardening.sql` y es estricto. La tabla `orders` necesita:

- `INSERT` permitido sólo al webhook (con `service_role`, nunca desde el navegador), y
- **sin** `SELECT` para `anon` (los pedidos traen datos personales).

No agregar `orders` al sitio público hasta escribir esas políticas con cuidado.

---

## Prueba antes de cobrar de verdad

Mercado Pago da **tarjetas de prueba** y un Access Token de *sandbox*. Probar todo el flujo
(carrito → preferencia → pago aprobado → `gracias.html`) en sandbox antes de poner el token
de producción.
