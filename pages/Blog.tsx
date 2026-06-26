import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, ChevronRight, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../blogs';

const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog de Entrenamiento | New Personal Training Medellín",
  "description": "Artículos sobre entrenamiento personal, boxeo, pilates, yoga, nutrición y bienestar en Medellín. Escrito por profesionales certificados.",
  "url": "https://newpersonaltraining.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "New Personal Training S.A.S",
    "logo": "https://newpersonaltraining.com/logo.png"
  },
  "blogPost": BLOG_POSTS.map(p => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "url": `https://newpersonaltraining.com/blog/${p.slug}`,
    "datePublished": p.publishedAt,
    "author": { "@type": "Organization", "name": "New Personal Training S.A.S" }
  }))
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Artículos del Blog de New Personal Training",
  "numberOfItems": BLOG_POSTS.length,
  "itemListElement": BLOG_POSTS.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://newpersonaltraining.com/blog/${p.slug}`,
    "name": p.title
  }))
};

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('es-CO', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const categories = ['Todos', ...BLOG_CATEGORIES];
  const filtered = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const featured = BLOG_POSTS[0];
  const rest = filtered.filter(p => p.id !== featured.id);

  return (
    <>
      <SEOHead
        title="Blog de Entrenamiento en Medellín | New Personal Training — Consejos de Profesionales"
        description="Artículos sobre entrenamiento personal, boxeo, pilates, yoga, nutrición y fitness en Medellín. Guías escritas por profesionales certificados del Valle de Aburrá."
        canonical="/blog"
        jsonLd={[BLOG_SCHEMA, ITEM_LIST_SCHEMA]}
        breadcrumbs={[
          { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
          { name: 'Blog', url: 'https://newpersonaltraining.com/blog' }
        ]}
      />

      <div className="pt-24 min-h-screen">

        {/* Header */}
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <BookOpen className="w-10 h-10 text-npt-red mx-auto mb-4" aria-hidden="true" />
              <p className="text-npt-red font-bold tracking-[0.3em] text-xs uppercase mb-3">
                Escrito por profesionales en deporte
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-black italic text-white mb-4">
                BLOG <span className="text-npt-red">NPT</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Guías, consejos y estrategias de entrenamiento, nutrición y bienestar para vivir mejor en Medellín.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Artículo destacado */}
        {activeCategory === 'Todos' && (
          <section className="container mx-auto px-4 mb-16 max-w-6xl" aria-label="Artículo destacado">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-npt-red/40 card-top-line transition-all duration-500 hover-lift"
              >
                {/* Red ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-npt-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="badge-dot w-2 h-2 rounded-full bg-npt-red inline-block" aria-hidden="true" />
                      <span className="px-3 py-1 bg-npt-red/90 backdrop-blur-sm text-white text-xs font-black rounded-full uppercase tracking-wider npt-glow-sm">
                        Destacado
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 bg-npt-red/10 border border-npt-red/20 text-npt-red text-xs font-bold rounded-full uppercase tracking-wider">
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" /> {featured.readTime} min lectura
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-black italic text-white mb-4 group-hover:text-npt-red transition-colors duration-300 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3 text-sm">{featured.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <time className="text-xs text-gray-500" dateTime={featured.publishedAt}>
                        {formatDate(featured.publishedAt)}
                      </time>
                      <span className="flex items-center gap-1.5 text-npt-red text-sm font-black uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                        Leer artículo <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </section>
        )}

        {/* Filtros por categoría */}
        <section className="container mx-auto px-4 mb-10 max-w-6xl">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoría">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shimmer-hover overflow-hidden ${
                  activeCategory === cat
                    ? 'bg-npt-red text-white shadow-[0_0_20px_rgba(208,0,0,0.4)]'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:border-npt-red/40 hover:text-white hover:bg-white/8'
                }`}
              >
                {activeCategory === cat && (
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/60 badge-dot" aria-hidden="true" />
                )}
                <span className={activeCategory === cat ? 'pl-3' : ''}>{cat}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Grid de artículos */}
        <section className="container mx-auto px-4 pb-20 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'Todos' ? rest : filtered).map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="glass-panel rounded-2xl overflow-hidden border border-white/8 hover:border-npt-red/30 card-top-line transition-all duration-400 h-full flex flex-col hover-lift">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-npt-red/80 backdrop-blur-sm text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                        <Clock className="w-3 h-3" /> {post.readTime} min
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                      </div>
                      <h2 className="text-sm font-bold text-white mb-2 group-hover:text-npt-red transition-colors duration-300 leading-snug line-clamp-2 flex-1">
                        {post.title}
                      </h2>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-white/5">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">
                            <Tag className="w-2.5 h-2.5" />{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};
