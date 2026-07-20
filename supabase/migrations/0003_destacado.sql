-- ═══════════════════════════════════════════════════════════
--  Migración 0003 — Piezas destacadas
--  Corre esto en tu proyecto existente: SQL Editor → New snippet → Run
--  (Ya está incluido en supabase/schema.sql para instalaciones nuevas)
-- ═══════════════════════════════════════════════════════════

alter table products add column if not exists destacado boolean not null default false;

comment on column products.destacado is
  'Si es true, la pieza muestra una etiqueta dorada "Destacada" en index.html/coleccion.html/producto.html.';
