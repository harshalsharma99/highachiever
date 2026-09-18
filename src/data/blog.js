// Lightweight static blog — replace/expand with real articles over time.
export const BLOG_POSTS = [
  {
    slug: 'igcse-vs-cbse-vs-ib-which-curriculum',
    title: 'IGCSE vs CBSE vs IB: Which Curriculum Suits Your Child in the UAE?',
    excerpt:
      'A practical comparison for UAE parents choosing between the British curriculum, CBSE and the IB — what each one optimises for, and how to decide.',
    date: '2026-01-15',
    readMinutes: 7,
    body: [
      'Choosing a curriculum in the UAE usually comes down to three questions: where might the family relocate to next, what kind of learner is your child, and which university destinations are you keeping open.',
      'The British curriculum (IGCSE then A-Level) rewards depth in a small number of subjects chosen from Year 12 onward, and is widely recognised across UK, and many global universities.',
      'CBSE keeps a broader subject spread for longer and lines up naturally with NEET and JEE, which matters if a medical or engineering path in India is on the table.',
      'The IB Diploma Programme asks students to study across six subject groups plus Theory of Knowledge, the Extended Essay and CAS — a heavier academic and time-management load, but one that many universities view very favourably for its breadth and rigor.',
      'There is no universally "best" option — the right choice depends on your child’s strengths and your family’s longer-term plans. Our team can talk through the trade-offs specific to your situation in a free consultation.',
    ],
  },
  {
    slug: 'when-should-neet-jee-prep-start',
    title: 'NEET & JEE: How Early Should Preparation Really Start?',
    excerpt:
      'The earlier the foundation, the less panic later. Here’s what a realistic Class 9-through-12 NEET/JEE timeline looks like.',
    date: '2026-02-03',
    readMinutes: 6,
    body: [
      'Most successful NEET/JEE candidates did not start "NEET/JEE coaching" in Class 11 — they started building strong Physics, Chemistry, Maths and Biology fundamentals in Class 9 and 10, long before the exam had a name attached to it.',
      'Class 9–10 is the window to get comfortable with problem-solving speed and conceptual clarity, without the pressure of board finals and entrance exams landing in the same year.',
      'Class 11 is where syllabus volume roughly doubles and the gap between "board level" and "NEET/JEE level" difficulty becomes obvious — this is where a lot of students feel behind if the foundation wasn’t built earlier.',
      'Class 12 is execution: full-length mocks, error-log-driven revision, and time management under exam conditions, alongside board exam preparation.',
      'Starting early does not mean starting stressed — a well-paced Class 9–10 foundation programme is the single highest-leverage thing a family can do.',
    ],
  },
  {
    slug: 'ib-myp-to-dp-transition-guide',
    title: 'The IB MYP-to-DP Transition: What Actually Changes',
    excerpt:
      'Moving from MYP to the Diploma Programme is a bigger jump than most students expect. Here’s what to prepare for.',
    date: '2026-02-20',
    readMinutes: 5,
    body: [
      'MYP assesses students against subject-specific criteria (A–D) across broad units. DP assessment shifts to externally moderated exam papers and coursework markbands — a more exam-focused structure.',
      'DP also introduces Higher Level (HL) and Standard Level (SL) subject choices, each with materially different depth and time commitment — a decision that should be made with realistic input on a student’s strengths.',
      'The DP core — Theory of Knowledge, the Extended Essay, and CAS — adds an entirely new dimension of academic work that MYP does not require in the same form.',
      'Students who transition well are usually the ones who start practising exam-paper-style questions and short structured essays before DP1 even begins, rather than adjusting mid-year.',
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
