export default function Moments() {
  return (
    <section className="py-section-gap px-margin-page bg-black">
      <div className="mb-12">
        <span className="font-label-caps text-label-caps text-primary">TRABAJOS RECIENTES</span>
        <h2 className="font-headline-lg text-headline-lg text-white">Momentos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
        <div className="aspect-[3/4] glass-card rounded-xl overflow-hidden group">
          <img alt="Tejados europeos al atardecer con la luna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/moment_1.jpg" />
        </div>
        <div className="aspect-[3/4] glass-card rounded-xl overflow-hidden group">
          <img alt="Cúpula de catedral en Italia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/moment_2.jpg" />
        </div>
        <div className="aspect-[3/4] glass-card rounded-xl overflow-hidden group">
          <img alt="Exhibición de autos clásicos en Europa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/moment_3.jpg" />
        </div>
        <div className="aspect-[3/4] glass-card rounded-xl overflow-hidden group">
          <img alt="Interior de centro comercial de lujo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/moment_4.jpg" />
        </div>
        <div className="aspect-[3/4] glass-card rounded-xl overflow-hidden group">
          <img alt="Arquitectura europea clásica" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/moment_5.jpg" />
        </div>
      </div>
    </section>
  );
}
