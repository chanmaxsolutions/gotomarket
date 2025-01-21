// src/components/common/header/index.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

// Type definitions
interface NavigationItem {
    key: TranslationKey;
    href: string;
    submenu?: Array<{
        key: TranslationKey;
        href: string;
    }>;
}

interface MotionDivProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

// Typed motion components
const MotionDiv = motion.div as React.FC<MotionDivProps>;
const MotionSpan = motion.span as React.FC<HTMLMotionProps<"span">>;

// Navigation configuration
const navigation: NavigationItem[] = [
    { key: 'nav.home', href: '/' },
    {
        key: 'nav.services',
        href: '#',
        submenu: [
            { key: 'nav.webDev', href: '/services/web-development' },
            { key: 'nav.ai', href: '/services/ai-solutions' },
        ],
    },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<TranslationKey | null>(null);
    const { t, language, toggleLanguage } = useTranslation();

    const toggleDropdown = (key: TranslationKey) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-light">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="https://res.cloudinary.com/dqeujzydw/image/upload/v1737271850/Logo_jtwdnz.svg"
                            alt="Go To Market"
                            width={180}
                            height={48}
                            priority
                            className="w-auto h-12"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.key} className="relative">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.key)}
                                            className="flex items-center text-gray-500 hover:text-primary transition-colors duration-200 text-xl tracking-tighter"
                                        >
                                            {t(item.key)}
                                            <MotionSpan
                                                animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </MotionSpan>
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === item.key && (
                                                <MotionDiv
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 w-52 rounded-lg bg-white shadow-lg py-2"
                                                >
                                                    {item.submenu.map((subitem) => (
                                                        <Link
                                                            key={subitem.key}
                                                            href={subitem.href}
                                                            className="block px-4 text-xl tracking-tighter py-2 text-gray-500 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                                                        >
                                                            {t(subitem.key)}
                                                        </Link>
                                                    ))}
                                                </MotionDiv>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-500 hover:text-primary transition-colors duration-200 text-xl tracking-tighter"
                                    >
                                        {t(item.key)}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center text-gray-500 hover:text-primary transition-colors duration-200 text-xl tracking-tighter"
                        >
                            <Globe className="h-5 w-5 mr-1" />
                            <span className="text-lg uppercase">{language}</span>
                        </button>

                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-primary text-white rounded-full text-xl hover:bg-primary/90 transition-colors duration-200 tracking-tighter"
                        >
                            {t('nav.getStarted')}
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center text-gray-500 hover:text-primary transition-colors duration-200"
                        >
                            <Globe className="h-5 w-5" />
                        </button>
                        <button
                            className="p-2 text-gray-500 hover:text-primary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <MotionDiv
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden border-t overflow-hidden"
                        >
                            <nav className="flex flex-col space-y-4 py-4">
                                {navigation.map((item) => (
                                    <div key={item.key}>
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleDropdown(item.key)}
                                                    className="flex items-center justify-between w-full px-4 py-2 text-gray-500 hover:text-primary tracking-tighter"
                                                >
                                                    <span className="text-xl">{t(item.key)}</span>
                                                    <MotionSpan
                                                        animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown className="h-4 w-4" />
                                                    </MotionSpan>
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === item.key && (
                                                        <MotionDiv
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="pl-8 mt-2 space-y-2"
                                                        >
                                                            {item.submenu.map((subitem) => (
                                                                <Link
                                                                    key={subitem.key}
                                                                    href={subitem.href}
                                                                    className="block py-2 text-gray-500 hover:text-primary text-xl tracking-tighter"
                                                                    onClick={closeMenu}
                                                                >
                                                                    {t(subitem.key)}
                                                                </Link>
                                                            ))}
                                                        </MotionDiv>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-500 hover:text-primary text-xl tracking-tighter"
                                                onClick={closeMenu}
                                            >
                                                {t(item.key)}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="px-4 pt-2">
                                    <Link
                                        href="/contact"
                                        className="block w-full px-6 py-2.5 bg-primary text-white rounded-full text-xl tracking-tighter text-center hover:bg-primary/90 transition-colors duration-200"
                                        onClick={closeMenu}
                                    >
                                        {t('nav.getStarted')}
                                    </Link>
                                </div>
                            </nav>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}