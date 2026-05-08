export default function Moments() {
  const moments = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX3__r7ia5YTJXZCGz0FkdZsVd4wvOzeEyVQJ96wbPvWDgiZ0rfTmTpAcWOi6bndjqzTvTOvtxihIVqbcuID0Ve5lSmj1D8H7DG2KJR6RHzCiUpp_agkjcxYViTol4_tsGNtnonEUEh2baLapEHJySHDxgKXpM68Nx3ginl_KN8_i081IxvPIsM22RJQlSWnSrUajXYAYKMgzyX1XsiPKUD4F46zMOKMfcodeXH4zlCCaZdX1BUPTA7wn7F1UMmCWKFfmpUF_9ifo",
      alt: "Calle nocturna cinemática"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLECTXhn96pe2yhFtPNncz3tA3tkedcDhhh5qPoKZBfMzqlbl_CeGe2aHhfxeWAkfEcPFQcGsH5BdhXMmH01b3-G7hwqyIiaAnwYH7i83JpC0V26jcqUr0P9B0UpYDOe1ORrj_bd4g6Ka-Sbn37YRkK_dU2QSU2bopng5DSEHIywicUkSJroKK7_1qNC1vHac36zHPNfsARd3v0R-KUd_OTxcQvmUmi3kfm_wo-DkXQvAbDGp1gcZ7L2XKLyawJjB7ZBYx7XTeS-w",
      alt: "Lago al amanecer"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxP-dwPvDE3w2U2junyI7GOwGcHjHrgotM6px_uEZ-_UBUKt5wo4XjzS_uBNoM80LP66FPVFni8n5OloKhxgbimdPbUux4fZS776vJ1wghpXQ8sfT0RxNoWlq91A-ROxTpDo7oKbDcRJCLzZcKxpCI8-Z1dyH7guDyW7AiSomkvUtSd2KpwyBNGns5HRuTUQprpluav8ZdnNVxOP5rWO4anivVXz9b1L-8uXQVONCIXuFhTv9cILkIeYbT5AFEEXIf6octsN92l6w",
      alt: "Arquitectura abstracta"
    }
  ];

  return (
    <section className="py-section-gap px-margin-page bg-black">
      <div className="mb-12">
        <span className="font-label-caps text-label-caps text-primary">TRABAJOS RECIENTES</span>
        <h2 className="font-headline-lg text-headline-lg text-white">Momentos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {moments.map((moment, idx) => (
          <div key={idx} className="aspect-square glass-card rounded-xl overflow-hidden group border border-white/5">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src={moment.src} 
              alt={moment.alt} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
