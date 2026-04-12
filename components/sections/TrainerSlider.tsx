import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DIRECTORS = [
  "https://i.imgur.com/5qXnj9z.jpg",
  "https://i.imgur.com/K6F6Bu8.jpg",
  "https://i.imgur.com/BRkbPn6.jpg"
];

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
          {DIRECTORS.map((image, idx) => (
            <motion.div 
              key={idx}
              className="min-w-[280px] md:min-w-[320px] h-[400px] md:h-[450px] relative rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={image} 
                  alt={`Director ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
          
          {/* Card 'Ver Todos' final del slider */}
          <motion.div className="min-w-[200px] h-[400px] md:h-[450px] flex items-center justify-center">
            <Link 
              to="/entrenadores" 
              className="group flex flex-col items-center justify-center gap-4 w-full h-full rounded-3xl border-2 border-dashed border-white/20 hover:border-npt-red hover:bg-white/5 transition-all"
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