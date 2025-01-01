"use client";
import React, { useState } from 'react'
import { Mail } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
    const socials = [
        {
            name: "LinkedIn",
            logo: <FaLinkedin className='w-6 h-8' />,
            link: "https://www.linkedin.com/in/shan-ker-826a10257/"
        },
        {
            name: "X",
            logo: <FaSquareXTwitter className='w-6 h-8' />,
            link: "https://x.com/IsmailMedjahdi"
        },
        {
            name: "Mail",
            logo: <Mail className='w-6 h-8' />,
            link: "mailto:medjahdiismail1998@gmail.com"
        }
    ]
    return (
        <div className='flex justify-center py-20'>
            <div className='flex flex-col gap-10 justify-start max-w-3xl px-4 sm:px-6 lg:px-8'>
                {/* Presentation */}
                <div className='flex relative -left-5 rounded-full w-fit py-2 px-5 items-center bg-neutral-100 dark:bg-neutral-800 font-poppins'>
                    <div className='animate-pulse h-3 w-3 bg-emerald-400 rounded-full text-center'>
                    </div>
                    <div className="">
                        &nbsp;
                        Online.
                    </div>
                </div>
                <div className='text-3xl sm:text-4xl md:text-5xl'>
                    <p className='font-extrabold'>
                        Hey, I'm <span className='underline decoration-sky-500'>Ismail</span>
                    </p>
                    <p className='font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 to-red-300'>
                        Front-end Developer.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        socials.map((val) => (
                            <a key={val.name} href={val.link} target="_blank">
                                <div className={`flex items-center font-bold bg-neutral-100 dark:bg-neutral-800 gap-2 px-5 py-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors`}>
                                    {val.logo}
                                    {val.name}
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero