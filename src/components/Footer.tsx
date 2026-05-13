export default function Footer() {
  return (
    <footer className="bg-black w-full py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-16 max-w-[1440px] mx-auto gap-8">
      <div className="flex items-center gap-4">
        <img src="/logo.png" className="h-10 w-auto opacity-50 grayscale" alt="Firma PZ" />
        <div className="text-lg font-black text-white">PhotoEditsPZ</div>
      </div>
      <div className="text-white/40 font-inter text-[10px] uppercase tracking-[0.2em] font-light text-center">© 2024 PhotoEditsPZ. Fotografía Refinada.</div>
      <div className="flex gap-8">
        <a className="text-white/40 hover:text-white/80 transition-opacity font-inter text-[10px] uppercase tracking-[0.2em]" href="#">Política de Privacidad</a>
        <a className="text-white/40 hover:text-white/80 transition-opacity font-inter text-[10px] uppercase tracking-[0.2em]" href="#">Términos de Servicio</a>
        <a className="text-white/40 hover:text-white/80 transition-opacity font-inter text-[10px] uppercase tracking-[0.2em]" href="#">Instagram</a>
      </div>
    </footer>
  );
}
