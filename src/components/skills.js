"use client";
import React from 'react';

function Skills() {
  const skills = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ],
    "Tools & Others": [
      { name: "Git", level: 30 },
      { name: "VS Code", level: 90 },
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Design", level: 50 }
    ]
  };

  return (
    <section id="skills" className="py-12 sm:py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">{category}</h3>
              <div className="space-y-4 sm:space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-700 dark:text-gray-300 text-sm sm:text-base">{skill.name}</span>
                      <span className="text-neutral-500 dark:text-gray-400 text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 sm:h-2.5">
                      <div
                        className="bg-sky-500 h-2 sm:h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
