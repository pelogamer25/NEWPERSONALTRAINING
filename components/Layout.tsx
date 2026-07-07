import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { MessageCircle } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-white relative overflow-hidden selection:bg-npt-red selection:text-white">
      {/* Global Fixed Background for Unity */}
      <div className="fixed inset-0 z-[-1]">
        {/* Dark base */}
        <div className="absolute inset-0 bg-npt-black" />
        
        {/* Textured Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-npt-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/573144008592?text=${encodeURIComponent('Hola! Quiero información sobre los servicios de New Personal Training.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-full shadow-[0_4px_24px_rgba(34,197,94,0.45)] hover:shadow-[0_4px_32px_rgba(34,197,94,0.65)] transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <span className="text-sm max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
};