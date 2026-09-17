import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function Testimonials() {
  useDocumentMeta(
    'Parent & Student Testimonials | High Achievers',
    'Read what parents and students say about coaching with High Achievers across British/IGCSE, CBSE and IB curricula in the UAE.'
  );

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our families say"
        description="Real feedback from parents and students across our curricula and programmes."
      />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
