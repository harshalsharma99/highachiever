import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta('Page Not Found | High Achievers');

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-5 py-24">
      <div className="text-center max-w-md">
        <p className="text-[#F5B942] font-heading text-6xl font-bold mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold text-[#0B1220] mb-3">Page not found</h1>
        <p className="text-[#4B5566] mb-8">The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/">
          <Button className="bg-[#0B1220] text-white px-6 py-3 rounded-xl font-semibold">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
