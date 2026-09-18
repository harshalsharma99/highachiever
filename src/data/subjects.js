// Subject reference data — drives /subjects and /subjects/:slug.
export const SUBJECTS = [
  {
    slug: 'mathematics',
    name: 'Mathematics',
    icon: 'Sigma',
    tagline: 'From algebra foundations to A-Level/DP-level calculus and beyond.',
    description:
      'Mathematics underpins every science and business subject we teach — and it is the single subject most likely to make or break a NEET/JEE, A-Level or IB Maths AA score. We build fluency from first principles upward: number and algebra foundations, then functions, calculus, statistics and mechanics, taught to the depth your specific curriculum and level demand.',
    curriculumNotes: [
      { curriculum: 'British / IGCSE & A-Level', note: 'IGCSE Maths (Core & Extended) through to A-Level Maths & Further Maths (Pure, Statistics, Mechanics).' },
      { curriculum: 'CBSE', note: 'Class 9–10 NCERT Maths through Class 11–12 with NEET/JEE-level problem solving.' },
      { curriculum: 'IB', note: 'MYP Mathematics through DP Mathematics: Analysis & Approaches (AA) or Applications & Interpretation (AI), HL/SL.' },
    ],
    topics: [
      'Number, algebra & functions',
      'Coordinate geometry & trigonometry',
      'Calculus (differentiation, integration)',
      'Statistics & probability',
      'Mechanics / vectors (curriculum-dependent)',
      'Problem-solving for competitive exams (JEE-style, Olympiad-style)',
    ],
  },
  {
    slug: 'physics',
    name: 'Physics',
    icon: 'Atom',
    tagline: 'Concept-first Physics for board exams, NEET/JEE and IB DP.',
    description:
      'Physics rewards conceptual clarity over memorisation — the same handful of principles (forces, energy, fields, waves) reappear across every curriculum in increasingly demanding forms. We teach derivations and reasoning first, then layer on the exam-specific technique — numericals for JEE, structured questions for IGCSE/A-Level, IA-ready practicals for IB.',
    curriculumNotes: [
      { curriculum: 'British / IGCSE & A-Level', note: 'IGCSE/O-Level Physics through A-Level Physics, including practical & alternative-to-practical skills.' },
      { curriculum: 'CBSE', note: 'Class 9–10 board Physics through Class 11–12 with dedicated NEET/JEE numerical practice.' },
      { curriculum: 'IB', note: 'MYP Sciences through DP Physics HL/SL, with Internal Assessment support.' },
    ],
    topics: [
      'Mechanics & forces',
      'Waves, light & sound',
      'Electricity & magnetism',
      'Thermal physics & energy',
      'Modern/atomic physics',
      'Practical & investigative skills',
    ],
  },
  {
    slug: 'chemistry',
    name: 'Chemistry',
    icon: 'FlaskConical',
    tagline: 'Bridging the gap between theory, mechanism and exam-ready answers.',
    description:
      'Chemistry sits at the intersection of memorisation and logic — students need to know their periodic trends and reaction types cold, then apply them to unfamiliar questions. We drill both halves: structured recall of core content, and repeated exposure to the "unseen" application questions that decide top grades.',
    curriculumNotes: [
      { curriculum: 'British / IGCSE & A-Level', note: 'IGCSE Chemistry through A-Level Chemistry (organic, physical & inorganic strands).' },
      { curriculum: 'CBSE', note: 'Class 9–10 board Chemistry through Class 11–12 with NEET/JEE organic & physical chemistry depth.' },
      { curriculum: 'IB', note: 'MYP Sciences through DP Chemistry HL/SL, with Internal Assessment support.' },
    ],
    topics: [
      'Atomic structure & bonding',
      'Periodicity & chemical trends',
      'Organic chemistry & mechanisms',
      'Physical chemistry (rates, equilibrium, energetics)',
      'Practical & analytical technique',
      'Exam-style unfamiliar/application questions',
    ],
  },
  {
    slug: 'biology',
    name: 'Biology',
    icon: 'Dna',
    tagline: 'Structured, syllabus-mapped Biology from cell theory to genetics.',
    description:
      'Biology is a content-heavy subject where organisation matters as much as understanding. We map every session to your exact syllabus checklist, use diagrams and processes to make abstract systems concrete, and build the scientific-essay and data-interpretation skills that separate a good grade from a top one — especially critical for NEET aspirants.',
    curriculumNotes: [
      { curriculum: 'British / IGCSE & A-Level', note: 'IGCSE Biology through A-Level Biology (cell biology, genetics, ecology, human physiology).' },
      { curriculum: 'CBSE', note: 'Class 9–10 board Biology through Class 11–12 with full NEET Biology (highest-weightage NEET subject) coverage.' },
      { curriculum: 'IB', note: 'MYP Sciences through DP Biology HL/SL, with Internal Assessment support.' },
    ],
    topics: [
      'Cell biology & biomolecules',
      'Genetics & evolution',
      'Human physiology systems',
      'Plant biology & ecology',
      'Data-based & experimental questions',
      'NEET-style rapid recall & elimination technique',
    ],
  },
  {
    slug: 'business-accounting',
    name: 'Business Studies & Accounting',
    icon: 'Landmark',
    tagline: 'Commerce subjects taught for real exam technique, not just theory.',
    description:
      'Business, Accounting and Economics are often under-supported subjects — students are expected to pick up exam technique on their own. We teach the theory alongside case-study analysis, numerical accounting problems, and the evaluative/extended-answer technique that IGCSE, A-Level, CBSE and IB DP examiners specifically reward.',
    curriculumNotes: [
      { curriculum: 'British / IGCSE & A-Level', note: 'IGCSE Business Studies & Accounting through A-Level Business & Accounting, plus Economics.' },
      { curriculum: 'CBSE', note: 'Class 11–12 Commerce stream: Accountancy, Business Studies and Economics, board-exam and case-study focused.' },
      { curriculum: 'IB', note: 'DP Business Management and Economics (Individuals & Societies group), HL/SL, with Internal Assessment support.' },
    ],
    topics: [
      'Financial accounting & final accounts',
      'Business functions & strategy',
      'Marketing, operations & HR case studies',
      'Micro & macroeconomics',
      'Data-response & evaluative essay technique',
      'Internal Assessment / coursework support',
    ],
  },
];

export function getSubjectBySlug(slug) {
  return SUBJECTS.find((s) => s.slug === slug);
}
