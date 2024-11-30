"use client";
import React from 'react';
import Image from 'next/image';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project. What it does, technologies used, and your role in it.",
      image: "/project1.jpg", // Add your project images to public folder
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col shadow-lg dark:shadow-neutral-800"
            >
              <div className="relative h-48 w-full">
                {/* Add your project images */}
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse"></div>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-gray-300 mb-4 text-sm sm:text-base flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-gray-200 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
