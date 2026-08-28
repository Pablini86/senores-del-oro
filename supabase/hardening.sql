-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Endurecimiento de seguridad (RLS)
--
--  QUÉ HACE: deja la base de datos en su forma más cerrada posible —
--    · los visitantes del sitio SOLO pueden LEER piezas visibles
--    · SOLO los correos de la lista de abajo pueden crear/editar/borrar
--      (aunque alguien logre registrar una cuenta, no podrá tocar nada)
--
--  CÓMO CORRERLO: Supabase → SQL Editor → New snippet → pega TODO → Run.
--  Es idempotente: puedes correrlo las veces que quieras. NO borra productos.
--
--  Ya trae los dos correos admin (Pablo y Guillermo). No hay que editar nada,
--  solo copiar todo y darle Run. Para sumar/quitar un admin más adelante,
--  edita SOLO la lista del paso 1 (una línea por correo, entre comillas
--  simples y con coma al final, menos el último) y vuelve a correr el archivo.
-- ═══════════════════════════════════════════════════════════


-- ─────────────────────────────────────────────
--  1. CORREOS QUE PUEDEN ADMINISTRAR
-- ─────────────────────────────────────────────
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = any (array[
    'pablolc20111@gmail.com',
    'guillermourquidy07@gmail.com'
  ]::text[]);
$$;


-- ─────────────────────────────────────────────
--  2. TABLA products — borra TODAS las políticas viejas y rehace las correctas
-- ─────────────────────────────────────────────
alter table public.products enable row level security;

do $$
declare pol record;
begin
  for pol in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'products'
  loop
    execute format('drop policy if exists %I on public.products', pol.policyname);
  end loop;
end $$;

-- Visitantes anónimos del sitio: SOLO leen piezas visibles
create policy "anon_read_active_products"
  on public.products for select
  to anon
  using (activo = true);

-- Admin logueado (de la lista): lee TODO, incluidas las ocultas
create policy "admin_read_all_products"
  on public.products for select
  to authenticated
  using (public.is_admin());

-- Crear / editar / borrar: SOLO admin de la lista
create policy "admin_insert_products"
  on public.products for insert
  to authenticated
  with check (public.is_admin());

create policy "admin_update_products"
  on public.products for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "admin_delete_products"
  on public.products for delete
  to authenticated
  using (public.is_admin());


-- ─────────────────────────────────────────────
--  3. STORAGE (bucket product-photos) — mismo criterio
-- ─────────────────────────────────────────────
do $$
declare pol record;
begin
  for pol in
    select policyname from pg_policies
    where schemaname = 'storage' and tablename = 'objects'
      and (coalesce(qual,'') ilike '%product-photos%'
           or coalesce(with_check,'') ilike '%product-photos%')
  loop
    execute format('drop policy if exists %I on storage.objects', pol.policyname);
  end loop;
end $$;

-- Cualquiera puede VER las fotos (se muestran en el sitio público)
create policy "public_read_product_photos"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'product-photos');

-- Subir / reemplazar / borrar fotos: SOLO admin de la lista
create policy "admin_insert_product_photos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'product-photos' and public.is_admin());

create policy "admin_update_product_photos"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'product-photos' and public.is_admin());

create policy "admin_delete_product_photos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'product-photos' and public.is_admin());


-- ─────────────────────────────────────────────
--  4. VERIFICACIÓN — revisa los resultados de abajo
-- ─────────────────────────────────────────────

-- 4a. RLS debe estar PRENDIDO (rls_enabled = true) en TODAS las tablas públicas.
--     Si ves alguna en false que no reconoces, avísame.
select tablename, rowsecurity as rls_enabled
from pg_tables
where schemaname = 'public'
order by tablename;

-- 4b. products debe tener EXACTAMENTE estas 5 políticas:
--     anon_read_active_products (select, {anon})
--     admin_read_all_products   (select, {authenticated})
--     admin_insert_products     (insert, {authenticated})
--     admin_update_products     (update, {authenticated})
--     admin_delete_products     (delete, {authenticated})
select policyname, cmd, roles
from pg_policies
where schemaname = 'public' and tablename = 'products'
order by policyname;

-- 4c. TODAS las políticas de storage. Deben aparecer SOLO estas 4:
--     public_read_product_photos, admin_insert_product_photos,
--     admin_update_product_photos, admin_delete_product_photos.
--     Cualquier otra fila aquí — o una que NO diga 'product-photos' en
--     qual/with_check — sobra y hay que borrarla (dime cuál y te digo cómo).
select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'storage' and tablename = 'objects'
order by policyname;


-- ═══════════════════════════════════════════════════════════
--  ROLLBACK (SOLO si algo se rompe y quieres volver al estado anterior:
--  cualquier usuario logueado puede administrar). Descomenta y corre.
-- ═══════════════════════════════════════════════════════════
-- do $$
-- declare pol record;
-- begin
--   for pol in select policyname from pg_policies
--             where schemaname='public' and tablename='products'
--   loop execute format('drop policy if exists %I on public.products', pol.policyname); end loop;
-- end $$;
-- create policy "public_read_active_products" on public.products for select to anon, authenticated using (activo = true);
-- create policy "authenticated_read_all_products" on public.products for select to authenticated using (true);
-- create policy "authenticated_write_products"  on public.products for insert to authenticated with check (true);
-- create policy "authenticated_update_products" on public.products for update to authenticated using (true) with check (true);
-- create policy "authenticated_delete_products" on public.products for delete to authenticated using (true);
