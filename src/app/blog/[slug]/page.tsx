'use client';

import Link from 'next/link';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import { getPostBySlug } from '@/lib/blog-data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="bg-[#fef7ed] min-h-screen">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#fef7ed]/80 backdrop-blur-md border-b border-[#374151]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#374151] hover:text-[#0ea5e9] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <header className="pt-16 pb-10 md:pt-24 md:pb-14 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span
              className="px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[#374151]/70 rounded-md"
              style={{
                background: 'rgba(55,65,81,0.05)',
                borderLeft: '2px solid #0ea5e9',
              }}
            >
              {post.category}
            </span>
            <span className="text-sm text-[#374151]/50 font-extralight">
              {new Date(post.date).toLocaleDateString('it-IT', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="text-sm text-[#374151]/40 font-extralight">{post.readTime}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#374151] leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
            className="mt-8 h-[2px] w-20 origin-left"
            style={{ background: 'linear-gradient(90deg, #0ea5e9, transparent)' }}
          />
        </div>
      </header>

      {/* Article Body */}
      <article className="px-6 md:px-12 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto space-y-8"
        >
          {post.sections.map((section, i) => (
            <motion.div key={i} variants={fadeInUp}>
              {section.heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-[#374151] mb-4">
                  {section.heading}
                </h2>
              )}
              <p className="text-[#374151]/80 font-extralight text-lg md:text-xl leading-relaxed">
                {section.body}
                {section.links?.map((link) =>
                  link.inline ? (
                    <span key={link.href}>
                      {' '}
                      <a
                        href={link.href}
                        className="text-[#0ea5e9] font-medium hover:underline underline-offset-4"
                        target="_blank"
                        rel="dofollow"
                      >
                        {link.text}
                      </a>
                    </span>
                  ) : null
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </article>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center border-t border-[#374151]/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="mx-auto mb-8 h-px w-20"
            style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)' }}
          />

          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#0ea5e9]/60">
            Let&apos;s Collaborate
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#374151] mt-3 mb-6">
            Got a project in mind?
          </h2>

          <p className="text-[#374151]/70 font-extralight text-lg mb-10">
            I&apos;m always open to new collaborations and interesting challenges.
          </p>

          <motion.a
            href="mailto:francescascarpellini327@gmail.com"
            className="inline-flex items-center gap-3 bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
