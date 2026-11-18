-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Pedidos (pestaña "Pedidos" del Admin)
--
--  QUÉ HACE: crea la tabla de pedidos.
--    · Pagos con tarjeta: los guarda el servidor (Stripe → Vercel) solo.
--    · Pedidos por WhatsApp: se guardan como "por confirmar".
--  SEGURIDAD: los pedidos traen datos personales (nombre, teléfono,
--  dirección). NADIE del público puede leerlos ni escribirlos. Sólo los
--  correos admin (is_admin) pueden VER y CAMBIAR el estado/guía.
--  Sólo el servidor (llave service_role, que vive en Vercel) puede crear pedidos.
--
--  CÓMO CORRERLO: Supabase → SQL Editor → New snippet → pega TODO → Run.
--  Se puede correr varias veces. No borra pedidos.
-- ═══════════════════════════════════════════════════════════

create table if not exists public.orders (
  id                bigint generated always as identity primary key,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  origen            text not null check (origen in ('tarjeta','whatsapp')),
  estado            text not null default 'por confirmar'
                    check (estado in ('por confirmar','pagado','enviado','entregado','cancelado','reembolsado')),
  stripe_session_id text unique,
  items             jsonb not null default '[]'::jsonb,   -- [{sku, nombre, qty, precio}]
  subtotal          numeric(10,2),
  envio             numeric(10,2),
  total             numeric(10,2),
  cliente_nombre    text,
  cliente_tel       text,
  cliente_email     text,
  direccion         text,
  paqueteria        text,
  guia              text,
  notas             text
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);

alter table public.orders enable row level security;

do $$
declare pol record;
begin
  for pol in select policyname from pg_policies where schemaname = 'public' and tablename = 'orders'
  loop
    execute format('drop policy if exists %I on public.orders', pol.policyname);
  end loop;
end $$;

-- Sólo admin: ver y actualizar (estado, paquetería, guía, notas)
create policy "admin_read_orders"   on public.orders for select to authenticated using (public.is_admin());
create policy "admin_update_orders" on public.orders for update to authenticated using (public.is_admin()) with check (public.is_admin());
-- Sin políticas de INSERT/DELETE ni nada para anon: sólo el servidor (service_role) crea pedidos.

create or replace function public.touch_orders()
returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;

drop trigger if exists trg_touch_orders on public.orders;
create trigger trg_touch_orders before update on public.orders
  for each row execute function public.touch_orders();

select 'orders lista' as ok, count(*) as pedidos from public.orders;
