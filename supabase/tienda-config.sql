-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Interruptor "Comprar en línea"
--
--  QUÉ HACE: crea una tablita con UNA fila (id = 1) y un
--  switch `tienda_activa`. El sitio lee ese switch:
--    · APAGADO (default) → el sitio funciona como siempre:
--      sólo "Consultar por WhatsApp", sin carrito.
--    · PRENDIDO → aparece el carrito, "Agregar al carrito" y
--      el checkout que arma el pedido por WhatsApp.
--
--  Sólo los correos admin (los de hardening.sql) pueden cambiarlo.
--  Cualquiera puede leerlo (lo necesita el sitio público).
--
--  CÓMO CORRERLO: Supabase → SQL Editor → New snippet → pega TODO → Run.
--  Es idempotente: puedes correrlo las veces que quieras, no borra nada.
--  Requiere que public.is_admin() ya exista (lo crea supabase/hardening.sql).
-- ═══════════════════════════════════════════════════════════

create table if not exists public.site_config (
  id            int primary key default 1,
  tienda_activa boolean not null default false,
  updated_at    timestamptz not null default now(),
  constraint site_config_singleton check (id = 1)
);

-- Asegura que exista la fila 1 (apagada por defecto)
insert into public.site_config (id, tienda_activa)
values (1, false)
on conflict (id) do nothing;

alter table public.site_config enable row level security;

-- Borra políticas viejas y rehace las correctas
do $$
declare pol record;
begin
  for pol in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'site_config'
  loop
    execute format('drop policy if exists %I on public.site_config', pol.policyname);
  end loop;
end $$;

-- Cualquiera (sitio público incluido) puede LEER el switch
create policy "anon_read_site_config"
  on public.site_config for select
  to anon, authenticated
  using (true);

-- Sólo admin de la lista puede CAMBIARLO
create policy "admin_update_site_config"
  on public.site_config for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- (No hay políticas de INSERT/DELETE: la fila 1 ya existe y nunca se borra.)

-- Mantener updated_at al día
create or replace function public.touch_site_config()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_touch_site_config on public.site_config;
create trigger trg_touch_site_config
  before update on public.site_config
  for each row execute function public.touch_site_config();

-- Verificación
select * from public.site_config;
