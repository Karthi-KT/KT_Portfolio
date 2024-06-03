import { useTheme } from "../App";
import projectData from "../../projects.json";

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`pt-8 pb-8 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-2">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="object-cover w-full h-40"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
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
