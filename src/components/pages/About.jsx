import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import img from '../../assets/img.jpg';

const About = () => {
  return (
    <section className=" px-6 py-16 flex flex-col md:flex-row  items-center gap-40 border rounded-3xl shadow-2xl ">
      
      {/* Left: Photo */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="border-4 bg-zinc-800 border-fuchsia-900 transition-transform transform hover:scale-105 rounded-3xl">
          <img
            src={img}
            alt="Sanzida Akter"
            className="w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Right: Info */}
      <motion.div
        className="text-center md:text-left flex-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-500 mb-6 relative inline-block">
          About Me
          <span className="absolute -bottom-1 left-0 lg:w-sm w-45 md:w-60 h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full" />
        </h2>

        <p className="text-xl text-gray-400 font-semibold mb-6">Frontend Developer</p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
          I’m currently pursuing a web development course at Programming Hero, where I’m learning to turn creative ideas into functional, beautiful web applications.
        </p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
          I love working with React and Tailwind CSS to build clean, scalable, and user-friendly projects.
        </p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
          Outside of coding, I enjoy brainstorming startup ideas, exploring GitHub, and jokingly defending “works on my machine” with coffee and snacks.
        </p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          My goal is to become a full-stack developer who creates solutions that are efficient, engaging, and just a bit fun.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
