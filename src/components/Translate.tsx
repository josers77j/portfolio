import { useState, useEffect } from 'react';
import i18next from '@/i18n';

interface TranslateProps {
  readonly k: string;
}

export default function Translate({ k }: TranslateProps) {
  const [text, setText] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateText = () => {
      setText(i18next.t(k));
    };

    updateText();
    i18next.on('languageChanged', updateText);

    return () => {
      i18next.off('languageChanged', updateText);
    };
  }, [k]);

  if (!mounted) {
    return <>{i18next.t(k)}</>;
  }

  return <>{text}</>;
}
