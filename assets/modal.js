// ═══════════════════════════════════════════════════════════
//  SEÑORES DEL ORO — Modal de vista rápida de producto
//  Usado por index.html y coleccion.html
// ═══════════════════════════════════════════════════════════

function setupModal() {
  const modalEl = document.getElementById('modal');
  if (!modalEl) return;
  document.getElementById('mClose').onclick = closeModal;
  modalEl.onclick = (e) => { if (e.target.id === 'modal') closeModal(); };
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openModal(item) {
  const isBrq = !item.largo;
  const specs = isBrq
    ? `<div><div class="m-sl">Kilate</div><div class="m-sv">${item.kilate}</div></div>
       <div><div class="m-sl">Categoría</div><div class="m-sv">${categoriaLabel(item.categoria)}</div></div>`
    : `<div><div class="m-sl">Largo</div><div class="m-sv">${item.largo}</div></div>
       <div><div class="m-sl">${item.grosor ? 'Grosor' : 'Eslabón'}</div><div class="m-sv">${item.grosor || item.eslabon}</div></div>
       <div><div class="m-sl">Peso</div><div class="m-sv">${item.peso}</div></div>
       <div><div class="m-sl">Kilate</div><div class="m-sv">${item.kilate}</div></div>`;

  const waMsg = encodeURIComponent(`Hola, me interesa: ${item.sku} - ${item.nombre}`);
  const waUrl = `https://wa.me/${SITE_WA_NUMBER}?text=${waMsg}`;
  const precio = formatPrecio(item.precio);

  document.getElementById('mBody').innerHTML = `
    <div class="m-kil">${item.kilate ? item.kilate + ' · ' : ''}Oro Amarillo</div>
    <h2 class="m-nombre">${item.nombre}</h2>
    <p class="m-sku">${item.sku}</p>
    <p class="m-desc">${item.desc}</p>
    <div class="m-specs">${specs}</div>
    <div class="m-precio ${precio ? '' : 'na'}">${precio ? precioDisplay(item) : 'Precio disponible próximamente'}</div>
    <button class="m-btn" onclick="window.open('${waUrl}','_blank')">Consultar por WhatsApp</button>`;

  document.getElementById('mImg').innerHTML = item.foto
    ? `<img src="${item.foto}" class="photo" alt="">`
    : `<img src="assets/SEN_ORES_DEL_ORO_LOGO_UNICO_DORADO.png" class="ph" alt="">`;

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}
