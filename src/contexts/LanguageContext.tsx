import React, { createContext, useContext, useState } from 'react';
import { Lang, translations, Translations } from '@/i18n/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <S extends keyof Translations, K extends keyof Translations[S]>(
    section: S, key: K
  ) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');

  const t = <S extends keyof Translations, K extends keyof Translations[S]>(
    section: S, key: K
  ): string => {
    const entry = translations[section][key] as Record<Lang, string>;
    return entry[lang] ?? entry['ru'];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
