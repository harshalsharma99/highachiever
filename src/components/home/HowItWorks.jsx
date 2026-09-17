import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, ClipboardCheck, CalendarCheck, TrendingUp } from 'lucide-react';

const STEPS = [
  { icon: MessageSquareText, title: 'Tell us your goals', description: 'Share your child’s curriculum, year group and what you’re aiming for — board grades, NEET/JEE rank, or an IB score target.' },
  { icon: ClipboardCheck, title: 'Free diagnostic assessment', description: 'A subject specialist assesses current level against the exact syllabus and identifies the specific gaps holding back progress.' },
  { icon: CalendarCheck, title: 'Personalised learning plan', description: 'We match your child with the right tutor and build a plan around real deadlines — boards, entrance exams, or IA/EE submissions.' },
  { icon: TrendingUp, title: 'Track real progress', description: 'Regular tests, mock exams and progress reports so you always know exactly where your child stands.' },
];

export default function HowItWorks() {
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
          <span className="text-[#1FA98F] font-medium text-sm tracking-wider uppercase mb-3 block">How It Works</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">From first message to measurable progress</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#E4E9F0] rounded-2xl p-6 relative"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0B1220] text-[#F5B942] text-sm font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#1FA98F]/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-[#1FA98F]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4B5566] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
