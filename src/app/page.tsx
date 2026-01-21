'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Women In Net (PWA)",
      description: "PWA per community tennis",
      link: "https://women-in-tennis.vercel.app/",
      image: "/img/WIN.jpg",
      action: "Vedi Live"
    },
    {
      title: "Great Stay Salento - Property Manager",
      description: "Soluzione per affitti brevi",
      link: "mailto:francescascarpellini327@gmail.com",
      image: "/img/prop.manag.jpg",
      action: "Richiedi Demo"
    },
    {
      title: "Portfolio Ricercatrice - Full Stack Platform",
      description: "Piattaforma per ricercatori",
      link: "https://github.com/svilupp0/PortfolioFS-NextNEW",
      image: "/img/portf-fs.jpg",
      action: "Vedi Repository"

    },
    {
      title: "Quiz di Microbiologia & AI",
      description: "Strumento quiz con AI",
      link: "https://svilupp0.github.io/dario-s-play/",
      image: "/img/micro.adv.jpg",
      action: "Esplora Progetto"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/video/video-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Contenuto sopra il video */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light text-[#0ea5e9] mb-6 animate-fade-in">
            Francesca Scarpellini
          </h1>
          <p className="text-xl md:text-2xl text-[#0ea5e9] font-light animate-fade-in-delay">
            AI-Assisted Developer & Operations Specialist
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#0ea5e9] mb-12 text-center">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Mio padre è il classico scienziato pazzo: perito di laboratorio, stampante 3D sempre accesa e circuiti stampati sparsi ovunque. Il suo capolavoro? Un cingolato telecomandato per portare la spesa a mia madre al quarto piano senza ascensore. Sono cresciuta così: smontando, rompendo e cercando soluzioni a problemi che altri non sapevano di avere.
            </p>
            <p>
              Dopo anni passati tra ristorazione e immobiliare — dove ho imparato a gestire persone e imprevisti senza impazzire — ho deciso di tornare a quel 'fare' che avevo in casa. Oggi mi definisco una AI-Assisted Developer. Non ho un percorso accademico standard, ma passo le giornate su VSCode, Cline e Qodo a 'pasticciare' (seriamente) con l'Intelligenza Artificiale.
            </p>
            <p>
              Il mio obiettivo? Creare strumenti tecnici che abbiano però un senso umano. Un po' come quel cingolato: magari strano da vedere, ma maledettamente utile
            </p>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 bg-foreground/5">
        <div className="max-w-6xl mx-auto bg-background/90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
            Progetti
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row md:justify-between md:items-center py-2 border-b border-foreground/10 last:border-b-0 relative"
              >
                <span className="text-[#0ea5e9] font-light text-lg w-8 flex-shrink-0">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span
                  className="text-foreground font-light text-xl cursor-pointer hover:text-[#0ea5e9] transition-colors flex-grow md:ml-4"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => window.location.href = project.link}
                >
                  {project.title}
                </span>
                <span className={`text-foreground/70 font-light text-lg text-center mt-2 md:mt-0 md:ml-4 flex-shrink-0 transition-transform duration-300 ${hoveredProject === index ? 'transform -translate-x-5' : ''}`}>
                  {project.description}
                </span>
                {hoveredProject === index && (
                  <>
                    <span className="absolute top-1/2 right-100 text-white px-3 py-1 rounded-full transition-all duration-300 opacity-100 scale-105 z-50 -translate-y-1/2">
                      {project.action}
                    </span>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute top-1/2 right-0 w-80 h-48 object-cover rounded-lg transition-all duration-300 opacity-100 scale-105 z-50 shadow-xl -translate-y-1/2"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0ea5e9] mb-8">
            Iniziamo un viaggio insieme?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Se hai un'idea da sviluppare o semplicemente vuoi scambiare due parole sul futuro della tecnologia e dell'AI, scrivimi pure. Sarà un piacere conoscerti.
          </p>
          <a
            href="mailto:francescascarpellini327@gmail.com"
            className="inline-block bg-[#0ea5e9] text-white px-8 py-3 rounded-full hover:bg-[#0ea5e9]/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
