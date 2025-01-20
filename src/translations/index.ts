// src/translations/index.ts
export type TranslationKey =
    | 'nav.home'
    | 'nav.services'
    | 'nav.about'
    | 'nav.contact'
    | 'nav.getStarted'
    | 'nav.webDev'
    | 'nav.ai'
    | 'hero.title.start'
    | 'hero.title.highlight1'
    | 'hero.title.middle'
    | 'hero.title.highlight2'
    | 'hero.subtitle'
    | 'hero.cta.primary'
    | 'hero.cta.secondary'
    | 'services.title'
    | 'services.subtitle'
    | 'services.description'
    | 'services.webdev.title'
    | 'services.webdev.description'
    | 'services.ai.title'
    | 'services.ai.description'
    | 'stats.projects'
    | 'stats.satisfaction'
    | 'stats.experience'
    | 'stats.clients'
    | 'about.title'
    | 'about.subtitle'
    | 'about.description'
    | 'about.cta'
    | 'testimonials.title'
    | 'testimonials.subtitle'
    | 'testimonials.description'
    | 'testimonials.1.author'
    | 'testimonials.1.role'
    | 'testimonials.1.company'
    | 'testimonials.1.content'
    | 'testimonials.2.author'
    | 'testimonials.2.role'
    | 'testimonials.2.company'
    | 'testimonials.2.content'
    | 'testimonials.3.author'
    | 'testimonials.3.role'
    | 'testimonials.3.company'
    | 'testimonials.3.content'
    | 'testimonials.4.author'
    | 'testimonials.4.role'
    | 'testimonials.4.company'
    | 'testimonials.4.content'
    | 'testimonials.5.author'
    | 'testimonials.5.role'
    | 'testimonials.5.company'
    | 'testimonials.5.content'
    | 'process.title'
    | 'process.subtitle'
    | 'process.description'
    | 'process.step1.title'
    | 'process.step1.description'
    | 'process.step2.title'
    | 'process.step2.description'
    | 'process.step3.title'
    | 'process.step3.description'
    | 'process.step4.title'
    | 'process.step4.description'
    | 'process.step5.title'
    | 'process.step5.description'
    | 'process.step6.title'
    | 'process.step6.description'
    | 'cta.title'
    | 'cta.description'
    | 'cta.button';

export const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.getStarted': 'Get Started',
        'nav.webDev': 'Web Development',
        'nav.ai': 'AI Solutions',


        'hero.title.start': 'Save ',
        'hero.title.highlight1': 'Time and Money',
        'hero.title.middle': ' with ',
        'hero.title.highlight2': 'AI Agents',
        'hero.subtitle': 'We create cutting-edge web solutions and AI integrations that drive business growth and innovation.',
        'hero.cta.primary': 'Get Started',
        'hero.cta.secondary': 'Our Services',

        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive solutions',
        'services.description': 'We craft digital experiences that transform businesses and drive success in the modern digital landscape. Our expertise spans across web development and AI integration, ensuring your business stays ahead of the curve.',
        'services.webdev.title': 'Website Development',
        'services.webdev.description': 'Custom websites and web applications built with cutting-edge technology.',
        'services.ai.title': 'AI Integrated Solutions',
        'services.ai.description': 'Intelligent automation and AI integration for your business needs.',

        'stats.projects': 'Projects Completed',
        'stats.satisfaction': 'Client Satisfaction',
        'stats.experience': 'Years Experience',
        'stats.clients': 'Active Clients',

        'about.title': 'About Us',
        'about.subtitle': 'Your digital partner',
        'about.description': 'We are a team of passionate developers and AI specialists, dedicated to transforming businesses through innovative digital solutions. With years of experience and a commitment to excellence, we help companies navigate the digital landscape and achieve their goals.',
        'about.cta': 'Learn More About Us',

        'testimonials.title': 'Client Stories',
        'testimonials.subtitle': 'What our clients say',
        'testimonials.description': 'Discover how we have helped businesses transform their digital presence and achieve remarkable results.',

        'testimonials.1.author': 'Michael Schmidt',
        'testimonials.1.role': 'CEO',
        'testimonials.1.company': 'TechVision GmbH',
        'testimonials.1.content': 'Their expertise in web development and AI integration has completely transformed our business operations. The results exceeded our expectations.',

        'testimonials.2.author': 'Laura Weber',
        'testimonials.2.role': 'CTO',
        'testimonials.2.company': 'InnovateTech',
        'testimonials.2.content': 'Outstanding service and technical expertise. They delivered a complex web application ahead of schedule and with impeccable quality.',

        'testimonials.3.author': 'Thomas Mueller',
        'testimonials.3.role': 'Director',
        'testimonials.3.company': 'Digital Solutions AG',
        'testimonials.3.content': 'Their AI solutions have significantly improved our efficiency. Professional team with excellent communication throughout the project.',

        'testimonials.4.author': 'Sarah Klein',
        'testimonials.4.role': 'Product Manager',
        'testimonials.4.company': 'FutureScale GmbH',
        'testimonials.4.content': 'The AI integration has revolutionized our customer service. Response times improved by 70% and customer satisfaction is at an all-time high.',

        'testimonials.5.author': 'Marcus Bauer',
        'testimonials.5.role': 'Head of Technology',
        'testimonials.5.company': 'DataFlow Systems',
        'testimonials.5.content': 'Their teams expertise in both web development and AI created a seamless solution that perfectly aligned with our business goals.',

        'process.title': 'Our Process',
        'process.subtitle': 'How we work', 'process.description': 'A streamlined approach to transforming your digital presence, from initial concept to successful execution.',
        'process.step1.title': 'Discovery & Planning',
        'process.step1.description': 'We analyze your requirements and plan the perfect solution for your needs.',
        'process.step2.title': 'Design & Architecture',
        'process.step2.description': 'Creating the blueprint for your success with modern design principles.',
        'process.step3.title': 'Development',
        'process.step3.description': 'Building your solution with cutting-edge technologies and best practices.',
        'process.step4.title': 'Testing & QA',
        'process.step4.description': 'Rigorous testing to ensure quality and reliability.',
        'process.step5.title': 'Deployment',
        'process.step5.description': 'Smooth deployment and integration of your solution.',
        'process.step6.title': 'Support & Maintenance',
        'process.step6.description': 'Ongoing support and updates to keep your solution running perfectly.',

        'cta.title': 'Innovation Begins With A Conversation',
        'cta.description': 'Take the first step towards innovation. Lets discuss your project and create something extraordinary together.',
        'cta.button': 'Get Your Free Quote',

    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Leistungen',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
        'nav.getStarted': 'Loslegen',
        'nav.webDev': 'Webentwicklung',
        'nav.ai': 'KI-Lösungen',

        'hero.title.start': 'Sparen ',
        'hero.title.highlight1': 'Sie Zeit und Geld',
        'hero.title.middle': ' mit ',
        'hero.title.highlight2': 'KI-Agenten',
        'hero.title.end': ' trifft',
        'hero.subtitle': 'Wir entwickeln modernste Weblösungen und KI-Integrationen, die Geschäftswachstum und Innovation vorantreiben.',
        'hero.cta.primary': 'Loslegen',
        'hero.cta.secondary': 'Unsere Leistungen',

        'services.title': 'Unsere Leistungen',
        'services.subtitle': 'Umfassende Lösungen',
        'services.description': 'Wir gestalten digitale Erlebnisse, die Unternehmen transformieren und Erfolg in der modernen digitalen Landschaft ermöglichen. Unsere Expertise umfasst Webentwicklung und KI-Integration und stellt sicher, dass Ihr Unternehmen der Konkurrenz einen Schritt voraus ist.',
        'services.webdev.title': 'Webentwicklung',
        'services.webdev.description': 'Maßgeschneiderte Websites und Webanwendungen mit modernster Technologie.',
        'services.ai.title': 'KI-Integrierte Lösungen',
        'services.ai.description': 'Intelligente Automatisierung und KI-Integration für Ihre Geschäftsanforderungen.',

        'stats.projects': 'Abgeschlossene Projekte',
        'stats.satisfaction': 'Kundenzufriedenheit',
        'stats.experience': 'Jahre Erfahrung',
        'stats.clients': 'Aktive Kunden',

        'about.title': 'Über Uns',
        'about.subtitle': 'Ihr digitaler Partner',
        'about.description': 'Wir sind ein Team aus leidenschaftlichen Entwicklern und KI-Spezialisten, die sich der digitalen Transformation von Unternehmen durch innovative Lösungen verschrieben haben. Mit jahrelanger Erfahrung und einem Bestreben nach Exzellenz helfen wir Unternehmen, die digitale Landschaft zu navigieren.',
        'about.cta': 'Mehr Über Uns Erfahren',

        'testimonials.title': 'Kundenstimmen',
        'testimonials.subtitle': 'Was unsere Kunden sagen',
        'testimonials.description': 'Entdecken Sie, wie wir Unternehmen bei der digitalen Transformation unterstützt und bemerkenswerte Ergebnisse erzielt haben.',

        'testimonials.1.author': 'Michael Schmidt',
        'testimonials.1.role': 'Geschäftsführer',
        'testimonials.1.company': 'TechVision GmbH',
        'testimonials.1.content': 'Ihre Expertise in Webentwicklung und KI-Integration hat unseren Geschäftsbetrieb komplett transformiert. Die Ergebnisse übertrafen unsere Erwartungen.',

        'testimonials.2.author': 'Laura Weber',
        'testimonials.2.role': 'CTO',
        'testimonials.2.company': 'InnovateTech',
        'testimonials.2.content': 'Hervorragender Service und technische Expertise. Sie lieferten eine komplexe Webanwendung vor dem Zeitplan und in einwandfreier Qualität.',

        'testimonials.3.author': 'Thomas Mueller',
        'testimonials.3.role': 'Direktor',
        'testimonials.3.company': 'Digital Solutions AG',
        'testimonials.3.content': 'Ihre KI-Lösungen haben unsere Effizienz deutlich verbessert. Professionelles Team mit ausgezeichneter Kommunikation während des gesamten Projekts.',

        'testimonials.4.author': 'Sarah Klein',
        'testimonials.4.role': 'Produktmanagerin',
        'testimonials.4.company': 'FutureScale GmbH',
        'testimonials.4.content': 'Die KI-Integration hat unseren Kundenservice revolutioniert. Die Reaktionszeiten verbesserten sich um 70% und die Kundenzufriedenheit ist auf einem Höchststand.',

        'testimonials.5.author': 'Marcus Bauer',
        'testimonials.5.role': 'Technischer Leiter',
        'testimonials.5.company': 'DataFlow Systems',
        'testimonials.5.content': 'Die Expertise des Teams in Webentwicklung und KI schuf eine nahtlose Lösung, die perfekt auf unsere Geschäftsziele abgestimmt war.',

        'process.title': 'Unser Prozess',
        'process.subtitle': 'So arbeiten wir', 'process.description': 'Ein optimierter Ansatz zur Transformation Ihrer digitalen Präsenz, vom ersten Konzept bis zur erfolgreichen Umsetzung.',
        'process.step1.title': 'Entdeckung & Planung',
        'process.step1.description': 'Wir analysieren Ihre Anforderungen und planen die perfekte Lösung.',
        'process.step2.title': 'Design & Architektur',
        'process.step2.description': 'Erstellen der Blaupause für Ihren Erfolg mit modernen Designprinzipien.',
        'process.step3.title': 'Entwicklung',
        'process.step3.description': 'Entwicklung Ihrer Lösung mit modernsten Technologien.',
        'process.step4.title': 'Testing & QS',
        'process.step4.description': 'Gründliche Tests für Qualität und Zuverlässigkeit.',
        'process.step5.title': 'Bereitstellung',
        'process.step5.description': 'Reibungslose Bereitstellung und Integration Ihrer Lösung.',
        'process.step6.title': 'Support & Wartung',
        'process.step6.description': 'Laufende Unterstützung und Updates für optimale Funktion.',

        'cta.title': 'Innovation beginnt mit einem Gespräch',
        'cta.description': 'Machen Sie den ersten Schritt in Richtung Innovation. Lassen Sie uns Ihr Projekt besprechen und gemeinsam etwas Außergewöhnliches schaffen.',
        'cta.button': 'Kostenloses Angebot',

    }
} as const;

export type Language = keyof typeof translations;