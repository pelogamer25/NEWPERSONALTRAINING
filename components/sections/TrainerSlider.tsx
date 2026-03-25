import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TRAINERS } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrainerSlider: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full">
      <motion.div 
        ref={carousel} 
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 pl-4"
        >
          {TRAINERS.map((trainer) => (
            <motion.div 
              key={trainer.id}
              className="min-w-[280px] h-[400px] relative rounded-2xl overflow-hidden group border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className="text-xl font-heading font-bold italic text-white">{trainer.name}</h3>
                <p className="text-npt-red text-sm font-semibold tracking-wider uppercase mb-2">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Card 'Ver Todos' final del slider */}
          <motion.div className="min-w-[200px] h-[400px] flex items-center justify-center">
            <Link 
              to="/entrenadores" 
              className="group flex flex-col items-center justify-center gap-4 w-full h-full rounded-2xl border-2 border-dashed border-white/20 hover:border-npt-red hover:bg-white/5 transition-all"
            >
              <div className="p-4 rounded-full bg-white/10 group-hover:bg-npt-red transition-colors">
                <ArrowRight className="text-white w-6 h-6" />
              </div>
              <span className="text-white font-heading font-bold uppercase tracking-widest text-sm">Ver Todos</span>
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};