// src/components/common/header/index.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '#',
        submenu: [
            { name: 'Web Development', href: '/services/web-development' },
            { name: 'AI Solutions', href: '/services/ai-solutions' },
        ],
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-light">
            <div className="container mx-auto px-4">
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
                            <div key={item.name} className="relative">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className="flex items-center text-gray-500 hover:text-primary transition-colors duration-200 text-lg"
                                        >
                                            {item.name}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        {activeDropdown === item.name && (
                                            <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2">
                                                {item.submenu.map((subitem) => (
                                                    <Link
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        className="block px-4 py-2 text-gray-500 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-500 hover:text-primary transition-colors duration-200 text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-primary text-white rounded-full text-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-500 hover:text-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between w-full px-4 py-2 text-gray-500 hover:text-primary"
                                            >
                                                <span className="text-lg">{item.name}</span>
                                                <ChevronDown className="h-4 w-4" />
                                            </button>
                                            {activeDropdown === item.name && (
                                                <div className="pl-8 mt-2 space-y-2">
                                                    {item.submenu.map((subitem) => (
                                                        <Link
                                                            key={subitem.name}
                                                            href={subitem.href}
                                                            className="block py-2 text-gray-500 hover:text-primary text-lg"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {subitem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-500 hover:text-primary text-lg"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="px-4 pt-2">
                                <Link
                                    href="/contact"
                                    className="block w-full px-6 py-2.5 bg-primary text-white rounded-full text-lg text-center hover:bg-primary/90 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}