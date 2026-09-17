import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { getSubjectBySlug } from '@/data/subjects';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function SubjectDetail() {
  const { slug } = useParams();
  const subject = getSubjectBySlug(slug);

  useDocumentMeta(
    subject ? `${subject.name} Tutoring in the UAE | High Achievers` : 'High Achievers',
    subject?.description
  );

  if (!subject) return <Navigate to="/subjects" replace />;

  return (
    <>
      <PageHero eyebrow="Subject" title={subject.name} description={subject.description} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-[#0B1220] mb-5">What we cover</h2>
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {subject.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1FA98F] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2A3342]">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F7F9FC] border border-[#E4E9F0] rounded-2xl p-6 h-fit">
            <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-4">By curriculum</h3>
            <div className="space-y-5">
              {subject.curriculumNotes.map((note, index) => (
                <motion.div
                  key={note.curriculum}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-sm font-semibold text-[#1FA98F] mb-1">{note.curriculum}</p>
                  <p className="text-sm text-[#4B5566] leading-relaxed">{note.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection prefill={{ interest: subject.name }} />
    </>
  );
}
