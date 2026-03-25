import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../constants';
import { Search } from 'lucide-react';

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light mb-10">
            Descubre soluciones integrales diseñadas para potenciar tu rendimiento.
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
            Agenda una evaluación gratuita y uno de nuestros expertos te recomendará el plan ideal.
          </p>
          <Button href="/reservar" size="lg">Agenda tu Evaluación</Button>
        </div>
      </div>
    </div>
  );
};