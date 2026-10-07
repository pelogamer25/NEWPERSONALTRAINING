# New Personal Training

Sitio de New Personal Training S.A.S — entrenamiento personal en Medellín y el Valle de Aburrá.
React 19 + Vite + Tailwind, con prerenderizado estático de todas las rutas.

## Requisitos

Node.js 20 o superior.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

El build tiene tres pasos encadenados:

1. `vite build` — bundle de cliente.
2. `vite build --ssr entry-server.tsx` — bundle de servidor usado solo en build.
3. `node scripts/prerender.mjs` — renderiza cada ruta a HTML estático y regenera `sitemap.xml`.

El resultado es un `dist/` con un `index.html` real por ruta, más `404.html`.
Esto importa para SEO: sin este paso todas las URLs servían la misma cáscara
vacía y los rastreadores que no ejecutan JavaScript no veían ningún contenido.

## Imágenes

```bash
npm run optimize:images
```

Convierte lo que haya en `public/images` a WebP redimensionado y regenera
`public/og-image.jpg` (1200×630). Ejecutar después de añadir imágenes nuevas.

## Notas de despliegue

- `vercel.json` **no** lleva rewrite comodín a `index.html` a propósito: cada
  ruta existe como archivo, así que las URLs desconocidas devuelven un 404 real
  en lugar de un 200 con la página de error dentro.
- Al añadir un servicio en `constants.ts` o un artículo en `blogs.ts`, su ruta
  se prerenderiza y entra en el sitemap automáticamente. No hay listas que
  mantener a mano.
- Los datos estructurados no incluyen `aggregateRating`. No volver a añadirlo
  sin reseñas reales y visibles en la página: la política de datos estructurados
  de Google lo trata como spam y puede acarrear una acción manual.
