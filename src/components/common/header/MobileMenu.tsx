// src/components/common/header/MobileMenu.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { mainNavItems } from '@/config/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-gray-500 hover:text-primary"
                onClick={onToggle}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white">
                    <nav className="flex flex-col py-6 space-y-6">
                        {mainNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 text-gray-500 hover:text-primary transition-colors duration-200 font-normal text-lg"
                                onClick={onToggle}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mx-4 px-6 py-2.5 bg-primary text-white rounded-full text-lg hover:bg-primary/90 transition-colors duration-200 font-normal text-center"
                            onClick={onToggle}
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
};