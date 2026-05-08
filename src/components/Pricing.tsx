export default function Pricing() {
  const plans = [
    {
      name: "SENCILLO",
      price: "L 1,000",
      features: ["1 hora", "10+ fotos"],
      isPrimary: false,
    },
    {
      name: "ESTÁNDAR",
      price: "L 4,000",
      features: ["5 horas", "70+ fotos"],
      isPrimary: false,
    },
    {
      name: "PREMIUM",
      price: "L 8,000",
      features: ["2 sesiones", "8 horas", "150+ fotos"],
      isPrimary: true,
    },
    {
      name: "DELUXE",
      price: "L 10,000",
      features: ["3 sesiones", "12 horas", "200+ fotos"],
      isPrimary: false,
    },
  ];

  return (
    <section className="py-section-gap px-margin-page bg-black" id="pricing">
      <div className="text-center mb-16">
        <span className="font-label-caps text-label-caps text-primary">INVESTMENT</span>
        <h2 className="font-headline-lg text-headline-lg text-white">Planes de Captura</h2>
        <p className="text-white/60 mt-4">Selecciona el plan que mejor se adapte a tu historia.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`glass-card p-8 rounded-3xl border flex flex-col relative transition-all ${
              plan.isPrimary
                ? "border-2 border-primary-container shadow-2xl shadow-primary-container/20"
                : "border-white/5 hover:border-white/20"
            }`}
          >
            {plan.isPrimary && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <span
              className={`font-label-caps text-label-caps mb-2 ${
                plan.isPrimary ? "text-primary-container" : "text-white/40"
              }`}
            >
              {plan.name}
            </span>
            <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-sm ${
                    plan.isPrimary ? "text-white/80" : "text-white/60"
                  }`}
                >
                  <span className="material-symbols-outlined text-primary text-xs">check</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-full font-medium transition-all ${
                plan.isPrimary
                  ? "bg-primary-container text-white font-bold hover:brightness-110"
                  : "border border-white/20 text-white hover:bg-white hover:text-black"
              }`}
            >
              {plan.isPrimary ? "Elegir Premium" : "Seleccionar"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
