import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sigma, Atom, FlaskConical, Dna, Landmark, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { SUBJECTS } from '@/data/subjects';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

const ICONS = { Sigma, Atom, FlaskConical, Dna, Landmark };

export default function SubjectsHub() {
  useDocumentMeta(
    'Subjects We Teach | Maths, Physics, Chemistry, Biology, Business | High Achievers',
    'High Achievers offers dedicated coaching in Mathematics, Physics, Chemistry, Biology, and Business Studies & Accounting across British/IGCSE, CBSE and IB curricula.'
  );

  return (
    <>
      <PageHero
        eyebrow="Subjects"
        title="Subject-specialist coaching, mapped to your syllabus"
        description="Each subject is taught by tutors who specialise in it across every curriculum we cover, so the depth of expertise never depends on which exam board your school follows."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-6">
          {SUBJECTS.map((subject, index) => {
            const Icon = ICONS[subject.icon];
            return (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/subjects/${subject.slug}`}
                  className="group flex flex-col h-full bg-[#F7F9FC] hover:bg-[#0B1220] border border-[#E4E9F0] hover:border-[#F5B942]/40 rounded-2xl p-7 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1FA98F]/10 group-hover:bg-[#F5B942]/15 flex items-center justify-center mb-4 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-[#1FA98F] group-hover:text-[#F5B942] transition-colors" />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0B1220] group-hover:text-white mb-2 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-[#4B5566] group-hover:text-[#C6CEDA] leading-relaxed mb-5 flex-1 transition-colors">
                    {subject.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] group-hover:text-[#F5B942] transition-colors">
                    Explore {subject.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
