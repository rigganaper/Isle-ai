export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-12">
        <header className="border-b-2 border-isle-ink pb-4">
          <h1 className="text-5xl italic">Isle AI</h1>
          <p className="text-sm uppercase tracking-widest mt-2">
            Estudio Editorial de Inteligencia Artificial [cite: 87, 88]
          </p>
        </header>

        <section className="isle-card shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]">
          <h2 className="text-3xl mb-6">Bienvenido al Camaleón</h2>
          <p className="mb-8 leading-relaxed">
            Tu espacio de trabajo unificado para gestionar múltiples cerebros digitales 
            bajo una estética analógica. [cite: 21, 87]
          </p>
          
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Introduce tu API Key (Local Only)..." 
              className="p-4 border-2 border-isle-ink bg-transparent font-mono focus:outline-none"
            />
            <button className="isle-button">
              INICIALIZAR INTERFAZ
            </button>
          </div>
        </section>

        <footer className="text-[10px] font-mono opacity-50 text-center">
          VERSIÓN 1.0 — FEBRERO 2026 [cite: 49]
        </footer>
      </div>
    </main>
  );
}
