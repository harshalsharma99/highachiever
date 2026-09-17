# High Achievers

Marketing website for **High Achievers** — a UAE coaching institute for Years
9–13, covering the British curriculum (IGCSE & A-Level), CBSE and the IB (MYP
& DP): Mathematics, Physics, Chemistry, Biology, and Business Studies &
Accounting, plus NEET/JEE, Olympiads, English & IELTS, life & soft skills, and
university entrance exam preparation (SAT, ACT, UK & Australia pathways).

Multi-page React + Tailwind site (React Router), built as a companion project
to [The Biology Mentor](https://github.com/harshalsharma99/TheBiologyMentor) —
reusing its proven lead-generation patterns (WhatsApp deep-links, Formspree
contact form with WhatsApp fallback) and extending them into a full
curriculum/subject/exam-prep site hierarchy.

## Stack

- [Vite](https://vitejs.dev/) + React 18
- [React Router](https://reactrouter.com/) for multi-page navigation
- Tailwind CSS
- [framer-motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev/) for icons

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Site structure

```
/                                Home
/curricula                       Curricula hub
/curricula/:slug                 british-igcse | cbse | ib
/subjects                        Subjects hub
/subjects/:slug                  mathematics | physics | chemistry | biology | business-accounting
/exam-prep                       Exam prep hub
/exam-prep/:slug                 neet-jee | olympiads | study-abroad
/english-ielts-life-skills       English, IELTS & life/soft skills
/about                           About us
/testimonials                    Parent/student testimonials
/blog, /blog/:slug                Articles
/contact                         Contact form + FAQ
```

All content lives in `src/data/*.js` (curricula, subjects, exam prep,
testimonials, FAQs, blog posts, nav) — edit those files to change copy
without touching page components.

## Wiring up the contact form

The form posts to [Formspree](https://formspree.io) so enquiries land in your
inbox with zero backend to maintain:

1. Create a free account at formspree.io and make a new form.
2. Copy its endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Copy `.env.example` to `.env` and set:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
4. Rebuild/redeploy. Until this is set, every "Book Free Diagnostic
   Assessment" button falls back to opening WhatsApp instead, so no enquiry
   is silently lost.

## Deploying

Any static host works — the build output is a plain `dist/` folder. Because
this is a multi-page app using client-side routing, the host must rewrite all
paths to `index.html` — `netlify.toml`, `public/_redirects` and
`vercel.json` are already included for Netlify/Vercel.

- Build command: `npm run build`
- Output directory: `dist`
- Add the `VITE_FORMSPREE_ENDPOINT` environment variable in the host's dashboard.

## Before going live — checklist

- [ ] **Real contact details** — `src/config/site.js` currently has
      **placeholder** phone/WhatsApp/email values. Replace `phoneDisplay`,
      `phoneHref`, `whatsappNumber` and `email` with the real business
      numbers before launch.
- [ ] **Real team/founder info** — `src/pages/About.jsx` currently describes
      the team generically. Add real tutor bios/credentials once available.
- [ ] **Real testimonials** — `src/data/testimonials.js` ships with
      illustrative quotes standing in for real ones. Replace them with
      genuine, permissioned parent/student feedback before launch —
      publishing fabricated reviews as genuine is misleading advertising.
- [ ] **Domain & social links** — update `siteConfig` social URLs, and
      `index.html` / `public/robots.txt` / `public/sitemap.xml` once a real
      domain is registered (`highachievers.ae` is a placeholder throughout).
- [ ] **Formspree endpoint** set (see above).
- [ ] **Social share image** — add `public/og-image.jpg` (1200x630px) for
      link previews on WhatsApp/Facebook/LinkedIn.
- [ ] **Analytics** (optional) — add Google Analytics/Meta Pixel snippet to
      `index.html` if you want to track visitors.
- [ ] **Pricing/packages page** (optional) — no pricing is published yet
      (matches common competitor practice of consult-to-enroll); add one if
      you decide to publish package pricing.

## Project structure

```
src/
  components/
    ui/           shared button/input/select primitives
    layout/        header, footer, WhatsApp button, page layout
    shared/        PageHero, CTASection, ContactForm, BookingModal, FAQ/Testimonials sections
    home/          homepage-only sections
  config/site.js   single source of truth for phone/email/WhatsApp/location
  data/            curricula, subjects, exam prep, testimonials, FAQs, blog, nav content
  pages/           one component per route
```
