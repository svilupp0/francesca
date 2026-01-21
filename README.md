# Portfolio di Francesca Scarpellini

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-purple)](https://www.framer.com/motion/)

Sito web portfolio personale di Francesca Scarpellini, AI-Assisted Developer & Operations Specialist. Il sito presenta una selezione dei suoi progetti più significativi, con particolare attenzione alla combinazione di tecnologia, intelligenza artificiale e soluzioni pratiche.

## 🚀 Caratteristiche Principali

### 🎨 Design e UX
- **Design Moderno**: Interfaccia pulita e professionale con palette colori personalizzata
- **Video Background**: Hero section con video di sfondo per impatto visivo immediato
- **Responsive Design**: Ottimizzato per desktop, tablet e dispositivi mobili
- **Animazioni Fluide**: Utilizzo di Framer Motion per transizioni eleganti

### 📱 Funzionalità
- **Sezione About**: Presentazione personale con background tecnico e professionale
- **Portfolio Progetti**: Showcase dettagliato dei progetti principali
- **Link Diretti**: Accesso diretto ai progetti live e repository GitHub
- **Contatto Integrato**: Sistema di contatto diretto via email

### 🛠️ Progetti in Evidenza

#### Women In Net (PWA)
Progressive Web App per la community del tennis con:
- Gestione profili utenti
- Calendario interattivo
- Geolocalizzazione campi da tennis
- Installabile come app mobile

#### Great Stay Salento - Property Manager
Sistema professionale per gestione affitti brevi:
- Sincronizzazione API Airbnb
- Autenticazione JWT sicura
- Dashboard analitica dettagliata
- Gestione multi-utente

#### Portfolio Ricercatrice (Full Stack Platform)
Piattaforma completa per ricercatori:
- CMS personalizzato con editor TipTap
- Sistema multilingue (IT/EN)
- Autenticazione OAuth con Google
- Integrazione Cloudinary per immagini
- Database PostgreSQL con Prisma ORM

#### Quiz di Microbiologia & AI
Strumento educativo basato su AI:
- Orchestrazione di Large Language Models
- Generazione automatica di quiz
- Analisi dispense universitarie
- Feedback immediato

## 🛠️ Tecnologie Utilizzate

- **Framework**: Next.js 16 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animazioni**: Framer Motion 12.0
- **Font**: Geist Sans & Geist Mono (Vercel)
- **Build Tool**: Next.js CLI
- **Linting**: ESLint
- **Package Manager**: npm

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:
- **Node.js** (versione 18.0 o superiore)
- **npm** (viene installato automaticamente con Node.js)
- **Git** (per clonare il repository)

## 🚀 Installazione e Setup

1. **Clona il repository**:
   ```bash
   git clone https://github.com/svilupp0/francesca.git
   cd francesca
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```

4. **Apri il browser**:
   - Naviga su [http://localhost:3000](http://localhost:3000)
   - Il sito si aggiornerà automaticamente durante le modifiche

## 📜 Script Disponibili

Nel file `package.json` sono disponibili i seguenti script:

```bash
# Avvia il server di sviluppo
npm run dev

# Build per la produzione
npm run build

# Avvia il server di produzione locale
npm run start

# Esegue il linting del codice
npm run lint
```

## 📁 Struttura del Progetto

```
sito-mio-next/
├── public/                    # File statici
│   ├── img/                   # Immagini progetti
│   ├── video/                 # Video di background
│   └── file.svg, globe.svg, next.svg, vercel.svg, window.svg
├── src/
│   └── app/                   # App Router di Next.js
│       ├── globals.css        # Stili globali Tailwind
│       ├── layout.tsx         # Layout principale
│       ├── page.tsx           # Homepage
│       └── projects/          # Pagina progetti
│           └── page.tsx
├── package.json               # Dipendenze e script
├── next.config.ts            # Configurazione Next.js
├── tailwind.config.js        # Configurazione Tailwind
├── tsconfig.json             # Configurazione TypeScript
├── eslint.config.mjs         # Configurazione ESLint
└── README.md                 # Questo file
```

## 🌐 Deploy

Il progetto è configurato per il deploy su **Vercel** (piattaforma consigliata dai creatori di Next.js):

### Deploy Automatico (Raccomandato)
1. Connetti il repository GitHub a Vercel
2. Vercel rileverà automaticamente le impostazioni di Next.js
3. Deploy automatico ad ogni push sul branch principale

### Deploy Manuale
```bash
# Build per la produzione
npm run build

# Avvia il server di produzione locale per test
npm run start
```

### Configurazione Vercel
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x o superiore

## 🔧 Configurazioni

### Next.js Config (`next.config.ts`)
```typescript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora errori ESLint in produzione
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errori TypeScript in produzione
  },
};
```

### Tailwind CSS
Configurato con custom design tokens per il brand di Francesca.

### ESLint
Configurazione standard di Next.js con regole personalizzate.

## 🤝 Contributi

Questo è un progetto personale, ma sono aperta a feedback e suggerimenti! Se noti bug o hai idee per migliorare il sito:

1. Apri una **Issue** su GitHub
2. Invia una **Pull Request** con le tue modifiche
3. Contattami direttamente via email

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 📞 Contatti

**Francesca Scarpellini**
- **Email**: francescascarpellini327@gmail.com
- **LinkedIn**: [Francesca Scarpellini](https://linkedin.com/in/francesca-scarpellini)
- **GitHub**: [@svilupp0](https://github.com/svilupp0)

---

*"Creare strumenti tecnici che abbiano però un senso umano. Un po' come quel cingolato: magari strano da vedere, ma maledettamente utile"*

— Francesca Scarpellini
