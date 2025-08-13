import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ['home', 'about', 'projects', 'skills', 'education', 'contact'];

  return (
    <nav className="bg-gradient-to-r from-black to-purple-900 text-white fixed w-full z-50 shadow">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center w-full ">
          
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="group inline-flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <motion.span
              className="relative font-bold tracking-tight text-white text-lg md:text-2xl"
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
          </ScrollLink>

          {/* Desktop menu - visible only on lg and up */}
          <div className="hidden lg:flex space-x-8 flex-grow justify-center">
            {menuItems.map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-purple-400 transition cursor-pointer capitalize"
              >
                {item}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop Resume button - visible only on lg and up */}
          <div className="hidden lg:flex flex-shrink-0">
            <button
              type="button"
              onClick={() => console.log("Resume button clicked")}
              className="flex items-center gap-1 bg-zinc-800 border border-fuchsia-900 hover:border-fuchsia-600 focus:border-fuchsia-900 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
            >
              Resume <FiDownload size={18} />
            </button>
          </div>

          {/* Hamburger menu button - visible below lg */}
          <div className="lg:hidden">
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

      {/* Mobile menu dropdown - visible below lg when open */}
      {isOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-purple-700 transition cursor-pointer capitalize"
            >
              {item}
            </ScrollLink>
          ))}

          <button
            type="button"
            onClick={() => console.log("Resume button clicked")}
            className="flex items-center gap-1 bg-zinc-800 border border-fuchsia-900 hover:border-fuchsia-600 focus:border-fuchsia-900 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 w-full"
          >
            Resume <FiDownload size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
