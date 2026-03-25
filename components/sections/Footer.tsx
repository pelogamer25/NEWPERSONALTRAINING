import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Dumbbell } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-black/40 backdrop-blur-lg pt-20 pb-10 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-npt-red p-2 rounded-lg text-white shadow-[0_0_15px_rgba(208,0,0,0.5)]">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-black italic leading-none text-white">NEW</span>
                <span className="text-[10px] font-bold tracking-widest text-gray-400">PERSONAL TRAINING</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mejoramos la calidad de vida de personas y empresas a través de servicios integrales.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.social.instagram} className="bg-white/5 border border-white/10 p-2 rounded-full hover:bg-npt-red hover:border-npt-red hover:shadow-[0_0_10px_rgba(208,0,0,0.5)] transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={COMPANY_INFO.social.facebook} className="bg-white/5 border border-white/10 p-2 rounded-full hover:bg-npt-red hover:border-npt-red hover:shadow-[0_0_10px_rgba(208,0,0,0.5)] transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-white">Enlaces</h3>
            <ul className="space-y-4">
              {['Inicio', 'Servicios', 'Entrenadores', 'Nosotros', 'Contacto'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Inicio' ? '/' : `/${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-npt-red transition-colors text-sm font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-white">Servicios</h3>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/servicios" className="text-gray-400 hover:text-npt-red transition-colors text-sm font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-npt-red shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-npt-red shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-npt-red shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} New Personal Training.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};