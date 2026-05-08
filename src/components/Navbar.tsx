export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/15 bg-black/60 backdrop-blur-[20px] shadow-2xl shadow-black/50 flex justify-between items-center px-8 h-14 z-50">
      <div className="text-xl font-bold tracking-tighter text-white cursor-pointer">PhotoEditsPZ</div>
      <div className="hidden md:flex gap-8 items-center">
        <a className="font-inter text-sm font-medium tracking-tight text-white border-b border-white pb-0.5 hover:text-white transition-all duration-400 ease-in-out" href="#work">
          Trabajos
        </a>
        <a className="font-inter text-sm font-medium tracking-tight text-white/60 hover:text-white transition-all duration-400 ease-in-out" href="#about">
          Sobre Mí
        </a>
        <a className="font-inter text-sm font-medium tracking-tight text-white/60 hover:text-white transition-all duration-400 ease-in-out" href="#pricing">
          Planes
        </a>
        <a className="font-inter text-sm font-medium tracking-tight text-white/60 hover:text-white transition-all duration-400 ease-in-out" href="#contact">
          Contacto
        </a>
      </div>
      <button className="bg-primary-container text-on-primary-container px-5 py-2 rounded-full font-inter text-sm font-medium scale-95 active:scale-90 transition-transform">
        Comenzar
      </button>
    </nav>
  );
}
