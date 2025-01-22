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
    | 'cta.button'

    | 'footer.description'
    | 'footer.quickLinks'
    | 'footer.about'
    | 'footer.services'
    | 'footer.contact'
    | 'footer.webDev'
    | 'footer.ai'
    | 'footer.address'
    | 'footer.copyright'
    | 'footer.privacy'
    | 'footer.terms'

    | 'about.story.title'
    | 'about.story.subtitle'
    | 'about.story.description'
    | 'about.story.content1'
    | 'about.story.content2'

    | 'about.vision.title'
    | 'about.vision.subtitle'
    | 'about.vision.statement'
    | 'about.mission.title'
    | 'about.mission.statement'

    | 'about.team.title'
    | 'about.team.subtitle'
    | 'about.team.description'
    | 'about.team.member1.name'
    | 'about.team.member1.role'
    | 'about.team.member2.name'
    | 'about.team.member2.role'
    | 'about.team.member3.name'
    | 'about.team.member3.role'

    | 'services.page.title'
    | 'services.page.description'

    | 'services.webdev.subtitle'
    | 'services.webdev.detailed'
    | 'services.webdev.feature1'
    | 'services.webdev.feature2'
    | 'services.webdev.feature3'
    | 'services.webdev.feature4'
    | 'services.ai.subtitle'
    | 'services.ai.detailed'
    | 'services.ai.feature1'
    | 'services.ai.feature2'
    | 'services.ai.feature3'
    | 'services.ai.feature4'

    | 'services.webdev.page.title'
    | 'services.webdev.page.description'

    | 'services.webdev.features.title'
    | 'services.webdev.features.subtitle'
    | 'services.webdev.features.description'
    | 'services.webdev.features.custom.title'
    | 'services.webdev.features.custom.description'
    | 'services.webdev.features.application.title'
    | 'services.webdev.features.application.description'
    | 'services.webdev.features.ecommerce.title'
    | 'services.webdev.features.ecommerce.description'
    | 'services.webdev.features.cms.title'
    | 'services.webdev.features.cms.description'

    | 'services.webdev.tech.title'
    | 'services.webdev.tech.subtitle'
    | 'services.webdev.tech.description'

    // Frontend Technologies
    | 'services.webdev.tech.frontend.title'
    | 'services.webdev.tech.frontend.description'
    | 'services.webdev.tech.frontend.tech1'
    | 'services.webdev.tech.frontend.tech2'
    | 'services.webdev.tech.frontend.tech3'
    | 'services.webdev.tech.frontend.tech4'
    | 'services.webdev.tech.frontend.tech5'
    | 'services.webdev.tech.frontend.tech6'
    | 'services.webdev.tech.frontend.tech7'
    | 'services.webdev.tech.frontend.tech8'

    // Backend Technologies
    | 'services.webdev.tech.backend.title'
    | 'services.webdev.tech.backend.description'
    | 'services.webdev.tech.backend.tech1'
    | 'services.webdev.tech.backend.tech2'
    | 'services.webdev.tech.backend.tech3'
    | 'services.webdev.tech.backend.tech4'
    | 'services.webdev.tech.backend.tech5'
    | 'services.webdev.tech.backend.tech6'
    | 'services.webdev.tech.backend.tech7'
    | 'services.webdev.tech.backend.tech8'

    // Database Technologies
    | 'services.webdev.tech.database.title'
    | 'services.webdev.tech.database.description'
    | 'services.webdev.tech.database.tech1'
    | 'services.webdev.tech.database.tech2'
    | 'services.webdev.tech.database.tech3'
    | 'services.webdev.tech.database.tech4'
    | 'services.webdev.tech.database.tech5'
    | 'services.webdev.tech.database.tech6'
    | 'services.webdev.tech.database.tech7'
    | 'services.webdev.tech.database.tech8'

    // Development Tools
    | 'services.webdev.tech.tools.title'
    | 'services.webdev.tech.tools.description'
    | 'services.webdev.tech.tools.tech1'
    | 'services.webdev.tech.tools.tech2'
    | 'services.webdev.tech.tools.tech3'
    | 'services.webdev.tech.tools.tech4'
    | 'services.webdev.tech.tools.tech5'
    | 'services.webdev.tech.tools.tech6'
    | 'services.webdev.tech.tools.tech7'
    | 'services.webdev.tech.tools.tech8'

    // Add to TranslationKey type
    | 'services.webdev.faq.title'
    | 'services.webdev.faq.subtitle'
    | 'services.webdev.faq.description'
    | 'services.webdev.faq.process.title'
    | 'services.webdev.faq.process.q1'
    | 'services.webdev.faq.process.a1'
    | 'services.webdev.faq.process.q2'
    | 'services.webdev.faq.process.a2'
    | 'services.webdev.faq.process.q3'
    | 'services.webdev.faq.process.a3'
    | 'services.webdev.faq.technical.title'
    | 'services.webdev.faq.technical.q1'
    | 'services.webdev.faq.technical.a1'
    | 'services.webdev.faq.technical.q2'
    | 'services.webdev.faq.technical.a2'
    | 'services.webdev.faq.technical.q3'
    | 'services.webdev.faq.technical.a3'
    | 'services.webdev.faq.collaboration.title'
    | 'services.webdev.faq.collaboration.q1'
    | 'services.webdev.faq.collaboration.a1'
    | 'services.webdev.faq.collaboration.q2'
    | 'services.webdev.faq.collaboration.a2'
    | 'services.webdev.faq.collaboration.q3'
    | 'services.webdev.faq.collaboration.a3'

    | 'services.ai.page.title'
    | 'services.ai.page.description'

    | 'services.ai.features.title'
    | 'services.ai.features.subtitle'
    | 'services.ai.features.description'
    | 'services.ai.features.chatbot.title'
    | 'services.ai.features.chatbot.description'
    | 'services.ai.features.agent.title'
    | 'services.ai.features.agent.description'
    | 'services.ai.features.integration.title'
    | 'services.ai.features.integration.description'
    | 'services.ai.features.automation.title'
    | 'services.ai.features.automation.description'

    | 'services.ai.tech.title'
    | 'services.ai.tech.subtitle'
    | 'services.ai.tech.description'

    | 'services.ai.tech.platforms.title'
    | 'services.ai.tech.platforms.description'
    | 'services.ai.tech.platforms.tech1'
    | 'services.ai.tech.platforms.tech2'
    | 'services.ai.tech.platforms.tech3'
    | 'services.ai.tech.platforms.tech4'
    | 'services.ai.tech.platforms.tech5'
    | 'services.ai.tech.platforms.more'

    | 'services.ai.tech.integration.title'
    | 'services.ai.tech.integration.description'
    | 'services.ai.tech.integration.tech1'
    | 'services.ai.tech.integration.tech2'
    | 'services.ai.tech.integration.tech3'
    | 'services.ai.tech.integration.tech4'
    | 'services.ai.tech.integration.tech5'
    | 'services.ai.tech.integration.more'

    | 'services.ai.tech.nlp.title'
    | 'services.ai.tech.nlp.description'
    | 'services.ai.tech.nlp.tech1'
    | 'services.ai.tech.nlp.tech2'
    | 'services.ai.tech.nlp.tech3'
    | 'services.ai.tech.nlp.tech4'
    | 'services.ai.tech.nlp.tech5'
    | 'services.ai.tech.nlp.more'

    | 'services.ai.tech.infrastructure.title'
    | 'services.ai.tech.infrastructure.description'
    | 'services.ai.tech.infrastructure.tech1'
    | 'services.ai.tech.infrastructure.tech2'
    | 'services.ai.tech.infrastructure.tech3'
    | 'services.ai.tech.infrastructure.tech4'
    | 'services.ai.tech.infrastructure.tech5'
    | 'services.ai.tech.infrastructure.more'

    | 'services.ai.faq.title'
    | 'services.ai.faq.subtitle'
    | 'services.ai.faq.description'
    | 'services.ai.faq.process.title'
    | 'services.ai.faq.process.q1'
    | 'services.ai.faq.process.a1'
    | 'services.ai.faq.process.q2'
    | 'services.ai.faq.process.a2'
    | 'services.ai.faq.process.q3'
    | 'services.ai.faq.process.a3'
    | 'services.ai.faq.technical.title'
    | 'services.ai.faq.technical.q1'
    | 'services.ai.faq.technical.a1'
    | 'services.ai.faq.technical.q2'
    | 'services.ai.faq.technical.a2'
    | 'services.ai.faq.technical.q3'
    | 'services.ai.faq.technical.a3'
    | 'services.ai.faq.collaboration.title'
    | 'services.ai.faq.collaboration.q1'
    | 'services.ai.faq.collaboration.a1'
    | 'services.ai.faq.collaboration.q2'
    | 'services.ai.faq.collaboration.a2'
    | 'services.ai.faq.collaboration.q3'
    | 'services.ai.faq.collaboration.a3'

    | 'legal.imprint.title'
    | 'legal.imprint.description'
    | 'legal.imprint.company.title'
    | 'legal.imprint.company.name'
    | 'legal.imprint.company.street'
    | 'legal.imprint.company.city'
    | 'legal.imprint.company.country'
    | 'legal.imprint.contact.title'
    | 'legal.imprint.contact.phone'
    | 'legal.imprint.contact.email'
    | 'legal.imprint.contact.web'
    | 'legal.imprint.registration.title'
    | 'legal.imprint.registration.court'
    | 'legal.imprint.registration.number'
    | 'legal.imprint.registration.vatid'
    | 'legal.imprint.responsible.title'
    | 'legal.imprint.responsible.name'
    | 'legal.imprint.responsible.position'
    | 'legal.imprint.responsible.email'
    | 'legal.imprint.disclaimer.title'
    | 'legal.imprint.disclaimer.content'

    | 'legal.privacy.title'
    | 'legal.privacy.description'
    | 'legal.privacy.general.title'
    | 'legal.privacy.general.intro'
    | 'legal.privacy.general.controller'
    | 'legal.privacy.general.dpo'
    | 'legal.privacy.collection.title'
    | 'legal.privacy.collection.purpose'
    | 'legal.privacy.collection.types.title'
    | 'legal.privacy.collection.types.personal'
    | 'legal.privacy.collection.types.usage'
    | 'legal.privacy.collection.types.technical'
    | 'legal.privacy.cookies.title'
    | 'legal.privacy.cookies.description'
    | 'legal.privacy.cookies.types.title'
    | 'legal.privacy.cookies.types.essential'
    | 'legal.privacy.cookies.types.analytics'
    | 'legal.privacy.cookies.types.marketing'
    | 'legal.privacy.thirdparty.title'
    | 'legal.privacy.thirdparty.description'
    | 'legal.privacy.thirdparty.services.analytics'
    | 'legal.privacy.thirdparty.services.social'
    | 'legal.privacy.thirdparty.services.payment'
    | 'legal.privacy.rights.title'
    | 'legal.privacy.rights.intro'
    | 'legal.privacy.rights.access'
    | 'legal.privacy.rights.rectification'
    | 'legal.privacy.rights.erasure'
    | 'legal.privacy.rights.restriction'
    | 'legal.privacy.rights.portability'
    | 'legal.privacy.rights.object'
    | 'legal.privacy.security.title'
    | 'legal.privacy.security.measures'
    | 'legal.privacy.security.encryption'
    | 'legal.privacy.security.staff'

    | 'legal.terms.title'
    | 'legal.terms.description'
    | 'legal.terms.general.title'
    | 'legal.terms.general.scope'
    | 'legal.terms.general.validity'
    | 'legal.terms.services.title'
    | 'legal.terms.services.description'
    | 'legal.terms.services.webdev'
    | 'legal.terms.services.ai'
    | 'legal.terms.services.consulting'
    | 'legal.terms.contract.title'
    | 'legal.terms.contract.conclusion.title'
    | 'legal.terms.contract.conclusion.content'
    | 'legal.terms.contract.duration.title'
    | 'legal.terms.contract.duration.content'
    | 'legal.terms.payment.title'
    | 'legal.terms.payment.prices'
    | 'legal.terms.payment.terms'
    | 'legal.terms.payment.methods'
    | 'legal.terms.obligations.title'
    | 'legal.terms.obligations.provider.title'
    | 'legal.terms.obligations.provider.content'
    | 'legal.terms.obligations.client.title'
    | 'legal.terms.obligations.client.content'
    | 'legal.terms.liability.title'
    | 'legal.terms.liability.limitation'
    | 'legal.terms.liability.exclusions'
    | 'legal.terms.final.title'
    | 'legal.terms.final.jurisdiction'
    | 'legal.terms.final.severability'

    | 'contact.page.title'
    | 'contact.page.description'

    | 'contact.form.title'
    | 'contact.form.subtitle'
    | 'contact.form.description'
    | 'contact.form.name'
    | 'contact.form.namePlaceholder'
    | 'contact.form.email'
    | 'contact.form.emailPlaceholder'
    | 'contact.form.subject'
    | 'contact.form.subjectPlaceholder'
    | 'contact.form.message'
    | 'contact.form.messagePlaceholder'
    | 'contact.form.submit'
    | 'contact.form.phonePlaceholder'
    | 'contact.form.inquiryType'
    | 'contact.form.services.webdev'
    | 'contact.form.services.ai'
    | 'contact.form.sending'
    | 'contact.form.nameRequired'
    | 'contact.form.emailRequired'
    | 'contact.form.phoneRequired'
    | 'contact.form.inquiryRequired'
    | 'contact.form.messageRequired'
    | 'contact.form.error'

    | 'contact.form.rateLimit'
    | 'contact.form.networkError'
    | 'contact.form.invalidSubmission'

    | 'contact.form.success'
    | 'contact.form.error'
    | 'contact.form.emailInvalid'

export const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.getStarted': 'Get Started',
        'nav.webDev': 'Web Development',
        'nav.ai': 'AI Solutions',


        'hero.title.start': 'Transforming ',
        'hero.title.highlight1': ' Ideas into',
        'hero.title.middle': ' Digital ',
        'hero.title.highlight2': 'Excellence',
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

        'footer.description': 'Innovative web development and AI solutions for modern businesses.',
        'footer.quickLinks': 'Quick Links',
        'footer.about': 'About Us',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.webDev': 'Web Development',
        'footer.ai': 'AI Solutions',
        'footer.address': '123 Innovation Street, Tech City, 12345 Germany',
        'footer.copyright': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',

        'about.story.title': 'Our Story',
        'about.story.subtitle': 'Building digital excellence',
        'about.story.description': 'A journey of innovation and dedication to creating impactful digital solutions that transform businesses and drive success.',
        'about.story.content1': 'Founded with a vision to bridge the gap between technology and business success, Go To Market has grown into a leading digital solutions provider. We combine expertise in web development, marketing, and AI to deliver results that matter.',
        'about.story.content2': 'Our team of experts brings together years of experience across different domains, working collaboratively to solve complex challenges and create innovative solutions that help businesses thrive in the digital age.',

        'about.vision.title': 'Our Vision',
        'about.vision.subtitle': 'Looking ahead',
        'about.vision.statement': 'To revolutionize digital transformation by making AI and web solutions accessible and impactful for businesses of all sizes.',
        'about.mission.title': 'Our Mission',
        'about.mission.statement': 'To deliver innovative, scalable, and intelligent digital solutions that drive real business growth and create lasting value for our clients.',

        'about.team.title': 'Our Team',
        'about.team.subtitle': 'Meet the experts',
        'about.team.description': 'A group of passionate innovators dedicated to transforming businesses through technology.',
        'about.team.member1.name': 'Michael Weber',
        'about.team.member1.role': 'CEO & Founder',
        'about.team.member2.name': 'Sarah Schmidt',
        'about.team.member2.role': 'Head of Development',
        'about.team.member3.name': 'Thomas Mueller',
        'about.team.member3.role': 'AI Solutions Lead',

        'services.page.title': 'Services',
        'services.page.description': 'Tailored Solutions to your business needs',

        'services.webdev.subtitle': 'Modern web solutions',
        'services.webdev.detailed': 'We create cutting-edge websites and web applications that deliver exceptional user experiences and drive business growth.',
        'services.webdev.feature1': 'Custom website development with modern technologies',
        'services.webdev.feature2': 'Responsive design for all devices and screen sizes',
        'services.webdev.feature3': 'Performance optimization and SEO best practices',
        'services.webdev.feature4': 'Scalable web applications with robust architecture',

        'services.ai.subtitle': 'Intelligent automation',
        'services.ai.detailed': 'Transform your business operations with our AI-powered solutions that automate processes and enhance decision-making.',
        'services.ai.feature1': 'Custom AI chatbots for enhanced customer service',
        'services.ai.feature2': 'Process automation using machine learning',
        'services.ai.feature3': 'AI-powered data analysis and insights',
        'services.ai.feature4': 'Integration with existing business systems',

        'services.webdev.page.title': 'Web Development',
        'services.webdev.page.description': 'Custom web solutions for modern businesses',

        'services.webdev.features.title': 'Web Solutions',
        'services.webdev.features.subtitle': 'Everything you need',
        'services.webdev.features.description': 'Comprehensive web development solutions tailored to your specific needs',
        'services.webdev.features.custom.title': 'Custom Website Development',
        'services.webdev.features.custom.description': 'Bespoke websites designed and developed to perfectly match your brand and requirements',
        'services.webdev.features.application.title': 'Web Application Development',
        'services.webdev.features.application.description': 'Robust and scalable web applications built with modern technologies',
        'services.webdev.features.ecommerce.title': 'ECommerce Development',
        'services.webdev.features.ecommerce.description': 'Powerful online stores with seamless shopping experiences',
        'services.webdev.features.cms.title': 'CMS-based Development',
        'services.webdev.features.cms.description': 'Custom content management systems for easy website maintenance',

        'services.webdev.tech.title': 'Our Tech Stack',
        'services.webdev.tech.subtitle': 'Modern technologies',
        'services.webdev.tech.description': 'We use the latest and most reliable technologies to build robust web solutions',

        'services.webdev.tech.frontend.title': 'Frontend',
        'services.webdev.tech.frontend.description': 'Crafting responsive and interactive user interfaces with React ecosystem and modern web technologies',
        // Frontend Technologies
        'services.webdev.tech.frontend.tech1': 'React.js',
        'services.webdev.tech.frontend.tech2': 'Next.js',
        'services.webdev.tech.frontend.tech3': 'Gatsby.js',
        'services.webdev.tech.frontend.tech4': 'Framer Motion',
        'services.webdev.tech.frontend.tech5': 'Tailwind CSS',
        'services.webdev.tech.frontend.tech6': 'TypeScript',
        'services.webdev.tech.frontend.tech7': 'Redux & Context API',
        'services.webdev.tech.frontend.tech8': '+ Many More',

        'services.webdev.tech.backend.title': 'Backend',
        'services.webdev.tech.backend.description': 'Building scalable server solutions with Node.js and modern headless CMS platforms',
        // Backend Technologies
        'services.webdev.tech.backend.tech1': 'Node.js & Express',
        'services.webdev.tech.backend.tech2': 'Next.js API Routes',
        'services.webdev.tech.backend.tech3': 'Strapi CMS',
        'services.webdev.tech.backend.tech4': 'Headless WordPress',
        'services.webdev.tech.backend.tech5': 'GraphQL',
        'services.webdev.tech.backend.tech6': 'REST APIs',
        'services.webdev.tech.backend.tech7': 'Serverless Functions',
        'services.webdev.tech.backend.tech8': '+ Many More',

        'services.webdev.tech.database.title': 'Database',
        'services.webdev.tech.database.description': 'Leveraging modern databases and cloud storage solutions for efficient data management',
        // Database & Storage
        'services.webdev.tech.database.tech1': 'MongoDB',
        'services.webdev.tech.database.tech2': 'Airtable',
        'services.webdev.tech.database.tech3': 'Firebase',
        'services.webdev.tech.database.tech4': 'Supabase',
        'services.webdev.tech.database.tech5': 'Redis Cache',
        'services.webdev.tech.database.tech6': 'Prisma ORM',
        'services.webdev.tech.database.tech7': 'Cloud Storage',
        'services.webdev.tech.database.tech8': '+ Many More',

        'services.webdev.tech.tools.title': 'Tools & DevOps',
        'services.webdev.tech.tools.description': 'Using industry-standard tools and platforms for seamless development and deployment',
        // Development Tools
        'services.webdev.tech.tools.tech1': 'Git & GitHub',
        'services.webdev.tech.tools.tech2': 'Vercel Deployment',
        'services.webdev.tech.tools.tech3': 'Netlify',
        'services.webdev.tech.tools.tech4': 'Docker',
        'services.webdev.tech.tools.tech5': 'CI/CD Pipelines',
        'services.webdev.tech.tools.tech6': 'Google Analytics',
        'services.webdev.tech.tools.tech7': 'Hotjar',
        'services.webdev.tech.tools.tech8': '+ Many More',

        // Add to translations.en
        'services.webdev.faq.title': 'Common Questions',
        'services.webdev.faq.subtitle': 'Have questions?',
        'services.webdev.faq.description': 'Find answers to commonly asked questions about our web development services',

        'services.webdev.faq.process.title': 'Project Process',
        'services.webdev.faq.process.q1': 'How long does a typical web project take?',
        'services.webdev.faq.process.a1': 'Our typical web development projects take 8-12 weeks from start to finish, depending on the complexity and scope. This includes planning, design, development, testing, and launch phases.',

        'services.webdev.faq.process.q2': 'What is your development process?',
        'services.webdev.faq.process.a2': 'We follow an agile development methodology with regular client check-ins. The process includes discovery, planning, design sprints, development iterations, testing, and deployment.',

        'services.webdev.faq.process.q3': 'Do you provide ongoing support?',
        'services.webdev.faq.process.a3': 'Yes, we offer various maintenance and support packages to ensure your website continues to perform optimally after launch.',

        'services.webdev.faq.technical.title': 'Technical Details',
        'services.webdev.faq.technical.q1': 'What technologies do you use?',
        'services.webdev.faq.technical.a1': 'We specialize in modern React-based development using Next.js, along with other cutting-edge technologies for optimal performance and scalability.',

        'services.webdev.faq.technical.q2': 'Is the website mobile responsive?',
        'services.webdev.faq.technical.a2': 'Yes, all our websites are fully responsive and optimized for all devices and screen sizes.',

        'services.webdev.faq.technical.q3': 'Can you work with existing systems?',
        'services.webdev.faq.technical.a3': 'Yes, we can integrate with your existing systems and APIs, ensuring seamless connectivity and data flow.',

        'services.webdev.faq.collaboration.title': 'Working Together',
        'services.webdev.faq.collaboration.q1': 'How do you handle project communication?',
        'services.webdev.faq.collaboration.a1': 'We maintain regular communication through scheduled check-ins, a project management system, and direct access to your development team.',

        'services.webdev.faq.collaboration.q2': 'What input do you need from clients?',
        'services.webdev.faq.collaboration.a2': 'We need your business requirements, brand guidelines, content, and regular feedback throughout the project to ensure we meet your goals.',

        'services.webdev.faq.collaboration.q3': 'How do you handle revisions?',
        'services.webdev.faq.collaboration.a3': 'We include revision rounds in our project timeline and work closely with you to ensure the final product meets your expectations.',

        'services.ai.page.title': 'AI Solutions',
        'services.ai.page.description': 'Intelligent automation for your business growth',

        'services.ai.features.title': 'AI Solutions',
        'services.ai.features.subtitle': 'Intelligent Automation',
        'services.ai.features.description': 'Transform your business with cutting-edge AI solutions tailored to your needs',

        'services.ai.features.chatbot.title': 'AI Chatbots',
        'services.ai.features.chatbot.description': 'Intelligent conversational agents that engage with your customers 24/7',

        'services.ai.features.agent.title': 'AI Agents',
        'services.ai.features.agent.description': 'Custom AI assistants that automate complex tasks and workflows',

        'services.ai.features.integration.title': 'AI Integration',
        'services.ai.features.integration.description': 'Seamless integration of AI capabilities into your existing systems',

        'services.ai.features.automation.title': 'Smart Automation',
        'services.ai.features.automation.description': 'Intelligent process automation powered by advanced AI algorithms',

        'services.ai.tech.title': 'Our Tech Stack',
        'services.ai.tech.subtitle': 'Cutting-edge Technologies',
        'services.ai.tech.description': 'We use the latest AI technologies and tools to deliver powerful solutions',

        // AI Development Platforms
        'services.ai.tech.platforms.title': 'AI Platforms',
        'services.ai.tech.platforms.description': 'Advanced AI development platforms and frameworks',
        'services.ai.tech.platforms.tech1': 'Voiceflow',
        'services.ai.tech.platforms.tech2': 'Fixie Agents',
        'services.ai.tech.platforms.tech3': 'ChatGPT/GPT-4',
        'services.ai.tech.platforms.tech4': 'LangChain',
        'services.ai.tech.platforms.tech5': 'Anthropic Claude',
        'services.ai.tech.platforms.more': '+ Many More',

        // Integration & Automation
        'services.ai.tech.integration.title': 'Integration Tools',
        'services.ai.tech.integration.description': 'Seamless integration and automation platforms',
        'services.ai.tech.integration.tech1': 'Make (Integromat)',
        'services.ai.tech.integration.tech2': 'Zapier',
        'services.ai.tech.integration.tech3': 'Airtable',
        'services.ai.tech.integration.tech4': 'HubSpot',
        'services.ai.tech.integration.tech5': 'n8n',
        'services.ai.tech.integration.more': '+ Many More',

        // NLP & Machine Learning
        'services.ai.tech.nlp.title': 'AI & ML',
        'services.ai.tech.nlp.description': 'Natural Language Processing and Machine Learning capabilities',
        'services.ai.tech.nlp.tech1': 'Natural Language Processing',
        'services.ai.tech.nlp.tech2': 'Machine Learning Models',
        'services.ai.tech.nlp.tech3': 'Semantic Search',
        'services.ai.tech.nlp.tech4': 'Vector Databases',
        'services.ai.tech.nlp.tech5': 'Text Analytics',
        'services.ai.tech.nlp.more': '+ Many More',

        // Infrastructure
        'services.ai.tech.infrastructure.title': 'Infrastructure',
        'services.ai.tech.infrastructure.description': 'Robust deployment and infrastructure solutions',
        'services.ai.tech.infrastructure.tech1': 'Cloud Platforms',
        'services.ai.tech.infrastructure.tech2': 'REST APIs',
        'services.ai.tech.infrastructure.tech3': 'WebSockets',
        'services.ai.tech.infrastructure.tech4': 'Docker',
        'services.ai.tech.infrastructure.tech5': 'CI/CD Pipelines',
        'services.ai.tech.infrastructure.more': '+ Many More',

        'services.ai.faq.title': 'Common Questions',
        'services.ai.faq.subtitle': 'Have questions?',
        'services.ai.faq.description': 'Find answers to commonly asked questions about our AI solutions',

        // Implementation Process
        'services.ai.faq.process.title': 'Implementation Process',
        'services.ai.faq.process.q1': 'How long does it take to implement an AI solution?',
        'services.ai.faq.process.a1': 'Implementation timelines vary based on complexity, typically ranging from 4-12 weeks. We follow an agile approach, delivering value incrementally throughout the project.',

        'services.ai.faq.process.q2': 'What is the process of developing AI solutions?',
        'services.ai.faq.process.a2': 'Our process includes initial assessment, solution design, development, testing, and deployment phases. We ensure continuous communication and feedback throughout the development cycle.',

        'services.ai.faq.process.q3': 'Do you provide training for using AI tools?',
        'services.ai.faq.process.a3': 'Yes, we provide comprehensive training and documentation for all implemented AI solutions, ensuring your team can effectively use and manage the tools.',

        // Technical Details
        'services.ai.faq.technical.title': 'Technology & Capabilities',
        'services.ai.faq.technical.q1': 'What type of AI technologies do you use?',
        'services.ai.faq.technical.a1': 'We use cutting-edge AI technologies including GPT-4, LangChain, and various specialized tools like Voiceflow and Fixie for chatbots and AI agents.',

        'services.ai.faq.technical.q2': 'Can AI integrate with our existing systems?',
        'services.ai.faq.technical.a2': 'Yes, our AI solutions are designed to integrate seamlessly with your existing systems through APIs and automation tools like Make and Zapier.',

        'services.ai.faq.technical.q3': 'How secure are your AI solutions?',
        'services.ai.faq.technical.a3': 'We implement robust security measures and follow industry best practices for data protection. All our AI solutions comply with relevant privacy regulations.',

        // Collaboration
        'services.ai.faq.collaboration.title': 'Working Together',
        'services.ai.faq.collaboration.q1': 'How do you ensure AI aligns with our business goals?',
        'services.ai.faq.collaboration.a1': 'We begin with a thorough analysis of your business objectives and design AI solutions that directly address your specific needs and goals.',

        'services.ai.faq.collaboration.q2': 'What kind of support do you provide post-implementation?',
        'services.ai.faq.collaboration.a2': 'We offer ongoing support, maintenance, and optimization services to ensure your AI solutions continue to perform optimally.',

        'services.ai.faq.collaboration.q3': 'How do you handle data privacy and security?',
        'services.ai.faq.collaboration.a3': 'We follow strict data protection protocols and comply with GDPR and other relevant privacy regulations, ensuring your data remains secure.',



        'legal.imprint.title': 'Imprint',
        'legal.imprint.description': 'Legal information about our company',

        'legal.imprint.company.title': 'Company Information',
        'legal.imprint.company.name': 'Company Name GmbH',
        'legal.imprint.company.street': 'Example Street 123',
        'legal.imprint.company.city': '80333 Munich',
        'legal.imprint.company.country': 'Germany',

        'legal.imprint.contact.title': 'Contact Information',
        'legal.imprint.contact.phone': 'Phone',
        'legal.imprint.contact.email': 'Email',
        'legal.imprint.contact.web': 'Website',

        'legal.imprint.registration.title': 'Registration Information',
        'legal.imprint.registration.court': 'Registration Court',
        'legal.imprint.registration.number': 'Registration Number',
        'legal.imprint.registration.vatid': 'VAT ID',

        'legal.imprint.responsible.title': 'Responsible for Content',
        'legal.imprint.responsible.name': 'John Doe',
        'legal.imprint.responsible.position': 'Managing Director',
        'legal.imprint.responsible.email': 'john.doe@company.de',

        'legal.imprint.disclaimer.title': 'Legal Notice',
        'legal.imprint.disclaimer.content': 'According to § 5 TMG, the content of this website has been carefully created and reviewed. However, we cannot guarantee the accuracy, completeness, and timeliness of the content provided.',

        'legal.privacy.title': 'Privacy Policy',
        'legal.privacy.description': 'Information about how we handle your data',

        'legal.privacy.general.title': 'General Information',
        'legal.privacy.general.intro': 'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal data.',
        'legal.privacy.general.controller': 'The data controller responsible for this website is Company Name GmbH, Example Street 123, 80333 Munich.',
        'legal.privacy.general.dpo': 'Our Data Protection Officer can be reached at: privacy@company.de',

        'legal.privacy.collection.title': 'Data Collection & Processing',
        'legal.privacy.collection.purpose': 'We collect and process your personal data only for specific purposes and with a legal basis under GDPR.',
        'legal.privacy.collection.types.title': 'Types of Data We Collect',
        'legal.privacy.collection.types.personal': 'Personal data (name, email, phone number) when you contact us or use our services',
        'legal.privacy.collection.types.usage': 'Usage data (pages visited, time spent) to improve our services',
        'legal.privacy.collection.types.technical': 'Technical data (IP address, browser type) necessary for website operation',

        'legal.privacy.cookies.title': 'Cookies & Tracking',
        'legal.privacy.cookies.description': 'We use cookies and similar technologies to improve your experience on our website.',
        'legal.privacy.cookies.types.title': 'Types of Cookies We Use',
        'legal.privacy.cookies.types.essential': 'Essential cookies: Required for basic website functionality',
        'legal.privacy.cookies.types.analytics': 'Analytics cookies: Help us understand how visitors use our website',
        'legal.privacy.cookies.types.marketing': 'Marketing cookies: Used to deliver relevant advertisements (only with your consent)',

        'legal.privacy.thirdparty.title': 'Third-party Services',
        'legal.privacy.thirdparty.description': 'We use selected third-party services to enhance our website functionality.',
        'legal.privacy.thirdparty.services.analytics': 'Google Analytics: We use Google Analytics to analyze website traffic',
        'legal.privacy.thirdparty.services.social': 'Social Media: Integration of social media features',
        'legal.privacy.thirdparty.services.payment': 'Payment Processing: Secure payment processing through certified providers',

        'legal.privacy.rights.title': 'Your Rights Under GDPR',
        'legal.privacy.rights.intro': 'Under GDPR, you have several rights regarding your personal data:',
        'legal.privacy.rights.access': 'Right to access your personal data',
        'legal.privacy.rights.rectification': 'Right to correct inaccurate personal data',
        'legal.privacy.rights.erasure': 'Right to erasure ("right to be forgotten")',
        'legal.privacy.rights.restriction': 'Right to restrict processing',
        'legal.privacy.rights.portability': 'Right to data portability',
        'legal.privacy.rights.object': 'Right to object to processing',

        'legal.privacy.security.title': 'Data Security',
        'legal.privacy.security.measures': 'We implement appropriate technical and organizational measures to ensure data security.',
        'legal.privacy.security.encryption': 'All data is transmitted using secure SSL encryption.',
        'legal.privacy.security.staff': 'Our staff is trained in data protection and bound by confidentiality agreements.',

        'legal.terms.title': 'Terms of Service',
        'legal.terms.description': 'General terms and conditions for our services',

        'legal.terms.general.title': 'General Provisions',
        'legal.terms.general.scope': 'These terms and conditions govern all business relationships between us and our clients.',
        'legal.terms.general.validity': 'Any deviating terms and conditions of the client shall not apply unless explicitly agreed upon in writing.',

        'legal.terms.services.title': 'Services',
        'legal.terms.services.description': 'We offer the following services in the field of web development and AI solutions:',
        'legal.terms.services.webdev': 'Development of websites, web applications, and custom software solutions',
        'legal.terms.services.ai': 'AI integration, chatbot development, and automation solutions',
        'legal.terms.services.consulting': 'Technical consulting and project management',

        'legal.terms.contract.title': 'Contract Terms',
        'legal.terms.contract.conclusion.title': 'Contract Conclusion',
        'legal.terms.contract.conclusion.content': 'The contract is concluded upon our written confirmation of the order or upon commencement of service provision.',
        'legal.terms.contract.duration.title': 'Contract Duration',
        'legal.terms.contract.duration.content': 'The contract duration is determined by the individual project scope or service agreement.',

        'legal.terms.payment.title': 'Pricing and Payment',
        'legal.terms.payment.prices': 'All prices are in Euro and do not include applicable VAT.',
        'legal.terms.payment.terms': 'Payments are due within 14 days of invoice date without deduction.',
        'legal.terms.payment.methods': 'We accept bank transfers and other specified payment methods.',

        'legal.terms.obligations.title': 'Rights and Obligations',
        'legal.terms.obligations.provider.title': 'Our Obligations',
        'legal.terms.obligations.provider.content': 'We commit to providing our services professionally and according to current technical standards.',
        'legal.terms.obligations.client.title': 'Client Obligations',
        'legal.terms.obligations.client.content': 'The client shall provide all necessary information and materials in a timely manner.',

        'legal.terms.liability.title': 'Liability',
        'legal.terms.liability.limitation': 'Our liability is limited to cases of intent and gross negligence.',
        'legal.terms.liability.exclusions': 'Liability for slight negligence is excluded unless it concerns essential contractual obligations.',

        'legal.terms.final.title': 'Final Provisions',
        'legal.terms.final.jurisdiction': 'Place of jurisdiction is Munich, Germany.',
        'legal.terms.final.severability': 'Should individual provisions be invalid, the remaining provisions shall remain unaffected.',

        'contact.page.title': 'Contact Us',
        'contact.page.description': 'Get in touch with our team',

        'contact.form.title': 'Get In Touch',
        'contact.form.subtitle': 'How can we help?',
        'contact.form.description': 'Fill out the form below and we\'ll get back to you as soon as possible.',

        'contact.form.name': 'Full Name',
        'contact.form.namePlaceholder': 'Enter your full name',

        'contact.form.email': 'Email Address',
        'contact.form.emailPlaceholder': 'Enter your email address',

        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'What is this about?',

        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Write your message here...',

        'contact.form.submit': 'Send Message',
        'contact.form.phonePlaceholder': 'Enter your phone number',
        'contact.form.inquiryType': 'Type of Inquiry',
        'contact.form.services.web-development': 'Web Development',
        'contact.form.services.ai-solutions': 'AI Solutions',
        'contact.form.sending': 'Sending...',
        'contact.form.services.webdev': 'Web Development',
        'contact.form.services.ai': 'AI Solutions',
        'contact.form.nameRequired': 'Please enter your name',
        'contact.form.emailRequired': 'Please enter your email',
        'contact.form.phoneRequired': 'Please enter your phone number',
        'contact.form.inquiryRequired': 'Please select an inquiry type',
        'contact.form.messageRequired': 'Please enter your message',
        'contact.form.error': 'An error occurred. Please try again.',
        'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',


        'contact.form.rateLimit': 'Too many submissions. Please try again later.',
        'contact.form.networkError': 'Network error. Please check your connection.',
        'contact.form.invalidSubmission': 'Invalid submission. Please check your inputs.',
        'contact.form.emailInvalid': 'Please enter a valid email address',


    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Leistungen',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
        'nav.getStarted': 'Loslegen',
        'nav.webDev': 'Webentwicklung',
        'nav.ai': 'KI-Lösungen',

        'hero.title.start': 'Ideen in ',
        'hero.title.highlight1': 'Digitale',
        'hero.title.middle': ' Exzellenz ',
        'hero.title.highlight2': 'Verwandeln',
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

        'footer.description': 'Innovative Webentwicklung und KI-Lösungen für moderne Unternehmen.',
        'footer.quickLinks': 'Schnellzugriff',
        'footer.about': 'Über Uns',
        'footer.services': 'Leistungen',
        'footer.contact': 'Kontakt',
        'footer.webDev': 'Webentwicklung',
        'footer.ai': 'KI-Lösungen',
        'footer.address': '123 Innovationsstraße, Tech Stadt, 12345 Deutschland',
        'footer.copyright': 'Alle Rechte vorbehalten.',
        'footer.privacy': 'Datenschutz',
        'footer.terms': 'AGB',

        'about.story.title': 'Unsere Geschichte',
        'about.story.subtitle': 'Digitale Exzellenz aufbauen',
        'about.story.description': 'Eine Reise der Innovation und des Engagements zur Schaffung wirkungsvoller digitaler Lösungen, die Unternehmen transformieren und Erfolg fördern.',
        'about.story.content1': 'Gegründet mit der Vision, die Lücke zwischen Technologie und Geschäftserfolg zu schließen, hat sich Go To Market zu einem führenden Anbieter digitaler Lösungen entwickelt. Wir kombinieren Expertise in Webentwicklung, Marketing und KI, um relevante Ergebnisse zu liefern.',
        'about.story.content2': 'Unser Expertenteam vereint jahrelange Erfahrung aus verschiedenen Bereichen und arbeitet gemeinsam daran, komplexe Herausforderungen zu lösen und innovative Lösungen zu schaffen, die Unternehmen im digitalen Zeitalter erfolgreich machen.',


        'about.vision.title': 'Unsere Vision',
        'about.vision.subtitle': 'Blick in die Zukunft',
        'about.vision.statement': 'Die digitale Transformation zu revolutionieren, indem wir KI- und Weblösungen für Unternehmen aller Größen zugänglich und wirkungsvoll machen.',
        'about.mission.title': 'Unsere Mission',
        'about.mission.statement': 'Innovative, skalierbare und intelligente digitale Lösungen zu liefern, die echtes Geschäftswachstum vorantreiben und nachhaltigen Wert für unsere Kunden schaffen.',

        'about.team.title': 'Unser Team',
        'about.team.subtitle': 'Lernen Sie die Experten kennen',
        'about.team.description': 'Eine Gruppe leidenschaftlicher Innovatoren, die sich der Transformation von Unternehmen durch Technologie verschrieben haben.',
        'about.team.member1.name': 'Michael Weber',
        'about.team.member1.role': 'CEO & Gründer',
        'about.team.member2.name': 'Sarah Schmidt',
        'about.team.member2.role': 'Entwicklungsleiterin',
        'about.team.member3.name': 'Thomas Mueller',
        'about.team.member3.role': 'KI-Lösungsleiter',

        'services.page.title': 'Leistungen',
        'services.page.description': 'Maßgeschneiderte Lösungen für Ihre Geschäftsanforderungen',

        'services.webdev.subtitle': 'Moderne Weblösungen',
        'services.webdev.detailed': 'Wir erstellen modernste Websites und Webanwendungen, die außergewöhnliche Benutzererlebnisse bieten und das Geschäftswachstum fördern.',
        'services.webdev.feature1': 'Individuelle Website-Entwicklung mit modernen Technologien',
        'services.webdev.feature2': 'Responsives Design für alle Geräte und Bildschirmgrößen',
        'services.webdev.feature3': 'Leistungsoptimierung und SEO-Best-Practices',
        'services.webdev.feature4': 'Skalierbare Webanwendungen mit robuster Architektur',

        'services.ai.subtitle': 'Intelligente Automatisierung',
        'services.ai.detailed': 'Transformieren Sie Ihre Geschäftsprozesse mit unseren KI-gestützten Lösungen, die Prozesse automatisieren und die Entscheidungsfindung verbessern.',
        'services.ai.feature1': 'Maßgeschneiderte KI-Chatbots für verbesserten Kundenservice',
        'services.ai.feature2': 'Prozessautomatisierung mit maschinellem Lernen',
        'services.ai.feature3': 'KI-gestützte Datenanalyse und Erkenntnisse',
        'services.ai.feature4': 'Integration in bestehende Geschäftssysteme',

        'services.webdev.page.title': 'Webentwicklung',
        'services.webdev.page.description': 'Maßgeschneiderte Weblösungen für moderne Unternehmen',

        'services.webdev.features.title': 'Weblösungen',
        'services.webdev.features.subtitle': 'Alles, was Sie brauchen',
        'services.webdev.features.description': 'Umfassende Webentwicklungslösungen, maßgeschneidert für Ihre spezifischen Anforderungen',
        'services.webdev.features.custom.title': 'Website-Entwicklung',
        'services.webdev.features.custom.description': 'Maßgeschneiderte Websites, die perfekt zu Ihrer Marke und Ihren Anforderungen passen',
        'services.webdev.features.application.title': 'Web-App-Entwicklung',
        'services.webdev.features.application.description': 'Robuste und skalierbare Webanwendungen mit modernen Technologien',
        'services.webdev.features.ecommerce.title': 'E-Commerce-Entwicklung',
        'services.webdev.features.ecommerce.description': 'Leistungsstarke Online-Shops mit nahtlosem Einkaufserlebnis',
        'services.webdev.features.cms.title': 'CMS-basierte Entwicklung',
        'services.webdev.features.cms.description': 'Maßgeschneiderte Content-Management-Systeme für einfache Website-Wartung',

        'services.webdev.tech.title': 'Unsere Technologien',
        'services.webdev.tech.subtitle': 'Moderne Technologien',
        'services.webdev.tech.description': 'Wir verwenden die neuesten und zuverlässigsten Technologien, um robuste Weblösungen zu entwickeln',

        // Frontend descriptions
        'services.webdev.tech.frontend.title': 'Frontend',
        'services.webdev.tech.frontend.description': 'Entwicklung responsiver und interaktiver Benutzeroberflächen mit dem React-Ökosystem und modernen Webtechnologien',
        // Frontend Technologies
        'services.webdev.tech.frontend.tech1': 'React.js',
        'services.webdev.tech.frontend.tech2': 'Next.js',
        'services.webdev.tech.frontend.tech3': 'Gatsby.js',
        'services.webdev.tech.frontend.tech4': 'Framer Motion',
        'services.webdev.tech.frontend.tech5': 'Tailwind CSS',
        'services.webdev.tech.frontend.tech6': 'TypeScript',
        'services.webdev.tech.frontend.tech7': 'Redux & Context API',
        'services.webdev.tech.frontend.tech8': '+ Many More',

        // Backend descriptions
        'services.webdev.tech.backend.title': 'Backend',
        'services.webdev.tech.backend.description': 'Entwicklung skalierbarer Server-Lösungen mit Node.js und modernen Headless-CMS-Plattformen',
        // Backend Technologies
        'services.webdev.tech.backend.tech1': 'Node.js & Express',
        'services.webdev.tech.backend.tech2': 'Next.js API-Routen',
        'services.webdev.tech.backend.tech3': 'Strapi CMS',
        'services.webdev.tech.backend.tech4': 'Headless WordPress',
        'services.webdev.tech.backend.tech5': 'GraphQL',
        'services.webdev.tech.backend.tech6': 'REST APIs',
        'services.webdev.tech.backend.tech7': 'Serverless Functions',
        'services.webdev.tech.backend.tech8': '+ Viele Weitere',

        // Database descriptions
        'services.webdev.tech.database.title': 'Database',
        'services.webdev.tech.database.description': 'Nutzung moderner Datenbanken und Cloud-Speicherlösungen für effizientes Datenmanagement',
        // Database & Storage
        'services.webdev.tech.database.tech1': 'MongoDB',
        'services.webdev.tech.database.tech2': 'Airtable',
        'services.webdev.tech.database.tech3': 'Firebase',
        'services.webdev.tech.database.tech4': 'Supabase',
        'services.webdev.tech.database.tech5': 'Redis Cache',
        'services.webdev.tech.database.tech6': 'Prisma ORM',
        'services.webdev.tech.database.tech7': 'Cloud Speicher',
        'services.webdev.tech.database.tech8': '+ Viele Weitere',

        // Tools descriptions
        'services.webdev.tech.tools.title': 'Tools & DevOps',
        'services.webdev.tech.tools.description': 'Einsatz von Industriestandard-Tools und Plattformen für nahtlose Entwicklung und Bereitstellung',
        // Development Tools
        'services.webdev.tech.tools.tech1': 'Git & GitHub',
        'services.webdev.tech.tools.tech2': 'Vercel Deployment',
        'services.webdev.tech.tools.tech3': 'Netlify',
        'services.webdev.tech.tools.tech4': 'Docker',
        'services.webdev.tech.tools.tech5': 'CI/CD Pipelines',
        'services.webdev.tech.tools.tech6': 'Google Analytics',
        'services.webdev.tech.tools.tech7': 'Hotjar',
        'services.webdev.tech.tools.tech8': '+ Viele Weitere',

        // Add to translations.de
        'services.webdev.faq.title': 'Häufige Fragen',
        'services.webdev.faq.subtitle': 'Haben Sie Fragen?',
        'services.webdev.faq.description': 'Finden Sie Antworten auf häufig gestellte Fragen zu unseren Webentwicklungsdiensten',

        'services.webdev.faq.process.title': 'Projektablauf',
        'services.webdev.faq.process.q1': 'Wie lange dauert ein typisches Webprojekt?',
        'services.webdev.faq.process.a1': 'Unsere typischen Webentwicklungsprojekte dauern je nach Komplexität und Umfang 8-12 Wochen von Anfang bis Ende. Dies umfasst die Planungs-, Design-, Entwicklungs-, Test- und Launch-Phasen.',

        'services.webdev.faq.process.q2': 'Wie sieht Ihr Entwicklungsprozess aus?',
        'services.webdev.faq.process.a2': 'Wir folgen einer agilen Entwicklungsmethodik mit regelmäßigen Kundenabstimmungen. Der Prozess umfasst Discovery, Planung, Design-Sprints, Entwicklungsiterationen, Tests und Deployment.',

        'services.webdev.faq.process.q3': 'Bieten Sie fortlaufende Unterstützung?',
        'services.webdev.faq.process.a3': 'Ja, wir bieten verschiedene Wartungs- und Support-Pakete an, um sicherzustellen, dass Ihre Website auch nach dem Launch optimal funktioniert.',

        'services.webdev.faq.technical.title': 'Technische Details',
        'services.webdev.faq.technical.q1': 'Welche Technologien verwenden Sie?',
        'services.webdev.faq.technical.a1': 'Wir sind spezialisiert auf moderne React-basierte Entwicklung mit Next.js und anderen fortschrittlichen Technologien für optimale Leistung und Skalierbarkeit.',

        'services.webdev.faq.technical.q2': 'Ist die Website mobiloptimiert?',
        'services.webdev.faq.technical.a2': 'Ja, alle unsere Websites sind vollständig responsiv und für alle Geräte und Bildschirmgrößen optimiert.',

        'services.webdev.faq.technical.q3': 'Können Sie mit bestehenden Systemen arbeiten?',
        'services.webdev.faq.technical.a3': 'Ja, wir können uns in Ihre bestehenden Systeme und APIs integrieren und gewährleisten eine nahtlose Konnektivität und einen reibungslosen Datenfluss.',

        'services.webdev.faq.collaboration.title': 'Zusammenarbeit',
        'services.webdev.faq.collaboration.q1': 'Wie handhaben Sie die Projektkommunikation?',
        'services.webdev.faq.collaboration.a1': 'Wir pflegen regelmäßige Kommunikation durch geplante Check-ins, ein Projektmanagementsystem und direkten Zugang zu Ihrem Entwicklungsteam.',

        'services.webdev.faq.collaboration.q2': 'Welche Informationen benötigen Sie von Kunden?',
        'services.webdev.faq.collaboration.a2': 'Wir benötigen Ihre geschäftlichen Anforderungen, Markenrichtlinien, Inhalte und regelmäßiges Feedback während des gesamten Projekts, um sicherzustellen, dass wir Ihre Ziele erreichen.',

        'services.webdev.faq.collaboration.q3': 'Wie gehen Sie mit Revisionen um?',
        'services.webdev.faq.collaboration.a3': 'Wir berücksichtigen Revisionsphasen in unserem Projektzeitplan und arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Endprodukt Ihren Erwartungen entspricht.',

        'services.ai.page.title': 'KI-Lösungen',
        'services.ai.page.description': 'Intelligente Automatisierung für Ihr Geschäftswachstum',

        'services.ai.features.title': 'KI-Lösungen',
        'services.ai.features.subtitle': 'Intelligente Automatisierung',
        'services.ai.features.description': 'Transformieren Sie Ihr Unternehmen mit modernsten KI-Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind',

        'services.ai.features.chatbot.title': 'KI-Chatbots',
        'services.ai.features.chatbot.description': 'Intelligente Konversationsagenten, die rund um die Uhr mit Ihren Kunden kommunizieren',

        'services.ai.features.agent.title': 'KI-Agenten',
        'services.ai.features.agent.description': 'Maßgeschneiderte KI-Assistenten, die komplexe Aufgaben und Workflows automatisieren',

        'services.ai.features.integration.title': 'KI-Integration',
        'services.ai.features.integration.description': 'Nahtlose Integration von KI-Funktionen in Ihre bestehenden Systeme',

        'services.ai.features.automation.title': 'Intelligente Automatisierung',
        'services.ai.features.automation.description': 'Intelligente Prozessautomatisierung, unterstützt durch fortschrittliche KI-Algorithmen',

        'services.ai.tech.title': 'Unsere Technologien',
        'services.ai.tech.subtitle': 'Modernste Technologien',
        'services.ai.tech.description': 'Wir nutzen die neuesten KI-Technologien und Tools für leistungsstarke Lösungen',

        // AI Development Platforms
        'services.ai.tech.platforms.title': 'AI Platforms',
        'services.ai.tech.platforms.description': 'Fortschrittliche KI-Entwicklungsplattformen und Frameworks',
        'services.ai.tech.platforms.tech1': 'Voiceflow',
        'services.ai.tech.platforms.tech2': 'Fixie Agents',
        'services.ai.tech.platforms.tech3': 'ChatGPT/GPT-4',
        'services.ai.tech.platforms.tech4': 'LangChain',
        'services.ai.tech.platforms.tech5': 'Anthropic Claude',
        'services.ai.tech.platforms.more': '+ Viele Mehr',

        // Integration & Automation
        'services.ai.tech.integration.title': 'Integration Tools',
        'services.ai.tech.integration.description': 'Nahtlose Integrations- und Automatisierungsplattformen',
        'services.ai.tech.integration.tech1': 'Make (Integromat)',
        'services.ai.tech.integration.tech2': 'Zapier',
        'services.ai.tech.integration.tech3': 'Airtable',
        'services.ai.tech.integration.tech4': 'HubSpot',
        'services.ai.tech.integration.tech5': 'n8n',
        'services.ai.tech.integration.more': '+ Viele Mehr',

        // NLP & Machine Learning
        'services.ai.tech.nlp.title': 'AI & ML',
        'services.ai.tech.nlp.description': 'Verarbeitung natürlicher Sprache und maschinelles Lernen',
        'services.ai.tech.nlp.tech1': 'Verarbeitung natürlicher Sprache',
        'services.ai.tech.nlp.tech2': 'Machine Learning Modelle',
        'services.ai.tech.nlp.tech3': 'Semantische Suche',
        'services.ai.tech.nlp.tech4': 'Vektor-Datenbanken',
        'services.ai.tech.nlp.tech5': 'Textanalyse',
        'services.ai.tech.nlp.more': '+ Viele Mehr',

        // Infrastructure
        'services.ai.tech.infrastructure.title': 'Infrastructure',
        'services.ai.tech.infrastructure.description': 'Robuste Bereitstellungs- und Infrastrukturlösungen',
        'services.ai.tech.infrastructure.tech1': 'Cloud-Plattformen',
        'services.ai.tech.infrastructure.tech2': 'REST APIs',
        'services.ai.tech.infrastructure.tech3': 'WebSockets',
        'services.ai.tech.infrastructure.tech4': 'Docker',
        'services.ai.tech.infrastructure.tech5': 'CI/CD Pipelines',
        'services.ai.tech.infrastructure.more': '+ Viele Mehr',


        'services.ai.faq.title': 'Häufige Fragen',
        'services.ai.faq.subtitle': 'Haben Sie Fragen?',
        'services.ai.faq.description': 'Finden Sie Antworten auf häufig gestellte Fragen zu unseren KI-Lösungen',

        // Implementation Process
        'services.ai.faq.process.title': 'Implementierungsprozess',
        'services.ai.faq.process.q1': 'Wie lange dauert die Implementierung einer KI-Lösung?',
        'services.ai.faq.process.a1': 'Die Implementierungszeit variiert je nach Komplexität, typischerweise zwischen 4-12 Wochen. Wir folgen einem agilen Ansatz mit kontinuierlicher Wertschöpfung.',

        'services.ai.faq.process.q2': 'Wie läuft der Entwicklungsprozess von KI-Lösungen ab?',
        'services.ai.faq.process.a2': 'Unser Prozess umfasst Erstanalyse, Lösungsdesign, Entwicklung, Tests und Bereitstellung. Wir gewährleisten kontinuierliche Kommunikation während des gesamten Entwicklungszyklus.',

        'services.ai.faq.process.q3': 'Bieten Sie Schulungen für KI-Tools an?',
        'services.ai.faq.process.a3': 'Ja, wir bieten umfassende Schulungen und Dokumentation für alle implementierten KI-Lösungen, damit Ihr Team die Tools effektiv nutzen kann.',

        // Technical Details
        'services.ai.faq.technical.title': 'Technologie & Funktionen',
        'services.ai.faq.technical.q1': 'Welche KI-Technologien verwenden Sie?',
        'services.ai.faq.technical.a1': 'Wir nutzen modernste KI-Technologien wie GPT-4, LangChain und spezialisierte Tools wie Voiceflow und Fixie für Chatbots und KI-Agenten.',

        'services.ai.faq.technical.q2': 'Kann KI in unsere bestehenden Systeme integriert werden?',
        'services.ai.faq.technical.a2': 'Ja, unsere KI-Lösungen sind darauf ausgelegt, sich nahtlos über APIs und Automatisierungstools wie Make und Zapier in Ihre bestehenden Systeme zu integrieren.',

        'services.ai.faq.technical.q3': 'Wie sicher sind Ihre KI-Lösungen?',
        'services.ai.faq.technical.a3': 'Wir implementieren robuste Sicherheitsmaßnahmen und folgen den Branchenstandards für Datenschutz. Alle unsere KI-Lösungen entsprechen den relevanten Datenschutzbestimmungen.',

        // Collaboration
        'services.ai.faq.collaboration.title': 'Zusammenarbeit',
        'services.ai.faq.collaboration.q1': 'Wie stellen Sie sicher, dass KI unsere Geschäftsziele unterstützt?',
        'services.ai.faq.collaboration.a1': 'Wir beginnen mit einer gründlichen Analyse Ihrer Geschäftsziele und entwickeln KI-Lösungen, die direkt auf Ihre spezifischen Anforderungen ausgerichtet sind.',

        'services.ai.faq.collaboration.q2': 'Welche Unterstützung bieten Sie nach der Implementierung?',
        'services.ai.faq.collaboration.a2': 'Wir bieten fortlaufende Unterstützung, Wartung und Optimierung, um die optimale Leistung Ihrer KI-Lösungen sicherzustellen.',

        'services.ai.faq.collaboration.q3': 'Wie gehen Sie mit Datenschutz und Sicherheit um?',
        'services.ai.faq.collaboration.a3': 'Wir folgen strengen Datenschutzprotokollen und erfüllen die DSGVO sowie andere relevante Datenschutzbestimmungen, um die Sicherheit Ihrer Daten zu gewährleisten.',


        'legal.imprint.title': 'Impressum',
        'legal.imprint.description': 'Rechtliche Informationen über unser Unternehmen',

        'legal.imprint.company.title': 'Angaben gemäß § 5 TMG',
        'legal.imprint.company.name': 'Firmenname GmbH',
        'legal.imprint.company.street': 'Beispielstraße 123',
        'legal.imprint.company.city': '80333 München',
        'legal.imprint.company.country': 'Deutschland',

        'legal.imprint.contact.title': 'Kontakt',
        'legal.imprint.contact.phone': 'Telefon',
        'legal.imprint.contact.email': 'E-Mail',
        'legal.imprint.contact.web': 'Website',

        'legal.imprint.registration.title': 'Registereintrag',
        'legal.imprint.registration.court': 'Registergericht',
        'legal.imprint.registration.number': 'Handelsregisternummer',
        'legal.imprint.registration.vatid': 'Umsatzsteuer-ID',

        'legal.imprint.responsible.title': 'Inhaltlich verantwortlich',
        'legal.imprint.responsible.name': 'John Doe',
        'legal.imprint.responsible.position': 'Geschäftsführer',
        'legal.imprint.responsible.email': 'john.doe@company.de',

        'legal.imprint.disclaimer.title': 'Rechtlicher Hinweis',
        'legal.imprint.disclaimer.content': 'Gemäß § 5 TMG wurden die Inhalte dieser Website sorgfältig erstellt und geprüft. Wir können jedoch keine Garantie für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte übernehmen.',

        'legal.privacy.title': 'Datenschutzerklärung',
        'legal.privacy.description': 'Informationen über den Umgang mit Ihren Daten',

        'legal.privacy.general.title': 'Allgemeine Informationen',
        'legal.privacy.general.intro': 'Der Schutz Ihrer Privatsphäre ist uns wichtig. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen.',
        'legal.privacy.general.controller': 'Verantwortlicher für diese Website ist die Firmenname GmbH, Beispielstraße 123, 80333 München.',
        'legal.privacy.general.dpo': 'Unser Datenschutzbeauftragter ist erreichbar unter: datenschutz@firma.de',

        'legal.privacy.collection.title': 'Datenerhebung & -verarbeitung',
        'legal.privacy.collection.purpose': 'Wir erheben und verarbeiten Ihre personenbezogenen Daten nur für bestimmte Zwecke und mit einer Rechtsgrundlage gemäß DSGVO.',
        'legal.privacy.collection.types.title': 'Arten der erhobenen Daten',
        'legal.privacy.collection.types.personal': 'Personenbezogene Daten (Name, E-Mail, Telefonnummer) bei Kontaktaufnahme oder Nutzung unserer Dienste',
        'legal.privacy.collection.types.usage': 'Nutzungsdaten (besuchte Seiten, Verweildauer) zur Verbesserung unserer Dienste',
        'legal.privacy.collection.types.technical': 'Technische Daten (IP-Adresse, Browser-Typ) für den Betrieb der Website',

        'legal.privacy.cookies.title': 'Cookies & Tracking',
        'legal.privacy.cookies.description': 'Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung auf unserer Website zu verbessern.',
        'legal.privacy.cookies.types.title': 'Arten von Cookies',
        'legal.privacy.cookies.types.essential': 'Notwendige Cookies: Erforderlich für die grundlegende Funktionalität der Website',
        'legal.privacy.cookies.types.analytics': 'Analyse-Cookies: Helfen uns zu verstehen, wie Besucher unsere Website nutzen',
        'legal.privacy.cookies.types.marketing': 'Marketing-Cookies: Für relevante Werbung (nur mit Ihrer Einwilligung)',

        'legal.privacy.thirdparty.title': 'Dienste Dritter',
        'legal.privacy.thirdparty.description': 'Wir nutzen ausgewählte Dienste Dritter zur Erweiterung unserer Website-Funktionalität.',
        'legal.privacy.thirdparty.services.analytics': 'Google Analytics: Zur Analyse des Website-Verkehrs',
        'legal.privacy.thirdparty.services.social': 'Social Media: Integration von Social-Media-Funktionen',
        'legal.privacy.thirdparty.services.payment': 'Zahlungsabwicklung: Sichere Zahlungsabwicklung durch zertifizierte Anbieter',

        'legal.privacy.rights.title': 'Ihre Rechte nach DSGVO',
        'legal.privacy.rights.intro': 'Nach der DSGVO haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:',
        'legal.privacy.rights.access': 'Recht auf Auskunft',
        'legal.privacy.rights.rectification': 'Recht auf Berichtigung',
        'legal.privacy.rights.erasure': 'Recht auf Löschung ("Recht auf Vergessenwerden")',
        'legal.privacy.rights.restriction': 'Recht auf Einschränkung der Verarbeitung',
        'legal.privacy.rights.portability': 'Recht auf Datenübertragbarkeit',
        'legal.privacy.rights.object': 'Recht auf Widerspruch gegen die Verarbeitung',

        'legal.privacy.security.title': 'Datensicherheit',
        'legal.privacy.security.measures': 'Wir setzen angemessene technische und organisatorische Maßnahmen zur Gewährleistung der Datensicherheit ein.',
        'legal.privacy.security.encryption': 'Alle Daten werden über eine sichere SSL-Verschlüsselung übertragen.',
        'legal.privacy.security.staff': 'Unsere Mitarbeiter sind im Datenschutz geschult und zur Vertraulichkeit verpflichtet.',

        'legal.terms.title': 'Allgemeine Geschäftsbedingungen',
        'legal.terms.description': 'Allgemeine Geschäftsbedingungen für unsere Dienstleistungen',

        'legal.terms.general.title': 'Allgemeine Bestimmungen',
        'legal.terms.general.scope': 'Diese AGB regeln alle Geschäftsbeziehungen zwischen uns und unseren Kunden.',
        'legal.terms.general.validity': 'Abweichende Bedingungen des Kunden finden keine Anwendung, sofern nicht ausdrücklich schriftlich zugestimmt wurde.',

        'legal.terms.services.title': 'Leistungen',
        'legal.terms.services.description': 'Wir bieten folgende Dienstleistungen im Bereich Webentwicklung und KI-Lösungen an:',
        'legal.terms.services.webdev': 'Entwicklung von Websites, Webanwendungen und individuellen Softwarelösungen',
        'legal.terms.services.ai': 'KI-Integration, Chatbot-Entwicklung und Automatisierungslösungen',
        'legal.terms.services.consulting': 'Technische Beratung und Projektmanagement',

        'legal.terms.contract.title': 'Vertragsbedingungen',
        'legal.terms.contract.conclusion.title': 'Vertragsschluss',
        'legal.terms.contract.conclusion.content': 'Der Vertrag kommt durch unsere schriftliche Auftragsbestätigung oder mit Beginn der Leistungserbringung zustande.',
        'legal.terms.contract.duration.title': 'Vertragsdauer',
        'legal.terms.contract.duration.content': 'Die Vertragsdauer richtet sich nach dem individuellen Projektumfang oder der Servicevereinbarung.',

        'legal.terms.payment.title': 'Preise und Zahlung',
        'legal.terms.payment.prices': 'Alle Preise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer.',
        'legal.terms.payment.terms': 'Zahlungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug fällig.',
        'legal.terms.payment.methods': 'Wir akzeptieren Überweisungen und andere angegebene Zahlungsmethoden.',

        'legal.terms.obligations.title': 'Rechte und Pflichten',
        'legal.terms.obligations.provider.title': 'Unsere Pflichten',
        'legal.terms.obligations.provider.content': 'Wir verpflichten uns, unsere Leistungen fachgerecht und nach aktuellem technischen Standard zu erbringen.',
        'legal.terms.obligations.client.title': 'Pflichten des Kunden',
        'legal.terms.obligations.client.content': 'Der Kunde stellt alle erforderlichen Informationen und Materialien rechtzeitig zur Verfügung.',

        'legal.terms.liability.title': 'Haftung',
        'legal.terms.liability.limitation': 'Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.',
        'legal.terms.liability.exclusions': 'Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten betroffen sind.',

        'legal.terms.final.title': 'Schlussbestimmungen',
        'legal.terms.final.jurisdiction': 'Gerichtsstand ist München, Deutschland.',
        'legal.terms.final.severability': 'Sollten einzelne Bestimmungen unwirksam sein, bleiben die übrigen Bestimmungen davon unberührt.',

        'contact.page.title': 'Kontakt',
        'contact.page.description': 'Nehmen Sie Kontakt mit unserem Team auf',

        'contact.form.title': 'Kontaktieren Sie Uns',
        'contact.form.subtitle': 'Wie können wir helfen?',
        'contact.form.description': 'Füllen Sie das untenstehende Formular aus und wir melden uns schnellstmöglich bei Ihnen.',

        'contact.form.name': 'Vollständiger Name',
        'contact.form.namePlaceholder': 'Geben Sie Ihren vollständigen Namen ein',

        'contact.form.email': 'E-Mail-Adresse',
        'contact.form.emailPlaceholder': 'Geben Sie Ihre E-Mail-Adresse ein',

        'contact.form.subject': 'Betreff',
        'contact.form.subjectPlaceholder': 'Worum geht es?',

        'contact.form.message': 'Nachricht',
        'contact.form.messagePlaceholder': 'Schreiben Sie Ihre Nachricht hier...',

        'contact.form.submit': 'Nachricht Senden',
        'contact.form.phonePlaceholder': 'Geben Sie Ihre Telefonnummer ein',
        'contact.form.inquiryType': 'Art der Anfrage',
        'contact.form.services.webdev': 'Webentwicklung',
        'contact.form.services.ai': 'KI-Lösungen',
        'contact.form.sending': 'Wird gesendet...',
        'contact.form.nameRequired': 'Bitte geben Sie Ihren Namen ein',
        'contact.form.emailRequired': 'Bitte geben Sie Ihre E-Mail-Adresse ein',
        'contact.form.phoneRequired': 'Bitte geben Sie Ihre Telefonnummer ein',
        'contact.form.inquiryRequired': 'Bitte wählen Sie eine Anfrageart aus',
        'contact.form.messageRequired': 'Bitte geben Sie Ihre Nachricht ein',
        'contact.form.error': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        'contact.form.success': 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',


        'contact.form.rateLimit': 'Zu viele Einreichungen. Bitte versuchen Sie es später erneut.',
        'contact.form.networkError': 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.',
        'contact.form.invalidSubmission': 'Ungültige Eingabe. Bitte überprüfen Sie Ihre Angaben.',
        'contact.form.emailInvalid': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',

    }
} as const;

export type Language = keyof typeof translations;