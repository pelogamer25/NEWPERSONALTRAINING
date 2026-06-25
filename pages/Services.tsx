import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';
import { SERVICES } from '../constants';
import { Search } from 'lucide-react';

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
                    <ServiceCard service={service} />
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