import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import ScrollToTopOnRouteChange from '@/components/layout/ScrollToTopOnRouteChange';
import BookingModal from '@/components/shared/BookingModal';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <ScrollToTopOnRouteChange />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
      <BookingModal />
    </div>
  );
}
