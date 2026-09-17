import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site';
import { CURRICULA } from '@/data/curricula';
import { EXAM_PREP } from '@/data/examPrep';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0B1220] border border-[#F5B942]/50 shadow-[0_0_16px_rgba(245,185,66,0.3)]">
                <GraduationCap className="w-5 h-5 text-[#F5B942]" />
              </div>
              <span className="text-xl font-heading font-bold block">{siteConfig.businessName}</span>
            </Link>
            <p className="text-[#F5B942] italic mb-3">{siteConfig.tagline}</p>
            <p className="text-[#8993A6] leading-relaxed mb-6 max-w-md">
              UAE coaching for Years 9–13 across the British curriculum, CBSE and IB — Maths, Physics, Chemistry,
              Biology, Business &amp; Accounting, NEET/JEE, Olympiads, English &amp; IELTS, and university entrance
              exams abroad.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F5B942]/15 hover:bg-[#F5B942] border border-[#F5B942]/40 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5 text-[#F5B942] group-hover:text-[#0B1220]" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2FC9B0]/15 hover:bg-[#2FC9B0] border border-[#2FC9B0]/40 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Follow on Facebook"
              >
                <Facebook className="w-5 h-5 text-[#2FC9B0] group-hover:text-[#0B1220]" />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white border border-white/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Follow on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#0B1220]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5 text-white">Curricula</h3>
            <ul className="space-y-3 text-[#8993A6]">
              {CURRICULA.map((c) => (
                <li key={c.slug}>
                  <Link to={`/curricula/${c.slug}`} className="hover:text-[#F5B942] transition-colors">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5 text-white">Exam Prep</h3>
            <ul className="space-y-3 text-[#8993A6]">
              {EXAM_PREP.map((e) => (
                <li key={e.slug}>
                  <Link to={`/exam-prep/${e.slug}`} className="hover:text-[#F5B942] transition-colors">
                    {e.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/english-ielts-life-skills" className="hover:text-[#F5B942] transition-colors">
                  English &amp; IELTS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5 text-white">Contact</h3>
            <ul className="space-y-4 text-[#8993A6]">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5B942] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F5B942] flex-shrink-0 mt-0.5" />
                <span className="break-all">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5B942] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location} &middot; Online &amp; In-Person</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5C6678] text-sm text-center md:text-left">
            &copy; {currentYear} {siteConfig.businessName} &middot; Dubai, UAE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#5C6678]">
            <Link to="/about" className="hover:text-[#F5B942] transition-colors">About</Link>
            <Link to="/blog" className="hover:text-[#F5B942] transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-[#F5B942] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
