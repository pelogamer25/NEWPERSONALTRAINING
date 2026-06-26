import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight, ChevronDown, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/Card';
import { TrainerSlider } from '../components/sections/TrainerSlider';
import { SEOHead } from '../components/SEOHead';
import { SERVICES, TESTIMONIALS } from '../constants';
import { BLOG_POSTS } from '../blogs';

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FitnessCenter",
  "@id": "https://newpersonaltraining.com/#business",
  "name": "New Personal Training",
  "description": "Centro de entrenamiento personal en Medellín con más de 10 años de experiencia. Entrenamiento personalizado, nutrición, pilates, yoga, boxeo, natación, squash, fisioterapia y masajes en el Valle de Aburrá.",
  "url": "https://newpersonaltraining.com",
  "telephone": "+573005974290",
  "email": "contacto@newpersonaltraining.com",
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Medellín",
    "addressRegion": "Antioquia",
    "addressCountry": "CO"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Andrea Torres" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Llevo 6 meses entrenando y los resultados son increíbles. La atención personalizada hace toda la diferencia."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Felipe Gómez" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "La flexibilidad de horarios y el profesionalismo del equipo me han permitido mantener mi salud sin descuidar mi empresa."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Camila Restrepo" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Las clases grupales tienen una energía única. He hecho grandes amigos y he mejorado mi resistencia física notablemente."
    }
  ]
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un entrenador personal en Medellín?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En New Personal Training, el entrenamiento personalizado 1:1 comienza desde $53.800 por sesión. Los planes mensuales van desde $215.200 (1 vez/semana, 4 sesiones) hasta $1.076.000 (5 veces/semana, 20 sesiones). También ofrecemos entrenamiento semipersonalizado desde $69.200/sesión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el entrenamiento personalizado en New Personal Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El entrenamiento personalizado incluye una evaluación inicial gratuita, diseño de plan de entrenamiento adaptado a tus objetivos y biotipo, seguimiento continuo del progreso, y sesiones 1:1 con un entrenador certificado. Puedes complementarlo con nutrición y fisioterapia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde está ubicado New Personal Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New Personal Training opera en toda el área metropolitana del Valle de Aburrá, Medellín, Antioquia, Colombia. Puedes contactarnos al +57 300 597 4290 o escribirnos a contacto@newpersonaltraining.com para coordinar la ubicación de tus sesiones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen clases de boxeo, pilates y yoga en Medellín?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. New Personal Training ofrece clases de boxeo (desde $106.300/sesión), Pilates Mat (desde $127.600/sesión) y Yoga (desde $91.400/sesión), todas en modalidad presencial en el Valle de Aburrá. También ofrecemos natación, squash, entrenamiento funcional y rítmico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen servicio de nutricionista y fisioterapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Contamos con nutricionistas certificados que ofrecen valoración y plan nutricional completo por $250.000. También ofrecemos fisioterapia para recuperación, prevención y rehabilitación desde $150.000/sesión, y masajes terapéuticos desde $150.000/sesión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos entrenadores tiene New Personal Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contamos con más de 20 profesionales certificados que incluyen: 34 entrenadores de ejercicio físico, 2 valoradores, 3 fisioterapeutas, 2 nutricionistas, 2 masoterapetutas y 3 directores. El equipo tiene trayectoria internacional y experiencia promedio de 6+ años."
      }
    }
  ]
};

const FAQS = [
  {
    q: "¿Cuánto cuesta un entrenador personal en Medellín?",
    a: "En New Personal Training el entrenamiento personalizado 1:1 comienza desde $53.800 por sesión. Los planes mensuales van desde $215.200 (1×/semana, 4 sesiones) hasta $1.076.000 (5×/semana, 20 sesiones). El entrenamiento semipersonalizado arranca desde $69.200/sesión. Somos una de las opciones más competitivas entre los gimnasios y entrenadores personales de Medellín."
  },
  {
    q: "¿Son el mejor gym o entrenador personal de Medellín?",
    a: "New Personal Training S.A.S lleva más de 11 años —desde 2014— siendo referente en entrenamiento personalizado, semipersonalizado y grupal en Medellín y el Valle de Aburrá. Contamos con 50+ profesionales certificados por el Politécnico Colombiano Jaime Isaza Cadavid y más de 500 clientes satisfechos. No somos un gimnasio tradicional: somos un equipo que va donde tú estás."
  },
  {
    q: "¿Ofrecen entrenamiento a domicilio en Medellín?",
    a: "Sí. Nuestro servicio estrella es el entrenamiento personalizado a domicilio en Medellín: llegamos a tu casa, conjunto residencial u oficina en El Poblado, Laureles, Belén, Robledo, Envigado, Itagüí, Sabaneta, Bello y cualquier zona del Valle de Aburrá, en el horario que tú elijas."
  },
  {
    q: "¿Ofrecen clases de boxeo, pilates y yoga en Medellín?",
    a: "Sí. Ofrecemos clases de boxeo en Medellín (desde $106.300/sesión), Pilates Mat (desde $127.600/sesión), Yoga (desde $91.400/sesión), natación personalizada y semipersonalizada, squash, entrenamiento funcional grupal, clases rítmicas y más. Todos los servicios son presenciales en el Valle de Aburrá."
  },
  {
    q: "¿Tienen nutricionista y fisioterapia en Medellín?",
    a: "Sí. Contamos con nutricionistas certificados —valoración y plan nutricional personalizado por $250.000— y fisioterapeutas para recuperación, prevención y rehabilitación física desde $150.000/sesión. También ofrecemos masajes deportivos y terapéuticos desde $150.000/sesión."
  },
  {
    q: "¿Cuántos años llevan y por qué confiar en New Personal Training?",
    a: "Fundada en mayo de 2014 por profesionales en Deporte del Politécnico Colombiano Jaime Isaza Cadavid, New Personal Training S.A.S lleva 11+ años de procesos de entrenamiento ininterrumpidos. Somos una empresa formalmente constituida (S.A.S), con 50+ profesionales altamente cualificados, metodologías actualizadas, y también proveemos y damos servicio técnico a equipos de gimnasio (línea profesional, institucional y hogar)."
  }
];

export const Home: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="New Personal Training | Entrenadores Personales en Medellín — Desde 2014"
        description="Los mejores entrenadores personales de Medellín y el Valle de Aburrá. Entrenamiento personalizado a domicilio, boxeo, pilates, yoga, natación, nutrición y fisioterapia. 11+ años · 50+ profesionales. ¡Evaluación gratis!"
        canonical="/"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA]}
      />

      <div ref={ref} className="flex flex-col gap-0">
        {/* Parallax Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" aria-label="Inicio — New Personal Training">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-npt-black/30 via-npt-black/60 to-npt-black z-10" />
            <img
              src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=1920"
              alt="Sesión de entrenamiento personal en Medellín — New Personal Training"
              className="w-full h-full object-cover"
              fetchpriority="high"
            />
          </motion.div>

          <div className="relative z-10 container mx-auto px-4 pt-20">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <p className="text-npt-red font-bold tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
                  Los mejores entrenadores personales de Medellín · desde 2014
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black italic text-white mb-6 leading-[0.9] tracking-tighter">
                  <span className="block text-outline opacity-50 absolute top-1 left-1 md:left-2 -z-10 blur-[1px]">SHAPE YOUR</span>
                  SHAPE YOUR <br />
                  <span className="text-npt-red">BODY TODAY</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Entrenamiento personalizado a domicilio en Medellín, Envigado, El Poblado, Laureles y todo el Valle de Aburrá.{' '}
                <span className="text-white font-medium">11+ años · 50+ profesionales · Resultados reales.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button href="/reservar" size="lg" className="min-w-[200px]">
                  Empezar Ahora
                </Button>
                <Button href="/servicios" variant="outline" size="lg" className="min-w-[200px]">
                  Ver Programas
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          </motion.div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 relative z-10" aria-label="Por qué elegirnos">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "50+ Profesionales Certificados",
                  desc: "El mejor equipo de entrenadores personales en Medellín: profesionales del Politécnico Colombiano con trayectoria internacional.",
                  bg: "from-red-900/20 to-transparent"
                },
                {
                  title: "A Domicilio en Medellín",
                  desc: "Entrenamiento personalizado a tu casa, oficina o conjunto residencial en todo el Valle de Aburrá.",
                  bg: "from-blue-900/20 to-transparent"
                },
                {
                  title: "11+ Años de Resultados",
                  desc: "Desde 2014, más de 500 clientes han transformado su calidad de vida con New Personal Training S.A.S.",
                  bg: "from-purple-900/20 to-transparent"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-8 rounded-2xl glass-panel bg-gradient-to-b ${item.bg} hover:bg-white/5 transition-colors duration-500 group`}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded bg-npt-red text-white shadow-[0_0_15px_rgba(208,0,0,0.4)] group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-heading font-bold italic uppercase mb-2 text-white">{item.title}</h2>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 relative" aria-label="Servicios de entrenamiento">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-npt-red/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-npt-red font-bold tracking-widest uppercase mb-2">Entrenamiento</p>
                <h2 className="text-4xl md:text-6xl font-heading font-black italic text-white">
                  PROGRAMAS <br /> <span className="text-outline-red">ESPECIALIZADOS</span>
                </h2>
              </motion.div>
              <Button href="/servicios" variant="outline">Ver Todos</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Trainer Slider Section */}
        <section className="py-24 bg-black/30 backdrop-blur-sm border-y border-white/5 relative overflow-hidden" aria-label="Nuestro equipo de entrenadores">
          <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-npt-red font-bold tracking-widest uppercase mb-2">Nuestro Equipo</p>
              <h2 className="text-4xl md:text-5xl font-heading font-black italic text-white">
                ENTRENADORES
              </h2>
            </motion.div>

            <div className="hidden md:block">
              <Button href="/entrenadores" variant="secondary" size="sm">
                Conocer al Equipo Completo
              </Button>
            </div>
          </div>

          <div className="container mx-auto">
            <TrainerSlider />
          </div>

          <div className="mt-8 text-center md:hidden px-4">
            <Button href="/entrenadores" variant="secondary" className="w-full">
              Ver Todos los Entrenadores
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 relative overflow-hidden" aria-label="Números de New Personal Training">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
              alt="Instalaciones de entrenamiento personal en Medellín"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-npt-black via-npt-black/80 to-npt-black" aria-hidden="true" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { number: "2014", label: "Fundación" },
                { number: "500+", label: "Clientes" },
                { number: "50+",  label: "Profesionales" },
                { number: "14",   label: "Servicios" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  className="relative group"
                >
                  <div className="text-5xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-2 group-hover:text-npt-red transition-colors duration-500">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold tracking-[0.2em] text-npt-red uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24" aria-label="Opiniones de clientes">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-black italic text-center mb-16"
            >
              LO QUE DICEN <span className="text-npt-red">NUESTROS CLIENTES</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <motion.article
                  key={t.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-panel p-8 rounded-2xl relative group hover:bg-white/5 transition-colors"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="absolute -top-6 left-8 bg-npt-black border border-white/10 p-1 rounded-full">
                    <img src={t.image} alt={`${t.name} — cliente de New Personal Training`} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="mt-6">
                    <div className="flex gap-1 mb-4 text-npt-red" aria-label={`${t.rating} de 5 estrellas`}>
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed" itemProp="reviewBody">"{t.content}"</p>
                    <div>
                      <div className="font-bold text-white uppercase tracking-wider" itemProp="author">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section — GEO & SEO optimized */}
        <section className="py-24 border-t border-white/5" aria-label="Preguntas frecuentes">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-npt-red font-bold tracking-widest uppercase mb-2 text-sm">Resolvemos tus dudas</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black italic text-white">
                PREGUNTAS <span className="text-npt-red">FRECUENTES</span>
              </h2>
            </motion.div>

            <dl className="space-y-4">
              {FAQS.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="glass-panel rounded-xl overflow-hidden"
                >
                  <dt>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group"
                      aria-expanded={openFaq === idx}
                    >
                      <span className="font-bold text-white group-hover:text-npt-red transition-colors pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-npt-red flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-24 border-t border-white/5" aria-label="Últimas del Blog">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <BookOpen className="w-8 h-8 text-npt-red mx-auto mb-3" aria-hidden="true" />
              <p className="text-npt-red font-bold tracking-[0.3em] text-xs uppercase mb-2">Consejos de Profesionales</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black italic text-white">
                ÚLTIMAS DEL <span className="text-npt-red">BLOG</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-npt-red/30 transition-all h-full flex flex-col">
                      <div className="relative h-44 overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/50 backdrop-blur-sm border border-white/10 text-xs text-gray-300 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-xs text-gray-500 flex items-center gap-1 mb-2">
                          <Clock className="w-3 h-3" /> {post.readTime} min lectura
                        </p>
                        <h3 className="text-sm font-bold text-white group-hover:text-npt-red transition-colors line-clamp-2 leading-snug flex-1">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            <div className="text-center">
              <Button href="/blog" variant="outline" size="lg">Ver todos los artículos</Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative" aria-label="Comienza tu cambio">
          <div className="absolute inset-0 bg-gradient-to-r from-npt-red/20 to-purple-900/20 blur-[100px] opacity-50" aria-hidden="true" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-5xl md:text-8xl font-heading font-black italic text-white mb-4"
            >
              ¿ESTÁS <span className="text-outline-red">LISTO?</span>
            </motion.h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Agenda tu evaluación inicial gratuita y comienza tu transformación con el mejor equipo de entrenadores personales en Medellín.
            </p>
            <Button href="/reservar" size="lg" className="text-lg px-12 py-6">
              COMIENZA TU CAMBIO <ArrowRight className="ml-2 w-6 h-6" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
