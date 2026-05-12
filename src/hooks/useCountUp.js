// src/hooks/useCountUp.js
// Anima um número de 0 até `target` quando o elemento entra na viewport

import { useState, useEffect, useRef } from 'react';

export function useCountUp(target) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.ceil(target / 60);

          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setValue(current);
            if (current >= target) clearInterval(timer);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { value, ref };
}
