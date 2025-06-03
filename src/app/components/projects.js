"use client";
import React from "react";
import Product from "./Product";
function Projects() {
  const projects = [
    {
      title: "XO",
      description: "Tic Tac Toe game i built it for fun while learning AI.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://xo-one-sepia.vercel.app",
      githubLink: "https://github.com/SHANKER4K/XO",
      image: "https://i.ibb.co/4Vqx3ZV/image.png",
    },
    {
      title: "Riwaqi",
      description: "E-Commerce Web Site.",
      technologies: ["NextJS", "Tailwind CSS", "Postgres", "Drizzle"],
      liveLink: "https://riwaqi-git-master-shanker4ks-projects.vercel.app/",
      githubLink: "https://github.com/SHANKER4K/",
      image: "https://i.ibb.co/xKJZv87H/image.jpg",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-popover">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Product key={project.title + `-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
