import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Booking: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-heading font-black italic text-white mb-4">AGENDA TU SESIÓN</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selecciona el tipo de servicio para ver la disponibilidad.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Booking Option 1 */}
          <div className="glass-panel p-6 rounded-xl hover:bg-white/5 hover:border-npt-red/50 transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
            <div className="flex items-start gap-4">
              <div className="bg-npt-red p-4 rounded-full text-white shadow-[0_0_15px_rgba(208,0,0,0.4)]">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-heading italic text-white group-hover:text-npt-red transition-colors">Evaluación Inicial Gratuita</h3>
                <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">30 minutos • Presencial o Virtual</p>
                <p className="text-gray-400 text-sm">Conoce a tu entrenador, define objetivos y recibe recomendaciones.</p>
              </div>
            </div>
            <Button size="sm">Seleccionar</Button>
          </div>

          {/* Booking Option 2 */}
          <div className="glass-panel p-6 rounded-xl hover:bg-white/5 hover:border-npt-red/50 transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-4 rounded-full text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <User className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-heading italic text-white group-hover:text-blue-500 transition-colors">Entrenamiento Personal</h3>
                <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">60 minutos • 1:1</p>
                <p className="text-gray-400 text-sm">Sesión personalizada con tu entrenador asignado.</p>
              </div>
            </div>
            <Button size="sm" variant="outline">Seleccionar</Button>
          </div>

           {/* Booking Option 3 */}
           <div className="glass-panel p-6 rounded-xl hover:bg-white/5 hover:border-npt-red/50 transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-4 rounded-full text-white shadow-[0_0_15px_rgba(22,163,74,0.4)]">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-heading italic text-white group-hover:text-green-500 transition-colors">Consulta Corporativa</h3>
                <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">45 minutos • Virtual</p>
                <p className="text-gray-400 text-sm">Para empresas que buscan mejorar el bienestar de su equipo.</p>
              </div>
            </div>
            <Button size="sm" variant="outline">Seleccionar</Button>
          </div>
        </div>

        <div className="mt-12 p-8 glass-panel rounded-xl text-center">
          <h3 className="font-bold text-xl italic text-white mb-2">¿Necesitas ayuda?</h3>
          <p className="text-gray-400 mb-6">Escríbenos directamente por WhatsApp y te ayudaremos.</p>
          <a 
            href="https://wa.me/573005974290" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded text-white bg-green-600 hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] uppercase tracking-wide"
          >
            Chat en WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};