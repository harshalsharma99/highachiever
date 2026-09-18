import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappLink } from '@/config/site';
import { useBookingModal } from '@/context/BookingModalContext';

const TRUST_POINTS = [
  'British / IGCSE & A-Level',
  'CBSE (NEET & JEE ready)',
  'IB — MYP & DP',
];

export default function Hero() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative bg-[#0B1220] pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#F5B942]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2FC9B0]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[#F5B942] font-medium text-sm tracking-wider uppercase mb-5 bg-[#F5B942]/10 border border-[#F5B942]/25 rounded-full px-4 py-1.5">
              Years 9 – 13 &middot; Dubai &amp; UAE
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              {siteConfig.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="bg-gradient-to-r from-[#F5B942] to-[#2FC9B0] bg-clip-text text-transparent">
                {siteConfig.tagline.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-[#C6CEDA] text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              One coaching institute for every curriculum your family might need — British/IGCSE, CBSE and IB —
              across Maths, Physics, Chemistry, Biology and Business, plus NEET/JEE, Olympiads, English &amp; IELTS,
              and university entrance exams abroad.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {TRUST_POINTS.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-sm text-[#D8E0DC] bg-white/[0.04] border border-white/10 rounded-full px-4 py-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2FC9B0]" />
                  {point}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => openModal()}
                className="bg-gradient-to-r from-[#F5B942] to-[#EFA92B] hover:brightness-110 text-[#0B1220] px-8 py-4 text-base font-bold rounded-xl shadow-[0_0_30px_rgba(245,185,66,0.35)]"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Diagnostic Assessment
              </Button>
              <a href={whatsappLink('Hi High Achievers team, I would like to enquire about coaching for my child.')} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto border-2 border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 text-base font-semibold rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_60px_rgba(245,185,66,0.1)]">
              <p className="text-[#8993A6] text-sm uppercase tracking-wider mb-5">One institute, every path</p>
              <div className="space-y-4">
                {[
                  { label: 'Curricula', value: 'British/IGCSE, CBSE, IB' },
                  { label: 'Core Subjects', value: 'Maths, Physics, Chemistry, Biology, Business & Accounting' },
                  { label: 'Competitive Exams', value: 'NEET, JEE, Olympiads' },
                  { label: 'Beyond the Classroom', value: 'English, IELTS, Life Skills' },
                  { label: 'Study Abroad', value: 'SAT, ACT, UK & Australia pathways' },
                ].map((row) => (
                  <div key={row.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <p className="text-[#2FC9B0] text-xs font-semibold uppercase tracking-wider mb-1">{row.label}</p>
                    <p className="text-white font-medium">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
