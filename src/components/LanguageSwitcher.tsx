import { useState, useEffect } from 'react';
import i18next from '@/i18n';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'en';
      setCurrentLang(savedLang);
      i18next.changeLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (typeof window !== 'undefined') {
      i18next.changeLanguage(lang);
      localStorage.setItem('language', lang);
      setCurrentLang(lang);
    }
  };

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <button className="text-neutral-100 hover:text-neutral-100">EN</button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`transition-colors duration-200 ${
          currentLang === 'en'
            ? 'text-neutral-100'
            : 'text-neutral-400 hover:text-neutral-100'
        }`}
      >
        EN
      </button>
      <span className="text-neutral-400">/</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`transition-colors duration-200 ${
          currentLang === 'es'
            ? 'text-neutral-100'
            : 'text-neutral-400 hover:text-neutral-100'
        }`}
      >
        ES
      </button>
    </div>
  );
}
