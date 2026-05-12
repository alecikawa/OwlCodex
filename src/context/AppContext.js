// src/context/AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');   // 'dark' | 'light'
  const [lang,  setLang]  = useState('PT');      // 'PT' | 'EN'

  // Aplica data-theme no <html> sempre que mudar
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang  = () => setLang(l  => (l  === 'PT'   ? 'EN'    : 'PT'));

  const t = translations[lang]; // atalho: t.hero.title, t.services.items, etc.

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook conveniente
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp deve ser usado dentro de <AppProvider>');
  return ctx;
}
