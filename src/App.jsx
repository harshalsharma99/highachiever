import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { BookingModalProvider } from '@/context/BookingModalContext';
import Home from '@/pages/Home';
import CurriculaHub from '@/pages/CurriculaHub';
import CurriculumDetail from '@/pages/CurriculumDetail';
import SubjectsHub from '@/pages/SubjectsHub';
import SubjectDetail from '@/pages/SubjectDetail';
import ExamPrepHub from '@/pages/ExamPrepHub';
import ExamPrepDetail from '@/pages/ExamPrepDetail';
import EnglishIeltsLifeSkills from '@/pages/EnglishIeltsLifeSkills';
import About from '@/pages/About';
import Testimonials from '@/pages/Testimonials';
import BlogHub from '@/pages/BlogHub';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <BookingModalProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="curricula" element={<CurriculaHub />} />
            <Route path="curricula/:slug" element={<CurriculumDetail />} />
            <Route path="subjects" element={<SubjectsHub />} />
            <Route path="subjects/:slug" element={<SubjectDetail />} />
            <Route path="exam-prep" element={<ExamPrepHub />} />
            <Route path="exam-prep/:slug" element={<ExamPrepDetail />} />
            <Route path="english-ielts-life-skills" element={<EnglishIeltsLifeSkills />} />
            <Route path="about" element={<About />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="blog" element={<BlogHub />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BookingModalProvider>
    </BrowserRouter>
  );
}
