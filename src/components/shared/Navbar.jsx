import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black to-purple-900 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold cursor-pointer">
            <Link to="/">MyPortfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
