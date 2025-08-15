import React from "react";
import { ArrowUpRight, X } from "lucide-react";

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-fuchsia-900 hover:bg-fuchsia-700 rounded-full transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-6 w-full max-h-96 object-cover"
        />

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">
            Main Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-fuchsia-700 rounded-full text-xs sm:text-sm font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description + Challenges */}
        <div className="mb-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 pr-0 md:pr-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Description</h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="hidden md:block border-l-2 border-dashed border-white/40"></div>
          <div className="flex-1 pl-0 md:pl-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Challenges Faced</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </div>


        {/* Future Plans */}
        {project.improvements && (
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">
              Future Plans & Improvements
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.improvements}
            </p>
          </div>
          
        )}
                {/* Links */}
        <div className="mb-6 flex flex-wrap gap-3 pt-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-fuchsia-900 rounded-md hover:bg-fuchsia-700 transition text-white text-sm sm:text-base"
            >
              Live Site <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition text-white text-sm sm:text-base"
            >
              GitHub
            </a>
          )}
        </div>

      </div>
      
    </div>
  );
};

export default ProjectDetailsModal;
