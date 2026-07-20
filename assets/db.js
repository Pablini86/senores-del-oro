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
    foto: row.foto_url || '',
    notas: row.notas || '',
    destacado: row.destacado,
    activo: row.activo,
    orden: row.orden,
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
  const catalog = {};
  for (const row of data) {
    const item = mapRow(row);
    if (!catalog[item.categoria]) catalog[item.categoria] = [];
    catalog[item.categoria].push(item);
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
