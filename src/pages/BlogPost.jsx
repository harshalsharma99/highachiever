import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { getBlogPostBySlug } from '@/data/blog';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  useDocumentMeta(post ? `${post.title} | High Achievers Blog` : 'High Achievers', post?.excerpt);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <PageHero
        eyebrow={`${new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} · ${post.readMinutes} min read`}
        title={post.title}
        description={post.excerpt}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 max-w-2xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1FA98F] hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
          <div className="space-y-5">
            {post.body.map((paragraph, index) => (
              <p key={index} className="text-[#2A3342] leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
