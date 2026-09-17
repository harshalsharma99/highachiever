import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsappLink } from '@/config/site';
import { useBookingModal } from '@/context/BookingModalContext';

export default function CTASection({
  title = 'Ready to see where your child stands?',
  description = 'Book a free diagnostic assessment — a qualified tutor reviews your child’s level against their exact curriculum and shares a personalised plan, with no obligation.',
  whatsappMessage = 'Hi High Achievers team, I would like to enquire about coaching for my child.',
  prefill,
}) {
  const { openModal } = useBookingModal();

  return (
    <section className="py-16 md:py-24 bg-[#0B1220] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-[#F5B942]/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 md:px-8 relative z-10 text-center max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-[#C6CEDA] text-lg mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => openModal(prefill)}
              className="w-full sm:w-auto bg-gradient-to-r from-[#F5B942] to-[#EFA92B] hover:brightness-110 text-[#0B1220] px-8 py-4 text-base font-bold rounded-xl shadow-[0_0_30px_rgba(245,185,66,0.35)]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Diagnostic Assessment
            </Button>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full border-2 border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 text-base font-semibold rounded-xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
