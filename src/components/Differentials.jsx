// src/components/Differentials.jsx
import { useApp } from '../context/AppContext';
import { LogoSymbol } from '../assets/svgs/LogoOwlCodex';
import './Differentials.css';

export default function Differentials() {
  const { t } = useApp();
  const d = t.differentials;

  return (
    <section id="differentials" className="differentials">
      <div className="section-inner differentials__grid">
        {/* Visual */}
        <div className="differentials__visual reveal" aria-hidden="true">
          <div className="diff-glow-circle">
            <LogoSymbol
              size={180}
              style={{ filter: 'drop-shadow(0 0 30px rgba(0,106,252,.5))', animation: 'float 8s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="differentials__content">
          <div className="reveal">
            <span className="section-tag">{d.tag}</span>
            <h2 className="section-title">{d.title}</h2>
            <p className="section-desc">{d.desc}</p>
          </div>

          <div className="diff-list">
            {d.items.map((item, i) => (
              <div key={i} className={`diff-item reveal reveal-delay-${i + 1}`}>
                <div className="diff-item__icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
