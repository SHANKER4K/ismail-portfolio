"use client";
import React from "react";
import { TextEffect } from "@/components/ui/text-effect";

function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-popover ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-4">
            <TextEffect per="word" preset="fade">
              I'm a passionate Front-end Developer with a keen eye for creating
              engaging and responsive web applications. My journey in web
              development started with a curiosity for building beautiful user
              interfaces and has evolved into a professional pursuit of creating
              seamless user experiences.
            </TextEffect>
            <TextEffect per="char" preset="fade">
              I specialize in modern web technologies and frameworks, with a
              particular focus on React and Next.js. My approach combines
              technical expertise with creative problem-solving to deliver
              solutions that not only look great but also perform excellently.
            </TextEffect>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-2 sm:space-y-3 ">
              <li className="flex items-center space-x-2">
                <span className="text-sky-500">▹</span>
                <span>Based in Algeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sky-500">▹</span>
                <span>3+ years of development experience</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sky-500">▹</span>
                <span>Specialized in React & Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sky-500">▹</span>
                <span>Always learning new technologies</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sky-500">▹</span>
                <span>Learning Artificial Intelligence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
