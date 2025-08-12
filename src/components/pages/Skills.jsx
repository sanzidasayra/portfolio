import React from "react";
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
import { PiFigmaLogoBold } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiFirebase, SiExpress, SiVercel, SiVite} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    gradient: "from-pink-500 to-fuchsia-600",
    skills: [
      { name: "React", icon: <FaReact size={32} color="#61DBFB" /> },
      { name: "HTML5", icon: <FaHtml5 size={32} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={32} color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJsSquare size={32} color="#F7DF1E" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill size={32} color="#38B2AC" /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion size={32} color="#0E4C92" /> },
    ],
  },
  {
    title: "Backend",
    gradient: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={32} color="#3C873A" /> },
      { name: "Express.js", icon: <SiExpress size={32} color="#ffffff" /> },
      { name: "MongoDB", icon: <FaDatabase size={32} color="#4DB33D" /> },
      { name: "Firebase", icon: <SiFirebase size={32} color="#FFCA28" /> },
    ],
  },
  {
    title: "Tools & Others",
    gradient: "from-purple-500 to-indigo-600",
    skills: [
      { name: "Git", icon: <FaGitAlt size={32} color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub size={32} color="#181717" /> },
      { name: "Figma", icon: <PiFigmaLogoBold size={32} color="#F24E1E" /> },
{ name: "VS Code", icon: <VscVscodeInsiders size={32} color="#007ACC" /> },
{ name: "Vercel", icon: <SiVercel size={32} color="#000000" /> },
{ name: "Vite", icon: <SiVite size={32} color="#646CFF" /> },

      
      
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-14">
      <div className="text-center mb-14 relative">
        <div className="relative inline-block">
          <h1 className="text-5xl font-bold text-fuchsia-500 mb-6">
            Skills &amp; Technologies
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 md:w-60 h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full"></div>
        </div>
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Crafting digital experiences with cutting-edge technologies and modern development practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-xl hover:scale-[1.02] transition-transform"
          >
            <h2
              className={`text-xl font-bold text-white mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
            >
              {category.title}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-lg p-3 hover:scale-105 transition"
                >
                  {skill.icon}
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
