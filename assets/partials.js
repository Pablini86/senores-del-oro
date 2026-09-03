// ═══════════════════════════════════════════════════════════
//  SEÑORES DEL ORO — Topbar / Nav / Footer compartidos
//  Un solo lugar para actualizar teléfono, redes, links, etc.
//  en las 5 páginas del sitio.
// ═══════════════════════════════════════════════════════════

const SITE_PHONE_DISPLAY = '+52 33 2217 6097';
const SITE_WA_NUMBER = '523322176097';
const SITE_EMAIL = 'senoresdeloro@gmail.com';
const SITE_INSTAGRAM = 'https://instagram.com/senoresdeloro';

function renderTopbar() {
  return `
<div class="topbar">
  <div class="topbar-item">
    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    Grupo de calidad
  </div>
  <div class="topbar-sep"></div>
  <div class="topbar-item">
    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    Guadalajara, Jalisco · MX
  </div>
  <div class="topbar-sep"></div>
  <div class="topbar-item">
    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    Consultas por WhatsApp
  </div>
</div>`;
}

// variant: 'default' (Cadenas/Pulsos/Broqueles) | 'coleccion' (un solo link "Colección" activo)
// activeKey: 'coleccion' | 'encargo' | null
function renderNav(variant, activeKey) {
  const idx = (hash) => (location.pathname.endsWith('index.html') || location.pathname === '/' ? hash : `index.html${hash}`);
  const items = variant === 'coleccion'
    ? [{ href: 'coleccion.html', label: 'Colección', key: 'coleccion' }]
    : [
        { href: 'coleccion.html?cat=cadenas', label: 'Cadenas', key: 'cadenas' },
        { href: 'coleccion.html?cat=pulsos', label: 'Pulsos', key: 'pulsos' },
        { href: 'coleccion.html?cat=broqueles', label: 'Broqueles', key: 'broqueles' },
      ];
  items.push({ href: 'encargo.html', label: 'Bajo Pedido', key: 'encargo' });
  items.push({ href: idx('#origen'), label: 'Casa', key: 'casa' });
  items.push({ href: idx('#contacto'), label: 'Contacto', key: 'contacto' });

  const links = items.map(i =>
    `<li><a href="${i.href}"${i.key === activeKey ? ' class="active"' : ''}>${i.label}</a></li>`
  ).join('\n    ');

  return `
<nav id="nav">
  <a href="index.html"><img src="assets/SEN_ORES_DEL_ORO_LOGO_DORADO.png" class="nav-logo" alt="Señores del Oro"></a>
  <ul class="nav-links" id="navLinks">
    ${links}
  </ul>
  <div class="nav-actions">
    <button class="nav-cart" id="navCart" aria-label="Ver carrito" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span class="nav-cart-count" id="navCartCount" hidden>0</span>
    </button>
    <button class="nav-hamburger" id="navHamburger" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-backdrop" id="navBackdrop"></div>`;
}

// Bloque de confianza (envío asegurado + entrega + garantía).
// Se usa en la ficha de producto y en el carrito — un solo lugar.
function renderTrustBadges() {
  return `
<ul class="trust-badges">
  <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
    Tu paquete viaja <strong>asegurado contra robo o extravío</strong>.</li>
  <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="6" width="15" height="12" rx="1"/><path d="M16 9h4l3 3v6h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>
    Entrega garantizada en <strong>${ENTREGA_DIAS}</strong>.</li>
  <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
    <strong>30 días de garantía</strong> contra defectos de fábrica. Envía tu ticket a ${SITE_EMAIL}.</li>
</ul>
<a class="trust-terms" href="terminos.html">Ver términos y condiciones</a>`;
}

// Panel lateral del carrito — se inyecta una sola vez desde mountLayout().
function renderCartDrawer() {
  return `
<div class="cart-backdrop" id="cartBackdrop"></div>
<aside class="cart-drawer" id="cartDrawer" aria-hidden="true" aria-label="Carrito de compras">
  <div class="cart-head">
    <span class="cart-head-title">Tu carrito</span>
    <button class="cart-close" id="cartClose" aria-label="Cerrar" type="button">✕</button>
  </div>
  <div class="cart-body" id="cartBody"><!-- render dinámico --></div>
</aside>`;
}

function renderFooter() {
  return `
<footer id="contacto">
  <div class="ft-top">
    <img src="assets/SEN_ORES_DEL_ORO_LOGO_DORADO.png" class="ft-logo" alt="Señores del Oro">
    <div class="ft-cols">
      <div class="ft-col">
        <h4>Colección</h4>
        <a href="coleccion.html?cat=cadenas">Cadenas</a>
        <a href="coleccion.html?cat=pulsos">Pulsos</a>
        <a href="coleccion.html?cat=broqueles">Broqueles</a>
        <a href="coleccion.html?cat=unicas">Piezas Únicas</a>
      </div>
      <div class="ft-col">
        <h4>Casa</h4>
        <a href="index.html#origen">Nuestra historia</a>
        <a href="index.html#origen">Hecho en GDL</a>
        <a href="terminos.html">Términos y condiciones</a>
        <a href="terminos.html">Envíos y garantía</a>
      </div>
      <div class="ft-col">
        <h4>Contacto</h4>
        <a href="mailto:${SITE_EMAIL}">${SITE_EMAIL}</a>
        <a href="${SITE_INSTAGRAM}" target="_blank"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-1px;margin-right:5px"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>@senoresdeloro</a>
        <a href="https://wa.me/${SITE_WA_NUMBER}" target="_blank"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-1px;margin-right:5px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>${SITE_PHONE_DISPLAY}</a>
        <p>Guadalajara, Jalisco · MX</p>
      </div>
    </div>
  </div>
  <div class="ft-bot">
    <p class="ft-copy">© 2025 <span>Señores del Oro</span> · Hecho en GDL</p>
    <p class="ft-tag">No es joyería. Es territorio.</p>
  </div>
</footer>`;
}

// Monta topbar+nav+footer en los placeholders de la página
// y activa el ajuste de offset del topbar + el efecto scroll del nav.
function mountLayout({ navVariant = 'default', activeKey = null } = {}) {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = renderTopbar() + renderNav(navVariant, activeKey);
  if (footer) footer.innerHTML = renderFooter();

  const tb = document.querySelector('.topbar');
  const nav = document.getElementById('nav');
  function setOffset() {
    const h = tb ? tb.offsetHeight : 0;
    document.documentElement.style.setProperty('--topbar-h', h + 'px');
    if (nav) nav.style.top = h + 'px';
  }
  setOffset();
  window.addEventListener('resize', setOffset);
  window.addEventListener('scroll', () => nav && nav.classList.toggle('scrolled', scrollY > 70));

  // Menú móvil
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('navBackdrop');
  function closeMobileNav() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  function toggleMobileNav() {
    const willOpen = !navLinks.classList.contains('open');
    hamburger.classList.toggle('open', willOpen);
    hamburger.setAttribute('aria-expanded', String(willOpen));
    navLinks.classList.toggle('open', willOpen);
    backdrop.classList.toggle('open', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  }
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
    backdrop.addEventListener('click', closeMobileNav);
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
    window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMobileNav(); });
  }

  // Interruptor "comprar en línea": marca <html data-tienda="on|off">.
  // El CSS oculta todo lo del carrito mientras no esté "on".
  if (typeof tiendaActiva === 'function') {
    tiendaActiva().then(on => { document.documentElement.dataset.tienda = on ? 'on' : 'off'; });
  } else {
    document.documentElement.dataset.tienda = 'off';
  }

  initCart();
}

// ═══════════════════════════════════════════════════════════
//  CARRITO — panel lateral + checkout por WhatsApp
// ═══════════════════════════════════════════════════════════
function initCart() {
  if (typeof Cart === 'undefined') return;            // cart.js no cargado
  if (document.getElementById('cartDrawer')) return;  // ya inicializado
  const btnOpen = document.getElementById('navCart');
  if (!btnOpen) return;                               // la página no montó el nav

  document.body.insertAdjacentHTML('beforeend', renderCartDrawer());

  const drawer   = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const body     = document.getElementById('cartBody');
  const btnClose = document.getElementById('cartClose');
  const badge    = document.getElementById('navCartCount');

  const money = n => '$' + Number(n || 0).toLocaleString('es-MX');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));

  let open = false;
  let view = 'cart';           // 'cart' | 'checkout'
  let lastLines = [];          // líneas ya re-cotizadas
  let lastSummary = null;

  function updateBadge() {
    const n = Cart.count();
    badge.textContent = n;
    badge.hidden = n === 0;
    btnOpen.classList.toggle('has-items', n > 0);
  }

  function openDrawer() {
    if (document.documentElement.dataset.tienda !== 'on') return;  // tienda apagada
    open = true;
    view = 'cart';
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    render();
  }
  function closeDrawer() {
    open = false;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btnOpen.addEventListener('click', openDrawer);
  btnClose.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) closeDrawer(); });

  // Otras partes del sitio abren el carrito con window.openCart()
  window.openCart = openDrawer;

  Cart.onChange(() => {
    updateBadge();
    if (open && view === 'cart') render();
  });
  updateBadge();

  // ── Render ──
  async function render() {
    if (view === 'checkout') return renderCheckout();

    body.innerHTML = `<div class="cart-loading">Actualizando precios…</div>`;
    const { lines, dropped } = await Cart.resolve();
    lastLines = lines;
    updateBadge();

    if (!lines.length) {
      body.innerHTML = `
        <div class="cart-empty">
          <p>Tu carrito está vacío.</p>
          ${dropped.length ? `<p class="cart-note">Se quitaron piezas que ya no están disponibles.</p>` : ''}
          <a class="cart-btn ghost" href="coleccion.html">Ver colección</a>
        </div>`;
      return;
    }

    const s = Cart.summary(lines);
    lastSummary = s;
    const falta = ENVIO_GRATIS_DESDE - s.subtotal;

    body.innerHTML = `
      ${dropped.length ? `<p class="cart-note warn">Se quitaron ${dropped.length} pieza(s) que ya no están disponibles.</p>` : ''}
      <ul class="cart-lines">
        ${lines.map(l => `
          <li class="cart-line" data-sku="${esc(l.sku)}">
            <div class="cart-line-img">
              ${l.item.foto ? `<img src="${esc(l.item.foto)}" alt="">` : `<span class="cart-line-ph"></span>`}
            </div>
            <div class="cart-line-info">
              <div class="cart-line-name">${esc(l.item.nombre)}</div>
              <div class="cart-line-sku">${esc(l.sku)}${l.item.variantLabel ? ' · ' + esc(l.item.variantLabel) : ''}</div>
              <div class="cart-line-price">${money(l.item.precio)} c/u</div>
              <div class="cart-line-controls">
                ${l.item.categoria === 'unicas'
                  ? `<span class="cart-qty-fixed">Pieza única · 1</span>`
                  : `<div class="cart-qty">
                       <button type="button" data-act="dec" aria-label="Menos">−</button>
                       <span>${l.qty}</span>
                       <button type="button" data-act="inc" aria-label="Más">+</button>
                     </div>`}
                <button type="button" class="cart-line-remove" data-act="rm">Quitar</button>
              </div>
            </div>
            <div class="cart-line-total">${money(l.lineTotal)}</div>
          </li>`).join('')}
      </ul>

      <div class="cart-summary">
        <div class="cart-row"><span>Subtotal</span><span>${money(s.subtotal)}</span></div>
        <div class="cart-row"><span>Envío asegurado</span><span>${s.envioGratis ? 'GRATIS' : money(s.envio)}</span></div>
        ${!s.envioGratis && falta > 0
          ? `<p class="cart-ship-hint">Te faltan ${money(falta)} para envío GRATIS.</p>` : ''}
        <div class="cart-row total"><span>Total</span><span>${money(s.total)}</span></div>
      </div>

      ${renderTrustBadges()}

      <div class="cart-actions">
        <button type="button" class="cart-btn" id="cartToCheckout">Continuar con el pedido</button>
        <button type="button" class="cart-btn ghost" id="cartKeep">Seguir viendo</button>
      </div>`;

    body.querySelectorAll('.cart-line').forEach(li => {
      const sku = li.dataset.sku;
      li.addEventListener('click', e => {
        const act = e.target.getAttribute('data-act');
        if (!act) return;
        const line = lastLines.find(x => x.sku === sku);
        if (!line) return;
        if (act === 'inc') Cart.setQty(sku, line.qty + 1);
        if (act === 'dec') Cart.setQty(sku, line.qty - 1);
        if (act === 'rm') Cart.remove(sku);
      });
    });
    body.querySelector('#cartToCheckout').addEventListener('click', () => { view = 'checkout'; renderCheckout(); });
    body.querySelector('#cartKeep').addEventListener('click', closeDrawer);
  }

  // ── Checkout ──
  const FIELDS = [
    { k: 'nombre',  label: 'Nombre completo', req: true },
    { k: 'tel',     label: 'Teléfono (WhatsApp)', req: true, type: 'tel' },
    { k: 'email',   label: 'Correo (opcional)', type: 'email' },
    { k: 'calle',   label: 'Calle y número', req: true },
    { k: 'colonia', label: 'Colonia', req: true },
    { k: 'cp',      label: 'Código postal', req: true, type: 'text' },
    { k: 'ciudad',  label: 'Ciudad', req: true },
    { k: 'estado',  label: 'Estado', req: true },
    { k: 'refs',    label: 'Referencias (opcional)' },
    { k: 'notas',   label: 'Notas del pedido (opcional)' },
  ];
  const DRAFT_KEY = 'sdo_checkout_draft';
  const readDraft = () => { try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || '{}'); } catch (_) { return {}; } };
  const saveDraft = d => { try { localStorage.setItem(DRAFT_KEY, JSON.stringify(d)); } catch (_) {} };

  function renderCheckout() {
    const s = lastSummary || Cart.summary(lastLines);
    const d = readDraft();
    body.innerHTML = `
      <button type="button" class="cart-back" id="cartBack">← Volver al carrito</button>
      <p class="cart-co-intro">Llena tus datos de envío. Al terminar se abre WhatsApp con tu pedido listo; ahí confirmamos el pago (transferencia o depósito).</p>
      <form class="cart-form" id="cartForm" novalidate>
        ${FIELDS.map(f => `
          <label class="cart-field">
            <span>${f.label}${f.req ? ' *' : ''}</span>
            ${f.k === 'notas' || f.k === 'refs'
              ? `<textarea name="${f.k}" rows="2">${esc(d[f.k] || '')}</textarea>`
              : `<input name="${f.k}" type="${f.type || 'text'}" value="${esc(d[f.k] || '')}" ${f.req ? 'required' : ''}>`}
          </label>`).join('')}
        <div class="cart-co-summary">
          <div class="cart-row"><span>Subtotal</span><span>${money(s.subtotal)}</span></div>
          <div class="cart-row"><span>Envío asegurado</span><span>${s.envioGratis ? 'GRATIS' : money(s.envio)}</span></div>
          <div class="cart-row total"><span>Total</span><span>${money(s.total)}</span></div>
        </div>
        <p class="cart-err" id="cartErr" hidden></p>
        <button type="submit" class="cart-btn wa" id="cartWA">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
          Enviar pedido por WhatsApp
        </button>
        ${MP_CHECKOUT_ENDPOINT ? `<button type="button" class="cart-btn card" id="cartMP">Pagar con tarjeta</button>` : ''}
      </form>`;

    const form = body.querySelector('#cartForm');
    const err = body.querySelector('#cartErr');
    body.querySelector('#cartBack').addEventListener('click', () => { view = 'cart'; render(); });

    form.addEventListener('input', () => {
      const d2 = {};
      new FormData(form).forEach((v, k) => d2[k] = v);
      saveDraft(d2);
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = {};
      new FormData(form).forEach((v, k) => data[k] = String(v).trim());
      const missing = FIELDS.filter(f => f.req && !data[f.k]);
      if (missing.length) {
        err.textContent = 'Faltan datos: ' + missing.map(f => f.label).join(', ') + '.';
        err.hidden = false;
        return;
      }
      err.hidden = true;
      openWhatsAppOrder(data);
    });

    if (MP_CHECKOUT_ENDPOINT) {
      const mp = body.querySelector('#cartMP');
      if (mp) mp.addEventListener('click', () => startCardCheckout());
    }
  }

  function orderText(data) {
    const s = lastSummary || Cart.summary(lastLines);
    const L = [];
    L.push('*NUEVO PEDIDO — Señores del Oro*', '');
    lastLines.forEach(l => {
      L.push(`• ${l.sku} · ${l.item.nombre}${l.item.variantLabel ? ' (' + l.item.variantLabel + ')' : ''}`);
      L.push(`   ${l.qty} x ${money(l.item.precio)} = ${money(l.lineTotal)}`);
    });
    L.push('');
    L.push(`Subtotal: ${money(s.subtotal)}`);
    L.push(`Envío asegurado: ${s.envioGratis ? 'GRATIS' : money(s.envio)}`);
    L.push(`*TOTAL: ${money(s.total)}*`);
    L.push('', '— Datos de envío —');
    L.push(`Nombre: ${data.nombre}`);
    L.push(`Teléfono: ${data.tel}`);
    if (data.email) L.push(`Correo: ${data.email}`);
    L.push(`Dirección: ${data.calle}, Col. ${data.colonia}`);
    L.push(`CP ${data.cp}, ${data.ciudad}, ${data.estado}`);
    if (data.refs) L.push(`Referencias: ${data.refs}`);
    if (data.notas) L.push(`Notas: ${data.notas}`);
    return L.join('\n');
  }

  function openWhatsAppOrder(data) {
    const url = `https://wa.me/${SITE_WA_NUMBER}?text=${encodeURIComponent(orderText(data))}`;
    window.open(url, '_blank');
    body.innerHTML = `
      <div class="cart-done">
        <p class="cart-done-title">Tu pedido está listo</p>
        <p>Se abrió WhatsApp con el detalle. Si no se abrió, <a href="${url}" target="_blank">toca aquí</a>.</p>
        <p class="cart-note">Cuando confirmemos el pago, tu pieza sale en ${ENTREGA_DIAS}.</p>
        <button type="button" class="cart-btn ghost" id="cartVacia">Vaciar carrito</button>
      </div>`;
    body.querySelector('#cartVacia').addEventListener('click', () => { Cart.clear(); view = 'cart'; render(); });
  }

  // Fase 2 — pago con tarjeta (sólo si MP_CHECKOUT_ENDPOINT está configurado)
  async function startCardCheckout() {
    const mp = body.querySelector('#cartMP');
    if (mp) { mp.disabled = true; mp.textContent = 'Redirigiendo…'; }
    try {
      const res = await fetch(MP_CHECKOUT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: Cart.get() }),   // el servidor re-cotiza por SKU
      });
      const json = await res.json();
      if (json && json.init_point) { window.location.href = json.init_point; return; }
      throw new Error('respuesta inválida');
    } catch (e) {
      console.error(e);
      if (mp) { mp.disabled = false; mp.textContent = 'Pagar con tarjeta'; }
      const err = body.querySelector('#cartErr');
      if (err) { err.textContent = 'No se pudo iniciar el pago con tarjeta. Usa el pedido por WhatsApp.'; err.hidden = false; }
    }
  }
}
