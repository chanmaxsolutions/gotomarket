// src/hooks/useTranslation.ts
'use client';

import { useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/translations';

export function useTranslation() {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language || 'en';
        setLanguage(savedLang);
    }, []);

    const t = (key: TranslationKey) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'de' : 'en';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    return { t, language, toggleLanguage };
}