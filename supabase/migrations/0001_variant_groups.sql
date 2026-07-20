-- ═══════════════════════════════════════════════════════════
--  Migración 0001 — Variantes de producto (largo / talla)
--  Corre esto en tu proyecto existente: SQL Editor → New snippet → Run
--  (Ya está incluido en supabase/schema.sql para instalaciones nuevas)
-- ═══════════════════════════════════════════════════════════

alter table products add column if not exists variant_group text;
alter table products add column if not exists variant_label text;

create index if not exists idx_products_variant_group on products (variant_group);

comment on column products.variant_group is
  'Piezas con el mismo valor aquí se muestran como una sola publicación con selector (ej. mismo diseño, distinto largo). Déjalo vacío para una pieza sin variantes.';
comment on column products.variant_label is
  'Texto corto que se muestra en el selector de variante, ej. "50 cm" o "Talla chica".';
