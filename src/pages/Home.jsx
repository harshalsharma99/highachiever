import React from 'react';
import Hero from '@/components/home/Hero';
import CurriculaOverview from '@/components/home/CurriculaOverview';
import SubjectsOverview from '@/components/home/SubjectsOverview';
import ExamPrepHighlight from '@/components/home/ExamPrepHighlight';
import WhyUs from '@/components/home/WhyUs';
import HowItWorks from '@/components/home/HowItWorks';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import FAQSection from '@/components/shared/FAQSection';
import ContactForm from '@/components/shared/ContactForm';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { siteConfig } from '@/config/site';

export default function Home() {
  useDocumentMeta(
    `${siteConfig.businessName} | Coaching for British, CBSE & IB Curricula in the UAE`,
    'High Achievers is a UAE coaching institute for Years 9-13 across British/IGCSE, CBSE and IB curricula — Maths, Physics, Chemistry, Biology, Business & Accounting, NEET/JEE, Olympiads, English/IELTS and university entrance exam prep.'
  );

  return (
    <>
      <Hero />
      <CurriculaOverview />
      <SubjectsOverview />
      <ExamPrepHighlight />
      <WhyUs />
      <HowItWorks />
      <TestimonialsSection limit={3} />
      <FAQSection />
      <ContactForm />
    </>
  );
}
