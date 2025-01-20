// src/components/common/footer/index.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="space-y-6">
                            <Link href="/" className="block">
                                <Image
                                    src="https://res.cloudinary.com/dqeujzydw/image/upload/v1737271850/Logo_jtwdnz.svg"
                                    alt="Company Logo"
                                    width={150}
                                    height={40}
                                    className="h-auto"
                                />
                            </Link>
                            <p className="text-gray-500 font-light">
                                {t('footer.description')}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">{t('footer.quickLinks')}</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/about" className="text-gray-500 hover:text-primary transition-colors">
                                        {t('footer.about')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-gray-500 hover:text-primary transition-colors">
                                        {t('footer.services')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-500 hover:text-primary transition-colors">
                                        {t('footer.contact')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">{t('footer.services')}</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/services/web-development" className="text-gray-500 hover:text-primary transition-colors">
                                        {t('footer.webDev')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-solutions" className="text-gray-500 hover:text-primary transition-colors">
                                        {t('footer.ai')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">{t('footer.contact')}</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2 text-gray-500">
                                    <Mail className="w-5 h-5" />
                                    <a href="mailto:info@example.com" className="hover:text-primary transition-colors">
                                        info@example.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-gray-500">
                                    <Phone className="w-5 h-5" />
                                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                                        +123 456 7890
                                    </a>
                                </li>
                                <li className="flex items-start gap-2 text-gray-500">
                                    <MapPin className="w-5 h-5 mt-1" />
                                    <span>
                                        {t('footer.address')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-12">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-100 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} {t('footer.copyright')}
                            </p>
                            <div className="flex gap-6 text-sm">
                                <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors">
                                    {t('footer.privacy')}
                                </Link>
                                <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors">
                                    {t('footer.terms')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;