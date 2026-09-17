export const NAV_STRUCTURE = [
  { label: 'Home', path: '/' },
  {
    label: 'Curricula',
    path: '/curricula',
    children: [
      { label: 'British / IGCSE & A-Level', path: '/curricula/british-igcse' },
      { label: 'CBSE', path: '/curricula/cbse' },
      { label: 'IB (MYP & DP)', path: '/curricula/ib' },
    ],
  },
  {
    label: 'Subjects',
    path: '/subjects',
    children: [
      { label: 'Mathematics', path: '/subjects/mathematics' },
      { label: 'Physics', path: '/subjects/physics' },
      { label: 'Chemistry', path: '/subjects/chemistry' },
      { label: 'Biology', path: '/subjects/biology' },
      { label: 'Business & Accounting', path: '/subjects/business-accounting' },
    ],
  },
  {
    label: 'Exam Prep',
    path: '/exam-prep',
    children: [
      { label: 'NEET & JEE', path: '/exam-prep/neet-jee' },
      { label: 'Olympiads', path: '/exam-prep/olympiads' },
      { label: 'Study Abroad (SAT & more)', path: '/exam-prep/study-abroad' },
    ],
  },
  { label: 'English, IELTS & Life Skills', path: '/english-ielts-life-skills' },
  { label: 'About Us', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];
