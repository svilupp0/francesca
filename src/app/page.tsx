import Link from 'next/link';

export default function Home() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Women in Tennis */}
            <a
              href="https://women-in-tennis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 rounded-lg p-6 shadow-sm border border-foreground/10 hover:shadow-md hover:scale-105 transition-all duration-300 block"
            >
              <h3 className="text-xl font-medium text-foreground mb-3">
                Women In Net (PWA)
              </h3>
              <p className="text-foreground/70 mb-4">
                Una Progressive Web App per la community del tennis. Gestione profili, calendario interattivo e geolocalizzazione dei campi.
              </p>
              <span className="inline-flex items-center text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors">
                Vedi Live 
              </span>
            </a>

            {/* Property Manager */}
            <a
              href="mailto:francescascarpellini327@gmail.com"
              className="bg-white/50 rounded-lg p-6 shadow-sm border border-foreground/10 hover:shadow-md hover:scale-105 transition-all duration-300 block"
            >
              <h3 className="text-xl font-medium text-foreground mb-3">
                Great Stay Salento - Property Manager
              </h3>
              <p className="text-foreground/70 mb-4">
                Soluzione professionale per affitti brevi. Sincronizzazione API Airbnb, gestione JWT e dashboard analitica.
              </p>
              <span className="inline-flex items-center text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors">
                Richiedi Demo Privata 
              </span>
            </a>

            {/* Quiz di Microbiologia */}
            <a
              href="https://svilupp0.github.io/dario-s-play/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 rounded-lg p-6 shadow-sm border border-foreground/10 hover:shadow-md hover:scale-105 transition-all duration-300 block"
            >
              <h3 className="text-xl font-medium text-foreground mb-3">
                Quiz di Microbiologia & AI
              </h3>
              <p className="text-foreground/70 mb-4">
                Uno strumento che trasforma dispense universitarie in quiz logici tramite orchestrazione di LLM.
              </p>
              <span className="inline-flex items-center text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors">
                Esplora Progetto 
              </span>
            </a>
          </div>

          {/* Link alla pagina progetti completa */}
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block bg-[#0ea5e9] text-white px-8 py-3 rounded-full hover:bg-[#0ea5e9]/90 transition-colors"
            >
              Vedi Tutti i Progetti
            </Link>
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
