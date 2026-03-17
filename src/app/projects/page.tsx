'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, Lock, Mail } from 'lucide-react';

const projects = [
  {
    title: "Women In Net (PWA)",
    description: "Una Progressive Web App per la community del tennis. Gestione profili, calendario interattivo e geolocalizzazione dei campi.",
    longDescription: "Progetto completo con autenticazione utenti, sistema di prenotazione campi, integrazione mappe per trovare circoli tennistici nelle vicinanze. Sviluppato con Next.js e ottimizzato come PWA per installazione mobile.",
    technologies: ["Next.js", "PWA", "Geolocation API", "Calendar Integration"],
    link: "https://women-in-tennis.vercel.app/",
    linkText: "Vedi Live",
    image: "/img/WIN.jpg",
    isPrivate: false,
    isGithub: false
  },
  {
    title: "Great Stay Salento - Property Manager",
    description: "Soluzione professionale per affitti brevi. Sincronizzazione API Airbnb, gestione JWT e dashboard analitica.",
    longDescription: "Sistema completo di gestione proprietà per affitti brevi con sincronizzazione automatica calendari Airbnb, Booking.com. Dashboard analitica per tracciare prenotazioni, revenue e occupancy rate. Sistema di autenticazione sicuro con JWT e gestione multi-utente.",
    technologies: ["Next.js", "Airbnb API", "JWT Auth", "Analytics Dashboard", "Database"],
    link: "mailto:francescascarpellini327@gmail.com",
    linkText: "Richiedi Demo Privata",
    isPrivate: true,
    image: "/img/prop.manag.jpg",
    isGithub: false
  },
  {
    title: "Portfolio Ricercatrice - Full Stack Platform",
    description: "Piattaforma completa per ricercatori con blog, portfolio progetti, shop online e sistema di autenticazione.",
    longDescription: "Applicazione full-stack completa costruita con Next.js 16 e React 19. Include un CMS personalizzato con editor rich-text TipTap, sistema multilingue (IT/EN), autenticazione OAuth con Google, integrazione Cloudinary per upload immagini, e dashboard amministrativa per gestire contenuti. Database PostgreSQL con Prisma ORM per garantire performance e scalabilità.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "TipTap Editor", "Cloudinary", "Tailwind CSS"],
    link: "https://github.com/svilupp0/PortfolioFS-NextNEW",
    linkText: "Vedi Repository",
    image: "/img/portf-fs.jpg",
    isPrivate: false,
    isGithub: true
  },
  {
    title: "Quiz di Microbiologia & AI",
    description: "Uno strumento che trasforma dispense universitarie in quiz logici tramite orchestrazione di LLM.",
    longDescription: "Applicazione educativa che utilizza Large Language Models per analizzare materiale didattico universitario e generare automaticamente quiz interattivi. Sistema di orchestrazione AI che comprende il contesto e crea domande pertinenti con feedback immediato.",
    technologies: ["AI/LLM", "OpenAI API", "React", "Quiz Logic"],
    link: "https://svilupp0.github.io/dario-s-play/",
    linkText: "Esplora Progetto",
    image: "/img/micro.adv.jpg",
    isPrivate: false,
    isGithub: false
  },
  {
    title: "SEO Testing Tool",
    description: "Tool CLI open source per esperimenti SEO con analisi statistica e integrazione Google Search Console.",
    longDescription: "CLI tool open source per condurre esperimenti SEO in modo rigoroso. Utilizza il test di Welch's t-test per valutare la significatività statistica dei cambiamenti SEO, integrazione con Google Search Console API per raccolta dati automatica, e database SQLite locale con Drizzle ORM. Nessuna configurazione cloud richiesta: tutto gira in locale o via Docker.",
    technologies: ["TypeScript", "Node.js", "SQLite", "Drizzle ORM", "Google OAuth2", "Docker", "Railway"],
    link: "https://github.com/svilupp0/SEO-Testing-Tool",
    linkText: "Vedi Repository",
    image: "/img/seo-tool.jpg",
    isPrivate: false,
    isGithub: true
  },
  {
    title: "Filiera Café",
    description: "Sito web per locale multi-concept a Lecce: specialty coffee, enoteca naturale e bottega km0.",
    longDescription: "Sito web completo per Filiera Café, un locale multi-concept nel cuore di Lecce. Include sezione menu interattiva, vetrina dei produttori locali, e-commerce shop per prodotti km0, calendario eventi e sezione community. Sviluppato con supporto multilingua (IT/EN/FR) per accogliere turisti internazionali.",
    technologies: ["Next.js", "Tailwind CSS", "Multilingua (IT/EN/FR)", "E-commerce"],
    link: "https://filiera.vercel.app/",
    linkText: "Vedi Live",
    image: "/img/filiera.jpg",
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
            Torna alla Home
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
            I Miei Progetti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#374151]/70 font-extralight text-lg md:text-xl mt-6 max-w-2xl"
          >
            Una collezione di progetti che uniscono creatività, tecnologia e intelligenza artificiale.
            Ogni progetto rappresenta un passo nel mio percorso di crescita come developer.
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
                        Privato
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
            Collaboriamo
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#374151] mt-3 mb-6">
            Hai un progetto in mente?
          </h2>

          <p className="text-[#374151]/70 font-extralight text-lg mb-10">
            Sono sempre aperta a nuove collaborazioni e sfide interessanti.
          </p>

          <motion.a
            href="mailto:francescascarpellini327@gmail.com"
            className="inline-flex items-center gap-3 bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Contattami
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
