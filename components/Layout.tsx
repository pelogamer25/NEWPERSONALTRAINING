import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';

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
    </div>
  );
};