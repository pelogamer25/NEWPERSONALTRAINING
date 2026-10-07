import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Star, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { SEOHead } from '../components/SEOHead';

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto — New Personal Training Medellín",
  "url": "https://newpersonaltraining.com/contacto",
  "mainEntity": {
    "@type": "FitnessCenter",
    "@id": "https://newpersonaltraining.com/#business",
    "name": "New Personal Training",
    "telephone": "+573144008592",
    "email": "info@newpersonaltraining.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
      "addressCountry": "CO"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+573144008592",
        "availableLanguage": "Spanish",
        "contactOption": "TollFree"
      }
    ]
  }
};

const WA_BASE = 'https://wa.me/573144008592?text=';

const CONTACT_OPTIONS = [
  {
    label: "Quiero información sobre planes de entrenamiento",
    sub: "Personalizado, Semipersonalizado, Grupal…",
    msg: "Hola! Quiero información sobre los planes de entrenamiento de New Personal Training. ¿Me pueden ayudar?",
  },
  {
    label: "Quiero agendar mi evaluación inicial gratuita",
    sub: "Sin costo · 30 minutos con un experto",
    msg: "Hola! Me gustaría agendar mi evaluación inicial gratuita con New Personal Training. ¿Cuándo tienen disponibilidad?",
  },
  {
    label: "Quiero información sobre clases grupales",
    sub: "Funcional, Rítmica, Boxeo, Pilates, Yoga…",
    msg: "Hola! Me interesan las clases grupales de New Personal Training. ¿Me pueden dar más información?",
  },
  {
    label: "Quiero cotizar equipos de gimnasio",
    sub: "Venta · Servicio técnico · Todas las líneas",
    msg: "Hola! Quiero cotizar equipos de gimnasio con New Personal Training. ¿Me pueden dar información y precios?",
  },
  {
    label: "Tengo otra pregunta",
    sub: "Precios, horarios, cobertura…",
    msg: "Hola! Tengo una consulta sobre New Personal Training. ¿Me pueden ayudar?",
  },
];

export const Contact: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contacto — Entrenador Personal cerca de ti en Medellín | New Personal Training"
        description="¿Buscas un entrenador personal cerca de ti en Medellín? Escríbenos por WhatsApp al +57 314 400 8592. Cubrimos Medellín, Envigado, Itagüí, Sabaneta, Bello y La Estrella."
        canonical="/contacto"
        jsonLd={CONTACT_SCHEMA}
        breadcrumbs={[
          { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
          { name: 'Contacto', url: 'https://newpersonaltraining.com/contacto' }
        ]}
      />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-black italic text-white mb-4">CONTÁCTANOS</h1>
            <p className="text-gray-400 max-w-xl mx-auto">Escríbenos por WhatsApp y te respondemos de inmediato. Sin formularios, sin esperas.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-npt-red p-10 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              <div className="relative z-10">
                <h2 className="text-2xl font-heading font-bold mb-6 uppercase tracking-wider">Información</h2>
                <p className="text-white/80 mb-10 leading-relaxed font-light">
                  Visítanos, llámanos o escríbenos. Tu transformación comienza con un mensaje.
                </p>

                <div className="space-y-8">
                  <a
                    href={`${WA_BASE}${encodeURIComponent('Hola! Quiero información sobre New Personal Training.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-black/20 p-3 rounded-lg flex-shrink-0"><Phone className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs font-bold opacity-70 uppercase">Teléfono / WhatsApp</p>
                      <p className="text-lg font-bold">{COMPANY_INFO.phone}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="bg-black/20 p-3 rounded-lg flex-shrink-0"><Mail className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs font-bold opacity-70 uppercase">Email</p>
                      <p className="text-lg font-bold">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-black/20 p-3 rounded-lg flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs font-bold opacity-70 uppercase">Ubicación</p>
                      <p className="text-lg font-bold">{COMPANY_INFO.address}</p>
                      <p className="text-sm opacity-70 mt-0.5">{COMPANY_INFO.serviceArea}</p>
                    </div>
                  </div>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-3 mt-10">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-black/20 px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3" /> 5.0 · 500+ clientes
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-black/20 px-3 py-1.5 rounded-full">
                    <Clock className="w-3 h-3" /> 11+ años en Medellín
                  </span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
                <h3 className="font-bold mb-4 text-sm uppercase tracking-widest">Síguenos</h3>
                <div className="flex gap-4">
                  <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-bold">INSTAGRAM</a>
                  <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-bold">FACEBOOK</a>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-black italic text-white leading-tight">Escríbenos por WhatsApp</h2>
                  <p className="text-xs text-gray-400">Selecciona el motivo y te abrimos la conversación lista</p>
                </div>
              </div>

              {CONTACT_OPTIONS.map((opt, idx) => (
                <motion.a
                  key={idx}
                  href={`${WA_BASE}${encodeURIComponent(opt.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center justify-between w-full glass-panel p-5 rounded-2xl border border-white/5 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300 group"
                >
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">{opt.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{opt.sub}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0 text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-lg group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.a>
              ))}

              {/* Direct big button */}
              <a
                href={`${WA_BASE}${encodeURIComponent('Hola! Quiero información sobre New Personal Training.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl uppercase tracking-widest transition-colors duration-300 mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp directamente
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};
