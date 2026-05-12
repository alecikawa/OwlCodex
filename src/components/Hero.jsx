// src/components/Hero.jsx
import { useApp } from '../context/AppContext';
import { useTyped } from '../hooks/useTyped';
import { LogoSymbol } from '../assets/svgs/LogoOwlCodex';
import './Hero.css';

export default function Hero() {
  const { t, theme } = useApp();
  const h = t.hero;
  const typedText = useTyped(h.typedPhrases);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__grid" />

      <div className="hero__content section-inner">
        {/* ── Left column ── */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {h.badge}
          </div>

          <h1 className="hero__title">
            <span>{h.titleLine1}</span>
            <span className="hero__title--accent">{h.titleLine2}</span>
          </h1>

          <p className="hero__typed">
            {h.typedPrefix}
            <span className="hero__typed-dynamic">{typedText}</span>
            <span className="hero__cursor" />
          </p>

          <p className="hero__desc">{h.description}</p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('contact')}>
              {h.cta1}
            </button>
            <button className="hero__btn hero__btn--ghost" onClick={() => scrollTo('projects')}>
              {h.cta2}
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">{h.stat1Num}</span>
              <span className="hero__stat-label">{h.stat1Label}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">{h.stat2Num}</span>
              <span className="hero__stat-label">{h.stat2Label}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">{h.stat3Num}</span>
              <span className="hero__stat-label">{h.stat3Label}</span>
            </div>
          </div>
        </div>

        {/* ── Right column: visual orb ── */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__orb">
            <LogoSymbol size={220} style={{ filter: theme === 'dark' ? 'drop-shadow(0 0 40px rgba(0,106,252,.5))' : 'drop-shadow(0 4px 16px rgba(0,0,0,.12))' }} />
          </div>

          <div className="orbit-card orbit-card--1">
            <span className="orbit-card__icon">📈</span>
            {h.card1}
          </div>
          <div className="orbit-card orbit-card--2">
            <span className="orbit-card__icon">⚡</span>
            {h.card2}
          </div>
          <div className="orbit-card orbit-card--3">
            <span className="orbit-card__icon">🎯</span>
            {h.card3}
          </div>
          <div className="orbit-card orbit-card--4">
            <span className="orbit-card__icon">🔒</span>
            {h.card4}
          </div>
        </div>
      </div>
    </section>
  );
}
