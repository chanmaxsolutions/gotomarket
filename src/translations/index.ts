// src/translations/index.ts
export type TranslationKey =
    | 'nav.home'
    | 'nav.services'
    | 'nav.about'
    | 'nav.contact'
    | 'nav.getStarted'
    | 'nav.webDev'
    | 'nav.ai';

export const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.getStarted': 'Get Started',
        'nav.webDev': 'Web Development',
        'nav.ai': 'AI Solutions',
    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Leistungen',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
        'nav.getStarted': 'Loslegen',
        'nav.webDev': 'Webentwicklung',
        'nav.ai': 'KI-Lösungen',
    }
} as const;

export type Language = keyof typeof translations;