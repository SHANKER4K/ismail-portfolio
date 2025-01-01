"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-gray-300 text-sm sm:text-base">medjahdiismail1998@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-gray-300 text-sm sm:text-base">Your Phone Number</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-gray-300 text-sm sm:text-base">Your Location</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none text-sm sm:text-base text-neutral-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none text-sm sm:text-base text-neutral-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none text-sm sm:text-base text-neutral-900 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
