// ═══════════════════════════════════════════════════════════
//  SEÑORES DEL ORO — Meta Pixel
//  Se carga en las páginas públicas (NO en Admin.html).
//  Eventos: PageView (aquí), ViewContent (producto), AddToCart (cart.js),
//  InitiateCheckout + Lead (carrito/WhatsApp), Purchase (gracias.html).
// ═══════════════════════════════════════════════════════════
const META_PIXEL_ID = '1019800937070919';

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', META_PIXEL_ID);
fbq('track', 'PageView');

// Atajo seguro: si el Pixel está bloqueado (adblock) no rompe nada.
function trackPixel(event, params, opts) {
  try { if (typeof window.fbq === 'function') window.fbq('track', event, params || {}, opts || {}); }
  catch (_) {}
}
