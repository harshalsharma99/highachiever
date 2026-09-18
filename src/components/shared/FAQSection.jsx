import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/faqs';

export default function FAQSection({ items = FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]">
      <div className="container mx-auto px-5 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[#1FA98F] font-medium text-sm tracking-wider uppercase mb-3 block">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1220]">Common Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-[#E4E9F0] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-[#0B1220]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1FA98F] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-5 pb-5 text-[#4B5566] leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
