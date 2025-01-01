import "./globals.css"
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Contact from "@/app/components/contact";
import ThemeToggle from "@/app/components/theme-toggle";

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
