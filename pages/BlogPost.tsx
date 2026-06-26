import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowLeft, ChevronRight, Share2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS } from '../blogs';
import { Button } from '../components/ui/Button';

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('es-CO', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) navigate('/blog', { replace: true });
  }, [post, navigate]);

  if (!post) return null;

  const related = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
  const moreRelated = related.length < 3
    ? [...related, ...BLOG_POSTS.filter(p => p.id !== post.id && !related.find(r => r.id === p.id))].slice(0, 3)
    : related;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "url": `https://newpersonaltraining.com/blog/${post.slug}`,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "New Personal Training S.A.S",
      "url": "https://newpersonaltraining.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "New Personal Training S.A.S",
      "logo": {
        "@type": "ImageObject",
        "url": "https://newpersonaltraining.com/logo.png"
      }
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "timeRequired": `PT${post.readTime}M`,
    "inLanguage": "es-CO",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://newpersonaltraining.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | New Personal Training Medellín`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        jsonLd={articleSchema}
        breadcrumbs={[
          { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
          { name: 'Blog', url: 'https://newpersonaltraining.com/blog' },
          { name: post.title, url: `https://newpersonaltraining.com/blog/${post.slug}` }
        ]}
      />

      <div className="pt-24 min-h-screen">

        {/* Hero imagen */}
        <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-npt-black via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mt-8 mb-6" aria-label="Navegación">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-300 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Meta */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-npt-red/10 border border-npt-red/20 text-npt-red text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" /> {post.readTime} min de lectura
              </span>
              <time className="text-xs text-gray-500" dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-black italic text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-4 border-npt-red pl-4">
              {post.excerpt}
            </p>

            {/* Autor */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-10 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-npt-red/20 flex items-center justify-center text-npt-red font-bold text-sm">
                  NPT
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.authorRole}</p>
                </div>
              </div>
              <button
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                aria-label="Compartir artículo"
              >
                <Share2 className="w-4 h-4" /> Compartir
              </button>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="my-12 glass-panel rounded-2xl p-8 border border-npt-red/20 text-center">
            <p className="text-npt-red font-bold uppercase tracking-widest text-xs mb-2">¿Listo para empezar?</p>
            <h2 className="text-2xl font-heading font-black italic text-white mb-4">
              AGENDA TU SESIÓN DE PRUEBA
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Evaluación inicial gratuita con un profesional certificado. En Medellín y todo el Valle de Aburrá.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/reservar" size="lg">Reservar Sesión Gratis</Button>
              <Button href="/servicios" variant="secondary" size="lg">Ver Servicios</Button>
            </div>
          </div>

          {/* Artículos relacionados */}
          {moreRelated.length > 0 && (
            <section className="pb-16" aria-label="Artículos relacionados">
              <h2 className="text-xl font-heading font-bold italic text-white mb-6">
                TAMBIÉN TE PUEDE INTERESAR
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {moreRelated.map(related => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                    <div className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-npt-red/30 transition-all">
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {related.readTime} min
                        </p>
                        <h3 className="text-sm font-bold text-white group-hover:text-npt-red transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Back to blog */}
        <div className="container mx-auto px-4 max-w-4xl pb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al Blog
          </Link>
        </div>

      </div>
    </>
  );
};
