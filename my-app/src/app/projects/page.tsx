import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Women In Net (PWA)",
      description: "Una Progressive Web App per la community del tennis. Gestione profili, calendario interattivo e geolocalizzazione dei campi.",
      longDescription: "Progetto completo con autenticazione utenti, sistema di prenotazione campi, integrazione mappe per trovare circoli tennistici nelle vicinanze. Sviluppato con Next.js e ottimizzato come PWA per installazione mobile.",
      technologies: ["Next.js", "PWA", "Geolocation API", "Calendar Integration"],
      link: "https://women-in-tennis.vercel.app/",
      linkText: "Vedi Live",
      image: "/img/WIN.jpg"
    },
    {
      title: "Great Stay Salento - Property Manager",
      description: "Soluzione professionale per affitti brevi. Sincronizzazione API Airbnb, gestione JWT e dashboard analitica.",
      longDescription: "Sistema completo di gestione proprietà per affitti brevi con sincronizzazione automatica calendari Airbnb, Booking.com. Dashboard analitica per tracciare prenotazioni, revenue e occupancy rate. Sistema di autenticazione sicuro con JWT e gestione multi-utente.",
      technologies: ["Next.js", "Airbnb API", "JWT Auth", "Analytics Dashboard", "Database"],
      link: "mailto:francescascarpellini327@gmail.com",
      linkText: "Richiedi Demo Privata",
      isPrivate: true,
      image: "/img/prop.manag.jpg"
    },    
    {
      title: "Portfolio Ricercatrice - Full Stack Platform",
      description: "Piattaforma completa per ricercatori con blog, portfolio progetti, shop online e sistema di autenticazione.",
      longDescription: "Applicazione full-stack completa costruita con Next.js 16 e React 19. Include un CMS personalizzato con editor rich-text TipTap, sistema multilingue (IT/EN), autenticazione OAuth con Google, integrazione Cloudinary per upload immagini, e dashboard amministrativa per gestire contenuti. Database PostgreSQL con Prisma ORM per garantire performance e scalabilità. Sistema di email con Resend per notifiche automatiche.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "TipTap Editor", "Cloudinary", "Tailwind CSS", "Radix UI"],
      link: "https://github.com/svilupp0/PortfolioFS-NextNEW",
      linkText: "Vedi Repository",
      image: "/img/portf-fs.jpg"
    },
    {
      title: "Quiz di Microbiologia & AI",
      description: "Uno strumento che trasforma dispense universitarie in quiz logici tramite orchestrazione di LLM.",
      longDescription: "Applicazione educativa che utilizza Large Language Models per analizzare materiale didattico universitario e generare automaticamente quiz interattivi. Sistema di orchestrazione AI che comprende il contesto e crea domande pertinenti con feedback immediato.",
      technologies: ["AI/LLM", "OpenAI API", "React", "Quiz Logic"],
      link: "https://svilupp0.github.io/dario-s-play/",
      linkText: "Esplora Progetto",
      image: "/img/micro.adv.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background normal-cursor" data-page="projects">
      {/* Header con link home */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors cursor-pointer"
          >
            ← Torna alla Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-[#0ea5e9] mb-6">
            I Miei Progetti
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Una collezione di progetti che uniscono creatività, tecnologia e intelligenza artificiale. 
            Ogni progetto rappresenta un passo nel mio percorso di crescita come developer.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="bg-white/50 rounded-2xl p-8 md:p-12 shadow-lg border border-foreground/10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Immagine del progetto */}
                <div className="rounded-xl aspect-video overflow-hidden bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#0ea5e9]/50 text-4xl">📱</span>
                    </div>
                  )}
                </div>

                {/* Contenuto */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-light text-foreground">
                    {project.title}
                  </h2>
                  
                  {project.isPrivate && (
                    <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] px-3 py-1 rounded-full text-sm">
                      Progetto Privato
                    </span>
                  )}
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-foreground/5 text-foreground/70 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-full hover:bg-[#0ea5e9]/90 transition-colors cursor-pointer"
                    >
                      {project.linkText}
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-20 px-4 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0ea5e9] mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Sono sempre aperta a nuove collaborazioni e sfide interessanti.
          </p>
          <a
            href="mailto:francescascarpellini327@gmail.com"
            className="inline-block bg-[#0ea5e9] text-white px-8 py-3 rounded-full hover:bg-[#0ea5e9]/90 transition-colors cursor-pointer"
          >
            Contattami
          </a>
        </div>
      </section>
    </div>
  );
}