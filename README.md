# Señores del Oro — Sitio Web

**Joyería · Guadalajara · MX**

---

## Estructura

```
senores-del-oro/
├── index.html          ← Home + hero + destacados + origen
├── coleccion.html      ← Catálogo completo con tabs y búsqueda
├── assets/
│   ├── style.css                         ← Estilos globales
│   ├── catalog.js                        ← Datos de todos los productos
│   ├── SEN_ORES_DEL_ORO_LOGO_DORADO_PNG.png    ← Logo wordmark dorado (nav/footer)
│   ├── SEN_ORES_DEL_ORO_LOGO_UNICO_DORADO.png  ← Ícono dorado (hero)
│   ├── SEN_ORES_DEL_ORO_LOGO_UNICO_BLANCO.png  ← Ícono blanco
│   ├── SEN_ORES_DEL_ORO_LOGO_NEGRO.png         ← Wordmark negro
│   └── SEN_ORES_DEL_ORO_NEGRO_CON_DORADO.png   ← Logo completo negro + dorado
└── README.md
```

---

## Publicar en GitHub Pages

1. Crear repositorio en github.com (público)
2. Subir todos los archivos
3. Settings → Pages → Branch: `main` → `/root`
4. Listo en: `https://[usuario].github.io/senores-del-oro`

---

## Actualizar productos

### Agregar foto a un producto
En `assets/catalog.js`, busca el SKU y cambia `foto: ''` por la URL de la imagen:

```js
{ sku:'CAD-MEX-001', nombre:'Barbado Planchada', ..., foto:'assets/fotos/CAD-MEX-001.jpg' }
```

Las fotos van en una carpeta `assets/fotos/` que creas tú.

### Actualizar precio
En `assets/catalog.js`, cambia el campo `precio`:

```js
precio: '$19,950'  →  precio: '$21,500'
```

### Agregar producto nuevo
Copia una línea del array correspondiente y cambia los datos.

---

## Conectar Shopify Buy Button

Cuando tengan la tienda en Shopify (Plan Starter $9 USD/mes):

1. En Shopify: Canales de venta → Buy Button → Crear
2. Selecciona el producto → Copiar código
3. En el modal de cada producto, reemplaza el botón de WhatsApp por el snippet de Shopify

---

## Colores

| Variable | Hex | Uso |
|---|---|---|
| `--negro` | `#0C0C0C` | Fondo principal |
| `--oro` | `#C9A84C` | Color de marca |
| `--champagne` | `#E8E0CC` | Texto sobre negro |
| `--carbon` | `#1a1510` | Fondos de cards |
| `--carbon2` | `#0f0b06` | Fondos secundarios |
