import { useEffect } from 'react';
import i18n from '@/i18n';

export default function I18nClient() {
  useEffect(() => {
    const updateAll = () => {
      document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        const value = i18n.t(key);
        // If element requests HTML (e.g. notes with line breaks), render as innerHTML
        if (el.hasAttribute('data-i18n-html')) {
          const html = String(value).replace(/\s?\/\s?/g, '<br/>').replace(/\n/g, '<br/>');
          el.innerHTML = html;
        } else {
          el.textContent = String(value);
        }
      });
    };

    // Initial update and subscribe to language changes
    updateAll();
    i18n.on('languageChanged', updateAll);

    return () => {
      i18n.off('languageChanged', updateAll);
    };
  }, []);

  return null;
}
