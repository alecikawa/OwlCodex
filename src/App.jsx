// src/App.jsx
import { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { useScrollReveal } from './hooks/useScrollReveal';

import ParticlesCanvas from './components/ParticlesCanvas';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Services       from './components/Services';
import HowItWorks     from './components/HowItWorks';
import Projects       from './components/Projects';
import Differentials  from './components/Differentials';
import Metrics        from './components/Metrics';
import Testimonials   from './components/Testimonials';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

import './index.css';

function AppInner() {
  // Ativa scroll-reveal em toda a árvore
  useScrollReveal();

  // Botão "voltar ao topo"
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ParticlesCanvas />
      <Navbar />

      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Projects />
        <Differentials />
        <Metrics />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <button
        className={`scroll-top-btn${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
