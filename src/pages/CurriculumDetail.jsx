import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { getCurriculumBySlug } from '@/data/curricula';
import { SUBJECTS } from '@/data/subjects';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function CurriculumDetail() {
  const { slug } = useParams();
  const curriculum = getCurriculumBySlug(slug);

  useDocumentMeta(
    curriculum ? `${curriculum.name} Coaching in the UAE | High Achievers` : 'High Achievers',
    curriculum?.overview
  );

  if (!curriculum) return <Navigate to="/curricula" replace />;

  const availableSubjects = SUBJECTS.filter((s) => curriculum.subjectsAvailable.includes(s.slug));

  return (
    <>
      <PageHero eyebrow={curriculum.ageRange} title={curriculum.name} description={curriculum.overview} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {curriculum.stages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className="font-heading text-2xl font-bold text-[#0B1220] mb-3">{stage.name}</h2>
                  <p className="text-[#4B5566] leading-relaxed mb-5">{stage.description}</p>
                  <ul className="space-y-3">
                    {stage.focus.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#1FA98F] flex-shrink-0 mt-0.5" />
                        <span className="text-[#2A3342]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-[#F7F9FC] border border-[#E4E9F0] rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-4">Why families choose us for {curriculum.shortName}</h3>
                <ul className="space-y-3">
                  {curriculum.whyUs.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#2A3342]">
                      <CheckCircle2 className="w-4 h-4 text-[#EFA92B] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B1220] rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-4">Subjects available</h3>
                <ul className="space-y-2">
                  {availableSubjects.map((subject) => (
                    <li key={subject.slug}>
                      <Link
                        to={`/subjects/${subject.slug}`}
                        className="flex items-center justify-between text-sm text-[#C6CEDA] hover:text-[#F5B942] transition-colors py-1.5"
                      >
                        {subject.name}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection prefill={{ curriculum: curriculum.shortName }} />
    </>
  );
}
