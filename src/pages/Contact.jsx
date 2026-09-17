import React from 'react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function Contact() {
  useDocumentMeta(
    'Contact Us | High Achievers',
    'Get in touch with High Achievers to book a free diagnostic assessment for British/IGCSE, CBSE or IB coaching in the UAE.'
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find the right plan for your child"
        description="Reach out by WhatsApp, phone, email, or the form below — we typically respond within a few hours."
      />
      <ContactForm />
      <FAQSection />
    </>
  );
}
