import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';
import { TEAM, TEAM_UNIQUE } from '../team';



/**
 * Hasta ahora la pagina solo emitia BreadcrumbList: los profesionales eran
 * invisibles como entidades. Cada uno sale ahora como Person con su cargo y
 * sus especialidades, que es la senal de experiencia que Google evalua en
 * contenido de salud y deporte.
 */
const teamSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Equipo de New Personal Training en Medellín",
  "numberOfItems": TEAM_UNIQUE.length,
  "itemListElement": TEAM_UNIQUE.map((m, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Person",
      "name": m.name,
      "jobTitle": m.roles.join(' / '),
      "image": `https://newpersonaltraining.com${m.image}`,
      ...(m.credential ? { "hasCredential": m.credential } : {}),
      ...(m.specialties.length ? { "knowsAbout": m.specialties } : {}),
      "worksFor": { "@id": "https://newpersonaltraining.com/#business" },
      "workLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Medellín",
          "addressRegion": "Antioquia",
          "addressCountry": "CO"
        }
      }
    }
  }))
};

export const Trainers: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Entrenadores Personales en Medellín | New Personal Training"
        description="Conoce a los entrenadores personales en Medellín de New Personal Training: profesionales certificados en ejercicio físico, fisioterapeutas, nutricionistas, valoradores y masoterapeutas del Valle de Aburrá."
        canonical="/entrenadores"
        jsonLd={[teamSchema]}
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
            Conoce uno a uno a los profesionales que te acompañan: su cargo y sus
            especialidades. Todos atienden a domicilio en Medellín y el Valle de Aburrá.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col gap-20">
          {TEAM.map((section) => (
            <section key={section.title} aria-labelledby={`seccion-${section.title.replace(/\s+/g, '-').toLowerCase()}`}>
              <motion.h2
                id={`seccion-${section.title.replace(/\s+/g, '-').toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold italic text-white mb-8 border-l-4 border-npt-red pl-4"
              >
                {section.title} <span className="text-npt-red">en Medellín</span>
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.members.map((m, idx) => (
                  <motion.article
                    key={`${section.title}-${m.name}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx, 8) * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl"
                  >
                    {/* Las fichas se recortaron al retrato: su texto vivia dentro de
                        la imagen y ahora esta abajo como HTML, asi que mostrarlo
                        entero lo duplicaba en pantalla. */}
                    <div className="relative aspect-[72/50] overflow-hidden group">
                      <img
                        src={m.image}
                        alt={`${m.name}, ${m.role.toLowerCase()} de New Personal Training en Medellín`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        width={720}
                        height={505}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <h3 className="font-heading font-bold text-white leading-tight">{m.name}</h3>
                      <p className="text-xs uppercase tracking-wider text-npt-red font-semibold">{m.role}</p>
                      {m.credential && (
                        <p className="text-xs text-gray-400 italic">{m.credential}</p>
                      )}
                      {m.specialties.length > 0 && (
                        <ul className="text-xs text-gray-400 leading-relaxed list-disc pl-4 space-y-0.5">
                          {m.specialties.map((esp) => (
                            <li key={esp}>{esp}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
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