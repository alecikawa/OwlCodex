// src/hooks/useTyped.js
// Efeito de texto sendo digitado (typewriter)

import { useState, useEffect, useRef } from 'react';

export function useTyped(phrases) {
  const [displayed, setDisplayed] = useState('');
  const state = useRef({ i: 0, j: 0, deleting: false });

  useEffect(() => {
    // Reinicia quando as frases mudam (troca de idioma)
    state.current = { i: 0, j: 0, deleting: false };
    setDisplayed('');
  }, [phrases]);

  useEffect(() => {
    let timeout;

    function tick() {
      const { i, j, deleting } = state.current;
      const phrase = phrases[i] ?? '';

      if (!deleting) {
        const next = phrase.slice(0, j + 1);
        setDisplayed(next);
        state.current.j += 1;

        if (j + 1 === phrase.length) {
          state.current.deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        const next = phrase.slice(0, j - 1);
        setDisplayed(next);
        state.current.j -= 1;

        if (j - 1 === 0) {
          state.current.deleting = false;
          state.current.i = (i + 1) % phrases.length;
        }
      }

      timeout = setTimeout(tick, deleting ? 45 : 70);
    }

    timeout = setTimeout(tick, 200);
    return () => clearTimeout(timeout);
  }, [phrases]);

  return displayed;
}
