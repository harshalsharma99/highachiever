import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpenText, Mic, Users2, Sparkles } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

const PROGRAMMES = [
  {
    icon: BookOpenText,
    title: 'English Language Coaching',
    description:
      'Reading comprehension, writing technique and grammar fundamentals for students across every curriculum — essential for IGCSE/A-Level English, CBSE English, and the IB Language & Literature group.',
  },
  {
    icon: Mic,
    title: 'IELTS Preparation',
    description:
      'Focused preparation across all four IELTS components — Listening, Reading, Writing and Speaking — for students and families planning study or relocation abroad.',
  },
  {
    icon: Users2,
    title: 'Life & Soft Skills',
    description:
      'Delivered by external experts: communication, time management, public speaking, leadership and study-skills sessions that complement academic coaching rather than replace it.',
  },
  {
    icon: Sparkles,
    title: 'Confidence & Presentation',
    description:
      'Practical sessions on interview technique, presentation skills and academic confidence — useful for university interviews, IB oral assessments, and everyday classroom participation.',
  },
];

export default function EnglishIeltsLifeSkills() {
  useDocumentMeta(
    'English, IELTS & Life Skills Coaching | High Achievers',
    'High Achievers offers English language coaching, IELTS preparation, and life & soft skills sessions delivered by external experts, alongside core academic coaching.'
  );

  return (
    <>
      <PageHero
        eyebrow="Beyond the Syllabus"
        title="English, IELTS & Life Skills"
        description="Strong grades open doors, but communication, confidence and language proficiency are what students carry into university and beyond. These programmes run alongside our academic coaching."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 grid sm:grid-cols-2 gap-8">
          {PROGRAMMES.map((programme, index) => (
            <motion.div
              key={programme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F7F9FC] border border-[#E4E9F0] rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1FA98F]/10 flex items-center justify-center mb-4">
                <programme.icon className="w-6 h-6 text-[#1FA98F]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-2">{programme.title}</h3>
              <p className="text-[#4B5566] leading-relaxed">{programme.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="container mx-auto px-5 md:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1220] mb-6">Why we treat this as core, not optional</h2>
          <ul className="space-y-4">
            {[
              'IELTS scores directly gate university admission for many international destinations',
              'IB oral assessments and A-Level/CBSE English papers reward structured, confident communication',
              'Life and soft skills sessions build the study habits and time management that make academic coaching more effective',
              'University interviews and personal statements benefit directly from presentation and communication training',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EFA92B] flex-shrink-0 mt-0.5" />
                <span className="text-[#2A3342]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection prefill={{ interest: 'English, IELTS & Life Skills' }} />
    </>
  );
}
