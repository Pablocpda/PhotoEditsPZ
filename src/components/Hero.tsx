export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="grain-overlay"></div>
        <img className="w-full h-full object-cover brightness-[0.45] contrast-[1.15] saturate-0" style={{ imageRendering: "-webkit-optimize-contrast" }} alt="Fuente de Trevi cinemática" src="/assets/hero_background.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display-xl text-display-xl text-white mb-6">Capturar momentos es mi pasión.</h1>
        <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto">La vida son los recuerdos que no olvidamos. Mi trabajo es que puedas revivirlos para siempre.</p>
      </div>
    </section>
  );
}
