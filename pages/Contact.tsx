import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black italic text-white mb-4">CONTÁCTANOS</h1>
          <p className="text-gray-400">Estamos aquí para resolver todas tus dudas.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 glass-panel rounded-3xl overflow-hidden border border-white/10">
          
          {/* Info Side */}
          <div className="bg-npt-red p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Pattern Overlay */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-heading font-bold mb-6 uppercase tracking-wider">Información</h2>
              <p className="text-white/80 mb-10 leading-relaxed font-light">
                Visítanos, llámanos o escríbenos. Tu transformación comienza con un mensaje.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 p-3 rounded-lg"><Phone className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase">Teléfono / WhatsApp</p>
                    <p className="text-lg font-bold">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 p-3 rounded-lg"><Mail className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase">Email</p>
                    <p className="text-lg font-bold">{COMPANY_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 p-3 rounded-lg"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase">Ubicación</p>
                    <p className="text-lg font-bold">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20 relative z-10">
              <h3 className="font-bold mb-4 text-sm uppercase tracking-widest">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-black transition-colors font-bold">INSTAGRAM</a>
                <a href="#" className="hover:text-black transition-colors font-bold">FACEBOOK</a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 bg-npt-black/40 backdrop-blur-md">
            <h2 className="text-2xl font-heading font-bold mb-8 text-white uppercase italic">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-npt-red focus:border-transparent outline-none transition-all placeholder-gray-600"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-npt-red focus:border-transparent outline-none transition-all placeholder-gray-600"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="juan@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-npt-red focus:border-transparent outline-none transition-all placeholder-gray-600"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+57 300..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-npt-red focus:border-transparent outline-none transition-all resize-none placeholder-gray-600"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensaje <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};