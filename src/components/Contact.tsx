export default function Contact() {
  return (
    <section className="py-section-gap px-margin-page bg-surface-container-lowest" id="contact">
      <div className="max-w-3xl mx-auto glass-card p-12 rounded-[2rem] border border-white/10 text-center">
        <h2 className="font-headline-lg text-headline-lg text-white mb-8">¿Listo para capturar tu historia?</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Hablemos por WhatsApp para afinar los detalles de tu evento.
        </p>
        <div className="space-y-6 max-w-md mx-auto">
          <div className="relative">
            <input 
              className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary-container focus:ring-0 text-white py-4 font-body-md placeholder:text-white/20 transition-colors" 
              placeholder="Nombre" 
              type="text"
            />
          </div>
          <div className="pt-8">
            <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-5 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-[#25D366]/20">
              <span className="material-symbols-outlined">chat</span> 
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
