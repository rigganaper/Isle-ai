import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F9F9F9] font-mono">
      
      {/* Navegación */}
      <nav className="flex justify-between items-center p-6 border-b-2 border-[#1A1A1A]">
        <span className="font-serif text-2xl italic font-bold">Isle AI</span>
        <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em]">
          <span className="opacity-50">Concept: BYOK</span>
          <span className="opacity-50">Design: Paper & Ink</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 max-w-5xl mx-auto text-center border-b-2 border-[#1A1A1A]">
        <h1 className="font-serif text-6xl md:text-8xl mb-8 italic leading-[1.1]">
          El contenedor, <br /> no el contenido.
        </h1>
        <p className="text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed opacity-80">
          Un espacio de trabajo unificado y estético para gestionar múltiples cerebros digitales. 
          Trae tus propias llaves y personaliza tu entorno hasta el último pixel.
        </p>
        <button className="px-10 py-4 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 uppercase text-xs tracking-widest">
          Unirse a la lista de espera
        </button>
      </header>

      {/* Grid de Propuesta de Valor */}
      <section className="grid md:grid-cols-3 border-b-2 border-[#1A1A1A]">
        <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-[#1A1A1A] group hover:bg-white transition-colors">
          <h3 className="font-serif text-2xl mb-4 italic font-bold">Estética Editorial</h3>
          <p className="text-xs leading-loose opacity-70">Interfaces que evocan la tangibilidad del papel premium y la precisión de la tinta tipográfica.</p>
        </div>
        <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-[#1A1A1A] group hover:bg-white transition-colors">
          <h3 className="font-serif text-2xl mb-4 italic font-bold">Privacidad Total</h3>
          <p className="text-xs leading-loose opacity-70">Tus llaves de API nunca tocan nuestro servidor. Todo el procesamiento y almacenamiento es local-first.</p>
        </div>
        <div className="p-10 group hover:bg-white transition-colors">
          <h3 className="font-serif text-2xl mb-4 italic font-bold">Multi-Model Hub</h3>
          <p className="text-xs leading-loose opacity-70">Conecta GPT-4, Claude y Gemini en un solo lienzo infinito. Compara, mezcla y crea sin fricciones.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-[9px] uppercase tracking-[0.3em] opacity-40">
        Isle AI &copy; 2026 — Built for Deep Thought
      </footer>
    </div>
  );
}
