// src/components/HowItWorks.jsx
import { useApp } from '../context/AppContext';
import './HowItWorks.css';

export default function HowItWorks() {
  const { t } = useApp();
  const h = t.how;
  return (
    <section id="how" className="how">
      <div className="section-inner">
        <div className="text-center reveal">
          <span className="section-tag">{h.tag}</span>
          <h2 className="section-title">{h.title.replace('\n', ' ')}</h2>
          <p className="section-desc">{h.desc}</p>
        </div>
        <div className="how__grid">
          {h.steps.map((step, i) => (
            <div key={i} className={`step-card reveal reveal-delay-${i + 1}`}>
              <div className="step-card__num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
