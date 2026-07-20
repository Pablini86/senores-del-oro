-- ═══════════════════════════════════════════════════════════
--  Migración 0002 — Varias fotos por pieza
--  Corre esto en tu proyecto existente: SQL Editor → New snippet → Run
--  (Ya está incluido en supabase/schema.sql para instalaciones nuevas)
-- ═══════════════════════════════════════════════════════════

alter table products add column if not exists fotos text[] not null default '{}';

-- Migra la foto que ya tenían a la nueva galería, para no perder nada.
update products
  set fotos = array[foto_url]
  where foto_url is not null and foto_url <> '' and (fotos is null or fotos = '{}');

comment on column products.fotos is
  'Galería de fotos de la pieza, en orden. fotos[1] es la portada y se refleja en foto_url para tarjetas/carruseles.';
