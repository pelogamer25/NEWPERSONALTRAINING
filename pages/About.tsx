import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-black italic text-white mb-6"
          >
            SOBRE <span className="text-npt-red">NOSOTROS</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            En <span className="text-white font-bold">New Personal Training</span>, no solo transformamos cuerpos; forjamos mentalidades. Somos una comunidad dedicada a la excelencia física y el bienestar integral en Medellín.
          </p>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center glass-panel p-8 md:p-12 rounded-3xl">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800" 
                alt="Our Gym" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-npt-red/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div>
              <h2 className="text-npt-red font-bold tracking-widest uppercase mb-2">Nuestra Historia</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-black italic text-white mb-6">
                MÁS QUE UN GIMNASIO
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Fundado en 2015, nacimos con la convicción de que el entrenamiento personal debía ser accesible, científico y profundamente humano. Lo que comenzó como un pequeño estudio en el Poblado, hoy es un referente en acondicionamiento físico personalizado.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Nuestra metodología combina la biomecánica avanzada con el coaching motivacional, asegurando que cada cliente no solo alcance sus metas, sino que disfrute el proceso.
              </p>
              
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-xs text-gray-500 uppercase">Años</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-500 uppercase">Clientes</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-500 uppercase">Compromiso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold italic text-white">NUESTROS VALORES</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Resultados", desc: "Enfoque basado en datos y progreso medible." },
              { icon: Heart, title: "Pasión", desc: "Amamos lo que hacemos y se nota en cada sesión." },
              { icon: Zap, title: "Energía", desc: "Ambiente positivo que te impulsa a dar más." },
              { icon: Users, title: "Comunidad", desc: "Crecemos juntos, celebrando cada victoria." }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center text-npt-red mb-4 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-gray-400">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black italic text-white mb-6">
            ÚNETE AL MOVIMIENTO
          </h2>
          <Button href="/contacto" size="lg">Contáctanos Hoy</Button>
        </div>
      </section>
    </div>
  );
};