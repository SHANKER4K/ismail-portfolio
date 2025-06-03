"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TextEffect } from "@/components/ui/text-effect";

function Hero() {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fancyVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: () => ({
        opacity: 0,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: 0.3,
        color: getRandomColor(),
      }),
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        color: getRandomColor(),
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    },
  };
  const socials = [
    {
      name: "LinkedIn",
      logo: <FaLinkedin className="w-6 h-8" />,
      link: "https://www.linkedin.com/in/shan-ker-826a10257/",
    },
    {
      name: "X",
      logo: <FaSquareXTwitter className="w-6 h-8" />,
      link: "https://x.com/IsmailMedjahdi",
    },
    {
      name: "Mail",
      logo: <Mail className="w-6 h-8" />,
      link: "mailto:medjahdiismail1998@gmail.com",
    },
  ];
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col gap-10 justify-start max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Presentation */}
        <div className="flex relative -left-5 rounded-full w-fit py-2 px-5 items-center text-center  font-poppins">
          <div className="animate-pulse h-3 w-3 bg-emerald-400 rounded-full text-center"></div>
          <div className="">&nbsp; Online.</div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl">
          <p className="font-extrabold">
            Hey, I'm{" "}
            <span className="underline decoration-sky-500">Ismail</span>
          </p>
          <TextEffect per="word" variants={fancyVariants}>
            Front-end Developer.
          </TextEffect>
        </div>
        <div className="flex flex-wrap gap-2">
          {socials.map((val) => (
            <a key={val.name} href={val.link} target="_blank">
              <div
                className={`flex items-center font-bold  gap-2 px-5 py-3 rounded-full hover:bg-primary transition-colors`}
              >
                {val.logo}
                {val.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
