import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { siteConfig, whatsappLink } from '@/config/site';
import { COUNTRY_CODES } from '@/config/countryCodes';
import { useBookingModal } from '@/context/BookingModalContext';

const initialForm = { name: '', countryCode: '+971', phone: '', curriculum: '', interest: '' };
const STATUS = { IDLE: 'idle', SUBMITTING: 'submitting', SUCCESS: 'success', ERROR: 'error' };

const fieldClass =
  'bg-white/5 border-white/15 text-white placeholder:text-[#5C6D68] focus:border-[#2FC9B0] focus:ring-[#2FC9B0]/30 h-12 rounded-xl';

export default function BookingModal() {
  const { isOpen, closeModal, prefill } = useBookingModal();
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    if (prefill) setFormData((prev) => ({ ...prev, ...prefill }));
    const onKeyDown = (e) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeModal, prefill]);

  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setFormData(initialForm);
      setStatus(STATUS.IDLE);
    }, 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  const updateField = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const openWhatsApp = () => {
    const contactNumber = formData.phone ? `${formData.countryCode} ${formData.phone}` : 'not provided yet';
    const message = `Hi High Achievers team, I'm ${formData.name || 'interested in coaching'} and would like to book a free diagnostic assessment${
      formData.curriculum ? ` (${formData.curriculum})` : ''
    }${formData.interest ? ` for ${formData.interest}` : ''}. Contact number: ${contactNumber}.`;
    window.open(whatsappLink(message), '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!siteConfig.formspreeEndpoint) {
      openWhatsApp();
      return;
    }

    setStatus(STATUS.SUBMITTING);
    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'quick-interest-modal' }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus(STATUS.SUCCESS);
    } catch (error) {
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative w-full max-w-md bg-[#0B1220] border border-[#F5B942]/25 rounded-3xl p-6 md:p-8 shadow-[0_0_60px_rgba(245,185,66,0.15)] max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[#8993A6] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {status === STATUS.SUCCESS ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#2FC9B0]/10 border border-[#2FC9B0]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-[#2FC9B0]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-[#C6CEDA] mb-6">Our team will be in touch within 24 hours to schedule your free diagnostic assessment.</p>
                <Button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-[#F5B942] to-[#EFA92B] text-[#0B1220] font-bold px-6 py-3 rounded-xl"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h3 id="booking-modal-title" className="font-heading text-2xl font-bold text-white mb-1">
                  Book a Free Diagnostic Assessment
                </h3>
                <p className="text-[#8993A6] text-sm mb-6">Leave your details and our team will reach out to schedule it.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="modalName" className="text-[#D8E0DC] font-medium mb-2 block text-sm">
                      Your Name *
                    </Label>
                    <Input
                      id="modalName"
                      placeholder="Parent or student name"
                      value={formData.name}
                      onChange={updateField('name')}
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <Label htmlFor="modalPhone" className="text-[#D8E0DC] font-medium mb-2 block text-sm">
                      Phone / WhatsApp *
                    </Label>
                    <div className="flex gap-3">
                      <Select
                        id="modalCountryCode"
                        value={formData.countryCode}
                        onChange={updateField('countryCode')}
                        className={`${fieldClass} w-[8.5rem] flex-shrink-0`}
                        aria-label="Country code"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-[#0B1220]">
                            {c.label}
                          </option>
                        ))}
                      </Select>
                      <Input
                        id="modalPhone"
                        type="tel"
                        placeholder="XX XXX XXXX"
                        value={formData.phone}
                        onChange={updateField('phone')}
                        required
                        className={`${fieldClass} flex-1`}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="modalCurriculum" className="text-[#D8E0DC] font-medium mb-2 block text-sm">
                      Curriculum (optional)
                    </Label>
                    <Select
                      id="modalCurriculum"
                      value={formData.curriculum}
                      onChange={updateField('curriculum')}
                      className={fieldClass}
                    >
                      <option value="" className="bg-[#0B1220]">
                        Select curriculum
                      </option>
                      <option value="British / IGCSE & A-Level" className="bg-[#0B1220]">British / IGCSE &amp; A-Level</option>
                      <option value="CBSE" className="bg-[#0B1220]">CBSE</option>
                      <option value="IB (MYP/DP)" className="bg-[#0B1220]">IB (MYP/DP)</option>
                      <option value="Other" className="bg-[#0B1220]">Other</option>
                    </Select>
                  </div>

                  {status === STATUS.ERROR && (
                    <div className="flex items-start gap-2 text-red-300 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Something went wrong. Please try again, or message us on WhatsApp below.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === STATUS.SUBMITTING}
                    className="w-full bg-gradient-to-r from-[#F5B942] to-[#EFA92B] hover:brightness-110 text-[#0B1220] py-5 text-base font-bold rounded-xl shadow-[0_0_24px_rgba(245,185,66,0.3)]"
                  >
                    {status === STATUS.SUBMITTING ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Calendar className="w-5 h-5 mr-2" />
                    )}
                    {status === STATUS.SUBMITTING ? 'Sending...' : 'Book Free Diagnostic Assessment'}
                  </Button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full flex items-center justify-center gap-2 text-[#25D366] text-sm font-medium py-2 hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Or chat on WhatsApp instead
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
