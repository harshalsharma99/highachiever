import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CURRICULA } from '@/data/curricula';

export default function CurriculaOverview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#1FA98F] font-medium text-sm tracking-wider uppercase mb-3 block">Curricula We Teach</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">
            Whichever curriculum your child follows, we teach to it directly
          </h2>
          <p className="text-[#4B5566] text-lg leading-relaxed">
            Most coaching centres in the UAE specialise in either Indian-curriculum entrance exams or
            British/IB tuition — rarely both. High Achievers brings all three under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CURRICULA.map((curriculum, index) => (
            <motion.div
              key={curriculum.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/curricula/${curriculum.slug}`}
                className="group block h-full bg-[#F7F9FC] hover:bg-[#0B1220] border border-[#E4E9F0] hover:border-[#F5B942]/40 rounded-2xl p-7 transition-all duration-300"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1FA98F] group-hover:text-[#2FC9B0] mb-3 block">
                  {curriculum.ageRange}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#0B1220] group-hover:text-white mb-3 transition-colors">
                  {curriculum.shortName}
                </h3>
                <p className="text-[#4B5566] group-hover:text-[#C6CEDA] leading-relaxed mb-5 transition-colors">
                  {curriculum.tagline}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] group-hover:text-[#F5B942] transition-colors">
                  Explore {curriculum.shortName}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
