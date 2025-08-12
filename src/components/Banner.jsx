import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiDownload } from 'react-icons/fi';

const Banner = () => {
  return (
    <section className=" px-6 py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Text Section */}
        <div className="text-center md:text-left ">
          <h2 className="text-3xl md:text-5xl font-bold text-fuchsia-500 mb-3">
            Mst. Sanzida Akter
          </h2>
          <p className="text-xl text-gray-400 font-semibold mb-3">
            Frontend Developer
          </p>
          <p className="text-gray-300 max-w-3xl mb-4">
            Passionate about creating beautiful and functional web applications using React, Tailwind CSS, and modern JavaScript. Dedicated to learning and building scalable, user-friendly solutions.
          </p>
          <div className="hidden md:flex flex-shrink-0">
            <Link
              to="/resume"
              className="flex items-center gap-1 bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 focus:border-fuchsia-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
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
