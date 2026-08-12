import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Trainers } from './pages/Trainers';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

/**
 * Árbol de rutas sin router, para que el cliente lo monte con BrowserRouter y
 * el prerender con StaticRouter. Sin esta separación no se puede generar HTML
 * estático de cada ruta en el build.
 */
export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
        <Route path="/entrenadores" element={<Trainers />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/reservar" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
