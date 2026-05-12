// src/components/Footer.jsx
import { useApp } from '../context/AppContext';
import { LogoHorizontal } from '../assets/svgs/LogoOwlCodex';
import './Footer.css';

export default function Footer() {
  const { t } = useApp();
  const f = t.footer;

  const sections = [
    { anchor: '#services',      label: f.servCol,  links: f.servLinks  },
    { anchor: '#differentials', label: f.compCol,  links: f.compLinks  },
    { anchor: '#',              label: f.legalCol, links: f.legalLinks },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner section-inner">
        <div className="footer__top">
          <div className="footer__brand">
            <LogoHorizontal height={32} />
            <p>{f.desc}</p>
          </div>

          {sections.map((col) => (
            <div className="footer__col" key={col.label}>
              <h4>{col.label}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href={col.anchor}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">{f.copy}</p>
          <div className="footer__socials">
            <a href="https://instagram.com" className="social-btn" aria-label="Instagram"
              target="_blank" rel="noreferrer">📸</a>
            <a href="https://linkedin.com" className="social-btn" aria-label="LinkedIn"
              target="_blank" rel="noreferrer">💼</a>
            <a href="https://wa.me/5511999990000" className="social-btn" aria-label="WhatsApp"
              target="_blank" rel="noreferrer">💬</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
