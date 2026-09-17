import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export default function TestimonialsSection({ limit, dark = false }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className={`py-20 md:py-28 ${dark ? 'bg-[#0B1220]' : 'bg-white'}`}>
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#1FA98F] font-medium text-sm tracking-wider uppercase mb-3 block">
            What Parents Say
          </span>
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-[#0B1220]'}`}>
            Real families, real results
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-7 border ${
                dark ? 'bg-white/[0.04] border-white/10' : 'bg-[#F7F9FC] border-[#E4E9F0]'
              }`}
            >
              <Quote className="w-8 h-8 text-[#F5B942]/50 mb-4" />
              <p className={`leading-relaxed mb-5 ${dark ? 'text-[#D8E0DC]' : 'text-[#2A3342]'}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className={`font-semibold ${dark ? 'text-white' : 'text-[#0B1220]'}`}>{testimonial.name}</p>
                <p className="text-sm text-[#1FA98F]">{testimonial.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
