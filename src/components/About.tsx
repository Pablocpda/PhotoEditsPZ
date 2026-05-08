export default function About() {
  return (
    <section className="py-section-gap px-margin-page bg-black" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-gutter items-center">
        <div className="relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
            <img 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-transform duration-500 group-hover:scale-105" 
              alt="Pablo - Portrait en Blanco y Negro" 
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c7103c247953569.69e6cbd1b26e5.jpg"
            />
          </div>
        </div>
        <div className="space-y-8">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">THE VISIONARY</span>
          <h2 className="font-headline-lg text-headline-lg text-white">Hola, soy Pablo.</h2>
          <p className="font-body-lg text-body-lg text-white/60 leading-relaxed">
            Desde pequeño siempre tuve un gusto especial por las fotos, pero fue en <span className="text-white font-medium">2018</span> cuando todo cambió. Estaba en la boda de unos amigos y sentí la necesidad imperiosa de capturar lo que estaba pasando. 
            Logré una fotografía que a ellos les encantó; al ver su reacción, sentí una emoción completamente nueva. 
            Desde ese día, mi pasión no ha dejado de crecer. 
            Hoy, mi misión es entregarte esa misma emoción a ti, contando la historia de tu día especial de una manera única.
          </p>
        </div>
      </div>
    </section>
  );
}
