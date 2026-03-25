import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/Card';
import { TrainerSlider } from '../components/sections/TrainerSlider';
import { SERVICES, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="flex flex-col gap-0">
      {/* Parallax Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-npt-black/30 via-npt-black/60 to-npt-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-npt-red font-bold tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
                Bienvenido al siguiente nivel
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black italic text-white mb-6 leading-[0.9] tracking-tighter">
                <span className="block text-outline opacity-50 absolute top-1 left-1 md:left-2 -z-10 blur-[1px]">SHAPE YOUR</span>
                SHAPE YOUR <br />
                <span className="text-npt-red">BODY TODAY</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Entrenamiento de alto rendimiento adaptado a tu estilo de vida. 
              <span className="text-white font-medium"> Resultados reales. Ciencia aplicada.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button href="/reservar" size="lg" className="min-w-[200px]">
                Empezar Ahora
              </Button>
              <Button href="/servicios" variant="outline" size="lg" className="min-w-[200px]">
                Ver Programas
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expertos Certificados",
                desc: "Entrenadores con trayectoria internacional.",
                bg: "from-red-900/20 to-transparent"
              },
              {
                title: "Plan Personalizado",
                desc: "Diseñado exclusivamente para tu biotipo.",
                bg: "from-blue-900/20 to-transparent"
              },
              {
                title: "Resultados Reales",
                desc: "Garantía basada en métricas y seguimiento.",
                bg: "from-purple-900/20 to-transparent"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-2xl glass-panel bg-gradient-to-b ${item.bg} hover:bg-white/5 transition-colors duration-500 group`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded bg-npt-red text-white shadow-[0_0_15px_rgba(208,0,0,0.4)] group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold italic uppercase mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-npt-red/5 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-npt-red font-bold tracking-widest uppercase mb-2">Entrenamiento</h2>
              <h3 className="text-4xl md:text-6xl font-heading font-black italic text-white">
                PROGRAMAS <br /> <span className="text-outline-red">ESPECIALIZADOS</span>
              </h3>
            </motion.div>
            <Button href="/servicios" variant="outline">Ver Todos</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Trainer Slider Section */}
      <section className="py-24 bg-black/30 backdrop-blur-sm border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-npt-red font-bold tracking-widest uppercase mb-2">Nuestro Equipo</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black italic text-white">
              ENTRENADORES
            </h3>
          </motion.div>
          
          <div className="hidden md:block">
            <Button href="/entrenadores" variant="secondary" size="sm">
              Conocer al Equipo Completo
            </Button>
          </div>
        </div>
        
        {/* The Slider */}
        <div className="container mx-auto">
          <TrainerSlider />
        </div>

        <div className="mt-8 text-center md:hidden px-4">
          <Button href="/entrenadores" variant="secondary" className="w-full">
            Ver Todos los Entrenadores
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Stats Background"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-npt-black via-npt-black/80 to-npt-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "15+", label: "Años Exp." },
              { number: "500+", label: "Clientes" },
              { number: "20+", label: "Trainers" },
              { number: "100%", label: "Pasión" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="relative group"
              >
                <div className="text-5xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-2 group-hover:text-npt-red transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="text-sm font-bold tracking-[0.2em] text-npt-red uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black italic text-center mb-16"
          >
            LO QUE DICEN <span className="text-npt-red">ELLOS</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-8 rounded-2xl relative group hover:bg-white/5 transition-colors"
              >
                <div className="absolute -top-6 left-8 bg-npt-black border border-white/10 p-1 rounded-full">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="mt-6">
                  <div className="flex gap-1 mb-4 text-npt-red">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-npt-red/20 to-purple-900/20 blur-[100px] opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-8xl font-heading font-black italic text-white mb-8"
          >
            ARE YOU <span className="text-outline-red">READY?</span>
          </motion.h2>
          <Button href="/reservar" size="lg" className="text-lg px-12 py-6">
            COMIENZA TU CAMBIO <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};