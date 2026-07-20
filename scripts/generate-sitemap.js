// Regenera sitemap.xml agregando una URL por cada producto activo en Supabase.
// Requiere que assets/config.js ya tenga la URL/anon key reales.
// Uso: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

const configSrc = fs.readFileSync(path.join(__dirname, '..', 'assets', 'config.js'), 'utf8');
const urlMatch = configSrc.match(/SUPABASE_URL\s*=\s*'([^']+)'/);
const keyMatch = configSrc.match(/SUPABASE_ANON_KEY\s*=\s*'([^']+)'/);

if (!urlMatch || !keyMatch || urlMatch[1].includes('TU-PROYECTO')) {
  console.error('✗ Configura primero assets/config.js con tu URL y anon key de Supabase.');
  process.exit(1);
}

const SUPABASE_URL = urlMatch[1];
const SUPABASE_ANON_KEY = keyMatch[1];

const STATIC_URLS = [
  { loc: 'https://senoresdeloro.com/', changefreq: 'weekly', priority: '1.0' },
  { loc: 'https://senoresdeloro.com/coleccion.html', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://senoresdeloro.com/coleccion.html?cat=cadenas', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://senoresdeloro.com/coleccion.html?cat=pulsos', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://senoresdeloro.com/coleccion.html?cat=broqueles', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://senoresdeloro.com/encargo.html', changefreq: 'monthly', priority: '0.7' },
];

async function main() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/products?select=sku,updated_at&activo=eq.true`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) {
    console.error('✗ Error consultando Supabase:', res.status, await res.text());
    process.exit(1);
  }
  const products = await res.json();

  const productUrls = products.map(p => ({
    loc: `https://senoresdeloro.com/producto.html?sku=${encodeURIComponent(p.sku)}`,
    lastmod: p.updated_at ? p.updated_at.slice(0, 10) : undefined,
    changefreq: 'monthly',
    priority: '0.6',
  }));

  const all = [...STATIC_URLS, ...productUrls];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(u => `  <url>
    <loc>${u.loc}</loc>
${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), xml, 'utf8');
  console.log(`✓ sitemap.xml regenerado con ${all.length} URLs (${productUrls.length} productos)`);
}

main();
