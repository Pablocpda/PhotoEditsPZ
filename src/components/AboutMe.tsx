export default function AboutMe() {
  return (
    <section className="py-section-gap px-margin-page bg-black" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="relative group order-2 md:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="A professional close-up portrait of a photographer in a dark studio environment"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhZGa0AMJ7_if4d4ouos6zPsY74vo9n5N8HUTFgSVr9E_2QDlI5xpwWgfa2OFbARDtFNoV9AErsLIdtpi0-MhAnkQnnAb6U39Gz-XMhca3FD58Ffq5mT6zU35xDx76Nj5hRPwo3n4kt0azmoPpXrcVepJyiZnlJmgMknsbfIdWJRIPatmN06gPEYIG-wJtPQ0boAVEEkrGmTCzlMsS4ms5dTS3FCfifnbtptDnnzptCegSt4PCePGSVFOvCFqj-PWdQSvGB902KBg"
            />
          </div>
        </div>
        <div className="space-y-8 order-1 md:order-2">
          <span className="font-label-caps text-label-caps text-primary">THE VISIONARY</span>
          <h2 className="font-headline-lg text-headline-lg text-white">Hola, soy Pablo.</h2>
          <p className="font-body-lg text-body-lg text-white/60">
            Desde pequeño siempre tuve un gusto especial por las fotos, pero fue en 2018 cuando todo cambió. Estaba en la boda de unos amigos y sentí la necesidad imperiosa de capturar lo que estaba pasando. Logré una fotografía que a ellos les encantó; al ver su reacción, sentí una emoción completamente nueva. Desde ese día, mi pasión no ha dejado de crecer. Hoy, mi misión es entregarte esa misma emoción a ti, contando la historia de tu día especial de una manera única.
          </p>
        </div>
      </div>
    </section>
  );
}
