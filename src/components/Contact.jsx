// src/components/Contact.jsx
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import './Contact.css';

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const f = c.form;

  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', type: '', message: '',
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulação de envio — substitua pela sua integração real
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner contact__grid">

        {/* Info side */}
        <div className="contact__info reveal">
          <span className="section-tag">{c.tag}</span>
          <h2>{c.title}</h2>
          <p>{c.desc}</p>

          <div className="contact-detail">
            <div className="contact-detail__icon">📧</div>
            <div>
              <small>{c.emailLabel}</small>
              <span>contato@owlcodex.com.br</span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail__icon">📱</div>
            <div>
              <small>{c.phoneLabel}</small>
              <span>+55 (11) 99999-0000</span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail__icon">⏰</div>
            <div>
              <small>{c.hoursLabel}</small>
              <span>{c.hoursValue}</span>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className="reveal reveal-delay-2">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{f.nameLabel}</label>
                  <input id="name" name="name" className="form-input" type="text"
                    placeholder={f.namePh} value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{f.emailLabel}</label>
                  <input id="email" name="email" className="form-input" type="email"
                    placeholder={f.emailPh} value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">{f.companyLabel}</label>
                  <input id="company" name="company" className="form-input" type="text"
                    placeholder={f.companyPh} value={form.company} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{f.phoneLabel}</label>
                  <input id="phone" name="phone" className="form-input" type="tel"
                    placeholder={f.phonePh} value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="type">{f.typeLabel}</label>
                <select id="type" name="type" className="form-input"
                  value={form.type} onChange={handleChange}>
                  <option value="">{f.typePh}</option>
                  {f.typeOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{f.msgLabel}</label>
                <textarea id="message" name="message" className="form-input"
                  rows={4} placeholder={f.msgPh}
                  value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? '⏳ Enviando...' : f.submit}
              </button>
            </form>
          ) : (
            <div className="form-success">
              <span className="form-success__icon">✅</span>
              <h3>{f.successTitle}</h3>
              <p>{f.successDesc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
