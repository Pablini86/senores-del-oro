-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Esquema de base de datos
--  Pega este archivo completo en Supabase → SQL Editor → Run
-- ═══════════════════════════════════════════════════════════

-- ── EXTENSIÓN PARA UUIDs ──
create extension if not exists "pgcrypto";

-- ── TABLA: products ──
create table if not exists products (
  id          uuid primary key default gen_random_uuid(),
  sku         text not null unique,
  categoria   text not null,              -- 'cadenas' | 'pulsos' | 'broqueles' | 'unicas' | (nuevas que agreguen)
  nombre      text not null,
  descripcion text default '',
  kilate      text default '',
  precio      numeric,                    -- null = "consultar precio"
  largo       text default '',            -- ej. '65 cm'
  grosor      text default '',            -- ej. '5 mm'
  eslabon     text default '',            -- ej. '6 mm' (pulsos)
  placa       text default '',            -- ej. '6 mm' (pulsos con placa)
  peso        text default '',            -- ej. '13.3g'
  foto_url    text,                       -- URL pública en Supabase Storage
  notas       text default '',            -- notas internas, no se muestran al público
  destacado   boolean not null default false,
  activo      boolean not null default true,
  orden       integer not null default 0, -- para ordenar manualmente en carruseles/grids
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists idx_products_categoria on products (categoria);
create index if not exists idx_products_activo on products (activo);

-- ── updated_at automático ──
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_products_updated_at on products;
create trigger trg_products_updated_at
  before update on products
  for each row execute function set_updated_at();

-- ── ROW LEVEL SECURITY ──
alter table products enable row level security;

-- Cualquiera (incluyendo visitantes anónimos del sitio) puede LEER productos activos
drop policy if exists "public_read_active_products" on products;
create policy "public_read_active_products"
  on products for select
  to anon, authenticated
  using (activo = true);

-- Solo usuarios autenticados (admin logueado) pueden leer TODO, incluyendo inactivos
drop policy if exists "authenticated_read_all_products" on products;
create policy "authenticated_read_all_products"
  on products for select
  to authenticated
  using (true);

-- Solo usuarios autenticados pueden crear/editar/borrar
drop policy if exists "authenticated_write_products" on products;
create policy "authenticated_write_products"
  on products for insert
  to authenticated
  with check (true);

drop policy if exists "authenticated_update_products" on products;
create policy "authenticated_update_products"
  on products for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "authenticated_delete_products" on products;
create policy "authenticated_delete_products"
  on products for delete
  to authenticated
  using (true);

-- ═══════════════════════════════════════════════════════════
--  STORAGE — bucket para fotos de producto
--  (Crea el bucket "product-photos" desde el dashboard:
--   Storage → New bucket → nombre: product-photos → Public: ON)
--  Luego corre esto para las políticas de acceso:
-- ═══════════════════════════════════════════════════════════

drop policy if exists "public_read_product_photos" on storage.objects;
create policy "public_read_product_photos"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'product-photos');

drop policy if exists "authenticated_upload_product_photos" on storage.objects;
create policy "authenticated_upload_product_photos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'product-photos');

drop policy if exists "authenticated_update_product_photos" on storage.objects;
create policy "authenticated_update_product_photos"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'product-photos');

drop policy if exists "authenticated_delete_product_photos" on storage.objects;
create policy "authenticated_delete_product_photos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'product-photos');
