import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-7 md:py-14 "
    >
      <div className="relative mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fuchsia-600">
          Educational Qualification
        </h2>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 md:w-60 h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full mt-6"></div>
      </div>



      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-xl hover:scale-[1.02] transition-transform"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <h3 className="text-2xl font-semibold mb-1 text-gray-50">
          Bachelor of Science in Computer Science and Engineering (BSc in CSE)
        </h3>
        <p className="italic text-gray-400 mb-1">Northern University Bangladesh</p>
        <p className="text-gray-300 mb-3">
          2021 – 2024 (Ongoing — Final Year Project/Thesis Pending)
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Core courses completed: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks, AI, Machine Learning</li>
          <li>Actively involved in software development projects and research work</li>
          <li>Expected Graduation: 2025</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Education;
