import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub ikonu için

function Content2() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "",
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A responsive task management application to help users organize their daily tasks with drag-and-drop functionality.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      image: "",
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing various projects, skills, and contact information, built with modern web technologies.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "",
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A dynamic weather application providing real-time weather updates based on user location or city search, using a third-party API.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      image: "",
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-10 flex flex-col items-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 tracking-tight text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-xl border border-gray-700
                       transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,255,255,0.1)]"
          >
            {/* Proje Resmi Alanı */}
            <div className="w-full h-40 sm:h-48 lg:h-56 bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">Resim Yok</span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-teal-300 text-center sm:text-left">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-blue-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full text-xs sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content2;
