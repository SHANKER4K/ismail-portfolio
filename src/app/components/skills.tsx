"use client";
import React from "react";
import { useState, useEffect } from "react";
function Skills() {
  const skills = {
    Frontend: [
      { name: "React", level: 75 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 70 },
      { name: "Tailwind CSS", level: 80 },
    ],
    Backend: [
      { name: "Node.js", level: 50 },
      { name: "Next.js", level: 50 },
      { name: "Express.js", level: 30 },
      { name: "PostgreSQL", level: 50 },
      { name: "Drizzle", level: 60 },
      { name: "RESTful APIs", level: 65 },
    ],
    "Tools & Others": [
      { name: "Git", level: 60 },
      { name: "VS Code", level: 90 },
      { name: "Responsive Design", level: 70 },
      { name: "UI/UX Design", level: 50 },
    ],
  };
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(2082);
  }, []);
  return (
    <section id="skills" className="py-12 sm:py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                {category}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className=" text-sm sm:text-base font-bold">
                        {skill.name}
                      </span>
                      <span className=" text-sm sm:text-base translate-all duration-75 ease-in-out">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full  rounded-full h-2 sm:h-2.5">
                      <div
                        className="bg-primary h-2 sm:h-2.5 rounded-full transition-all duration-500"
                        style={{
                          width: `${
                            value < skill.level ? value : skill.level
                          }%`,
                        }}
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
