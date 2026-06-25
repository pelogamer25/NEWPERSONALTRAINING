import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Página no encontrada | New Personal Training"
        description="La página que buscas no existe. Vuelve al inicio de New Personal Training en Medellín."
        canonical="/404"
      />
      <div className="pt-32 min-h-screen pb-20 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-npt-red font-bold tracking-[0.3em] text-sm uppercase mb-4">Error 404</p>
            <h1 className="text-7xl md:text-9xl font-heading font-black italic text-white mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-300 mb-6">
              Página no encontrada
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
              La página que buscas no existe o fue movida. Explora nuestros servicios de entrenamiento personal en Medellín.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" size="lg">Volver al Inicio</Button>
              <Button href="/servicios" variant="outline" size="lg">Ver Servicios</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
