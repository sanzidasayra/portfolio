import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/sanzidasayra',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/sanzida-sayra/',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={20} />,
      url: 'https://x.com/SayraSanzida',
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-black to-purple-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="group inline-flex items-center gap-2 mb-4 md:mb-0">
            <motion.span
              className="relative font-bold tracking-tight text-white text-lg md:text-xl"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Sanzida
              </span>
              <span className="text-white/60 ml-1">.dev</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-gray-500 via-indigo-500 to-purple-700 transition-all duration-300 group-hover:w-full" />
            </motion.span>
            <motion.span
              className="text-white/70"
              whileHover={{ rotate: 25, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              aria-hidden="true"
            >
              <Sparkles size={14} />
            </motion.span>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sanzida Akter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;