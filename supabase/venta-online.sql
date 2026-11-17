-- ═══════════════════════════════════════════════════════════
--  SEÑORES DEL ORO — Switch "Se vende en línea" por pieza
--
--  QUÉ HACE: agrega a cada pieza un switch venta_online.
--    · PRENDIDO → en el sitio salen "Comprar ahora" y "Agregar al carrito"
--      (sin botón de WhatsApp).
--    · APAGADO  → sólo "Consultar por WhatsApp".
--  La primera vez: broqueles, cadenas y pulsos quedan PRENDIDOS;
--  las piezas únicas quedan APAGADAS. Después se cambia en el Admin.
--
--  CÓMO CORRERLO: Supabase → SQL Editor → New snippet → pega TODO → Run.
--  Se puede correr varias veces: NO vuelve a cambiar lo que ya pusiste en el Admin.
--  No toca las políticas de seguridad (el admin ya puede editar piezas).
-- ═══════════════════════════════════════════════════════════

do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'products' and column_name = 'venta_online'
  ) then
    alter table public.products add column venta_online boolean not null default true;
    update public.products set venta_online = false where categoria = 'unicas';
  end if;
end $$;

-- Verificación: cuántas piezas quedan en línea por categoría
select categoria,
       count(*) filter (where venta_online)     as en_linea,
       count(*) filter (where not venta_online) as solo_whatsapp
from public.products
group by categoria
order by categoria;
