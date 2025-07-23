"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import codewars1 from "@/app/assets/codewars1.png";
import codewars2 from "@/app/assets/codewars2.png";

export default function TimelineDemo() {
  const images = [codewars1, codewars2]
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Began Computer Science studies focusing on foundational programming
            languages (C/C++) with emphasis on data structures, algorithms, and
            problem-solving methodologies.
          </p>
          <div className="flex md:flex-wrap lg:flex-row w-fit h-fit gap-4">
            {
              images.map((image, index) => (

                <Image
                  key={index}
                  src={image}
                  alt="CodeWars problem solving progress"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                />
              )
              )
            }
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Transitioned to JavaScript development, building foundational web
            applications while continuing to strengthen algorithmic
            problem-solving skills through CodeWars challenges.
          </p>
        </div>
      ),
    },
    {
      title: "2024-2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Advanced to modern web development using React.js and Next.js
            frameworks. Developed proficiency in Git version control and
            established GitHub presence. Key projects include:
          </p>
          <div className="mb-8"></div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ iPhone 15 Pro Max UI Clone - React.js with GSAP animations
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Real-time Chat Application - React.js with WebSocket integration
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Full-stack E-commerce Platform - Complete shopping solution
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Admin dashboard for Riwaqi - Next.js with Tailwind CSS
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ AI-powered Tic-Tac-Toe Game - JavaScript with minimax algorithm
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Professional Portfolio Website - Next.js with modern UI
            components
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
