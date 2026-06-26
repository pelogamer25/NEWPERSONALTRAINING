import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';

export const ServiceCard: React.FC<{ service: Service; index?: number }> = ({ service, index = 0 }) => {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-black/30 backdrop-blur-md card-top-line hover-glow-border shimmer-hover transition-all duration-500 cursor-pointer"
    >
      {/* Large number background */}
      <span className="card-number">{num}</span>

      {/* Hover bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-npt-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Image */}
      <div className="relative h-60 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-npt-black/30 group-hover:bg-npt-black/0 transition-colors duration-500 z-10" />
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
        />

        {/* Icon pill */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 group-hover:border-npt-red/50 group-hover:bg-npt-red/20 transition-all duration-300">
          <Icon className="h-4 w-4 text-npt-red" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">{num}</span>
        </div>

        {/* Badges */}
        {service.badges && service.badges.length > 0 && (
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 items-end">
            {service.badges.map((badge, idx) => (
              <span key={idx} className="bg-npt-red text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg npt-glow-sm">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Price overlay on hover */}
        {service.price && (
          <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-gradient-to-t from-black to-transparent p-4 pt-8">
            <p className="text-npt-red font-black text-xl">{service.price}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow relative z-20">
        <h3 className="text-lg font-heading font-black italic uppercase mb-2 text-white group-hover:text-npt-red transition-colors duration-300 leading-tight">
          {service.title}
        </h3>

        {service.price && (
          <div className="mb-3 text-base font-bold text-npt-red/80 group-hover:text-npt-red transition-colors">
            {service.price}
          </div>
        )}

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-white/8 pl-4 group-hover:border-npt-red/50 transition-colors duration-300">
          {service.description}
        </p>

        <Link
          to={`/servicios/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-white/70 group-hover:text-npt-red transition-colors duration-300 mt-auto"
        >
          {service.actionText || "Explorar"}
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
};
