export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#F9F9F9] text-[#1A1A1A]">
      <div className="max-w-2xl w-full border-2 border-[#1A1A1A] p-12 bg-white space-y-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <header className="space-y-2">
          <h1 className="text-5xl font-serif italic">Isle AI</h1>
          <p className="text-sm font-mono uppercase tracking-widest text-zinc-500">
            Status: Día 1/45 — Construyendo el estudio creativo
          </p>
        </header>

        <section className="space-y-4">
          <p className="text-xl leading-relaxed">
            La IA no tiene por qué ser aburrida. <br /> 
            Estamos creando un contenedor estético, privado y modular para tus cerebros digitales.
          </p>
          <div className="bg-[#1A1A1A] text-white p-4 font-mono text-sm">
            &gt; BYOK (Bring Your Own Key) <br />
            &gt; Extreme Customization <br />
            &gt; Infinite Canvas
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-200">
          <p className="font-mono text-xs">PRÓXIMAMENTE EN TU NAVEGADOR</p>
        </footer>
      </div>
    </main>
  );
}
