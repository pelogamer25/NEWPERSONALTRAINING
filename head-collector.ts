/**
 * Recolector de metadatos para el prerender.
 *
 * SEOHead escribe en el DOM desde un useEffect, que nunca se ejecuta durante
 * renderToString. Para que el HTML estático salga con su title, su description
 * y su JSON-LD correctos, SEOHead publica aquí los mismos datos durante el
 * render cuando no hay `document` (es decir, en el servidor).
 */

export interface CollectedHead {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  publishedTime?: string;
  articleAuthor?: string;
  noindex: boolean;
  schemas: object[];
}

let current: CollectedHead | null = null;

export function collectHead(data: CollectedHead): void {
  current = data;
}

/** Devuelve lo recolectado en el último render y limpia el estado. */
export function takeHead(): CollectedHead | null {
  const head = current;
  current = null;
  return head;
}
