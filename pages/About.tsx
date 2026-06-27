import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, Shield, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../constants';

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Sobre New Personal Training S.A.S — Entrenador Personal en Medellín desde 2014",
  "description": "New Personal Training S.A.S, fundada en 2014 por profesionales del deporte del Politécnico Colombiano Jaime Isaza Cadavid. 11+ años transformando vidas en Medellín y el Valle de Aburrá con entrenamiento personalizado, semipersonalizado y grupal.",
  "url": "https://newpersonaltraining.com/nosotros",
  "mainEntity": {
    "@type": "FitnessCenter",
    "@id": "https://newpersonaltraining.com/#business",
    "name": "New Personal Training S.A.S",
    "foundingDate": "2014",
    "foundingLocation": {
      "@type": "Place",
      "name": "Medellín, Antioquia, Colombia"
    },
    "description": "Centro de entrenamiento personal en Medellín y Valle de Aburrá. Fundado en 2014 por profesionales del Politécnico Colombiano Jaime Isaza Cadavid. Servicios personalizados, semipersonalizados y grupales de ejercicio físico, recreación y deporte.",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "50" },
    "slogan": "Mejoramos la calidad de vida con sentido humano"
  }
};

const VALUES = [
  { icon: Star,   title: "Calidad",          desc: "Entrenadores personales certificados con metodologías actualizadas en Medellín que garantizan resultados medibles, seguros y adaptados a cada objetivo." },
  { icon: Shield, title: "Responsabilidad",  desc: "Cumplimos cada compromiso con nuestros clientes y empresas del Valle de Aburrá, con puntualidad, profesionalismo y seriedad." },
  { icon: Heart,  title: "Respeto",          desc: "Cada programa de entrenamiento personalizado se adapta al biotipo, ritmo y metas únicas de cada usuario, sin excepciones." },
  { icon: Zap,    title: "Innovación",       desc: "Actualizamos constantemente nuestros métodos y metodologías de entrenamiento deportivo para ofrecer lo mejor de la ciencia del deporte." },
];

const GUARANTEES = [
  "Más de 11 años ininterrumpidos en el mercado del entrenamiento personal en Medellín y el Valle de Aburrá",
  "Procesos de entrenamiento deportivo ininterrumpido desde nuestra fundación en 2014",
  "Más de 50 profesionales altamente cualificados en deporte, actividad física y recreación",
  "Métodos y metodologías de entrenamiento deportivo actualizados y basados en evidencia científica",
  "Servicio con sentido humano, calidad certificada y atención completamente personalizada",
  "Manejamos todas las líneas de equipos para gimnasio: profesional, institucional y hogar",
  "Servicio técnico completo y especializado: mecánico, electrónico y rediseño de equipos",
];

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Sobre Nosotros | New Personal Training S.A.S — Entrenadores Personales en Medellín desde 2014"
        description="Conoce New Personal Training S.A.S, fundada en 2014 por profesionales del Politécnico Colombiano. 11+ años, 50+ entrenadores personales certificados en Medellín y el Valle de Aburrá. Misión, visión e historia."
        canonical="/nosotros"
        jsonLd={ABOUT_SCHEMA}
        breadcrumbs={[
          { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
          { name: 'Sobre Nosotros', url: 'https://newpersonaltraining.com/nosotros' }
        ]}
      />

      <div className="pt-24 min-h-screen">

        {/* Hero */}
        <section className="relative py-20 px-4" aria-label="Sobre New Personal Training">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-npt-red font-bold tracking-[0.3em] text-sm uppercase mb-4"
            >
              Entrenadores personales en Medellín desde 2014
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-heading font-black italic text-white mb-6"
            >
              SOBRE <span className="text-npt-red">NOSOTROS</span>
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              En <span className="text-white font-bold">New Personal Training S.A.S</span>, no solo transformamos cuerpos; mejoramos la calidad de vida de personas y empresas en <strong className="text-white">Medellín y todo el Valle de Aburrá</strong>, con sentido humano y profesionales certificados.
            </p>
          </div>
        </section>

        {/* Stats rápidos */}
        <section className="py-10 border-y border-white/5" aria-label="Cifras de New Personal Training">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "2014", label: "Año de fundación" },
                { number: "11+",  label: "Años en el mercado" },
                { number: "50+",  label: "Profesionales certificados" },
                { number: "500+", label: "Clientes atendidos" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-heading font-black text-npt-red mb-1">{s.number}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20" aria-label="Historia de New Personal Training">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center glass-panel p-8 md:p-12 rounded-3xl">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800"
                  alt="Entrenadores personales de New Personal Training S.A.S en Medellín"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-npt-red/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <p className="text-npt-red font-bold tracking-widest uppercase mb-2 text-sm">Nuestra Historia</p>
                <h2 className="text-3xl md:text-4xl font-heading font-black italic text-white mb-6">
                  MÁS QUE UN GYM <br />EN MEDELLÍN
                </h2>
                {/* Timeline */}
                <div className="space-y-0 relative mt-2">
                  <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-npt-red via-white/20 to-transparent" aria-hidden="true" />
                  {[
                    {
                      year: "2014",
                      title: "Fundación",
                      text: "New Personal Training S.A.S nace en mayo de 2014 de la mano de dos fundadores, ambos Profesionales en Deporte del Politécnico Colombiano Jaime Isaza Cadavid — institución reconocida por la formación de profesionales íntegros en deporte, actividad física y recreación. Concebidos para dar solución profesional a la alta demanda de entrenamiento personalizado a domicilio en Medellín."
                    },
                    {
                      year: "2018",
                      title: "Reingeniería y Crecimiento",
                      text: "En 2018 ingresan dos nuevos accionistas, también Profesionales en Deporte, dándole una nueva perspectiva a la marca. Se pasa de la informalidad a la formalidad completa con una reingeniería integral de todos los procesos, logrando un crecimiento exponencial y consolidando el liderazgo en entrenamiento personalizado en el Valle de Aburrá."
                    },
                    {
                      year: "2026",
                      title: "Hoy",
                      text: "Con más de 11 años en el mercado, 50+ profesionales altamente cualificados y cobertura en todo el Valle de Aburrá — Medellín, Envigado, Itagüí, Sabaneta, Bello y más — somos el referente en entrenamiento personal, semipersonalizado y grupal a domicilio en Medellín."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 pb-7 relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-npt-red bg-npt-black flex items-center justify-center z-10">
                        <div className="w-3 h-3 rounded-full bg-npt-red" aria-hidden="true" />
                      </div>
                      <div className="pt-1">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="text-npt-red font-black text-xl font-heading italic">{item.year}</span>
                          <span className="text-white font-bold text-xs uppercase tracking-widest">{item.title}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 mt-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2014</div>
                    <div className="text-xs text-gray-500 uppercase">Fundación</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-xs text-gray-500 uppercase">Profesionales</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">11+</div>
                    <div className="text-xs text-gray-500 uppercase">Años</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión & Visión */}
        <section className="py-20 relative" aria-label="Misión y Visión">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-npt-red/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl border-l-4 border-npt-red"
              >
                <p className="text-npt-red font-bold tracking-widest uppercase mb-3 text-xs">Quiénes Somos</p>
                <h2 className="text-2xl font-heading font-black italic text-white mb-4">MISIÓN</h2>
                <p className="text-gray-400 leading-relaxed">{COMPANY_INFO.mission}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl border-l-4 border-white/20"
              >
                <p className="text-gray-400 font-bold tracking-widest uppercase mb-3 text-xs">Hacia Dónde Vamos</p>
                <h2 className="text-2xl font-heading font-black italic text-white mb-4">VISIÓN 2030</h2>
                <p className="text-gray-400 leading-relaxed">{COMPANY_INFO.vision}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20" aria-label="Valores de New Personal Training">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-npt-red font-bold tracking-widest uppercase mb-2 text-sm">Lo que nos define</p>
              <h2 className="text-3xl font-heading font-bold italic text-white">NUESTROS VALORES</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {VALUES.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="glass-panel p-7 rounded-2xl text-center card-top-line hover-glow-border transition-all duration-400 group overflow-hidden relative"
                >
                  <span className="card-number text-7xl">{String(idx + 1).padStart(2,'0')}</span>
                  <div className="w-14 h-14 mx-auto bg-npt-red/10 border border-npt-red/20 rounded-2xl flex items-center justify-center text-npt-red mb-5 group-hover:bg-npt-red group-hover:border-npt-red group-hover:text-white group-hover:npt-glow transition-all duration-300">
                    <val.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black text-white mb-2 uppercase tracking-wider">{val.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantías y Respaldos */}
        <section className="py-20 bg-black/20" aria-label="Garantías y respaldos de New Personal Training">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-npt-red font-bold tracking-widest uppercase mb-2 text-sm">Por qué elegirnos</p>
              <h2 className="text-3xl font-heading font-bold italic text-white">GARANTÍAS Y RESPALDOS</h2>
              <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                New Personal Training S.A.S es la opción más respaldada para entrenamiento personal en Medellín y el Valle de Aburrá.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {GUARANTEES.map((g, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-3 glass-panel p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-npt-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-300 text-sm leading-relaxed">{g}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Área de cobertura */}
        <section className="py-20 border-t border-white/5" aria-label="Área de cobertura">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Award className="w-12 h-12 text-npt-red mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-3xl font-heading font-black italic text-white mb-4">
              COBERTURA EN <span className="text-npt-red">MEDELLÍN</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Nuestros entrenadores personales llegan a domicilio en todo el <strong className="text-white">área metropolitana del Valle de Aburrá</strong>: Medellín, Envigado, Itagüí, Sabaneta, Bello, La Estrella y municipios cercanos — en el horario que mejor se adapte a tu vida.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {["Medellín", "El Poblado", "Laureles", "Envigado", "Itagüí", "Sabaneta", "Bello", "La Estrella", "Robledo", "Belén"].map(city => (
                <span key={city} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{city}</span>
              ))}
            </div>
            <Button href="/contacto" size="lg">Contáctanos Hoy</Button>
          </div>
        </section>

      </div>
    </>
  );
};
