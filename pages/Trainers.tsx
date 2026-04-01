import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Button } from '../components/ui/Button';

const TRAINER_SECTIONS = [
  {
    title: "Profesionales del Ejercicio",
    images: [
      "https://i.imgur.com/lNqsz5z.jpg",
      "https://i.imgur.com/mAih3QU.jpg",
      "https://i.imgur.com/NtDhTkx.jpg",
      "https://i.imgur.com/04TOJES.jpg",
      "https://i.imgur.com/a6ZrjJv.jpg",
      "https://i.imgur.com/NQmBJFj.jpg",
      "https://i.imgur.com/NY5CbaH.jpg"
    ]
  },
  {
    title: "Valoradores",
    images: [
      "https://i.imgur.com/Wc9f4ra.jpg",
      "https://i.imgur.com/vZf7ZvS.jpg",
      "https://i.imgur.com/S7JShUj.jpg",
      "https://i.imgur.com/OWCVqEm.jpg",
      "https://i.imgur.com/DYXJrFS.jpg"
    ]
  },
  {
    title: "Clases grupales",
    images: [
      "https://i.imgur.com/dEK4tTi.jpg",
      "https://i.imgur.com/TQJICmf.jpg",
      "https://i.imgur.com/YsHObqd.jpg",
      "https://i.imgur.com/u7OvQP3.jpg",
      "https://i.imgur.com/edGqHHe.jpg",
      "https://i.imgur.com/azQjuDR.jpg",
      "https://i.imgur.com/MhSq7Gw.jpg",
      "https://i.imgur.com/jib4Zy0.jpg",
      "https://i.imgur.com/sK2XaEg.jpg",
      "https://i.imgur.com/YfsaaN8.jpg",
      "https://i.imgur.com/mHNUO7b.jpg",
      "https://i.imgur.com/MaSAeoS.jpg",
      "https://i.imgur.com/BSSVJj7.jpg",
      "https://i.imgur.com/4kG37cd.jpg",
      "https://i.imgur.com/GRcvpDR.jpg",
      "https://i.imgur.com/voABxh5.jpg",
      "https://i.imgur.com/LhxZ0ro.jpg",
      "https://i.imgur.com/GDFZUrn.jpg",
      "https://i.imgur.com/NH4ONIo.jpg",
      "https://i.imgur.com/kvCPjv9.jpg",
      "https://i.imgur.com/aMPgzLz.jpg",
      "https://i.imgur.com/OxVvJvk.jpg",
      "https://i.imgur.com/aRLGC60.jpg",
      "https://i.imgur.com/9dbbbyR.jpg"
    ]
  },
  {
    title: "Fisioterapeutas",
    images: [
      "https://i.imgur.com/2LAzZXz.jpg"
    ]
  },
  {
    title: "Nutricionistas",
    images: [
      "https://i.imgur.com/REe6KoZ.jpg",
      "https://i.imgur.com/kiL06lF.jpg"
    ]
  },
  {
    title: "Pausas activas y masoterapeutas",
    images: [
      "https://i.imgur.com/QMBuRDI.jpg",
      "https://i.imgur.com/cZ1l15e.jpg",
      "https://i.imgur.com/JuFkHrR.jpg",
      "https://i.imgur.com/4WLVH6R.jpg"
    ]
  },
  {
    title: "Audiovisual",
    images: [
      "https://i.imgur.com/oFGQOVb.jpg"
    ]
  },
  {
    title: "Directores",
    images: [
      "https://i.imgur.com/K6F6Bu8.jpg",
      "https://i.imgur.com/5qXnj9z.jpg",
      "https://i.imgur.com/BRkbPn6.jpg"
    ]
  }
];

export const Trainers: React.FC = () => {
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
                        alt={`${section.title} ${imgIdx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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