import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../../assets/img.jpg';

const About = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controlsLeft.start({ opacity: 1, x: 0 });
      controlsRight.start({ opacity: 1, x: 0 });
    } else {
      controlsLeft.start({ opacity: 0, x: -50 });  
      controlsRight.start({ opacity: 0, x: 50 }); 
    }
  }, [controlsLeft, controlsRight, inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="px-6 py-7 md:py-14 flex flex-col md:flex-row items-center gap-10 md:gap-20 border rounded-3xl shadow-2xl bg-zinc-900/40 backdrop-blur-lg"
    >
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={controlsLeft}
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

      <motion.div
        className="text-center md:text-left flex-1"
        initial={{ opacity: 0, x: 50 }}
        animate={controlsRight}
        transition={{ duration: 1 }}
      >
        <div className="relative inline-block mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-500">
            About Me
          </h2>
          <div className="absolute -bottom-2 left-0 w-40 md:w-60 h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full"></div>
        </div>

        <p className="text-xl text-gray-400 font-semibold mb-6">Frontend Developer</p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
          I have successfully completed an intensive web development course at Programming Hero, where I gained hands-on experience building modern web applications.
        </p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
          I specialize in creating responsive and scalable user interfaces using React and Tailwind CSS, with a focus on clean code and optimal user experience.
        </p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
  Curiosity-driven and detail-oriented, I’m always exploring tools like Next.js and Framer Motion to build immersive digital experiences.  
</p>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          My goal is to grow as a full-stack developer, delivering efficient, maintainable, and impactful software solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
