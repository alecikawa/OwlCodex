// src/components/Services.jsx
import { useApp } from '../context/AppContext';
import { LogoSymbol } from '../assets/svgs/LogoOwlCodex';
import './Services.css';

export default function Services() {
  const { t } = useApp();
  const s = t.services;

  return (
    <section id="services" className="services">
      <div className="section-inner">
        <div className="text-center reveal">
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title">{s.title.replace('\n', ' ')}</h2>
          <p className="section-desc">{s.desc}</p>
        </div>

        <div className="services__grid">
          {s.items.map((item, i) => (
            <div
              key={i}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="service-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <LogoSymbol size={80} style={{ position:'absolute', bottom:-20, right:-20, opacity:.04, pointerEvents:'none' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
