import React from "react";
import { Tilt } from "@/components/ui/tilt";
function Product({ project }) {
  return (
    <div>
      <Tilt
        rotationFactor={8}
        className={`bg-card rounded-xl border-border`}
        isRevese
      >
        <div className=" rounded-lg overflow-hidden transition-all duration-300 flex flex-col shadow-lg bg-card">
          {/* Placeholder div instead of Image component */}
          <div className="rounded-xl w-full">
            <img src={project.image} />
          </div>

          <div className="p-4 sm:p-6 flex-1 flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {project.title}
            </h3>
            <p className=" mb-4 text-sm sm:text-base flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 sm:px-3 py-1  rounded-full text-xs sm:text-sm bg-accent"
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
      </Tilt>
    </div>
  );
}

export default Product;
