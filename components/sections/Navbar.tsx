import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '../../constants';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-npt-black/60 backdrop-blur-xl border-white/5 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors bg-npt-red text-white shadow-[0_0_15px_rgba(208,0,0,0.5)]`}>
              <Dumbbell className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-black italic leading-none text-white tracking-tighter">
                NEW
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70">
                PERSONAL TRAINING
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium tracking-wide transition-all hover:text-npt-red hover:drop-shadow-[0_0_8px_rgba(208,0,0,0.5)] ${
                  location.pathname === item.href ? 'text-npt-red font-bold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/reservar" size="sm" variant="primary">
              Reservar Sesión
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:text-npt-red transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-npt-black/95 backdrop-blur-xl z-40 lg:hidden overflow-hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-3xl font-heading font-black italic text-white hover:text-npt-red hover:scale-110 transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 w-full max-w-xs">
                <Button href="/reservar" className="w-full justify-center">
                  Reservar Sesión
                </Button>
              </div>
              
              <div className="mt-auto absolute bottom-10 text-gray-500 text-sm">
                <p>Medellín, Colombia</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};