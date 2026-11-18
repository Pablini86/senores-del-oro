-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Inventario (existencias por pieza)
--
--  QUÉ HACE:
--   1. Agrega "existencias" a cada pieza. La PRIMERA vez pone:
--        broqueles = 10 · cadenas = 1 · pulsos = 1 · únicas = 1
--      (vacío = no se lleva control, siempre disponible).
--   2. Descuenta solo: cuando un pedido queda PAGADO (tarjeta en automático,
--      WhatsApp cuando lo marcas "pagado" en Admin → Pedidos).
--   3. Regresa las piezas si el pedido se CANCELA o REEMBOLSA.
--   Con existencias en 0 el sitio muestra "Agotado".
--
--  CÓMO CORRERLO: Supabase → SQL Editor → New snippet → pega TODO → Run.
--  Se puede correr varias veces: NO vuelve a poner los números iniciales.
-- ═══════════════════════════════════════════════════════════

do $$
begin
  if not exists (select 1 from information_schema.columns
                 where table_schema='public' and table_name='products' and column_name='existencias') then
    alter table public.products add column existencias integer check (existencias is null or existencias >= 0);
    update public.products set existencias = case categoria when 'broqueles' then 10 else 1 end;
  end if;
  if not exists (select 1 from information_schema.columns
                 where table_schema='public' and table_name='orders' and column_name='inventario_descontado') then
    alter table public.orders add column inventario_descontado boolean not null default false;
  end if;
end $$;

-- Descuenta / regresa existencias según el estado del pedido.
-- security definer: corre con permisos del dueño (el pedido lo crea el servidor o lo edita el admin).
create or replace function public.orders_inventario()
returns trigger language plpgsql security definer set search_path = public as $$
declare it jsonb;
begin
  if new.estado in ('pagado','enviado','entregado') and not new.inventario_descontado then
    for it in select * from jsonb_array_elements(coalesce(new.items,'[]'::jsonb)) loop
      update products set existencias = greatest(existencias - coalesce((it->>'qty')::int,1), 0)
       where sku = it->>'sku' and existencias is not null;
    end loop;
    new.inventario_descontado := true;
  elsif new.estado in ('cancelado','reembolsado') and new.inventario_descontado then
    for it in select * from jsonb_array_elements(coalesce(new.items,'[]'::jsonb)) loop
      update products set existencias = existencias + coalesce((it->>'qty')::int,1)
       where sku = it->>'sku' and existencias is not null;
    end loop;
    new.inventario_descontado := false;
  end if;
  return new;
end $$;

drop trigger if exists trg_orders_inventario on public.orders;
create trigger trg_orders_inventario before insert or update of estado on public.orders
  for each row execute function public.orders_inventario();

-- Verificación
select categoria, count(*) as piezas, sum(existencias) as existencias_total
from public.products group by categoria order by categoria;
