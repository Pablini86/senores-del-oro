# Setup — Conectar el sitio a Supabase

El sitio ya no lee productos de `assets/catalog.js`. Ahora usa una base de
datos real (Supabase, gratis en su plan básico). Sigue estos pasos una vez
para dejarlo funcionando — te toma ~15 minutos.

## 1. Crear el proyecto en Supabase

1. Entra a [supabase.com](https://supabase.com) y crea una cuenta gratis.
2. **New project** → ponle nombre (ej. `senores-del-oro`), elige una región
   cercana (US East o similar) y una contraseña de base de datos (guárdala,
   no la necesitas para el sitio pero sí para administración avanzada).
3. Espera ~2 minutos a que aprovisione el proyecto.

## 2. Correr el esquema de la base de datos

1. En el dashboard de tu proyecto → **SQL Editor** → **New snippet**.
2. Copia y pega **todo** el contenido de [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
   Esto crea la tabla `products`, las reglas de seguridad (RLS) y las
   políticas de acceso a fotos, todo en un solo paso.
3. Ahora crea el bucket de fotos: **Storage** (menú izquierdo) → **New bucket**
   → nombre exacto `product-photos` → marca **Public bucket** → **Create**.
   No necesitas volver a tocar el SQL Editor — las políticas del paso 2 ya
   quedaron listas y aplican en cuanto el bucket existe.

## 3. Cargar el catálogo actual (156 piezas)

1. **SQL Editor** → **New query**.
2. Copia y pega **todo** el contenido de [`supabase/seed.sql`](supabase/seed.sql) → **Run**.
   Esto carga las 13 cadenas, 9 pulsos, 130 broqueles y 4 piezas únicas que
   ya tenías en `catalog.js` (las fotos siguen apuntando a Google Drive por
   ahora — puedes re-subirlas desde el Admin cuando quieras para dejar de
   depender de Drive).

## 4. Crear tu usuario de administrador

1. **Authentication** (menú izquierdo) → **Users** → **Add user** → **Create new user**.
2. Pon el correo y contraseña que van a usar para entrar a `Admin.html`.
   Marca **Auto Confirm User** para no tener que verificar el correo.
3. Repite para cada persona que vaya a administrar el catálogo (tú y tu socio).

## 5. Conectar el sitio

1. En Supabase: **Project Settings** (ícono de engrane) → **API**.
2. Copia el **Project URL** y la **anon / public key**.
3. Abre [`assets/config.js`](assets/config.js) en el repo y reemplaza:
   ```js
   const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
   const SUPABASE_ANON_KEY = 'TU-ANON-PUBLIC-KEY';
   ```
   con los valores reales. La anon key es pública por diseño — la seguridad
   la dan las políticas RLS que ya corriste en el paso 2, no el secreto de
   esa clave. **Nunca** pongas ahí la `service_role key`.

## 6. Probar

1. Abre `index.html` con un servidor local (ej. `python3 -m http.server` en
   la carpeta del proyecto) o súbelo a GitHub Pages.
2. Deberías ver las 13 cadenas y 9 pulsos en el home, y el catálogo completo
   en `coleccion.html`.
3. Abre `Admin.html`, entra con el correo/contraseña del paso 4, y prueba
   editar o agregar una pieza — debe reflejarse en el sitio al recargar.

## Actualizaciones futuras del esquema

Ya tienes tu proyecto corriendo y aparece un archivo nuevo en
`supabase/migrations/` (por ejemplo, `0001_variant_groups.sql`)? Solo
necesitas correr ESE archivo, no todo `schema.sql` de nuevo — son cambios
incrementales pensados para pegarse tal cual en **SQL Editor → New snippet → Run**.

**Ahora mismo hay dos pendientes** (corre las dos, en orden):
1. [`supabase/migrations/0001_variant_groups.sql`](supabase/migrations/0001_variant_groups.sql) — agrupar variantes de producto (ver README).
2. [`supabase/migrations/0002_multiple_photos.sql`](supabase/migrations/0002_multiple_photos.sql) — varias fotos por pieza con galería.

## Notas

- **No necesitas volver a tocar `catalog.js`** — quedó como respaldo
  histórico de cómo estaba el catálogo antes de la migración. `Admin.html`
  ahora escribe directo a la base de datos.
- Para regenerar `sitemap.xml` con todas las piezas activas después de la
  configuración: `node scripts/generate-sitemap.js`.
- El plan gratis de Supabase soporta esto sin problema (500MB de base de
  datos, 1GB de almacenamiento de fotos, más que suficiente para un catálogo
  de joyería).
