import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative bg-[#0B1220] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B942]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2FC9B0]/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="text-[#F5B942] font-medium text-sm tracking-wider uppercase mb-3 block">{eyebrow}</span>
          )}
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">{title}</h1>
          {description && <p className="text-[#C6CEDA] text-lg leading-relaxed">{description}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
