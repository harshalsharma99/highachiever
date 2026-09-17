// Curriculum reference data — drives /curricula and /curricula/:slug.
export const CURRICULA = [
  {
    slug: 'british-igcse',
    shortName: 'British / IGCSE & A-Level',
    name: 'British Curriculum — IGCSE & A-Level',
    ageRange: 'Years 9 – 13',
    boards: ['Cambridge (CAIE)', 'Edexcel', 'Oxford AQA'],
    color: 'teal',
    tagline: 'Board-aligned mastery from IGCSE through to A-Level results day.',
    overview:
      'The British curriculum splits into two high-stakes stages: IGCSE (Years 9–11), where students build subject foundations and sit their first external board exams, and AS/A-Level (Years 12–13), where depth, exam technique and grade profile decide university offers. We teach to the exact syllabus of whichever board your school follows, so nothing taught in our sessions is "extra" — it is aimed directly at the paper your child will sit.',
    stages: [
      {
        name: 'IGCSE — Years 9, 10 & 11',
        description:
          'Two to three years of syllabus content compressed into a tight timeline, ending in externally marked board exams that set the trajectory for A-Level subject choices.',
        focus: [
          'Syllabus-mapped teaching (Cambridge 0580/0610/0625/0620/0450 and Edexcel equivalents)',
          'Command-word and mark-scheme training so answers score, not just sound right',
          'Topic-wise diagnostic testing to close gaps before mocks',
          'Coursework and practical/alternative-to-practical guidance where applicable',
        ],
      },
      {
        name: 'AS & A-Level — Years 12 & 13',
        description:
          'The two years that matter most for university admission — grades, predicted grades and personal statements all trace back to performance here.',
        focus: [
          'Deep content teaching for A2-level rigor, not just AS recap',
          'Past-paper drilling by topic and by full timed paper',
          'Grade-boundary aware coaching — knowing exactly what an A* answer looks like',
          'Support for UCAS predicted grades and subject-specific personal statement input',
        ],
      },
    ],
    subjectsAvailable: ['mathematics', 'physics', 'chemistry', 'biology', 'business-accounting'],
    whyUs: [
      'Tutors who teach to your exact exam board and syllabus code, not a generic version',
      'Weekly progress reports parents can actually act on',
      'Direct line from IGCSE subject choice into A-Level and onward into SAT/UK university prep',
    ],
  },
  {
    slug: 'cbse',
    shortName: 'CBSE',
    name: 'CBSE — Central Board of Secondary Education',
    ageRange: 'Classes 9 – 12',
    boards: ['CBSE'],
    color: 'gold',
    tagline: 'Board excellence and NEET/JEE foundation, taught side by side.',
    overview:
      'CBSE families in the UAE are usually optimising for two things at once: strong board results and a genuine shot at NEET or JEE. We treat these as one continuous programme rather than two separate tracks — the same Physics, Chemistry, Maths and Biology fundamentals that win board marks in Class 9–10 are the fundamentals that decide NEET/JEE rank in Class 11–12.',
    stages: [
      {
        name: 'Secondary — Class 9 & 10',
        description:
          'The foundation years. Concepts introduced here (especially in Science and Maths) resurface directly in Class 11–12 and in competitive exams — done well now, everything after is easier.',
        focus: [
          'NCERT-aligned teaching with concept-first explanations, not rote formulae',
          'Early NEET/JEE foundation modules woven into regular Physics/Chemistry/Maths coaching',
          'Board-exam technique: CBSE marking schemes, case-study and assertion-reason question practice',
        ],
      },
      {
        name: 'Senior Secondary — Class 11 & 12',
        description:
          'Stream-specific depth (Science: PCM / PCB) with board finals and entrance exams landing in the same academic year.',
        focus: [
          'Science stream: Physics, Chemistry, Mathematics or Biology, taught to both board depth and NEET/JEE difficulty',
          'Commerce stream: Accountancy, Business Studies and Economics with board-exam and case-study focus',
          'Full-length NEET/JEE mock tests with All-India-style percentile feedback',
          'Board vs. competitive-exam answer writing — knowing when to switch technique',
        ],
      },
    ],
    subjectsAvailable: ['mathematics', 'physics', 'chemistry', 'biology', 'business-accounting'],
    whyUs: [
      'One faculty team teaching board syllabus and NEET/JEE syllabus as a single coherent path',
      'Class 9–10 students start competitive-exam thinking early, without sacrificing board marks',
      'Regular All-India-level mock tests with percentile and rank-trend tracking',
    ],
  },
  {
    slug: 'ib',
    shortName: 'IB (MYP & DP)',
    name: 'International Baccalaureate — MYP & DP',
    ageRange: 'MYP (Years 9 – 10/11) · DP (Years 12 – 13)',
    boards: ['International Baccalaureate Organization (IBO)'],
    color: 'teal',
    tagline: 'Concept-driven support for MYP inquiry and DP subject depth.',
    overview:
      'The IB rewards a different skill set than a purely content-driven board: conceptual understanding, inquiry, and the ability to connect ideas across a subject group. Our IB coaching is built around that — we teach the same command terms, assessment objectives and criteria (A–D in MYP; the official markbands in DP) that IB examiners actually use.',
    stages: [
      {
        name: 'Middle Years Programme (MYP)',
        description:
          'MYP Sciences, Mathematics and Individuals & Societies build the conceptual and inquiry-based habits that DP subjects assume students already have.',
        focus: [
          'Criteria-based coaching (Criteria A–D) matched to your school’s MYP unit planners',
          'Concept- and context-driven understanding, not just content coverage',
          'Preparation for the transition into DP subject and level (HL/SL) choices',
        ],
      },
      {
        name: 'Diploma Programme (DP)',
        description:
          'Six subject groups plus the DP core (Theory of Knowledge, the Extended Essay, and CAS). We focus on the subject groups most families need support in: Sciences, Mathematics, and Individuals & Societies (Business Management, Economics).',
        focus: [
          'HL and SL specific teaching — the depth and paper structure genuinely differ',
          'Internal Assessment (IA) guidance: topic selection, criteria alignment, and drafting support',
          'Paper 1/2/3 style timed practice with markband-based feedback',
          'Extended Essay subject-specific mentoring for Sciences, Maths, Business & Management, and Economics',
        ],
      },
    ],
    subjectsAvailable: ['mathematics', 'physics', 'chemistry', 'biology', 'business-accounting'],
    whyUs: [
      'Tutors fluent in IB command terms and official assessment criteria, not just subject content',
      'Internal Assessment and Extended Essay mentoring alongside regular subject coaching',
      'HL/SL-aware teaching so students aren’t taught a one-size-fits-all version of the syllabus',
    ],
  },
];

export function getCurriculumBySlug(slug) {
  return CURRICULA.find((c) => c.slug === slug);
}
