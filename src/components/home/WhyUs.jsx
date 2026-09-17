import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, LineChart, Users } from 'lucide-react';

const POINTS = [
  {
    icon: Layers,
    title: 'One institute, every curriculum',
    description:
      'British/IGCSE, CBSE and IB, taught by tutors who specialise in that specific curriculum — no family has to piece together multiple tutoring providers.',
  },
  {
    icon: Target,
    title: 'Board exams and competitive exams, one plan',
    description:
      'For CBSE families especially, we build board excellence and NEET/JEE readiness as a single continuous programme, not two competing priorities.',
  },
  {
    icon: LineChart,
    title: 'Syllabus-mapped, not generic',
    description:
      'Every session is planned against your child’s exact exam board and syllabus code — Cambridge, Edexcel, CBSE or IBO — with progress you can track.',
  },
  {
    icon: Users,
    title: 'Beyond academics',
    description:
      'English & IELTS coaching, life and soft skills sessions, and university entrance exam prep (SAT, ACT, UK/Australia pathways) — the full picture, not just the syllabus.',
  },
];

export default function WhyUs() {
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
          <span className="text-[#1FA98F] font-medium text-sm tracking-wider uppercase mb-3 block">Why High Achievers</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">
            Built for families juggling more than one goal
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5B942]/10 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-6 h-6 text-[#EFA92B]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-2">{point.title}</h3>
                <p className="text-[#4B5566] leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
