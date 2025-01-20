// src/hooks/useTranslation.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, Language, TranslationKey } from '@/translations';

interface TranslationContextValue {
  language: Language;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextValue>({
  language: 'en',
  t: (key: TranslationKey) => key,
  toggleLanguage: () => undefined,
});

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language || 'en';
    setLanguage(savedLang);
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((curr) => {
      const newLang = curr === 'en' ? 'de' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const contextValue: TranslationContextValue = {
    language,
    t,
    toggleLanguage,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation(): TranslationContextValue {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}