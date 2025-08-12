// src/components/Projects.jsx
import React from "react";
import { Link } from "react-router"; // keeping your original import
import { projects } from "../../data/projects";
import { ArrowUpRight, Calendar } from "lucide-react"; // You can remove Calendar import if unused

const gradientMap = {
  StoryMint: "from-blue-500 to-purple-500",
  BazarBD: "from-purple-500 to-pink-500",
  GreenGuardian: "from-emerald-500 to-teal-500",
};

const links = {
  StoryMint: {
    live: "https://aelevenclient.vercel.app/",
  },
  BazarBD: {
    live: "https://bazar-bd-front-end-a12.vercel.app/",
  },
  GreenGuardian: {
    live: "https://plant-care-client-ochre.vercel.app/",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-25 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14 relative">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-fuchsia-600 mb-4">
              Featured Projects
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 md:w-60 h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full"></div>
          </div>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge web applications built with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const gradient = gradientMap[project.name] || "from-fuchsia-500 to-purple-500";

            return (
              <div
                key={project.id}
                className={`relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />

                {/* Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title & Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    {project.tag && (
                      <span
                        className={`px-1 md:px-3 py-1 text-white text-xs rounded-full font-medium bg-gradient-to-r ${gradient}`}
                      >
                        {project.tag}
                      </span>
                    )}
                  </div>


                  <p className="text-white/80 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
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

                  {/* Buttons */}
                  <div className="flex justify-between items-center mt-auto">
                    <Link to={`/projects/${project.id}`}>
                      <button className="bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 focus:border-fuchsia-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300 md:px-4 md:py-2">
                        View details
                      </button>
                    </Link>
                    <a
  href={links[project.name]?.live || "#"}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-fuchsia-900 border border-fuchsia-800 hover:border-fuchsia-600 focus:border-fuchsia-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300 md:px-4 md:py-2 flex items-center gap-1">
    Live Site <ArrowUpRight className="w-4 h-4" />
  </button>
</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
