import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black to-purple-900 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center w-full">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <motion.span
              className="relative font-bold tracking-tight text-white text-lg md:text-2xl"
              initial={false}
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
              <Sparkles size={16} />
            </motion.span>
          </Link>

          <div className="hidden md:flex space-x-8 flex-grow justify-center">
            <Link to="/about" className="hover:text-purple-400 transition">
              About
            </Link>
            <Link to="/projects" className="hover:text-purple-400 transition">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-purple-400 transition">
              Skills
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <Link
  to="/resume"
  className="flex items-center gap-1 bg-zinc-800 border border-fuchsia-900 hover:border-fuchsia-600 focus:border-fuchsia-900 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
>
  Resume <FiDownload size={18} />
</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-3xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-purple-700 transition"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Contact
          </Link>
          <Link
            to="/resume"
            onClick={() => setIsOpen(false)}
           className="flex items-center gap-1 bg-zinc-800 border border-fuchsia-900 hover:border-fuchsia-600 focus:border-fuchsia-900 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
          >
            Resume <FiDownload size={18} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
