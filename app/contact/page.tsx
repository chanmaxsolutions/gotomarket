'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
    return (
        <>
            <PageHeader
                titleKey="contact.page.title"
                descriptionKey="contact.page.description"
            />
            <ContactForm />
            {/* Contact Info section will be added here */}
        </>
    );
}