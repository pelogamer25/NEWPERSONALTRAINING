/**
 * Genera un HTML estático por ruta a partir del bundle SSR.
 *
 * Antes, las 34 URLs servían el mismo index.html vacío vía rewrite en Vercel:
 * cualquier rastreador que no ejecute JavaScript (Bing, scrapers sociales, la
 * mayoría de crawlers de IA) no veía ni el H1 ni los precios ni el contenido.
 * Este script renderiza cada ruta en el build y escribe HTML real.
 *
 * Efecto secundario útil: al existir un archivo por ruta, Vercel ya no necesita
 * el rewrite comodín y las URLs desconocidas devuelven un 404 de verdad.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

const SITE_URL = 'https://newpersonaltraining.com';

const { render, getRoutes, getSitemapEntries } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

/** Escapa texto para insertarlo en un atributo HTML. */
function attr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Escapa el cierre de script dentro de un bloque JSON-LD. */
function jsonLdSafe(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function buildHead(head) {
  const url = `${SITE_URL}${head.canonical}`;
  const robots = head.noindex
    ? 'noindex, follow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const tags = [
    `<title>${attr(head.title)}</title>`,
    `<meta name="description" content="${attr(head.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${attr(url)}" />`,
    `<meta property="og:title" content="${attr(head.title)}" />`,
    `<meta property="og:description" content="${attr(head.description)}" />`,
    `<meta property="og:type" content="${attr(head.ogType)}" />`,
    `<meta property="og:url" content="${attr(url)}" />`,
    `<meta property="og:image" content="${attr(head.ogImage)}" />`,
    `<meta property="og:site_name" content="New Personal Training" />`,
    `<meta property="og:locale" content="es_CO" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@newpersonaltraining" />`,
    `<meta name="twitter:title" content="${attr(head.title)}" />`,
    `<meta name="twitter:description" content="${attr(head.description)}" />`,
    `<meta name="twitter:image" content="${attr(head.ogImage)}" />`,
  ];

  if (head.ogType === 'article' && head.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${attr(head.publishedTime)}" />`);
    tags.push(`<meta property="article:modified_time" content="${attr(head.publishedTime)}" />`);
    if (head.articleAuthor) {
      tags.push(`<meta property="article:author" content="${attr(head.articleAuthor)}" />`);
    }
  }

  for (const schema of head.schemas) {
    tags.push(
      `<script type="application/ld+json" data-prerendered-ld>${jsonLdSafe(schema)}</script>`
    );
  }

  return tags.join('\n    ');
}

/**
 * Sustituye en la plantilla las etiquetas que el prerender vuelve a emitir,
 * para que no queden duplicadas con las de la home.
 */
function stripTemplateHead(template) {
  return template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
    .replace(/<meta\s+name="robots"[^>]*>\s*/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/i, '')
    .replace(/<meta\s+property="og:(title|description|type|url|image|site_name|locale)"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '');
}

/** Regenera sitemap.xml desde las mismas fuentes que la app. */
async function writeSitemap() {
  const entries = getSitemapEntries();
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${SITE_URL}${e.path === '/' ? '/' : e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
  console.log(`Sitemap: ${entries.length} URLs`);
}

async function main() {
  const templateRaw = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  const template = stripTemplateHead(templateRaw);

  const routes = getRoutes();

  let written = 0;
  for (const route of routes) {
    const { html, head } = render(route);

    if (!head) {
      throw new Error(`La ruta ${route} no emitió metadatos SEO — ¿falta <SEOHead> en esa página?`);
    }

    const page = template
      .replace('</head>', `  ${buildHead(head)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, page, 'utf-8');
    written++;
  }

  // Página 404: Vercel la sirve automáticamente para rutas no encontradas,
  // ahora con estado 404 real en lugar de 200.
  const { html: nfHtml, head: nfHead } = render('/__not-found__');
  const notFound = template
    .replace('</head>', `  ${buildHead(nfHead)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${nfHtml}</div>`);
  await fs.writeFile(path.join(distDir, '404.html'), notFound, 'utf-8');

  await writeSitemap();

  console.log(`Prerender: ${written} rutas + 404.html`);
}

await main();
