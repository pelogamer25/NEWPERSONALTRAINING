import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';

const TRAINER_SECTIONS = [
  {
    title: "Profesionales del ejercicio",
    images: [
      "/images/equipo/entrenador-personal-medellin-01.webp",
      "/images/equipo/entrenador-personal-medellin-02.webp",
      "/images/equipo/entrenador-personal-medellin-03.webp",
      "/images/equipo/entrenador-personal-medellin-04.webp",
      "/images/equipo/entrenador-personal-medellin-05.webp",
      "/images/equipo/entrenador-personal-medellin-06.webp",
      "/images/equipo/entrenador-personal-medellin-07.webp",
      "/images/equipo/entrenador-personal-medellin-08.webp",
      "/images/equipo/entrenador-personal-medellin-09.webp",
      "/images/equipo/entrenador-personal-medellin-10.webp",
      "/images/equipo/entrenador-personal-medellin-11.webp",
      "/images/equipo/entrenador-personal-medellin-12.webp",
      "/images/equipo/entrenador-personal-medellin-13.webp",
      "/images/equipo/entrenador-personal-medellin-14.webp",
      "/images/equipo/entrenador-personal-medellin-15.webp",
      "/images/equipo/entrenador-personal-medellin-16.webp",
      "/images/equipo/entrenador-personal-medellin-17.webp",
      "/images/equipo/entrenador-personal-medellin-18.webp",
      "/images/equipo/entrenador-personal-medellin-19.webp",
      "/images/equipo/entrenador-personal-medellin-20.webp",
      "/images/equipo/entrenador-personal-medellin-21.webp",
      "/images/equipo/entrenador-personal-medellin-22.webp",
      "/images/equipo/entrenador-personal-medellin-23.webp",
      "/images/equipo/entrenador-personal-medellin-24.webp",
      "/images/equipo/entrenador-personal-medellin-25.webp",
      "/images/equipo/entrenador-personal-medellin-26.webp",
      "/images/equipo/entrenador-personal-medellin-27.webp",
      "/images/equipo/entrenador-personal-medellin-28.webp",
      "/images/equipo/entrenador-personal-medellin-29.webp",
      "/images/equipo/entrenador-personal-medellin-30.webp",
      "/images/equipo/entrenador-personal-medellin-31.webp",
      "/images/equipo/entrenador-personal-medellin-32.webp",
      "/images/equipo/entrenador-personal-medellin-33.webp",
      "/images/equipo/entrenador-personal-medellin-34.webp"
    ]
  },
  {
    title: "Valoradores",
    images: [
      "/images/equipo/valorador-fisico-medellin-01.webp",
      "/images/equipo/valorador-fisico-medellin-02.webp"
    ]
  },
  {
    title: "Fisioterapeutas",
    images: [
      "/images/equipo/fisioterapeuta-medellin-01.webp",
      "/images/equipo/fisioterapeuta-medellin-02.webp",
      "/images/equipo/fisioterapeuta-medellin-03.webp"
    ]
  },
  {
    title: "Nutricionistas",
    images: [
      "/images/equipo/nutricionista-medellin-01.webp",
      "/images/equipo/nutricionista-medellin-02.webp"
    ]
  },
  {
    title: "Pausas activas y masoterapeutas",
    images: [
      "/images/equipo/masoterapeuta-medellin-01.webp",
      "/images/equipo/masoterapeuta-medellin-02.webp"
    ]
  },
  {
    title: "Audiovisual",
    images: [
      "/images/equipo/equipo-audiovisual-medellin-01.webp"
    ]
  },
  {
    title: "Directores",
    images: [
      "/images/equipo/director-new-personal-training-medellin-01.webp",
      "/images/equipo/director-new-personal-training-medellin-02.webp",
      "/images/equipo/director-new-personal-training-medellin-03.webp"
    ]
  }
];

export const Trainers: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Entrenadores Personales en Medellín | New Personal Training"
        description="Conoce a los entrenadores personales en Medellín de New Personal Training: profesionales certificados en ejercicio físico, fisioterapeutas, nutricionistas, valoradores y masoterapeutas del Valle de Aburrá."
        canonical="/entrenadores"
        breadcrumbs={[
          { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
          { name: 'Entrenadores', url: 'https://newpersonaltraining.com/entrenadores' }
        ]}
      />
    <div className="pt-24 min-h-screen">
      <div className="py-20 px-4 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none -z-10" />

        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-black italic text-white mb-6"
          >
            ENTRENADORES PERSONALES <span className="text-npt-red">EN MEDELLÍN</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            El equipo de élite preparado para llevarte al límite.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col gap-20">
          {TRAINER_SECTIONS.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold italic text-white mb-8 border-l-4 border-npt-red pl-4"
              >
                {section.title}
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {section.images.map((img, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: imgIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                  >
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={img}
                        alt={`${section.title} de New Personal Training — ${[
                          "entrenamiento personal en Medellín",
                          "entrenador personal a domicilio en el Valle de Aburrá",
                          "profesional certificado en Medellín",
                        ][imgIdx % 3]}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        width={600}
                        height={800}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 bg-black/40 backdrop-blur-md py-20">
        <div className="container mx-auto px-4 text-center">
            <Award className="w-12 h-12 text-npt-red mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-3xl font-heading font-bold italic text-white mb-4">¿Buscas algo específico?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Contáctanos y te asignaremos el entrenador personal ideal en Medellín según tus objetivos, preferencias y disponibilidad.
            </p>
          <Button href="/contacto" variant="outline">Contactar Asesor</Button>
        </div>
      </div>
    </div>
    </>
  );
};