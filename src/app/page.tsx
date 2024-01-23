import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import SocialLink from "./components/SocialLink"
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SocialLink />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}