// ═══════════════════════════════════════════════════════════
//  SEÑORES DEL ORO — Carrito de compras
//  Requiere config.js + db.js cargados ANTES que este archivo.
//
//  REGLA DE ORO: en localStorage sólo se guarda { sku, qty }.
//  NUNCA el precio, el nombre ni la foto. El precio se vuelve a
//  consultar a Supabase en cada render del carrito — así una pieza
//  que ocultes o re-precies en el Admin nunca se cobra con un
//  precio viejo, y el pago con tarjeta (fase 2) siempre parte del
//  precio real del servidor.
// ═══════════════════════════════════════════════════════════

const Cart = (function () {
  const KEY = 'sdo_cart_v1';
  const listeners = [];

  function read() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
      if (!Array.isArray(raw)) return [];
      return raw
        .filter(l => l && typeof l.sku === 'string' && l.sku.trim())
        .map(l => ({ sku: l.sku, qty: Math.max(1, parseInt(l.qty, 10) || 1) }));
    } catch (_) {
      return [];
    }
  }

  function write(lines) {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch (_) { /* modo privado / storage lleno: el carrito vive sólo en memoria */ }
    emit();
  }

  function emit() {
    const lines = read();
    listeners.forEach(fn => { try { fn(lines); } catch (e) { console.error(e); } });
    window.dispatchEvent(new CustomEvent('cart:change', { detail: { lines } }));
  }

  // ── API pública ──
  return {
    get: read,

    count() {
      return read().reduce((n, l) => n + l.qty, 0);
    },

    // maxQty: tope de unidades (1 para piezas únicas). null = sin tope.
    add(sku, qty, maxQty) {
      qty = Math.max(1, parseInt(qty, 10) || 1);
      const lines = read();
      const existing = lines.find(l => l.sku === sku);
      if (existing) {
        existing.qty += qty;
      } else {
        lines.push({ sku, qty });
      }
      const cap = (maxQty === null || maxQty === undefined) ? Infinity : maxQty;
      lines.forEach(l => { if (l.sku === sku) l.qty = Math.min(l.qty, cap); });
      write(lines);
    },

    setQty(sku, qty) {
      qty = parseInt(qty, 10) || 0;
      let lines = read();
      if (qty <= 0) {
        lines = lines.filter(l => l.sku !== sku);
      } else {
        const l = lines.find(x => x.sku === sku);
        if (l) l.qty = qty;
      }
      write(lines);
    },

    remove(sku) {
      write(read().filter(l => l.sku !== sku));
    },

    clear() {
      write([]);
    },

    onChange(fn) {
      listeners.push(fn);
      return () => {
        const i = listeners.indexOf(fn);
        if (i > -1) listeners.splice(i, 1);
      };
    },

    // Re-cotiza el carrito contra Supabase. Devuelve:
    //   { lines: [{ sku, qty, item, lineTotal }], dropped: [sku,...] }
    // dropped = piezas que ya no están disponibles (ocultas/borradas);
    // se sacan del localStorage automáticamente.
    async resolve() {
      const stored = read();
      if (!stored.length) return { lines: [], dropped: [] };

      const bySku = await fetchProductsBySkus(stored.map(l => l.sku));
      const lines = [];
      const dropped = [];

      for (const l of stored) {
        const item = bySku[l.sku];
        // Sin item = pieza oculta/eliminada. Sin precio numérico =
        // "Consultar precio": tampoco puede ir en un carrito con total.
        if (!item || typeof item.precio !== 'number' || !(item.precio > 0)) {
          dropped.push(l.sku);
          continue;
        }
        let qty = l.qty;
        if (item.categoria === 'unicas') qty = 1; // stock de 1
        lines.push({ sku: l.sku, qty, item, lineTotal: item.precio * qty });
      }

      if (dropped.length) {
        const clean = stored.filter(l => !dropped.includes(l.sku));
        // no emitimos aquí para no re-renderizar en mitad del resolve;
        // el llamador refresca la vista y el badge con lo que devolvemos.
        try { localStorage.setItem(KEY, JSON.stringify(clean)); } catch (_) {}
      }

      return { lines, dropped };
    },

    // Subtotal / envío / total a partir de las líneas ya resueltas.
    summary(lines) {
      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      const envioGratis = subtotal >= ENVIO_GRATIS_DESDE || subtotal === 0;
      const envio = envioGratis ? 0 : ENVIO_COSTO;
      return { subtotal, envio, total: subtotal + envio, envioGratis };
    },
  };
})();
