'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export default function BlogPage() {
  return (
    <main className="bg-[#fef7ed] min-h-screen">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#fef7ed]/80 backdrop-blur-md border-b border-[#374151]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#374151] hover:text-[#0ea5e9] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <header className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#0ea5e9]/60"
          >
            Writing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#374151] mt-3"
          >
            Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#374151]/70 font-extralight text-lg md:text-xl mt-6 max-w-2xl"
          >
            Thoughts on web development, freelancing and technology.
          </motion.p>
        </div>
      </header>

      {/* Posts */}
      <section className="px-6 md:px-12 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-[2px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(55,65,81,0.1)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
              }}
            >
              <div className="p-6 md:p-10">
                {/* Category + date */}
                <div className="flex items-center gap-4 mb-4">
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
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#374151] mb-3 group-hover:text-[#0ea5e9] transition-colors">
                  {post.title}
                </h2>

                <p className="text-[#374151]/70 font-extralight text-base md:text-lg leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="group/btn inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.35)]"
                >
                  Read article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

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
