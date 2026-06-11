'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, Lock, Mail } from 'lucide-react';

const projects = [
  {
    title: "Women In Net (PWA)",
    description: "A Progressive Web App for a tennis community. Profile management, interactive calendar and court geolocation.",
    longDescription: "Full project with user authentication, court booking system, and map integration to find tennis clubs nearby. Built with Next.js and optimised as a PWA for mobile installation.",
    technologies: ["Next.js", "PWA", "Geolocation API", "Calendar Integration"],
    link: "https://women-in-tennis.vercel.app/",
    linkText: "View Live",
    image: "/img/WIN.jpg",
    isPrivate: false,
    isGithub: false
  },
  {
    title: "Great Stay Salento - Property Manager",
    description: "Professional solution for short-term rentals. Airbnb API sync, JWT authentication and analytics dashboard.",
    longDescription: "Complete property management system for short-term rentals with automatic calendar sync for Airbnb and Booking.com. Analytics dashboard to track bookings, revenue and occupancy rate. Secure authentication with JWT and multi-user management.",
    technologies: ["Next.js", "Airbnb API", "JWT Auth", "Analytics Dashboard", "Database"],
    link: "mailto:francescascarpellini327@gmail.com",
    linkText: "Request Private Demo",
    isPrivate: true,
    image: "/img/prop.manag.jpg",
    isGithub: false
  },
  {
    title: "Researcher Portfolio - Full Stack Platform",
    description: "Complete platform for researchers with blog, project portfolio, online shop and authentication system.",
    longDescription: "Full-stack application built with Next.js 16 and React 19. Includes a custom CMS with TipTap rich-text editor, multilingual support (IT/EN), Google OAuth authentication, Cloudinary integration for image uploads, and an admin dashboard for content management. PostgreSQL database with Prisma ORM for performance and scalability.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "TipTap Editor", "Cloudinary", "Tailwind CSS"],
    link: "https://github.com/svilupp0/PortfolioFS-NextNEW",
    linkText: "View Repository",
    image: "/img/portf-fs.jpg",
    isPrivate: false,
    isGithub: true
  },
  {
    title: "Microbiology & AI Quiz",
    description: "A tool that transforms university lecture notes into logical quizzes through LLM orchestration.",
    longDescription: "Educational application that uses Large Language Models to analyse university study materials and automatically generate interactive quizzes. AI orchestration system that understands context and creates relevant questions with immediate feedback.",
    technologies: ["AI/LLM", "OpenAI API", "React", "Quiz Logic"],
    link: "https://svilupp0.github.io/dario-s-play/",
    linkText: "Explore Project",
    image: "/img/micro.adv.jpg",
    isPrivate: false,
    isGithub: false
  },
  {
    title: "SEO Testing Tool",
    description: "Open source CLI tool for SEO experiments with statistical analysis and Google Search Console integration.",
    longDescription: "Open source CLI tool for running rigorous SEO experiments. Uses Welch's t-test to evaluate statistical significance of SEO changes, integrates with Google Search Console API for automatic data collection, and stores results in a local SQLite database with Drizzle ORM. No cloud setup required: runs locally or via Docker.",
    technologies: ["TypeScript", "Node.js", "SQLite", "Drizzle ORM", "Google OAuth2", "Docker", "Railway"],
    link: "https://github.com/svilupp0/SEO-Testing-Tool",
    linkText: "View Repository",
    image: "/img/seo-tool.jpg",
    isPrivate: false,
    isGithub: true
  },
  {
    title: "Filiera Café",
    description: "Website for a multi-concept venue in Lecce: specialty coffee, natural wine bar and zero-km shop.",
    longDescription: "Full website for Filiera Café, a multi-concept venue in the heart of Lecce. Includes an interactive menu section, local producers showcase, e-commerce shop for zero-km products, events calendar and community section. Built with multilingual support (IT/EN/FR) to welcome international visitors.",
    technologies: ["Next.js", "Tailwind CSS", "Multilingual (IT/EN/FR)", "E-commerce"],
    link: "https://filiera.vercel.app/",
    linkText: "View Live",
    image: "/img/filiera.jpg",
    isPrivate: false,
    isGithub: false
  },
  {
    title: "Maison Cinque",
    description: "Elegant website for a holiday rental in Lecce with booking integration and editorial design.",
    longDescription: "Website for Maison Cinque, a holiday accommodation in Lecce. Features an immersive full-screen layout with editorial typography, sections for kitchen and gallery, and a direct booking CTA. Designed to convey the slow-living atmosphere of Salento to an international audience.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://www.maisoncinque.com/",
    linkText: "View Live",
    image: "/img/maison-cinque.png",
    isPrivate: false,
    isGithub: false
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#fef7ed] min-h-screen" data-page="projects">

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
            Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#374151] mt-3"
          >
            My Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#374151]/70 font-extralight text-lg md:text-xl mt-6 max-w-2xl"
          >
            A collection of projects combining creativity, technology and artificial intelligence.
            Each project represents a step in my growth journey as a developer.
          </motion.p>
        </div>
      </header>

      {/* Projects */}
      <section className="px-6 md:px-12 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-12 md:space-y-16"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-[2px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(55,65,81,0.1)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center">
                      <span className="text-[#0ea5e9]/50 text-4xl">📁</span>
                    </div>
                  )}
                  {/* Inner shadow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 30%)'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                  {/* Title + badge */}
                  <div className="flex items-start gap-3 mb-4 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#374151]">
                      {project.title}
                    </h2>
                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#374151]/10 text-[#374151]/70 text-xs font-medium rounded-full">
                        <Lock className="w-3 h-3" />
                        Private
                      </span>
                    )}
                  </div>

                  <p className="text-[#374151]/70 font-extralight text-base md:text-lg leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm font-medium text-[#374151]/70 rounded-md"
                        style={{
                          background: 'rgba(55,65,81,0.05)',
                          borderLeft: '2px solid #0ea5e9'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.link}
                      target={project.link.startsWith('mailto') ? undefined : '_blank'}
                      rel={project.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="group/btn inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.35)]"
                    >
                      {project.isGithub && <Github className="w-4 h-4" />}
                      {project.linkText}
                      {!project.isGithub && (
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      )}
                    </a>
                  </div>
                </div>
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
            Let's Collaborate
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#374151] mt-3 mb-6">
            Got a project in mind?
          </h2>

          <p className="text-[#374151]/70 font-extralight text-lg mb-10">
            I'm always open to new collaborations and interesting challenges.
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
