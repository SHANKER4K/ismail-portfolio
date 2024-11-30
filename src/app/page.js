import "./globals.css"
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
