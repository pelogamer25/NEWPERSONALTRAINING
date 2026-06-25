import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from '../components/ui/Button';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  if (!service) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-heading font-black italic text-white mb-4">Servicio no encontrado</h1>
        <p className="text-gray-400 mb-8">El servicio que buscas no existe o ha sido movido.</p>
        <Button href="/servicios">Volver a Servicios</Button>
      </div>
    );
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simular proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
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
                alt={service.title} 
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

          {/* Checkout Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
                </motion.div>
                <h2 className="text-3xl font-heading font-black italic text-white mb-4">¡Pago Exitoso!</h2>
                <p className="text-gray-400 mb-8 max-w-sm">
                  Tu suscripción a <span className="text-white font-medium">{service.title}</span> ha sido confirmada. Te hemos enviado un correo con los siguientes pasos.
                </p>
                <Button href="/servicios" variant="outline">Volver al inicio</Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-heading font-black italic text-white">Pasarela de Pago</h2>
                  <div className="flex items-center text-gray-400 text-sm">
                    <ShieldCheck className="w-4 h-4 mr-1 text-green-500" /> Seguro
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-white/10 pb-2">Información Personal</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors" placeholder="Juan" />
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Apellido</label>
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors" placeholder="Pérez" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
                        <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors" placeholder="juan@ejemplo.com" />
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-white/10 pb-2">Información de Pago</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Número de Tarjeta</label>
                        <div className="relative">
                          <input required type="text" maxLength={19} className="w-full bg-black/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors font-mono" placeholder="0000 0000 0000 0000" />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Vencimiento</label>
                          <input required type="text" maxLength={5} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors font-mono" placeholder="MM/AA" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">CVC</label>
                          <input required type="text" maxLength={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-npt-red focus:ring-1 focus:ring-npt-red transition-colors font-mono" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-npt-red hover:bg-npt-red-dark text-white font-bold py-4 px-8 rounded-lg uppercase tracking-widest transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        `Pagar ${service.pricingOptions && service.pricingOptions.length > 0 ? service.pricingOptions[selectedOption].price : service.price || ''}`
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      Al hacer clic en "Pagar", aceptas nuestros términos y condiciones.
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
