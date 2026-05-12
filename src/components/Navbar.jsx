// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import LogoDark  from '../assets/svgs/LogoOwlCodexHorizontalColoridobranco.svg';
import LogoLight from '../assets/svgs/LogoOwlCodexHorizontalColorido.svg';
import './Navbar.css';

const SECTIONS = ['services', 'projects', 'how', 'differentials', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  }

  const navLabels = [
    t.nav.services, t.nav.projects, t.nav.how, t.nav.differentials, t.nav.contact,
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          <img src={theme === 'dark' ? LogoDark : LogoLight} alt="OwlCodex" height={48} />

          {/* Desktop links */}
          <ul className="navbar__links">
            {SECTIONS.map((id, i) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{navLabels[i]}</button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="navbar__controls">
            <button
              className="ctrl-btn"
              onClick={toggleTheme}
              title="Alternar tema"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              className="ctrl-btn"
              onClick={toggleLang}
              title="Idioma"
              aria-label="Toggle language"
            >
              {lang}
            </button>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              {t.nav.cta}
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="mobile-nav">
          {SECTIONS.map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}>{navLabels[i]}</button>
          ))}
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            {t.nav.cta}
          </button>
        </div>
      )}
    </>
  );
}
