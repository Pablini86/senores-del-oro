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
    Garantía de kilataje
  </div>
  <div class="topbar-sep"></div>
  <div class="topbar-item">
    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
    Hecho a pedido · Entrega en 1 semana
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
  <button class="nav-hamburger" id="navHamburger" aria-label="Abrir menú" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-backdrop" id="navBackdrop"></div>`;
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

function renderModal() {
  return `
<div class="modal" id="modal">
  <button class="m-close" id="mClose">✕</button>
  <div class="modal-box">
    <div class="modal-img" id="mImg">
      <img src="assets/SEN_ORES_DEL_ORO_LOGO_UNICO_DORADO.png" class="ph" alt="">
    </div>
    <div class="modal-body" id="mBody"></div>
  </div>
</div>`;
}

// Monta topbar+nav+footer(+modal opcional) en los placeholders de la página
// y activa el ajuste de offset del topbar + el efecto scroll del nav.
function mountLayout({ navVariant = 'default', activeKey = null, modal = false } = {}) {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = renderTopbar() + renderNav(navVariant, activeKey);
  if (footer) footer.innerHTML = renderFooter();
  if (modal) {
    const modalHost = document.getElementById('site-modal');
    if (modalHost) modalHost.innerHTML = renderModal();
  }

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
}
