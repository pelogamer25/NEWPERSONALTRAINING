import React, { useEffect, useRef } from 'react';
import { collectHead } from '../head-collector';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  /** "website" para páginas normales, "article" para entradas del blog. */
  ogType?: 'website' | 'article';
  /** Fecha ISO de publicación — solo se emite cuando ogType es "article". */
  publishedTime?: string;
  articleAuthor?: string;
  /** Excluye la página de los índices (p. ej. la 404). */
  noindex?: boolean;
  jsonLd?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = 'https://newpersonaltraining.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function upsertMeta(selector: string, attrKey: string, attrVal: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.content = content;
}

function removeMeta(selector: string) {
  document.querySelector(selector)?.remove();
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical = '/',
  ogImage,
  ogType = 'website',
  publishedTime,
  articleAuthor,
  noindex = false,
  jsonLd,
  breadcrumbs,
}) => {
  const scriptsRef = useRef<HTMLScriptElement[]>([]);

  const allSchemas: object[] = [];
  if (jsonLd) {
    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    allSchemas.push(...schemas);
  }
  if (breadcrumbs && breadcrumbs.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }
  const jsonLdStr = JSON.stringify(allSchemas);

  // Durante el prerender no hay DOM ni se ejecutan los efectos, así que los
  // metadatos se publican aquí para que el script de build los inyecte.
  if (typeof document === 'undefined') {
    collectHead({
      title,
      description,
      canonical,
      ogImage: ogImage ?? DEFAULT_OG_IMAGE,
      ogType,
      publishedTime,
      articleAuthor,
      noindex,
      schemas: allSchemas,
    });
  }

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);

    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage ?? DEFAULT_OG_IMAGE);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'New Personal Training');
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}${canonical}`);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'es_CO');

    // Metadatos de artículo: se emiten solo en el blog y se limpian fuera de él,
    // porque el <head> persiste entre navegaciones del SPA.
    if (ogType === 'article' && publishedTime) {
      upsertMeta('meta[property="article:published_time"]', 'property', 'article:published_time', publishedTime);
      upsertMeta('meta[property="article:modified_time"]', 'property', 'article:modified_time', publishedTime);
      if (articleAuthor) {
        upsertMeta('meta[property="article:author"]', 'property', 'article:author', articleAuthor);
      }
    } else {
      removeMeta('meta[property="article:published_time"]');
      removeMeta('meta[property="article:modified_time"]');
      removeMeta('meta[property="article:author"]');
    }

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage ?? DEFAULT_OG_IMAGE);
    upsertMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@newpersonaltraining');

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}${canonical}`;

    scriptsRef.current.forEach(s => s.remove());
    scriptsRef.current = [];

    // El prerender deja el JSON-LD de cada ruta en el HTML. Al hidratar se
    // elimina para que este componente sea la única fuente y no se dupliquen.
    document.querySelectorAll('script[data-prerendered-ld]').forEach(s => s.remove());

    allSchemas.forEach(schema => {
      const script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptsRef.current.push(script);
    });

    return () => {
      scriptsRef.current.forEach(s => s.remove());
      scriptsRef.current = [];
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonical, ogImage, ogType, publishedTime, articleAuthor, noindex, jsonLdStr]);

  return null;
};
