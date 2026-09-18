// Exam preparation programmes — drives /exam-prep and /exam-prep/:slug.
export const EXAM_PREP = [
  {
    slug: 'neet-jee',
    name: 'NEET & JEE Preparation',
    icon: 'Stethoscope',
    tagline: 'Medical & engineering entrance coaching, built on your CBSE foundation.',
    description:
      'NEET (National Eligibility cum Entrance Test) and JEE (Joint Entrance Examination) are won years before the exam date — in how solidly Class 9–10 fundamentals are built, and how early Class 11–12 students start solving exam-pattern questions rather than just textbook ones. Our programme runs alongside CBSE board coaching, not instead of it, so students never have to choose between board marks and rank.',
    highlights: [
      'Foundation modules from Class 9–10 in Physics, Chemistry, Biology & Maths',
      'Full NEET (Physics, Chemistry, Biology) and JEE Main/Advanced (Physics, Chemistry, Maths) syllabus coverage',
      'Chapter-wise tests, full-length mock exams and All-India-style percentile tracking',
      'Error-log driven revision — targeting exactly the topics costing marks',
      'Time-management and negative-marking-aware attempt strategy',
    ],
    idealFor: 'CBSE Science-stream students (Class 9–12) aiming for medical or engineering entrance, and IGCSE/IB students transitioning into the Indian entrance-exam system.',
  },
  {
    slug: 'olympiads',
    name: 'Olympiad & Talent-Exam Coaching',
    icon: 'Trophy',
    tagline: 'Maths, Science & Cyber Olympiads — building rigour ahead of the curriculum.',
    description:
      'Olympiads (SOF, IMO, NSO, IEO, and similar Maths/Science talent exams, plus school-level and international Olympiad tracks) push students past standard syllabus difficulty into genuine problem-solving. Beyond the medals, Olympiad training builds exactly the analytical stamina that later pays off in NEET/JEE, A-Level and IB DP exams.',
    highlights: [
      'Structured problem sets beyond standard textbook difficulty',
      'Pattern recognition & speed-solving technique for MCQ-heavy Olympiad formats',
      'Coverage across Maths, Science and reasoning/aptitude Olympiads for Years 5–13',
      'Mock Olympiad papers with previous-year question analysis',
    ],
    idealFor: 'Motivated students across all curricula (British, CBSE, IB) looking to build a competitive edge beyond school syllabus, from upper primary through to Year 13.',
  },
  {
    slug: 'study-abroad',
    name: 'University Entrance Exams Abroad',
    icon: 'Globe2',
    tagline: 'SAT, ACT and international admissions support for US, UK & Australia.',
    description:
      'For students planning to study outside the UAE, the right entrance test score and application strategy are often the single biggest lever on a university offer. Requirements differ by destination — the US relies on the SAT/ACT, the UK runs applications through UCAS on predicted and final grades, and Australia typically converts A-Level/IB results via an ATAR-equivalency — so we tailor preparation to exactly where your child is applying.',
    highlights: [
      'Full SAT preparation: Reading & Writing and Maths sections, digital SAT format, plus ACT preparation on request',
      'Section-wise diagnostic testing and targeted score-improvement plans',
      'UK-bound guidance: UCAS predicted grades, subject alignment, and awareness of extra tests some courses require (e.g. UCAT for medicine)',
      'Australia-bound guidance: understanding how A-Level/IB results convert via ATAR-equivalent pathways',
      'Coordination with ongoing A-Level/IB DP subject coaching so exam prep and coursework support each other',
    ],
    idealFor: 'Year 11–13 / DP1–DP2 students planning to apply to universities in the US, UK, Australia or other international destinations.',
  },
];

export function getExamPrepBySlug(slug) {
  return EXAM_PREP.find((e) => e.slug === slug);
}
