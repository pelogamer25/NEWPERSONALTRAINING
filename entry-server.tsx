import React from 'react';
import { renderToString } from 'react-dom/server';
// En React Router v7 StaticRouter vive en el paquete raíz;
// react-router-dom/server era la ruta de la v6.
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';
import { takeHead, CollectedHead } from './head-collector';
import { SERVICES } from './constants';
import { BLOG_POSTS } from './blogs';

export interface RenderResult {
  html: string;
  head: CollectedHead | null;
}

export function render(url: string): RenderResult {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
  return { html, head: takeHead() };
}

/**
 * Rutas a prerenderizar, derivadas de las mismas fuentes que usa la app.
 * Al generarlas aquí, añadir un servicio o un artículo genera su HTML estático
 * sin tocar el script de build.
 */
export function getRoutes(): string[] {
  return getSitemapEntries().map((e) => e.path);
}

export interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

/**
 * Entradas del sitemap con su fecha real. Antes las 34 URLs compartían un
 * lastmod fijo de 2026-06-27, señal que Google acaba ignorando por poco fiable.
 */
export function getSitemapEntries(): SitemapEntry[] {
  const today = new Date().toISOString().slice(0, 10);

  return [
    { path: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { path: '/servicios', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { path: '/entrenadores', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { path: '/nosotros', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { path: '/contacto', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { path: '/reservar', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { path: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    ...SERVICES.map((s) => ({
      path: `/servicios/${s.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    })),
    ...BLOG_POSTS.map((p) => ({
      path: `/blog/${p.slug}`,
      // Fecha real de publicación del artículo, no la del build.
      lastmod: p.publishedAt,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];
}

/** Titulo y slug de cada articulo, para regenerar la lista de llms.txt. */
export function getBlogIndex(): { slug: string; title: string }[] {
  return BLOG_POSTS.map((p) => ({ slug: p.slug, title: p.title }));
}
