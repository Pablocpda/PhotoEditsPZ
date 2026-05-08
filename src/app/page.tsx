import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Moments from "@/components/Moments";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Moments />
      <Workflow />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
