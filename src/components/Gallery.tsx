'use client';
import { useRef } from 'react';

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: number) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  const albums = [
    { id: 'eduardo', title: 'Eduardo & Annet', src: '/assets/wedding_10.jpg' },
    { id: 'alex', title: 'Alex & Edna', src: '/assets/wedding_15.jpg' },
    { id: 'angel', title: 'Angel & Ingrid', src: '/assets/wedding_9.jpg' },
    { id: 'jorge', title: 'Jorge & Kathia', src: '/assets/wedding_6.jpg' },
    { id: 'diego', title: 'Diego & Eunice', src: '/assets/wedding_4.jpg' },
    { id: 'alejandro', title: 'Alejandro & Raquel', src: '/assets/wedding_8.jpg' },
    { id: 'jair', title: 'Jair & Marian', src: '/assets/wedding_7.jpg' }
  ];

  return (
    <section className="py-section-gap bg-black overflow-hidden" id="work">
      <div className="px-margin-page mb-12 flex justify-between items-end">
        <div>
          <span className="font-label-caps text-label-caps text-primary">GALERÍA</span>
          <h2 className="font-headline-lg text-headline-lg text-white">Bodas</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button onClick={() => scrollGallery(-1)} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors">
            <span className="material-symbols-outlined text-white">chevron_left</span>
          </button>
          <button onClick={() => scrollGallery(1)} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors">
            <span className="material-symbols-outlined text-white">chevron_right</span>
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-gutter overflow-x-auto hide-scrollbar px-margin-page snap-x">
        {albums.map((album) => (
          <div key={album.id} className="flex-none w-[315px] aspect-[4/5] snap-center group relative overflow-hidden rounded-2xl border-2 border-primary/20 cursor-pointer transition-all hover:border-primary/50">
            <img className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" src={album.src} alt={album.title} />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="font-label-caps text-white/60 mb-2 text-[8px] tracking-[0.3em]">COLECCIÓN</span>
              <h3 className="font-display-xl text-2xl text-white mb-3">{album.title}</h3>
              <div className="w-6 h-0.5 bg-primary mb-3 transition-all group-hover:w-12"></div>
              <p className="font-body-md text-white/40 italic text-[10px]">Explorar historia</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
