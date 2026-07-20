// Genera supabase/seed.sql a partir de assets/catalog.js
// Uso: node scripts/generate-seed.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const catalogPath = path.join(__dirname, '..', 'assets', 'catalog.js');
const outPath = path.join(__dirname, '..', 'supabase', 'seed.sql');

const src = fs.readFileSync(catalogPath, 'utf8') + '\nthis.CATALOG = CATALOG;';
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src, sandbox);

const CATALOG = sandbox.CATALOG;
if (!CATALOG) throw new Error('No se pudo leer CATALOG de assets/catalog.js');

function sqlStr(val) {
  if (val === undefined || val === null || val === '') return 'NULL';
  return `'${String(val).replace(/'/g, "''")}'`;
}

function sqlNum(val) {
  if (val === undefined || val === null || val === '') return 'NULL';
  const n = typeof val === 'number' ? val : parseFloat(String(val).replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? String(n) : 'NULL';
}

let rows = [];
let orden = 0;

for (const categoria of Object.keys(CATALOG)) {
  for (const p of CATALOG[categoria]) {
    orden += 1;
    rows.push(`  (${sqlStr(p.sku)}, ${sqlStr(categoria)}, ${sqlStr(p.nombre)}, ${sqlStr(p.desc)}, ${sqlStr(p.kilate)}, ${sqlNum(p.precio)}, ${sqlStr(p.largo)}, ${sqlStr(p.grosor)}, ${sqlStr(p.eslabon)}, ${sqlStr(p.placa)}, ${sqlStr(p.peso)}, ${sqlStr(p.foto)}, ${orden})`);
  }
}

const sql = `-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Seed generado desde assets/catalog.js
--  Generado: ${new Date().toISOString()}
--  Corre esto DESPUÉS de supabase/schema.sql
--
--  NOTA: las fotos siguen apuntando a Google Drive por ahora.
--  Re-súbelas desde el panel de admin para moverlas a Supabase
--  Storage — es más confiable a largo plazo.
-- ═══════════════════════════════════════════════════════════

insert into products
  (sku, categoria, nombre, descripcion, kilate, precio, largo, grosor, eslabon, placa, peso, foto_url, orden)
values
${rows.join(',\n')}
on conflict (sku) do update set
  categoria   = excluded.categoria,
  nombre      = excluded.nombre,
  descripcion = excluded.descripcion,
  kilate      = excluded.kilate,
  precio      = excluded.precio,
  largo       = excluded.largo,
  grosor      = excluded.grosor,
  eslabon     = excluded.eslabon,
  placa       = excluded.placa,
  peso        = excluded.peso,
  foto_url    = excluded.foto_url,
  orden       = excluded.orden;
`;

fs.writeFileSync(outPath, sql, 'utf8');
console.log(`✓ Generado ${outPath} con ${rows.length} productos`);
