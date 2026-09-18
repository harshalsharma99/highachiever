import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, Trophy, Globe2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { EXAM_PREP } from '@/data/examPrep';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

const ICONS = { Stethoscope, Trophy, Globe2 };

export default function ExamPrepHub() {
  useDocumentMeta(
    'NEET, JEE, Olympiad & University Entrance Exam Prep | High Achievers',
    'High Achievers prepares UAE students for NEET, JEE, Olympiads, and university entrance exams abroad including the SAT and ACT.'
  );

  return (
    <>
      <PageHero
        eyebrow="Exam Preparation"
        title="Competitive exams, planned alongside your regular coursework"
        description="NEET, JEE, Olympiads and abroad-university entrance tests get their own dedicated tracks — coordinated with, not competing against, your board/curriculum coaching."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 space-y-8">
          {EXAM_PREP.map((exam, index) => {
            const Icon = ICONS[exam.icon];
            return (
              <motion.div
                key={exam.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid lg:grid-cols-3 gap-8 bg-[#F7F9FC] border border-[#E4E9F0] rounded-3xl p-8 md:p-10"
              >
                <div className="lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-[#1FA98F]/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-[#1FA98F]" />}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1220] mb-4">{exam.name}</h2>
                  <p className="text-[#4B5566] leading-relaxed mb-6">{exam.description}</p>
                  <Link
                    to={`/exam-prep/${exam.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] hover:text-[#1FA98F] transition-colors"
                  >
                    View full programme
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-2xl border border-[#E4E9F0] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8993A6] mb-3">Ideal for</p>
                  <p className="text-sm text-[#2A3342] leading-relaxed">{exam.idealFor}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
