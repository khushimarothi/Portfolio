import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import SocialLink from "./components/SocialLink"
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <SocialLink />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
