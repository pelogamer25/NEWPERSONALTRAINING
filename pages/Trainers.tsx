import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Star, Award, Search } from 'lucide-react';
import { TRAINERS } from '../constants';
import { Button } from '../components/ui/Button';

export const Trainers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrainers = TRAINERS.filter(trainer => 
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen">
      <div className="py-20 px-4 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none -z-10" />

        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-black italic text-white mb-6"
          >
            NUESTROS <span className="text-npt-red">ENTRENADORES</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            El equipo de élite preparado para llevarte al límite.
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
              placeholder="Buscar entrenador, especialidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="min-h-[400px]">
          {filteredTrainers.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {filteredTrainers.map((trainer) => (
                  <motion.div
                    layout
                    key={trainer.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                      <motion.div
                        initial={{ y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="px-3 py-1 bg-npt-red text-white text-xs font-bold uppercase tracking-wider rounded">
                            {trainer.specialty}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-bold text-yellow-400">
                            <Star className="w-3 h-3 fill-current" /> {trainer.experience} Exp
                          </span>
                        </div>
                        
                        <h3 className="text-3xl font-heading font-black italic text-white mb-1 uppercase">
                          {trainer.name}
                        </h3>
                        <p className="text-gray-300 font-medium mb-4">{trainer.role}</p>
                        
                        {/* Expanded content on hover */}
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mb-4">
                          <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-npt-red pl-3">
                            {trainer.bio}
                          </p>
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-white/10">
                          <Button size="sm" href="/reservar" className="flex-1">
                            Agendar
                          </Button>
                          <button className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded transition-colors">
                            <Instagram className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    </div>
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
              <p className="text-2xl font-heading font-bold text-gray-500 mb-4">No encontramos entrenadores</p>
              <p className="text-gray-400">Intenta buscar por nombre o especialidad.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setSearchTerm('')}
              >
                Ver todo el equipo
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 bg-black/40 backdrop-blur-md py-20">
        <div className="container mx-auto px-4 text-center">
            <Award className="w-12 h-12 text-npt-red mx-auto mb-4" />
            <h3 className="text-3xl font-heading font-bold italic text-white mb-4">¿Buscas algo específico?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Contáctanos y te asignaremos el entrenador ideal según tus objetivos y preferencias.
            </p>
          <Button href="/contacto" variant="outline">Contactar Asesor</Button>
        </div>
      </div>
    </div>
  );
};