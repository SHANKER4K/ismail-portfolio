"use client";
import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Free lancer",
      period: "2024 - present",
      description: [
        "Developed and maintained responsive web applications using React and Next.js",
        "Optimized application performance and loading times",
      ]
    },
  ];

  const education = [
    {
      title: "JS Problem Solver",
      company: "",
      period: "2022 - 2023",
      description: [
        "Solving JavaScript problems",
        "4Kyu on CodeWars",
      ]
    },
    {
      title: "Vanilla JS Developer",
      company: "",
      period: "2023 - 2024",
      description: [
        "Making simple projects with Vanilla JS",
        "Optimized application performance and loading times",
        "Problem solving and debugging"
      ]
    },
    {
      title: "Backend Developer",
      company: "Free lancer",
      period: "2024 - Present",
      description: [
        "Still studying backend development",
      ]
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience & Education</h2>
        
        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Work Experience</h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-sky-500">
                <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-0"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-neutral-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-sm text-neutral-500 dark:text-gray-500">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Education</h3>
          <div className="space-y-12">
            {education.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-sky-500">
                <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-0"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-neutral-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-sm text-neutral-500 dark:text-gray-500">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
