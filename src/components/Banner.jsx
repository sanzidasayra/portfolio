import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <section id='home' className=" px-6 py-30 md:py-40 lg:py-40 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
  <h2 className="text-3xl md:text-5xl font-bold text-fuchsia-500 mb-3">
    <span className="text-gray-300">Hi, I'm</span> Mst. Sanzida Akter
  </h2>
  <p className="text-xl text-gray-400 font-semibold mb-3">Frontend Developer</p>
  <p className="text-gray-300 max-w-3xl mb-6 md:mb-8 leading-relaxed">
    Passionate about creating beautiful and functional web applications using React, Tailwind CSS, and modern JavaScript. Dedicated to learning and building scalable, user-friendly solutions.
  </p>

  <div className="flex items-center gap-6 mb-6 md:mb-8 justify-center md:justify-start">
    {/* Social Icons */}
    <a
      href="https://github.com/sanzidasayra"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-fuchsia-500 transition"
      aria-label="GitHub"
    >
      <FaGithub size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/sanzida-sayra/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-fuchsia-500 transition"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={24} />
    </a>
    <a
      href="https://x.com/SayraSanzida"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-fuchsia-500 transition"
      aria-label="Twitter"
    >
      <FaTwitter size={24} />
    </a>
  </div>

  <div className="flex justify-center md:justify-start flex-shrink-0">
  <Link
    className="flex items-center gap-1 bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 focus:border-fuchsia-800 text-white px-12 py-2 rounded-md text-sm font-semibold transition-colors duration-300 md:px-4 md:py-2"

  >
    Resume <FiDownload size={18} />
  </Link>
</div>

</div>
      </motion.div>
    </section>
  );
};

export default Banner;
