import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/60 backdrop-blur-lg pt-20 pb-10 z-20">
      {/* Red top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-npt-red/50 to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mt-px" aria-hidden="true" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center p-1 shadow-[0_0_15px_rgba(208,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">
                <img src="/logo.png" alt="New Personal Training" className="w-full h-full object-contain" />
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
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Entrenadores', href: '/entrenadores' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contacto', href: '/contacto' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-npt-red transition-colors duration-200 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-npt-red/30 group-hover:bg-npt-red transition-colors flex-shrink-0" aria-hidden="true" />
                    {label}
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