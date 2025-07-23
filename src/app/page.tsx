import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Certification from "./components/certification";
import Contact from "./components/contact";
import { ModeToggle } from "@/app/components/theme-toggle";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <section id="home">
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Experience />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section>
        <Certification />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </main>
  );
}
