/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative py-20 md:py-40 text-center overflow-hidden flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center gap-8 relative z-10"
        >
          {/* Text Section */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-fuchsia-500 mb-3">
              <span className="text-gray-300 block sm:inline">Hi, I'm</span> Mst. Sanzida Akter
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-semibold mb-3">Frontend Developer</p>
            <p className="text-gray-300 max-w-full sm:max-w-3xl mb-6 md:mb-8 leading-relaxed px-2 sm:px-0">
              Passionate about creating beautiful and functional web applications using React, Tailwind CSS, and modern JavaScript. Dedicated to learning and building scalable, user-friendly solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8 justify-center md:justify-start">
              <a href="https://github.com/sanzidasayra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-500 transition" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sanzida-sayra/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-500 transition" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/SayraSanzida" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-500 transition" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>

            <div className="flex justify-center md:justify-start flex-shrink-0">
              <Link className="flex items-center gap-1 bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 focus:border-fuchsia-800 text-white px-6 sm:px-12 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors duration-300">
                Resume <FiDownload size={18} />
              </Link>
            </div>
          </div>

          {/* Right Side Floating Shapes */}
          <div className="flex flex-1 justify-center relative w-full mt-10 md:mt-0">
            {/* Floating gradient circle 1 */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full opacity-40 sm:opacity-50 md:opacity-60 blur-2xl sm:blur-2xl md:blur-3xl top-4 sm:top-10 md:top-16 right-4 sm:right-10 md:right-16"
            />
            {/* Floating gradient circle 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-30 sm:opacity-40 md:opacity-50 blur-xl sm:blur-2xl md:blur-2xl bottom-4 sm:bottom-16 md:bottom-16 left-4 sm:left-16 md:left-16"
            />
            {/* Floating gradient circle 3 */}
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-16 sm:w-24 md:w-24 h-16 sm:h-24 md:h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-25 sm:opacity-35 md:opacity-40 blur-lg sm:blur-xl md:blur-xl top-16 sm:top-32 md:top-32 right-8 sm:right-32 md:right-32"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
