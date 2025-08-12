import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiFirebase } from "react-icons/si";

const techSkills = [
  { id: 1, title: "React", icon: <FaReact size={40} color="#61DBFB" /> },
  { id: 2, title: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { id: 3, title: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { id: 4, title: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
  { id: 5, title: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
  { id: 6, title: "MongoDB", icon: <FaDatabase size={40} color="#4DB33D" /> },
  { id: 7, title: "Express.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
  { id: 8, title: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
  { id: 9, title: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
  { id: 10, title: "GitHub", icon: <FaGithub size={40} color="#181717" /> },
  { id: 11, title: "DaisyUI", icon: <SiDaisyui size={40} color="#0E4C92" /> },
  { id: 12, title: "Tailwind CSS", icon: <RiTailwindCssFill size={40} color="#38B2AC" /> },
];

const Skills = () => {
  const [speed, setSpeed] = useState("20s");

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed("10s");
      } else if (window.innerWidth < 1024) {
        setSpeed("15s");
      } else {
        setSpeed("20s");
      }
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="overflow-hidden py-6 sm:py-8">
      <h1 className="text-5xl font-bold text-center text-fuchsia-500 mb-6">My Skills</h1>
      <div className="relative">
        <div
          className="flex space-x-4 sm:space-x-8 animate-marquee whitespace-nowrap"
          style={{ animationDuration: speed }}
        >
          {[...techSkills, ...techSkills].map(({ id, title, icon }, index) => (
            <div
              key={id + "-" + index}
              className="flex gap-3 items-center"
            >
              {/* Render icon component directly */}
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-lg">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
