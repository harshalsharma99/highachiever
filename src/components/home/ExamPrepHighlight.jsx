import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, Trophy, Globe2, ArrowRight } from 'lucide-react';
import { EXAM_PREP } from '@/data/examPrep';

const ICONS = { Stethoscope, Trophy, Globe2 };

export default function ExamPrepHighlight() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#F5B942]/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#F5B942] font-medium text-sm tracking-wider uppercase mb-3 block">Beyond the Syllabus</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Competitive exams &amp; university entrance, built into the plan
          </h2>
          <p className="text-[#C6CEDA] text-lg leading-relaxed">
            NEET, JEE, Olympiads and abroad-university entrance tests aren&rsquo;t treated as separate add-ons — they&rsquo;re
            planned alongside regular subject coaching from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {EXAM_PREP.map((exam, index) => {
            const Icon = ICONS[exam.icon];
            return (
              <motion.div
                key={exam.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/exam-prep/${exam.slug}`}
                  className="group block h-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#F5B942]/40 rounded-2xl p-7 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5B942]/10 flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-6 h-6 text-[#F5B942]" />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{exam.name}</h3>
                  <p className="text-[#C6CEDA] leading-relaxed mb-5">{exam.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B942]">
                    Explore programme
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            to="/english-ielts-life-skills"
            className="inline-flex items-center gap-2 text-[#2FC9B0] font-semibold hover:underline"
          >
            Also explore our English, IELTS &amp; Life Skills programme
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
