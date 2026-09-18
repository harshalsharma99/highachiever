import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sigma, Atom, FlaskConical, Dna, Landmark, ArrowRight } from 'lucide-react';
import { SUBJECTS } from '@/data/subjects';

const ICONS = { Sigma, Atom, FlaskConical, Dna, Landmark };

export default function SubjectsOverview() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#1FA98F] font-medium text-sm tracking-wider uppercase mb-3 block">Core Subjects</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">
            Deep subject expertise, mapped to your exact syllabus
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SUBJECTS.map((subject, index) => {
            const Icon = ICONS[subject.icon];
            return (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/subjects/${subject.slug}`}
                  className="group flex flex-col h-full bg-white hover:bg-[#0B1220] border border-[#E4E9F0] hover:border-[#F5B942]/40 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1FA98F]/10 group-hover:bg-[#F5B942]/15 flex items-center justify-center mb-4 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-[#1FA98F] group-hover:text-[#F5B942] transition-colors" />}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0B1220] group-hover:text-white mb-2 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-[#4B5566] group-hover:text-[#C6CEDA] leading-relaxed mb-4 flex-1 transition-colors">
                    {subject.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1220] group-hover:text-[#F5B942] transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
