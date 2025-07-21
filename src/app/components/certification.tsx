"use client";
import React from "react";

function Certification() {
  const certifications = [
    {
      title: "Full-Stack Web Development With Next.js",
      issuer: "NextJs",
      date: "Issued: Jan 2025",
      link:
        "https://nextjs.org/learn/certificate?course=dashboard-app&user=35891&certId=dashboard-app-35891-1752574553793",
    },
    {
      title: "Front End Development with React",
      issuer: "Hacker Rank",
      date: "Issued: 02 Jun, 2025",
      link: "https://www.hackerrank.com/certificates/6dcc1b4912ed",
    },
  ];

  return (
    <section id="certifications" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Certifications
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-popover p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
