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
        'hero.title.highlight1': 'Money',
        'hero.title.middle': '  ',
        'hero.title.highlight2': 'Boost Business',
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


    }
} as const;

export type Language = keyof typeof translations;