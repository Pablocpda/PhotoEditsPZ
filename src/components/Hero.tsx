export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
          alt="Fuente de Trevi en Roma - Blanco y Negro" 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display-xl text-display-xl text-white mb-6 tracking-tight">Capturar momentos es mi pasión.</h1>
        <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto">
          La vida son los recuerdos que no olvidamos. Mi trabajo es que puedas revivirlos para siempre.
        </p>
      </div>
    </section>
  );
}
