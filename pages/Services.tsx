import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';
import { SERVICES } from '../constants';
import { Search, Dumbbell, Building2, Home, Wrench, MessageCircle, ChevronRight } from 'lucide-react';

const EQUIPMENT_LINES = [
  {
    icon: Building2,
    title: "Línea Profesional",
    subtitle: "Para gimnasios comerciales",
    desc: "Equipos de alta durabilidad diseñados para soportar uso intensivo con múltiples usuarios diarios. Caminadoras, poleas, racks, cardiovasculares y más.",
    badge: "Gyms & Centros Deportivos",
    waMsg: "Hola! Estoy interesado en equipos de gimnasio Línea Profesional para mi gimnasio. ¿Me pueden dar información y cotización?",
  },
  {
    icon: Building2,
    title: "Línea Institucional",
    subtitle: "Para empresas, conjuntos y hoteles",
    desc: "Calidad profesional con estética premium para gimnasios corporativos, conjuntos residenciales y hoteles. Relación óptima calidad-precio para uso moderado.",
    badge: "Empresas & Conjuntos",
    waMsg: "Hola! Estoy interesado en equipos de gimnasio Línea Institucional para mi empresa o conjunto. ¿Me pueden dar información y cotización?",
  },
  {
    icon: Home,
    title: "Línea Hogar",
    subtitle: "Para tu gym en casa",
    desc: "Equipos compactos y silenciosos ideales para espacios residenciales. Desde caminadoras plegables hasta equipos multifuncionales completos.",
    badge: "Uso Residencial",
    waMsg: "Hola! Estoy interesado en equipos de gimnasio Línea Hogar para mi casa. ¿Me pueden dar información y cotización?",
  },
  {
    icon: Wrench,
    title: "Servicio Técnico",
    subtitle: "Mecánico · Electrónico · Rediseño",
    desc: "Reparación y mantenimiento preventivo de cualquier marca: bandas, motores, tableros electrónicos, tapizado, pintura y actualización de piezas obsoletas.",
    badge: "Todas las Marcas",
    waMsg: "Hola! Necesito servicio técnico para equipos de gimnasio. ¿Me pueden dar información sobre mantenimiento y reparación?",
  },
];

const SERVICES_CATALOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Servicios de Entrenamiento — New Personal Training Medellín",
  "description": "Catálogo completo de servicios de entrenamiento, bienestar y salud en Medellín, Colombia.",
  "numberOfItems": 14,
  "itemListElement": SERVICES.map((s, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "item": {
      "@type": "Service",
      "name": s.title,
      "description": s.description,
      "provider": {
        "@type": "FitnessCenter",
        "name": "New Personal Training",
        "url": "https://newpersonaltraining.com"
      },
      "url": `https://newpersonaltraining.com/servicios/${s.slug}`,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "COP",
        "price": s.pricingOptions?.[0]?.price?.replace(/[^0-9]/g, '') ?? "0",
        "availability": "https://schema.org/InStock",
        "areaServed": "Medellín, Antioquia, Colombia"
      }
    }
  }))
};

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Servicios de Entrenamiento Personal en Medellín | New Personal Training"
        description="Descubre nuestros 14 servicios: entrenamiento personalizado, boxeo, pilates, yoga, natación, squash, nutrición, fisioterapia y más en Medellín, Colombia. Presencial en el Valle de Aburrá."
        canonical="/servicios"
        jsonLd={SERVICES_CATALOG_SCHEMA}
        breadcrumbs={[
          { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
          { name: 'Servicios', url: 'https://newpersonaltraining.com/servicios' }
        ]}
      />
      <div className="pt-24 min-h-screen">
      <div className="py-20 px-4 relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-npt-red/10 blur-[150px] pointer-events-none -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-black italic text-white mb-6"
          >
            NUESTROS <span className="text-npt-red">SERVICIOS</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light mb-4">
            Descubre soluciones integrales de entrenamiento personal, bienestar y salud en Medellín.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10">
            14 servicios presenciales en el Valle de Aburrá: entrenamiento personalizado, semipersonalizado, clases grupales, boxeo, natación, pilates, yoga, squash, fisioterapia, masajes y nutrición.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto relative"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-npt-red focus:border-transparent focus:bg-white/10 transition-all backdrop-blur-sm"
              placeholder="Buscar servicio (ej. Personal, Virtual...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="min-h-[400px]">
          {filteredServices.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ServiceCard service={service} index={SERVICES.indexOf(service)} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl font-heading font-bold text-gray-500 mb-4">No encontramos resultados</p>
              <p className="text-gray-400">Intenta con otros términos de búsqueda.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setSearchTerm('')}
              >
                Ver todos los servicios
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Equipment Sales Section */}
      <section className="py-24 border-t border-white/5 relative" aria-label="Venta y servicio técnico de equipos de gimnasio en Medellín">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-npt-red/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto px-4">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-npt-red font-bold tracking-[0.3em] text-xs uppercase mb-4">
              <Dumbbell className="w-4 h-4" aria-hidden="true" />
              Equipamiento Deportivo
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black italic text-white mb-4">
              EQUIPOS DE GYM <span className="text-npt-red">EN MEDELLÍN</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              New Personal Training S.A.S también provee y da mantenimiento a <strong className="text-white">equipos de gimnasio</strong> para gyms comerciales, empresas, conjuntos residenciales y hogares en el Valle de Aburrá. Con más de 11 años en el sector deportivo, sabemos exactamente qué equipos funcionan.
            </p>
          </motion.div>

          {/* Equipment lines grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {EQUIPMENT_LINES.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-npt-red/30 card-top-line hover-glow-border transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 bg-npt-red/10 border border-npt-red/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-npt-red group-hover:border-npt-red transition-all duration-300">
                  <line.icon className="w-5 h-5 text-npt-red group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold text-npt-red uppercase tracking-widest mb-1">{line.badge}</span>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-0.5">{line.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{line.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">{line.desc}</p>
                <a
                  href={`https://wa.me/573005974290?text=${encodeURIComponent(line.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-green-500/10 border border-green-500/20 hover:bg-green-500 hover:border-green-500 text-green-400 hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 group/btn"
                >
                  <span className="text-xs font-bold uppercase tracking-wider">Cotizar por WhatsApp</span>
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-npt-red font-bold text-xs uppercase tracking-widest mb-1">¿Abriendo un gym en Medellín?</p>
              <h3 className="text-xl font-heading font-black italic text-white">
                Te asesoramos, proveemos e instalamos todo
              </h3>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">
                Consultoría de equipamiento → proveeduría → instalación → mantenimiento preventivo → entrenadores certificados. Un solo aliado para todo tu centro deportivo.
              </p>
            </div>
            <a
              href={`https://wa.me/573005974290?text=${encodeURIComponent('Hola! Estoy montando un gimnasio en Medellín y quiero información sobre equipos, instalación y personal certificado.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 bg-npt-red hover:bg-npt-red-dark text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wider text-sm transition-colors duration-300 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Hablar con un asesor
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="py-20 border-t border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold italic mb-6 text-white">¿No sabes cuál elegir?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Agenda una evaluación inicial gratuita de 30 minutos y uno de nuestros expertos en Medellín te recomendará el plan de entrenamiento ideal según tus objetivos.
          </p>
          <Button href="/reservar" size="lg">Agenda tu Evaluación Gratuita</Button>
        </div>
      </div>
    </div>
    </>
  );
};