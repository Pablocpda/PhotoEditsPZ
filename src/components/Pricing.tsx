export default function Pricing() {
  return (
    <section className="py-section-gap px-margin-page bg-black" id="pricing">
      <div className="text-center mb-16">
        <span className="font-label-caps text-label-caps text-primary">INVERSIÓN</span>
        <h2 className="font-headline-lg text-headline-lg text-white">Planes de Captura</h2>
        <p className="text-white/60 mt-4">Selecciona el plan que mejor se adapte a tu historia.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-7xl mx-auto">
        <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col">
          <span className="font-label-caps text-label-caps text-white/40 mb-2">SENCILLO</span>
          <div className="text-3xl font-bold text-white mb-6">L 1,000</div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 1 hora</li>
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 10+ fotos</li>
          </ul>
          <button className="w-full py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">Seleccionar</button>
        </div>
        <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col">
          <span className="font-label-caps text-label-caps text-white/40 mb-2">ESTÁNDAR</span>
          <div className="text-3xl font-bold text-white mb-6">L 4,000</div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 5 horas</li>
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 70+ fotos</li>
          </ul>
          <button className="w-full py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">Seleccionar</button>
        </div>
        <div className="glass-card p-8 rounded-3xl border-2 border-primary-container relative flex flex-col shadow-2xl shadow-primary-container/20">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest">Más Popular</div>
          <span className="font-label-caps text-label-caps text-primary-container mb-2">PREMIUM</span>
          <div className="text-3xl font-bold text-white mb-6">L 8,000</div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-white/80 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 2 sesiones</li>
            <li className="flex items-center gap-2 text-white/80 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 8 horas</li>
            <li className="flex items-center gap-2 text-white/80 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 150+ fotos</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-primary-container text-white font-bold hover:brightness-110 transition-all">Elegir Premium</button>
        </div>
        <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col">
          <span className="font-label-caps text-label-caps text-white/40 mb-2">DELUXE</span>
          <div className="text-3xl font-bold text-white mb-6">L 10,000</div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 3 sesiones</li>
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 12 horas</li>
            <li className="flex items-center gap-2 text-white/60 text-sm"><span className="material-symbols-outlined text-primary text-xs">check</span> 200+ fotos</li>
          </ul>
          <button className="w-full py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">Seleccionar</button>
        </div>
      </div>
    </section>
  );
}
