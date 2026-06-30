import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, Clock, Star } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const serviceSchema = useMemo(() => {
    if (!service) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "url": `https://newpersonaltraining.com/servicios/${service.slug}`,
      "image": service.image,
      "provider": {
        "@type": "FitnessCenter",
        "@id": "https://newpersonaltraining.com/#business",
        "name": "New Personal Training",
        "url": "https://newpersonaltraining.com",
        "telephone": "+573005974290"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Valle de Aburrá, Medellín, Antioquia, Colombia"
      },
      "offers": service.pricingOptions?.map(opt => ({
        "@type": "Offer",
        "name": opt.label,
        "price": opt.price.replace(/[^0-9]/g, ''),
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock"
      }))
    };
  }, [service]);

  if (!service) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-heading font-black italic text-white mb-4">Servicio no encontrado</h1>
        <p className="text-gray-400 mb-8">El servicio que buscas no existe o ha sido movido.</p>
        <Button href="/servicios">Volver a Servicios</Button>
      </div>
    );
  }

  const waBase = 'https://wa.me/573005974290?text=';

  const waLink = (plan: string, price: string) =>
    waBase + encodeURIComponent(
      `Hola! Estoy interesado en ${service?.title} — ${plan} (${price}). ¿Me pueden dar más información y disponibilidad?`
    );

  const waGeneral = service
    ? waBase + encodeURIComponent(`Hola! Estoy interesado en ${service.title}. ¿Me pueden dar más información?`)
    : waBase + encodeURIComponent('Hola! Quiero información sobre sus servicios.');

  return (
    <>
      {service && (
        <SEOHead
          title={`${service.title} en Medellín | New Personal Training`}
          description={`${service.description} Disponible en el Valle de Aburrá. Desde ${service.pricingOptions?.[0]?.price ?? service.price}. Agenda tu sesión con New Personal Training.`}
          canonical={`/servicios/${service.slug}`}
          ogImage={service.image}
          jsonLd={serviceSchema ?? undefined}
          breadcrumbs={[
            { name: 'Inicio', url: 'https://newpersonaltraining.com/' },
            { name: 'Servicios', url: 'https://newpersonaltraining.com/servicios' },
            { name: service.title, url: `https://newpersonaltraining.com/servicios/${service.slug}` }
          ]}
        />
      )}
    <div className="pt-24 min-h-screen pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-npt-red/10 blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        <Link to="/servicios" className="inline-flex items-center text-gray-400 hover:text-npt-red transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a servicios
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <img
                src={service.image}
                alt={`${service.title} en Medellín — New Personal Training`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-npt-black via-npt-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                {service.badges && service.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.badges.map((badge, idx) => (
                      <span key={idx} className="bg-npt-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-3xl md:text-5xl font-heading font-black italic text-white leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Detalles del Plan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {service.description}
              </p>
              
              {service.imageInfo && (
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-6">
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">Incluye:</span> {service.imageInfo}
                  </p>
                </div>
              )}

              <div className="border-t border-white/10 pt-6 mt-6">
                {service.pricingOptions && service.pricingOptions.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Selecciona tu plan</label>
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(Number(e.target.value))}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors appearance-none"
                    >
                      {service.pricingOptions.map((opt, idx) => (
                        <option key={idx} value={idx} className="bg-npt-black">{opt.label} - {opt.price}</option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Inversión</p>
                    <p className="text-3xl font-heading font-black text-npt-red">
                      {service.pricingOptions && service.pricingOptions.length > 0 
                        ? service.pricingOptions[selectedOption].price 
                        : service.price || "Consultar precio"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-black italic text-white leading-tight">Agenda por WhatsApp</h2>
                <p className="text-xs text-gray-400">Respuesta inmediata · Sin turnos · Evaluación inicial gratis</p>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Star, label: "5.0 · 500+ clientes" },
                { icon: Clock, label: "11+ años experiencia" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Icon className="w-3 h-3 text-npt-red" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            {/* Per-plan WhatsApp buttons */}
            {service.pricingOptions && service.pricingOptions.length > 0 ? (
              <div className="space-y-3 mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Selecciona tu plan y agenda ahora</p>
                {service.pricingOptions.map((opt, idx) => (
                  <a
                    key={idx}
                    href={waLink(opt.label, opt.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full glass-panel p-4 rounded-xl border border-white/5 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors truncate">{opt.label}</p>
                      <p className="text-npt-red font-black text-xl font-heading leading-tight">{opt.price}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3 flex-shrink-0 text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-lg group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider">Agendar</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="mb-6">
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl uppercase tracking-widest transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Agendar por WhatsApp
                </a>
              </div>
            )}

            {/* General info button */}
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-white/10 hover:border-green-500/30 text-gray-400 hover:text-green-400 text-sm py-3 px-4 rounded-xl transition-all duration-300 mb-6"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Tengo preguntas antes de elegir un plan
            </a>

            {/* Guarantees */}
            <div className="border-t border-white/10 pt-5 space-y-2.5">
              {[
                "Evaluación inicial gratuita incluida",
                "Cobertura en todo el Valle de Aburrá",
                "Profesionales certificados del Politécnico Colombiano",
                "Más de 11 años de experiencia en Medellín",
              ].map((g) => (
                <div key={g} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs text-gray-400 leading-relaxed">{g}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};
