import React from "react";
import { useParams, Link } from "react-router";
import { projects } from "../../data/projects"; // adjust path as needed
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  // Find project by id
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="p-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <Link
          to="/projects"
          className="text-fuchsia-400 underline hover:text-fuchsia-600"
        >
          Go back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="p-8 max-w-4xl mx-auto dark:bg-gray-900 text-white min-h-screen">
      {/* Card container */}
      <div className="relative bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-8">
        
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-6 w-full max-h-96 object-cover"
        />

        {/* Main Tech Stack */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-fuchsia-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description and Challenges side by side */}
        <div className="mb-6 flex flex-col md:flex-row justify-between gap-6">
          {/* Description */}
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-white/90">{project.description}</p>
          </div>

          {/* Vertical dashed border */}
          <div className="hidden md:block border-l-2 border-dashed border-white/40"></div>

          {/* Challenges Faced */}
          <div className="flex-1 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
            <p className="whitespace-pre-wrap">{project.challenges}</p>
          </div>
        </div>

        {/* Links */}
        <div className="mb-6 flex gap-4">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-fuchsia-900 rounded-md hover:bg-fuchsia-700 transition"
            >
              Live Site <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : null}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Future Plans */}
        {project.improvements && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Future Plans & Improvements</h2>
            <p className="whitespace-pre-wrap">{project.improvements}</p>
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center mt-8 px-5 py-2 bg-fuchsia-900 text-white rounded-md hover:bg-fuchsia-700 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProjectDetails;
