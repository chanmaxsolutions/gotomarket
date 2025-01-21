'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import PageHeader from '@/components/common/PageHeader';

const ImprintPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader
                titleKey="legal.imprint.title"
                descriptionKey="legal.imprint.description"
            />

            <section className="py-20 md:py-40 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="prose prose-lg"
                        >
                            {/* Company Information */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.company.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>{t('legal.imprint.company.name')}</p>
                                    <p>{t('legal.imprint.company.street')}</p>
                                    <p>{t('legal.imprint.company.city')}</p>
                                    <p>{t('legal.imprint.company.country')}</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.contact.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>
                                        {t('legal.imprint.contact.phone')}: <br />
                                        +49 123 456 789
                                    </p>
                                    <p>
                                        {t('legal.imprint.contact.email')}: <br />
                                        info@company.de
                                    </p>
                                    <p>
                                        {t('legal.imprint.contact.web')}: <br />
                                        www.company.de
                                    </p>
                                </div>
                            </div>

                            {/* Registration Information */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.registration.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>
                                        {t('legal.imprint.registration.court')}: <br />
                                        Amtsgericht München
                                    </p>
                                    <p>
                                        {t('legal.imprint.registration.number')}: <br />
                                        HRB 123456
                                    </p>
                                    <p>
                                        {t('legal.imprint.registration.vatid')}: <br />
                                        DE 123456789
                                    </p>
                                </div>
                            </div>

                            {/* Responsible Person */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.responsible.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>{t('legal.imprint.responsible.name')}</p>
                                    <p>{t('legal.imprint.responsible.position')}</p>
                                    <p>{t('legal.imprint.responsible.email')}</p>
                                </div>
                            </div>

                            {/* Legal Note */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.disclaimer.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>{t('legal.imprint.disclaimer.content')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImprintPage;