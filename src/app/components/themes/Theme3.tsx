"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { portfolio } from "@/data/portfolio";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface ColorSet {
  bg: string;
  surface: string;
  khaki: string;
  olive: string;
  sage: string;
  brown: string;
  initial: string;
}

const lightColors: ColorSet = {
  bg: "#eff1ed",
  surface: "#ffffff",
  khaki: "#373d20",
  olive: "#717744",
  sage: "#bcbd8b",
  brown: "#766153",
  initial: "#373d20",
};

const darkColors: ColorSet = {
  bg: "#1a1612",
  surface: "#25221c",
  khaki: "#e0d8c8",
  olive: "#a09870",
  sage: "#7a7a5a",
  brown: "#b8aa9a",
  initial: "#d4ccb8",
};

/** A tiny seal-like toggle: sun or moon inside a bordered circle */
function ThemeToggle({ colors }: { colors: ColorSet }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105"
      style={{
        borderColor: colors.olive + "60",
        color: colors.olive,
        backgroundColor: colors.surface,
      }}
      aria-label="Toggle theme"
    >
      <span className="w-4 h-4">
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
      <span className="hidden sm:inline">{isDark ? "dark" : "light"}</span>
    </button>
  );
}

export default function Theme3() {
  const { theme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  const containerRef = useRef<HTMLDivElement>(null);
  const initialRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ann1Ref = useRef<HTMLParagraphElement>(null);
  const ann2Ref = useRef<HTMLParagraphElement>(null);
  const ann3Ref = useRef<HTMLParagraphElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  const {
    social,
    name,
    role,
    summary,
    skills,
    projects,
    experience,
    certifications,
    education,
    location,
  } = portfolio;

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(initialRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      tl.from(
        [ann1Ref.current, ann2Ref.current, ann3Ref.current],
        {
          x: (i: number) => (i % 2 === 0 ? -30 : 30),
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        },
        "-=0.3",
      );

      tl.from(titleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");

      const sections = [
        aboutRef,
        skillsRef,
        projectsRef,
        experienceRef,
        certRef,
      ];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });
    },
    { scope: containerRef },
  );

  const border = (c: keyof ColorSet, alpha = "30") => colors[c] + alpha;

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: colors.bg, color: colors.khaki }}
    >
      {/* ============ THEME TOGGLE (fixed top-right) ============ */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle colors={colors} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* ============ HERO ============ */}
        <section id="hero" className="flex min-h-screen items-center pb-20">
          <div className="w-full">
            {/* Manuscript page header */}
            <div className="mb-12 flex items-center gap-3 md:mb-16">
              <div
                className="h-px flex-1"
                style={{ backgroundColor: border("olive") }}
              />
              <span
                className={`${jetbrains.className} text-xs uppercase tracking-[0.3em]`}
                style={{ color: colors.olive }}
              >
                folio i
              </span>
              <div
                className="h-px flex-1"
                style={{ backgroundColor: border("olive") }}
              />
            </div>

            <div className="flex flex-col items-start md:flex-row md:gap-16">
              {/* LEFT: Illuminated Initial */}
              <div className="relative mb-12 flex justify-center md:mb-0 md:w-1/2 md:justify-start">
                <div className="relative inline-block">
                  {/* Corner ornament frame */}
                  <div
                    className="absolute inset-0 border"
                    style={{ borderColor: colors.khaki + "15" }}
                  />
                  <div
                    className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2"
                    style={{ borderColor: colors.khaki }}
                  />
                  <div
                    className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2"
                    style={{ borderColor: colors.khaki }}
                  />
                  <div
                    className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2"
                    style={{ borderColor: colors.khaki }}
                  />
                  <div
                    className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2"
                    style={{ borderColor: colors.khaki }}
                  />
                  <div
                    className="absolute left-4 right-4 top-3 bottom-3 border"
                    style={{ borderColor: colors.olive + "15" }}
                  />

                  <span
                    ref={initialRef}
                    className={`${playfair.className} block px-4 text-[180px] leading-none font-black md:text-[280px] transition-colors duration-500`}
                    style={{ color: colors.initial }}
                  >
                    I
                  </span>
                </div>

                {/* Marginal Annotations */}
                <p
                  ref={ann1Ref}
                  className={`${jetbrains.className} absolute -left-28 top-12 hidden rotate-[-2deg] text-xs opacity-0 md:block`}
                  style={{ color: colors.brown }}
                >
                  self-taught ←
                </p>
                <p
                  ref={ann2Ref}
                  className={`${jetbrains.className} absolute -right-36 top-32 hidden rotate-[1deg] text-xs opacity-0 md:block`}
                  style={{ color: colors.brown }}
                >
                  → Attention Is All You Need
                </p>
                <p
                  ref={ann3Ref}
                  className={`${jetbrains.className} absolute -left-24 bottom-8 hidden rotate-[1.5deg] text-xs opacity-0 md:block`}
                  style={{ color: colors.olive }}
                >
                  AraBERT fine-tune ✓
                </p>
              </div>

              {/* RIGHT: Title block */}
              <div ref={titleRef} className="md:w-1/2">
                <p
                  className={`${jetbrains.className} mb-4 text-xs uppercase tracking-[0.2em]`}
                  style={{ color: colors.olive }}
                >
                  {role}
                </p>
                <h1
                  className={`${playfair.className} mb-6 text-4xl font-bold leading-tight md:text-6xl transition-colors duration-500`}
                  style={{ color: colors.khaki }}
                >
                  Ismail
                  <br />
                  Medjahdi
                </h1>
                <div
                  className="mb-6 h-0.5 w-16 transition-colors duration-500"
                  style={{ backgroundColor: colors.olive }}
                />
                <p
                  className={`${inter.className} max-w-md text-base leading-relaxed md:text-lg transition-colors duration-500`}
                  style={{ color: colors.brown }}
                >
                  {summary}
                </p>
                <div className="mt-8 flex gap-6">
                  {Object.entries(social)
                    .filter(([k]) => k !== "email")
                    .map(([name, url]) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${jetbrains.className} text-sm underline underline-offset-4 decoration-1 transition-colors duration-300`}
                        style={{
                          color: colors.olive,
                          textDecorationColor: colors.olive,
                        }}
                      >
                        {name}.↗
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section
          id="about"
          className="mb-24 border-t pt-16 md:mb-32 md:pt-24"
          style={{ borderColor: border("olive") }}
        >
          <div ref={aboutRef} className="flex flex-col gap-10 md:flex-row">
            <div className="md:w-2/5">
              <p
                className={`${jetbrains.className} mb-2 text-xs uppercase tracking-[0.15em]`}
                style={{ color: colors.olive }}
              >
                chapter i
              </p>
              <h2
                className={`${playfair.className} text-3xl font-bold md:text-4xl transition-colors duration-500`}
                style={{ color: colors.khaki }}
              >
                About
              </h2>
              <div
                className="mt-4 h-0.5 w-12 transition-colors duration-500"
                style={{ backgroundColor: colors.sage }}
              />
            </div>
            <div className="md:w-3/5">
              <p
                className={`${inter.className} mb-8 text-base leading-relaxed md:text-lg transition-colors duration-500`}
                style={{ color: colors.brown }}
              >
                {summary}
              </p>
              <div
                className="space-y-4 border-l-2 pl-4 transition-colors duration-500"
                style={{ borderColor: colors.sage }}
              >
                <div className="flex gap-2">
                  <span
                    className={`${jetbrains.className} shrink-0 text-xs`}
                    style={{ color: colors.olive }}
                  >
                    education:
                  </span>
                  <span
                    className={`${inter.className} text-sm`}
                    style={{ color: colors.brown }}
                  >
                    {education.degree}, {education.school} ({education.year})
                  </span>
                </div>
                <div className="flex gap-2">
                  <span
                    className={`${jetbrains.className} shrink-0 text-xs`}
                    style={{ color: colors.olive }}
                  >
                    location:
                  </span>
                  <span
                    className={`${inter.className} text-sm`}
                    style={{ color: colors.brown }}
                  >
                    {location}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span
                    className={`${jetbrains.className} shrink-0 text-xs`}
                    style={{ color: colors.olive }}
                  >
                    note:
                  </span>
                  <span
                    className={`${inter.className} text-sm italic`}
                    style={{ color: colors.brown }}
                  >
                    {education.note}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section
          id="skills"
          className="mb-24 border-t pt-16 md:mb-32 md:pt-24"
          style={{ borderColor: border("olive") }}
        >
          <div ref={skillsRef}>
            <p
              className={`${jetbrains.className} mb-2 text-xs uppercase tracking-[0.15em]`}
              style={{ color: colors.olive }}
            >
              appendix a
            </p>
            <h2
              className={`${playfair.className} mb-10 text-3xl font-bold md:text-4xl transition-colors duration-500`}
              style={{ color: colors.khaki }}
            >
              Reference
            </h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3
                    className={`${playfair.className} mb-2 text-lg italic transition-colors duration-500`}
                    style={{ color: colors.olive }}
                  >
                    {category}
                  </h3>
                  <p
                    className={`${jetbrains.className} text-sm leading-loose transition-colors duration-500`}
                    style={{ color: colors.brown }}
                  >
                    {skillList.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section
          id="projects"
          className="mb-24 border-t pt-16 md:mb-32 md:pt-24"
          style={{ borderColor: border("olive") }}
        >
          <div ref={projectsRef}>
            <p
              className={`${jetbrains.className} mb-2 text-xs uppercase tracking-[0.15em]`}
              style={{ color: colors.olive }}
            >
              folio ii–vi
            </p>
            <h2
              className={`${playfair.className} mb-10 text-3xl font-bold md:text-4xl transition-colors duration-500`}
              style={{ color: colors.khaki }}
            >
              Works
            </h2>
            <div className="space-y-10">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border-t pt-6 transition-colors duration-500"
                  style={{ borderColor: colors.sage }}
                >
                  <h3
                    className={`${playfair.className} mb-2 text-xl font-bold md:text-2xl transition-colors duration-500`}
                    style={{ color: colors.khaki }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${inter.className} mb-4 text-sm leading-relaxed md:text-base transition-colors duration-500`}
                    style={{ color: colors.brown }}
                  >
                    {project.description}
                  </p>
                  <p
                    className={`${jetbrains.className} mb-3 text-xs`}
                    style={{ color: colors.olive }}
                  >
                    stack: {project.technologies.join(", ")}
                  </p>
                  <div className="flex gap-4 text-xs">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${jetbrains.className} underline underline-offset-4 transition-colors duration-300`}
                        style={{
                          color: colors.olive,
                          textDecorationColor: colors.olive,
                        }}
                      >
                        → live
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${jetbrains.className} underline underline-offset-4 transition-colors duration-300`}
                        style={{
                          color: colors.olive,
                          textDecorationColor: colors.olive,
                        }}
                      >
                        → source
                      </a>
                    )}
                    {project.hugginfaceLink && (
                      <a
                        href={project.hugginfaceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${jetbrains.className} underline underline-offset-4 transition-colors duration-300`}
                        style={{
                          color: colors.olive,
                          textDecorationColor: colors.olive,
                        }}
                      >
                        → huggingface
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section
          id="experience"
          className="mb-24 border-t pt-16 md:mb-32 md:pt-24"
          style={{ borderColor: border("olive") }}
        >
          <div ref={experienceRef}>
            <p
              className={`${jetbrains.className} mb-2 text-xs uppercase tracking-[0.15em]`}
              style={{ color: colors.olive }}
            >
              chronology
            </p>
            <h2
              className={`${playfair.className} mb-10 text-3xl font-bold md:text-4xl transition-colors duration-500`}
              style={{ color: colors.khaki }}
            >
              History
            </h2>
            <div className="space-y-0">
              {experience.map((entry, i) => (
                <div key={i}>
                  <div className="flex gap-6 py-5">
                    <span
                      className={`${playfair.className} shrink-0 text-2xl font-bold md:text-3xl transition-colors duration-500`}
                      style={{ color: colors.olive }}
                    >
                      {entry.title}
                    </span>
                    <p
                      className={`${inter.className} text-sm leading-relaxed md:text-base transition-colors duration-500`}
                      style={{ color: colors.brown }}
                    >
                      {typeof entry.content === "string" ? entry.content : ""}
                    </p>
                  </div>
                  {i < experience.length - 1 && (
                    <hr
                      className="border-0 h-px transition-colors duration-500"
                      style={{ backgroundColor: colors.sage + "50" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CERTIFICATIONS ============ */}
        <section
          id="certifications"
          className="mb-24 border-t pt-16 md:mb-32 md:pt-24"
          style={{ borderColor: border("olive") }}
        >
          <div ref={certRef}>
            <p
              className={`${jetbrains.className} mb-2 text-xs uppercase tracking-[0.15em]`}
              style={{ color: colors.olive }}
            >
              appendix b
            </p>
            <h2
              className={`${playfair.className} mb-10 text-3xl font-bold md:text-4xl transition-colors duration-500`}
              style={{ color: colors.khaki }}
            >
              Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="border-l-2 pl-4 transition-colors duration-500"
                  style={{ borderColor: colors.sage }}
                >
                  <h3
                    className={`${playfair.className} mb-1 text-lg font-bold transition-colors duration-500`}
                    style={{ color: colors.khaki }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`${jetbrains.className} mb-1 text-xs`}
                    style={{ color: colors.olive }}
                  >
                    {cert.issuer} — {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${jetbrains.className} text-xs underline underline-offset-4 transition-colors duration-300`}
                    style={{
                      color: colors.brown,
                      textDecorationColor: colors.brown,
                    }}
                  >
                    [verify]
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT (Colophon) ============ */}
        <section
          id="contact"
          className="border-t pt-16 md:pt-24"
          style={{ borderColor: border("olive") }}
        >
          <div className="mx-auto max-w-lg text-center">
            <p
              className={`${jetbrains.className} mb-2 text-xs uppercase tracking-[0.15em]`}
              style={{ color: colors.olive }}
            >
              colophon
            </p>
            <h2
              className={`${playfair.className} mb-8 text-3xl font-bold md:text-4xl transition-colors duration-500`}
              style={{ color: colors.khaki }}
            >
              Contact
            </h2>
            <div className="mb-10 space-y-3">
              <p
                className={`${jetbrains.className} text-sm`}
                style={{ color: colors.brown }}
              >
                <a
                  href={`mailto:${social.email}`}
                  className="underline underline-offset-4 transition-colors duration-300"
                  style={{
                    color: colors.olive,
                    textDecorationColor: colors.olive,
                  }}
                >
                  {social.email}
                </a>
              </p>
              <div className="flex justify-center gap-6">
                {Object.entries(social)
                  .filter(([k]) => k !== "email")
                  .map(([name, url]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${jetbrains.className} text-xs underline underline-offset-4 transition-colors duration-300`}
                      style={{
                        color: colors.olive,
                        textDecorationColor: colors.olive,
                      }}
                    >
                      {name}
                    </a>
                  ))}
              </div>
            </div>

            <div
              className="border-t pt-6 transition-colors duration-500"
              style={{ borderColor: colors.olive + "20" }}
            >
              <p
                className={`${jetbrains.className} text-[10px] leading-relaxed transition-colors duration-500`}
                style={{ color: colors.brown + "80" }}
              >
                © 2025 {name} · {role}
                <br />
                Set in Playfair Display, JetBrains Mono, Inter
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
