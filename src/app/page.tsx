'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const projects = [
  {
    title: "Filiera Café",
    description: "Sito web multi-concept a Lecce",
    link: "https://filiera.vercel.app/",
    image: "/img/filiera.jpg",
    action: "Vedi Live"
  },
  {
    title: "Women In Net (PWA)",
    description: "PWA per community tennis",
    link: "https://women-in-tennis.vercel.app/",
    image: "/img/WIN.jpg",
    action: "Vedi Live"
  },
  {
    title: "SEO Testing Tool",
    description: "CLI tool open source per SEO",
    link: "https://github.com/svilupp0/SEO-Testing-Tool",
    image: "/img/seo-tool.jpg",
    action: "Vedi Repository"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: 'easeInOut', delay: 0.8 } }
};

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-[#fef7ed]">

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/video/video-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.45) 100%)'
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight"
            style={{
              textShadow: '0 0 60px rgba(14,165,233,0.4), 0 0 120px rgba(14,165,233,0.2)'
            }}
          >
            Francesca
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl lg:text-3xl font-extralight text-white/90 mt-4 tracking-wide"
            style={{ textShadow: '0 0 30px rgba(14,165,233,0.25)' }}
          >
            AI-Assisted Developer & Operations Specialist
          </motion.p>

          {/* Animated underline */}
          <motion.div
            variants={lineExpand}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 h-[2px] w-32 md:w-48 origin-center"
            style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)'
            }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Vertical accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#0ea5e9]/60 rounded-full" />

          <div className="pl-8 md:pl-12">
            <motion.span
              variants={fadeInUp}
              className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#0ea5e9]/60"
            >
              Chi Sono
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#374151] mt-3 mb-8"
            >
              About Me
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-[#374151]/80 font-extralight text-lg md:text-xl leading-relaxed"
            >
              <p>
                Mio padre è il classico scienziato pazzo: perito di laboratorio, stampante 3D sempre accesa e circuiti stampati sparsi ovunque. Il suo capolavoro? Un cingolato telecomandato per portare la spesa a mia madre al quarto piano senza ascensore. Sono cresciuta così: smontando, rompendo e cercando soluzioni a problemi che altri non sapevano di avere.
              </p>
              <p>
                Dopo anni passati tra ristorazione e immobiliare — dove ho imparato a gestire persone e imprevisti senza impazzire — ho deciso di tornare a quel &apos;fare&apos; che avevo in casa. Oggi mi definisco una AI-Assisted Developer. Non ho un percorso accademico standard, ma passo le giornate su VSCode, Cline e Qodo a &apos;pasticciare&apos; (seriamente) con l&apos;Intelligenza Artificiale.
              </p>
              <p>
                Il mio obiettivo? Creare strumenti tecnici che abbiano però un senso umano. Un po&apos; come quel cingolato: magari strano da vedere, ma maledettamente utile.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#374151]/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#0ea5e9]/60"
          >
            Progetti
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#374151] mt-3 mb-12"
          >
            Lavori Selezionati
          </motion.h2>

          {/* List with left border */}
          <div className="relative border-l border-[#374151]/10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => window.location.href = project.link}
                className="relative group cursor-pointer transition-colors duration-300 hover:bg-[#374151]/[0.03]"
              >
                <div className="flex items-start gap-6 md:gap-10 py-8 px-6 md:px-10">
                  <span className="text-2xl md:text-3xl font-bold text-[#0ea5e9] transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-[#374151] mb-1 group-hover:text-[#0ea5e9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#374151]/70 font-extralight text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    scale: hoveredProject === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden pointer-events-none z-20"
                  style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={256}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {index < projects.length - 1 && (
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-[#374151]/10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* View all link */}
          <motion.div variants={fadeInUp} className="mt-10 pl-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#0ea5e9] font-medium hover:underline underline-offset-4 transition-all group"
            >
              Vedi tutti i progetti
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          {/* Decorative line */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto mb-8 h-px w-20"
            style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)'
            }}
          />

          <motion.span
            variants={fadeInUp}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#0ea5e9]/60"
          >
            Contatto
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#374151] mt-3 mb-6"
          >
            Iniziamo un viaggio insieme?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[#374151]/70 font-extralight text-lg md:text-xl mb-10 max-w-xl mx-auto"
          >
            Se hai un&apos;idea da sviluppare o semplicemente vuoi scambiare due parole sul futuro della tecnologia e dell&apos;AI, scrivimi pure. Sarà un piacere conoscerti.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="mailto:francescascarpellini327@gmail.com"
            className="inline-flex items-center gap-3 bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
