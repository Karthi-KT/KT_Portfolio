import { useEffect, useState } from "react";
import { useTheme } from "../App";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { darkMode } = useTheme()

  useEffect(() => {
    // Fetch the projects data from the JSON file
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching the projects:", error));
  }, []);

  return (
    <div
      className={`pt-10 pb-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="object-cover w-full h-48"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
