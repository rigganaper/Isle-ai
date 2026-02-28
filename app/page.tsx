import React from 'react';

// Definimos la interfaz para evitar errores de TypeScript en el build de Vercel
interface FeatureProps {
  title: string;
  desc: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-isle-paper text-isle-ink selection:bg-isle-ink selection:text-isle-paper">
      
      {/* Navegación Estilo Editorial */}
      <nav className="flex justify-between items-center p-8 border-b-2 border-isle-ink">
        <span className="font-display text-2xl italic font-bold">Isle AI</span>
        <div className="space-x-8 font-mono text-xs uppercase tracking-widest hidden md:block">
          <span className="opacity-50">BYOK Model</span>
          <span className="opacity-50">Personalización Extrema</span>
        </div>
      </nav>

      {/* Hero Section - El Corazón del Proyecto [cite: 5, 52] */}
      <header className="py-24 px-8 max-w-6xl mx-auto text-center border-b-2 border-isle-ink">
        <h1 className="font-display text-6xl md:text-8xl mb-6 italic leading-tight">
          El contenedor, <br /> no el contenido. [cite: 22]
        </h1>
        <p className="font-mono text-lg max-w-2xl mx-auto mb-10 opacity-80">
          Un espacio de trabajo unificado y estético para gestionar múltiples cerebros digitales. [cite: 21]
        </p>
        <button className="px-8 py-4 border-2 border-isle-ink bg-isle-ink text-white font-bold hover:bg-white hover:text-isle-ink transition-colors duration-200 text-xl">
          EMPEZAR PROYECTO
        </button>
      </header>

      {/* Grid de Propuesta de Valor [cite: 58, 61] */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard 
          title="Libertad Estética" 
          desc="Desde minimalismo Zen hasta modo Hacker. Tú controlas la tinta y el papel." [cite: 59]
        />
        <FeatureCard 
          title="Privacidad Local" 
          desc="Tus API Keys se encriptan y guardan solo en tu dispositivo. Nadie más lee tus chats." [cite: 60, 82]
        />
        <FeatureCard 
          title="Multicasting" 
          desc="Envía una pregunta a varios modelos a la vez y compara respuestas en paralelo." [cite: 36, 70]
        />
      </section>

      <footer className="p-8 border-t-2 border-isle-ink text-center font-mono text-[10px] uppercase opacity-60">
        Isle AI — Fase 1: Cimientos 
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }: FeatureProps) {
  return (
    <div className="p-12 border-r-2 border-b-2 last:border-r-0 border-isle-ink flex flex-col items-center text-center">
      <h3 className="text-2xl mb-4 italic font-bold">{title}</h3>
      <p className="font-mono text-sm leading-relaxed opacity-75">{desc}</p>
    </div>
  );
}
