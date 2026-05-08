export default function Gallery() {
  const weddingPhotos = [
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5a93a2247953341.69e6c99332ead.jpg", width: "w-[400px]", aspect: "aspect-[3/4]" },
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a2cf2247953569.69e6cbd1b048b.jpg", width: "w-[600px]", aspect: "aspect-[16/9]" },
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/bf8de1247953341.69e6c993337ed.jpg", width: "w-[400px]", aspect: "aspect-[3/4]" },
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c7103c247953569.69e6cbd1b26e5.jpg", width: "w-[600px]", aspect: "aspect-[16/9]" },
  ];

  return (
    <section className="py-section-gap bg-black overflow-hidden" id="work">
      <div className="px-margin-page mb-12 flex justify-between items-end">
        <div>
          <span className="font-label-caps text-label-caps text-primary">GALERÍA</span>
          <h2 className="font-headline-lg text-headline-lg text-white">Bodas</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors group">
            <span className="material-symbols-outlined text-white/60 group-hover:text-white transition-colors">chevron_left</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors group">
            <span className="material-symbols-outlined text-white/60 group-hover:text-white transition-colors">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex gap-gutter overflow-x-auto hide-scrollbar px-margin-page snap-x">
        {weddingPhotos.map((photo, idx) => (
          <div 
            key={idx} 
            className={`flex-none ${photo.width} ${photo.aspect} snap-center group relative overflow-hidden rounded-xl border border-white/5`}
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={photo.src} 
              alt={`Wedding moment ${idx + 1}`} 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 backdrop-blur-[2px]">
              <span className="font-label-caps text-label-caps text-white">GALERÍA</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
