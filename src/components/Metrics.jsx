// src/components/Metrics.jsx
import { useApp } from '../context/AppContext';
import { useCountUp } from '../hooks/useCountUp';
import './Metrics.css';

function MetricCard({ count, suffix, label }) {
  const { value, ref } = useCountUp(count);
  return (
    <div className="metric-card reveal" ref={ref}>
      <span className="metric-card__num">{value}{suffix}</span>
      <span className="metric-card__label">{label}</span>
    </div>
  );
}

export default function Metrics() {
  const { t } = useApp();
  return (
    <section id="metrics" className="metrics">
      <div className="metrics__inner section-inner">
        {t.metrics.map((m, i) => (
          <MetricCard key={i} count={m.count} suffix={m.suffix} label={m.label} />
        ))}
      </div>
    </section>
  );
}
