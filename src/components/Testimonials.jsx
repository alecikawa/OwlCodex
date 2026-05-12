// src/components/Testimonials.jsx
import { useApp } from '../context/AppContext';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useApp();
  const { tag, title, desc, items } = t.testimonials;

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-inner">
        <div className="text-center reveal">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{desc}</p>
        </div>

        <div className="testimonials__grid">
          {items.map((item, i) => (
            <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__text">{item.text}</p>
              <div className="testimonial-card__author">
                <div className="author-avatar">{item.initials}</div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
