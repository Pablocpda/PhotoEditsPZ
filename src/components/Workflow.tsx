export default function Workflow() {
  const steps = [
    {
      title: "Briefing",
      description: "Hablamos de lo que resalta para ti, los nombres y detalles clave que quieres recordar.",
      icon: "chat_bubble",
    },
    {
      title: "El Evento",
      description: "Capturo los detalles con una mirada emocional, enfocada en la autenticidad.",
      icon: "photo_camera",
    },
    {
      title: "Storytelling",
      description: "Recibes una landing page personalizada con la historia narrativa de tu día.",
      icon: "auto_fix_high",
    },
  ];

  return (
    <section className="py-section-gap px-margin-page bg-surface-container-lowest">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <span className="font-label-caps text-label-caps text-primary">HOW IT WORKS</span>
        <h2 className="font-headline-lg text-headline-lg text-white mt-4">
          Una experiencia diferente. No solo te entrego fotos, te entrego tu historia.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-gutter max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="glass-card p-10 rounded-3xl flex flex-col items-center text-center hover:border-white/20 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white mb-4">{step.title}</h3>
            <p className="font-body-md text-body-md text-white/50">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
