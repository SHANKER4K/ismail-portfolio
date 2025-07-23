"use client";
import React from "react";
import { TextEffect } from "@/components/ui/text-effect";

function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-popover ">
      <div className="container flex flex-wrap lg:flex-nowrap gap-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="min-w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
            About Me
          </h2>
          <div className="space-y-4">
            <p>
              I'm a passionate Full-Stack Developer specializing in building
              end-to-end web applications. From crafting intuitive user
              interfaces to designing robust backend systems, I bring ideas to
              life with modern technologies and best practices.
            </p>
            <p>
              My expertise spans both frontend and backend development, with
              proficiency in React, Next.js, and database management. I thrive
              on solving complex problems and creating scalable solutions that
              deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="space-y-4 min-w-1/2">
          <h2 className="text-3xl sm:text-2xl font-semibold mb-4">
            Quick Facts
          </h2>
          <ul className="space-y-2 sm:space-y-3 ">
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>Based in Algeria</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>3+ years of full-stack development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>Problem Solver</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>Frontend: React, Next.js, TypeScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>Backend: Node.js, Express, APIs</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>Database: MongoDB, PostgreSQL, MySQL</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">▹</span>
              <span>Learning Artificial Intelligence</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
