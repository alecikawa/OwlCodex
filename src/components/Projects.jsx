// src/components/Projects.jsx
import { useApp } from '../context/AppContext';
import { LogoSymbol } from '../assets/svgs/LogoOwlCodex';
import './Projects.css';

export default function Projects() {
  const { t } = useApp();
  const p = t.projects;

  const gradients = [
    'linear-gradient(135deg,#0B1F3B,#006AFC22)',
    'linear-gradient(135deg,#111821,#0157ff22)',
    'linear-gradient(135deg,#0B1F3B,#111821)',
  ];

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <div className="text-center reveal">
          <span className="section-tag">{p.tag}</span>
          <h2 className="section-title">{p.title.replace('\n', ' ')}</h2>
          <p className="section-desc">{p.desc}</p>
        </div>

        <div className="projects__grid">
          {p.items.map((item, i) => (
            <div key={i} className={`project-card reveal reveal-delay-${i + 1}`}>
              <div className="project-card__thumb" style={{ background: gradients[i] }}>
                <span className="project-card__emoji">{item.emoji}</span>
                <LogoSymbol
                  size={60}
                  style={{ position:'absolute', bottom:-10, right:-10, opacity:.15, pointerEvents:'none' }}
                />
              </div>
              <div className="project-card__info">
                <span className="project-card__tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="project-card__link" onClick={scrollToContact}>
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
