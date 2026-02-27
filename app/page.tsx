import { PenTool, Box, Zap, Shield } from "lucide-react"; // Usaremos iconos minimalistas

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-isle-paper text-isle-ink selection:bg-isle-ink selection:text-isle-paper">
      
      {/* --- Navegación Editorial --- */}
      <nav className="flex justify-between items-center p-8 border-b-2 border-isle-ink">
        <span className="font-display text-2xl italic font-bold">Isle AI</span>
        <div className="space-x-8 font-mono text-xs uppercase tracking-widest">
          <a href="#filosofia" className="hover:line-through">Filosofía</a>
          <a href="#features" className="hover:line-through">Funciones</a>
          <button className="border-2 border-isle-ink px-4 py-1 hover:bg-isle-ink hover:text-isle-paper transition-colors">
            Acceso Pro
          </button>
        </div>
      </nav>

      {/* --- Hero Section: El "Elevator Pitch" --- */}
      <header className="py-24 px-8 max-w-6xl mx-auto text-center border-b-2 border-isle-ink">
        <h1 className="font-display text-7xl md:text-9xl mb-6 italic leading-tight">
          El contenedor, <br /> no el contenido.
        </h1>
        <p className="font-mono text-lg max-w-2xl mx-auto mb-10 opacity-80">
          Un espacio de trabajo unificado y estético para gestionar múltiples cerebros digitales[cite: 21]. 
          Trae tus propias llaves (BYOK) y personaliza tu entorno hasta el último pixel[cite: 20, 51].
        </p>
        <button className="isle-button text-xl">
          EMPEZAR A CREAR
        </button>
      </header>

      {/* --- Grid de Propuesta de Valor --- */}
      <section id="features" className="grid md:grid-cols-3">
        <FeatureCard 
          icon={<PenTool size={32} />} 
          title="Estética Editorial" 
          desc="Transformamos el chat aburrido en un estudio creativo inspirado en el papel premium[cite: 53, 87]." 
        />
        <FeatureCard 
          icon={<Box size={32} />} 
          title="Hub Agnóstico" 
          desc="Conecta GPT-4, Claude 3.5 y Gemini en una sola ventana sin pagar múltiples suscripciones[cite: 59, 63]." 
        />
        <FeatureCard 
          icon={<Shield size={32} />} 
          title="Privacidad Local" 
          desc="Tus API Keys y conversaciones se encriptan y guardan solo en tu dispositivo[cite: 42, 60]." 
        />
      </section>

      {/* --- Sección de "Vibes" (Personalización) --- */}
      <section className="p-16 bg-isle-ink text-isle-paper text-center">
        <h2 className="font-display text-5xl mb-8 italic">Cambia el "Vibe" al instante.</h2>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-xs">
          <span className="border border-isle-paper px-4 py-2 opacity-50">MODO ZEN</span>
          <span className="border border-isle-paper px-4 py-2 font-bold bg-isle-paper text-isle-ink">PAPER & INK</span>
          <span className="border border-isle-paper px-4 py-2 opacity-50">MODO HACKER</span>
          <span className="border border-isle-paper px-4 py-2 opacity-50">GLASSMORPHISM</span>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="p-8 border-t-2 border-isle-ink flex justify-between font-mono text-[10px] uppercase opacity-60">
        <span>Isle AI © 2026</span>
        <span>Hecho para pensadores visuales [cite: 64]</span>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-12 border-r-2 border-b-2 last:border-r-0 border-isle-ink flex flex-col items-center text-center">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl mb-4 italic font-bold">{title}</h3>
      <p className="font-mono text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
