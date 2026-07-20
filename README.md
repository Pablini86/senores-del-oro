# Señores del Oro — Sitio Web

**Joyería · Guadalajara · MX**

---

## Estructura

```
senores-del-oro/
├── index.html          ← Home + hero + destacados + origen
├── coleccion.html      ← Catálogo completo con tabs y búsqueda
├── producto.html        ← Página de detalle de una pieza (?sku=...)
├── encargo.html         ← Formulario "bajo pedido" → WhatsApp
├── Admin.html            ← Panel de administración (requiere login)
├── assets/
│   ├── style.css                        ← Estilos globales
│   ├── config.js                        ← URL/clave de Supabase (rellenar, ver SETUP.md)
│   ├── db.js                            ← Cliente de base de datos (Supabase)
│   ├── partials.js                      ← Topbar/nav/footer compartidos
│   ├── modal.js                         ← Modal de vista rápida (no usado aún)
│   ├── catalog.js                       ← Respaldo histórico del catálogo pre-Supabase
│   └── SEN_ORES_DEL_ORO_*.png           ← Logos
├── supabase/
│   ├── schema.sql                       ← Esquema de base de datos (correr una vez)
│   └── seed.sql                         ← Carga inicial del catálogo (correr una vez)
├── scripts/
│   ├── generate-seed.js                 ← Regenera seed.sql desde catalog.js
│   └── generate-sitemap.js              ← Regenera sitemap.xml desde Supabase
├── SETUP.md              ← Guía paso a paso para conectar Supabase
└── README.md
```

---

## Cómo funciona el catálogo

El sitio lee los productos en vivo desde una base de datos en **Supabase**
(Postgres gratis). `Admin.html` es un panel real con login — lo que se
guarda ahí aparece de inmediato en `index.html`, `coleccion.html` y
`producto.html`.

**Si es la primera vez que configuras esto, sigue [SETUP.md](SETUP.md).**
Ahí está el paso a paso para crear el proyecto de Supabase, cargar el
catálogo actual y crear tu usuario de administrador.

### Agregar / editar un producto

Todo se hace desde `Admin.html`:

1. Entra con tu correo y contraseña (creados en Supabase → Authentication → Users).
2. **+ Nueva pieza** o **Editar** sobre una fila existente.
3. Sube la foto directo desde tu computadora (se guarda en Supabase Storage)
   o pega una URL.
4. **Guardar pieza** — se escribe directo a la base de datos, no hace falta
   tocar ningún archivo de código.

### Ocultar una pieza sin borrarla

En el formulario de edición, desmarca **"Visible en el sitio"**. La pieza
sigue en el catálogo interno pero desaparece de `index.html`/`coleccion.html`.

---

## Publicar en GitHub Pages

1. Crear repositorio en github.com (público)
2. Subir todos los archivos
3. Settings → Pages → Branch: `main` → `/root`
4. Listo en: `https://[usuario].github.io/senores-del-oro` (o el dominio de `CNAME`)

---

## Colores

| Variable | Hex | Uso |
|---|---|---|
| `--negro` | `#0C0C0C` | Fondo principal |
| `--oro` | `#C9A84C` | Color de marca |
| `--champagne` | `#E8E0CC` | Texto sobre negro |
| `--carbon` | `#1a1510` | Fondos de cards |
| `--carbon2` | `#0f0b06` | Fondos secundarios |
