export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#F9F9F9] text-[#1A1A1A]">
      <div className="max-w-2xl w-full border-2 border-[#1A1A1A] p-12 bg-white space-y-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <header className="space-y-2">
          <h1 className="text-5xl font-serif italic tracking-tighter">Isle AI</h1>
          <p className="text-sm font-mono uppercase tracking-widest text-zinc-500">
            Status: Day 1/45 — Building the Creative Studio
          </p>
        </header>

        <section className="space-y-4">
          <p className="text-xl leading-relaxed font-serif">
            AI doesn't have to be boring. <br /> 
            We are crafting an aesthetic, private, and modular workspace for your digital brains.
          </p>
          <div className="bg-[#1A1A1A] text-white p-6 font-mono text-sm border-l-4 border-[#E63946]">
            <p className="mb-2 tracking-tight">&gt; Unlimited API compatible</p>
            <p className="mb-2 tracking-tight">&gt; Total Customization</p>
            <p className="tracking-tight">&gt; Infinite Canvas</p>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-200 flex justify-between items-center">
          <p className="font-mono text-xs text-zinc-400">COMING SOON TO YOUR BROWSER</p>
          <div className="h-2 w-2 bg-[#E63946] animate-pulse"></div>
        </footer>
      </div>
    </main>
  );
}
