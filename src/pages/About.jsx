import React from 'react';
import { motion } from 'framer-motion';
import { Target, HeartHandshake, ShieldCheck, Layers } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { siteConfig } from '@/config/site';
import { TEAM } from '@/data/team';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

const AVATAR_COLORS = ['#F5B942', '#2FC9B0', '#EFA92B', '#1FA98F', '#F5B942', '#2FC9B0'];

const VALUES = [
  {
    icon: Target,
    title: 'Outcomes over hours',
    description: 'We measure success in grade improvement, ranks and confidence — not just hours booked.',
  },
  {
    icon: Layers,
    title: 'Curriculum specificity',
    description: 'Every tutor teaches to your child’s exact board and syllabus — never a generic version of the subject.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent progress',
    description: 'Parents get honest, regular updates on where their child stands — including where more work is needed.',
  },
  {
    icon: HeartHandshake,
    title: 'The whole student',
    description: 'Academics, competitive exams, communication and confidence — we support all of it, not just the syllabus.',
  },
];

export default function About() {
  useDocumentMeta(
    'About High Achievers | Coaching Institute in the UAE',
    'High Achievers is a UAE coaching institute for Years 9-13, teaching British/IGCSE, CBSE and IB curricula with a team of subject-matter specialists.'
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`Why ${siteConfig.businessName}?`}
        description="We started High Achievers because too many UAE families were being forced to choose: strong board results or competitive-exam readiness, curriculum depth or a personal touch, academics or everything else that actually gets a student into university. We built a coaching institute that doesn't force that trade-off."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1220] mb-5">Our approach</h2>
            <p className="text-[#4B5566] leading-relaxed mb-4">
              High Achievers brings together subject-matter specialists across the British curriculum (IGCSE &amp;
              A-Level), CBSE and the IB (MYP &amp; DP) &mdash; teaching Mathematics, Physics, Chemistry, Biology, and
              Business Studies &amp; Accounting to the exact syllabus each student’s school follows.
            </p>
            <p className="text-[#4B5566] leading-relaxed mb-4">
              For CBSE families, we treat board excellence and NEET/JEE readiness as one continuous plan rather than
              two competing demands on a student’s time. For IB and British-curriculum students, we build in the
              exam technique &mdash; command terms, mark schemes and assessment criteria &mdash; that turns
              understanding into marks.
            </p>
            <p className="text-[#4B5566] leading-relaxed">
              Alongside academics, we run dedicated Olympiad coaching, English &amp; IELTS preparation, life and
              soft-skills sessions led by external experts, and university entrance exam preparation (SAT, ACT and
              guidance for UK and Australia-bound applicants) &mdash; because getting into and thriving at university
              takes more than subject grades alone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="container mx-auto px-5 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1220] mb-10 text-center">What we stand for</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#E4E9F0] rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1FA98F]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#1FA98F]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0B1220] mb-2">{value.title}</h3>
                <p className="text-sm text-[#4B5566] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1220] mb-4">Meet the team</h2>
            <p className="text-[#4B5566] leading-relaxed">
              High Achievers is built around a team of subject-matter specialists, each experienced in the specific
              curriculum and exam board they teach.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#F7F9FC] border border-[#E4E9F0] rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[#0B1220] font-heading font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#0B1220] leading-tight">{member.name}</p>
                    <p className="text-sm text-[#1FA98F] font-medium">{member.experience} experience</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mb-2">{member.role}</p>
                <p className="text-sm text-[#4B5566] leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-[#8993A6] mt-8">
            Profiles shown are illustrative placeholders pending real tutor bios and photos.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
