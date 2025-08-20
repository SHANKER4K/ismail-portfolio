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
    <main role="main">
      <Navbar />
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <section id="home" aria-labelledby="hero-heading">
        <Hero />
      </section>
      <section id="about" aria-labelledby="about-heading">
        <About />
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <Skills />
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <Experience />
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <Projects />
      </section>
      <section id="certifications" aria-labelledby="certifications-heading">
        <Certification />
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>
    </main>
  );
}
