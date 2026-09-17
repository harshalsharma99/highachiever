import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { getExamPrepBySlug } from '@/data/examPrep';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function ExamPrepDetail() {
  const { slug } = useParams();
  const exam = getExamPrepBySlug(slug);

  useDocumentMeta(exam ? `${exam.name} | High Achievers` : 'High Achievers', exam?.description);

  if (!exam) return <Navigate to="/exam-prep" replace />;

  return (
    <>
      <PageHero eyebrow="Exam Preparation" title={exam.name} description={exam.description} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-[#0B1220] mb-5">Programme highlights</h2>
            <ul className="space-y-4">
              {exam.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1FA98F] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2A3342]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F7F9FC] border border-[#E4E9F0] rounded-2xl p-6 h-fit">
            <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-3">Ideal for</h3>
            <p className="text-sm text-[#4B5566] leading-relaxed">{exam.idealFor}</p>
          </div>
        </div>
      </section>

      <CTASection prefill={{ interest: exam.name }} />
    </>
  );
}
