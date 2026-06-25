import React, { useEffect, useRef } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = 'https://newpersonaltraining.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

function upsertMeta(selector: string, attrKey: string, attrVal: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.content = content;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical = '/', ogImage, jsonLd, breadcrumbs }) => {
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

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage ?? DEFAULT_OG_IMAGE);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'New Personal Training');
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}${canonical}`);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'es_CO');

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
  }, [title, description, canonical, ogImage, jsonLdStr]);

  return null;
};
