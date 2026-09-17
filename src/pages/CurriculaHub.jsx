import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { CURRICULA } from '@/data/curricula';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function CurriculaHub() {
  useDocumentMeta(
    'Curricula We Teach | British, CBSE & IB | High Achievers',
    'High Achievers teaches Years 9-13 across the British curriculum (IGCSE & A-Level), CBSE, and the IB (MYP & DP) in the UAE.'
  );

  return (
    <>
      <PageHero
        eyebrow="Curricula"
        title="Whichever curriculum your school follows, we teach to it directly"
        description="Most families in the UAE juggle one of three systems. We specialise in all three, so switching schools or systems doesn't mean switching tutoring providers."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 space-y-8">
          {CURRICULA.map((curriculum, index) => (
            <motion.div
              key={curriculum.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid lg:grid-cols-3 gap-8 bg-[#F7F9FC] border border-[#E4E9F0] rounded-3xl p-8 md:p-10"
            >
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1FA98F] mb-3 block">
                  {curriculum.ageRange} &middot; {curriculum.boards.join(', ')}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1220] mb-4">{curriculum.name}</h2>
                <p className="text-[#4B5566] leading-relaxed mb-6">{curriculum.overview}</p>
                <Link
                  to={`/curricula/${curriculum.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] hover:text-[#1FA98F] transition-colors"
                >
                  View full {curriculum.shortName} programme
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-[#E4E9F0] p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8993A6] mb-3">Programme Stages</p>
                <ul className="space-y-3">
                  {curriculum.stages.map((stage) => (
                    <li key={stage.name} className="text-sm">
                      <span className="font-semibold text-[#0B1220] block">{stage.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
