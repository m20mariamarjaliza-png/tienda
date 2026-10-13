# Marja — tienda de figuras de anime (Vue 3 + Vue Router)

## Cómo ejecutarlo

1. Instalar dependencias:
   ```
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
3. Abrir la URL que muestra la terminal (normalmente http://localhost:5173).

## Estructura

- `src/App.vue` — cabecera con logo "MARJA", menú (Catálogo / Acerca de) y pie de página.
- `src/router/index.js` — rutas: `/` (catálogo), `/acerca-de`, `/articulo/:id`.
- `src/views/Home.vue` — hero, filtro por categoría y grilla de productos.
- `src/views/ItemDetail.vue` — ficha técnica (escala, material, altura, stock) y botón "Volver".
- `src/views/About.vue` — historia de la marca.
- `src/data/items.js` — catálogo de 6 figuras (nombres y diseños originales, no licencias oficiales).
- `src/components/FigureArt.vue` — ilustración SVG propia para cada figura (no fotos de stock).
- `src/components/StarRating.vue` — estrellas de valoración reutilizables.

## Añadir tus fotos (sin tocar código)

El código ya está preparado: solo tenés que copiar tus fotos dentro de
`public/images/` con estos nombres exactos, y la web las va a mostrar
automáticamente en vez de la ilustración:

- `guerrera.png` → Guerrera del Alba
- `samurai.png` → Samurai Carmesí
- `neko.png` → Neko Guardiana
- `mecha.png` → Piloto Mecha Aurora
- `bruja.png` → Bruja Lunar
- `espadachin.png` → Espadachín del Ocaso

Si una foto todavía no está en esa carpeta, ese producto sigue mostrando
la ilustración de respaldo sin dar error. Podés ir agregando las fotos de
a una.

## Personalizar (opcional, tocando código)

- **Añadir un producto**: agregá un objeto nuevo en `src/data/items.js` siguiendo el mismo formato (necesita `id` único).
- **Cambiar colores de una figura**: editá `color1` / `color2` de ese producto.
- **Usar otro nombre de archivo de imagen**: cambiá el valor de `imagen` en `src/data/items.js`.

## Notas

- 100% responsive: la grilla usa CSS Grid con `auto-fill`, el menú pasa a
  hamburguesa en pantallas chicas, y la ficha de producto pasa de dos
  columnas a una sola en móvil.
- El botón "Añadir al carrito" y el ícono del carrito en el menú son
  visuales (no tienen lógica de compra conectada).
