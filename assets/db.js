// ═══════════════════════════════════════════════════════════
//  SEÑORES DEL ORO — Cliente de base de datos (Supabase)
//  Requiere que config.js y el SDK de supabase-js (CDN) se
//  hayan cargado ANTES que este archivo.
// ═══════════════════════════════════════════════════════════

if (SUPABASE_URL.includes('TU-PROYECTO') || SUPABASE_ANON_KEY.includes('TU-ANON')) {
  console.warn('⚠️ Señores del Oro: falta configurar assets/config.js con tu URL y anon key de Supabase.');
}

const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const CATEGORY_LABELS = { cadenas: 'Cadenas', pulsos: 'Pulsos', broqueles: 'Broqueles', unicas: 'Piezas Únicas' };

function categoriaLabel(cat) {
  return CATEGORY_LABELS[cat] || (cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : '');
}

function formatPrecio(val) {
  if (val === null || val === undefined || val === '') return null;
  const num = typeof val === 'number' ? val : parseFloat(String(val).replace(/[^0-9.]/g, ''));
  if (!num) return null;
  return '$' + num.toLocaleString('es-MX');
}

// Precio para tarjetas de catálogo (agrupadas): antepone "Desde" cuando
// el grupo de variantes tiene precios distintos entre sí.
function precioDisplay(item) {
  const p = formatPrecio(item.precio);
  if (!p) return 'Consultar precio';
  return (item.precioEsRango ? 'Desde ' : '') + p;
}

function mapRow(row) {
  return {
    id: row.id,
    sku: row.sku,
    categoria: row.categoria,
    nombre: row.nombre,
    desc: row.descripcion || '',
    kilate: row.kilate || '',
    precio: row.precio,
    largo: row.largo || '',
    grosor: row.grosor || '',
    eslabon: row.eslabon || '',
    placa: row.placa || '',
    peso: row.peso || '',
    fotos: row.fotos && row.fotos.length ? row.fotos : (row.foto_url ? [row.foto_url] : []),
    foto: row.foto_url || (row.fotos && row.fotos[0]) || '',
    notas: row.notas || '',
    destacado: row.destacado,
    activo: row.activo,
    orden: row.orden,
    variantGroup: row.variant_group || '',
    variantLabel: row.variant_label || '',
  };
}

// Colapsa piezas que comparten variantGroup en una sola tarjeta con un
// arreglo `variants` — así "Cartier 50cm" y "Cartier 60cm" se muestran
// como una sola publicación con selector, no como dos productos.
function groupVariants(items) {
  const seen = new Set();
  const grouped = [];
  for (const item of items) {
    if (!item.variantGroup) {
      grouped.push({ ...item, variants: [item] });
      continue;
    }
    if (seen.has(item.variantGroup)) continue;
    seen.add(item.variantGroup);
    const variants = items
      .filter(i => i.variantGroup === item.variantGroup)
      .sort((a, b) => a.orden - b.orden);
    grouped.push(buildGroupCard(variants));
  }
  return grouped;
}

function buildGroupCard(variants) {
  const primary = variants[0];
  const precios = variants.map(v => v.precio).filter(p => p !== null && p !== undefined);
  const precioMin = precios.length ? Math.min(...precios) : null;
  return {
    ...primary,
    precio: precioMin,
    precioEsRango: new Set(precios).size > 1,
    variants,
  };
}

// Trae TODO el catálogo público, agrupado por categoría —
// equivalente al viejo objeto CATALOG de assets/catalog.js,
// pero armado dinámicamente (soporta categorías nuevas sin tocar código).
async function fetchCatalog() {
  const { data, error } = await sbClient
    .from('products')
    .select('*')
    .order('orden', { ascending: true });
  if (error) {
    console.error('Error cargando catálogo:', error);
    return {};
  }
  const byCategoria = {};
  for (const row of data) {
    const item = mapRow(row);
    if (!byCategoria[item.categoria]) byCategoria[item.categoria] = [];
    byCategoria[item.categoria].push(item);
  }
  const catalog = {};
  for (const cat of Object.keys(byCategoria)) {
    catalog[cat] = groupVariants(byCategoria[cat]);
  }
  return catalog;
}

async function fetchProductBySku(sku) {
  const { data, error } = await sbClient
    .from('products')
    .select('*')
    .eq('sku', sku)
    .maybeSingle();
  if (error || !data) return null;
  return mapRow(data);
}

// Trae una pieza junto con todas sus variantes (mismo variant_group y
// categoría). Si no tiene variantes, regresa un arreglo de un solo elemento.
async function fetchProductWithVariants(sku) {
  const item = await fetchProductBySku(sku);
  if (!item) return null;
  if (!item.variantGroup) return { item, variants: [item] };

  const { data, error } = await sbClient
    .from('products')
    .select('*')
    .eq('variant_group', item.variantGroup)
    .eq('categoria', item.categoria)
    .order('orden', { ascending: true });

  if (error || !data || !data.length) return { item, variants: [item] };
  return { item, variants: data.map(mapRow) };
}
