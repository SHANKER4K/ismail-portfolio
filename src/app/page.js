import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Certification from "./components/certification";
import Contact from "./components/contact";
import { ModeToggle } from "@/app/components/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certification />
      <Contact />
    </main>
  );
}
