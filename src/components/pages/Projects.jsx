/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { ArrowUpRight } from "lucide-react";
import ProjectDetailsModal from "../ProjectDetailsModal";
import { FaGithub } from "react-icons/fa";

const gradientMap = {
  StoryMint: "",
  BazarBD: "",
  GreenGuardian: "",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // New fade + slide up variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-14 md:py-25">
      <div className="container mx-auto">
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14 relative"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-fuchsia-600 mb-2">
              Featured Projects
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 md:w-60 h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full"></div>
          </div>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge web applications built
            with modern technologies.
          </p>
        </motion.div>

        {/* Project Cards with fade-in on scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
       const gradient = gradientMap[project.name] || 
  "bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text border-fuchsia-500 border-b-2 border-border-b-fuchsia-400 text-transparent";


            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    {project.tag && (
                      <span
                        className={`px-1 md:px-3 py-1 text-gray-50  text-xs rounded-full font-semibold shadow-md bg-gradient-to-r ${gradient}`}
                      >
                        {project.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-white/80 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 border border-white/20 text-white/90 text-xs rounded-lg font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between gap-4 items-center mt-auto ">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                    >
                      View details
                    </button>
         
<div className="flex items-center gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300 flex items-center gap-1"
                    >
                       <ArrowUpRight className="w-4 h-4" />
                    </a>

                                  {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 transition text-white text-sm sm:text-base"
            >
              <FaGithub />
            </a>
          )}
          </div>
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
