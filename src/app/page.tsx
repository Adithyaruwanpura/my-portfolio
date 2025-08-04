import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundCanvas from '@/components/BackgroundCanvas';
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBot from '@/components/FloatingBot';


export default function Home() {
  return (
    <main>
           
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      <FloatingBot />
    </main>
  );
}