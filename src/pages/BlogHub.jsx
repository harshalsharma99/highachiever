import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { BLOG_POSTS } from '@/data/blog';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

export default function BlogHub() {
  useDocumentMeta(
    'Blog | Curriculum Guides & Exam Tips | High Achievers',
    'Guides and insights for UAE parents on choosing curricula, NEET/JEE preparation timelines, IB transitions and more.'
  );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides for parents navigating curricula & exams"
        description="Practical, UAE-specific guidance on curriculum choice, competitive exam timelines, and academic planning."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-[#F7F9FC] hover:bg-[#0B1220] border border-[#E4E9F0] hover:border-[#F5B942]/40 rounded-2xl p-7 transition-all duration-300"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1FA98F] group-hover:text-[#2FC9B0] mb-3 transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  &middot; {post.readMinutes} min read
                </span>
                <h2 className="font-heading text-xl font-bold text-[#0B1220] group-hover:text-white mb-3 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#4B5566] group-hover:text-[#C6CEDA] leading-relaxed mb-5 flex-1 transition-colors">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] group-hover:text-[#F5B942] transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
