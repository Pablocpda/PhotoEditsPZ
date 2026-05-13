export default function Workflow() {
  return (
    <section className="py-section-gap px-margin-page bg-surface-container-lowest">
      <div className="text-center mb-16">
        <span className="font-label-caps text-label-caps text-primary">CÓMO FUNCIONA</span>
        <h2 className="font-headline-lg text-headline-lg text-white">Una experiencia diferente. No solo te entrego fotos, te entrego tu historia.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-gutter max-w-7xl mx-auto">
        <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">chat_bubble</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-white mb-4">Planificación</h3>
          <p className="font-body-md text-body-md text-white/50">Hablamos de lo que resalta para ti, los nombres y detalles clave que quieres recordar.</p>
        </div>
        <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-white mb-4">El Evento</h3>
          <p className="font-body-md text-body-md text-white/50">Capturo los detalles con una mirada emocional, enfocada en la autenticidad.</p>
        </div>
        <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">auto_fix_high</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-white mb-4">Narrativa</h3>
          <p className="font-body-md text-body-md text-white/50">Recibes una página web personalizada con la historia narrativa de tu día.</p>
        </div>
      </div>
    </section>
  );
}
