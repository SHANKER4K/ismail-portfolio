"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import MyForm from "@/app/components/form";

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16">
          {/* Contact Information */}
          <div className="w-full md:w-2/5 mb-10 md:mb-0">
            <div className="bg-background p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-8 border-b pb-4 border-muted">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-x-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:medjahdiismail1998@gmail.com"
                      className="text-base sm:text-lg hover:text-primary transition-colors"
                    >
                      medjahdiismail1998@gmail.com
                    </a>
                  </div>
                </div>



                <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-x-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <span className="text-base sm:text-lg">Algeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-3/5">
            <div className="bg-background p-6 md:p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-8 border-b pb-4 border-muted">
                Social Media
              </h3>
              <div className="flex">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
                  <a
                    href="https://github.com/SHANKER4K/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </div>
                    <span className="font-medium">GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/medjahdi-ismail-826a10257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <span className="font-medium">LinkedIn</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
