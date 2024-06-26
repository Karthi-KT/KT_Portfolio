import skillsData from "../../details.json";
import { useTheme } from "../App";

export const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`pt-16 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <div className="w-full h-full flex flex-col items-center p-4">
        <div className="skills-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div
              key={index}
              className="category-section p-4 border rounded-lg shadow-md dark:bg-zinc-700 w-full"
            >
              <h2 className="category-title text-xl font-bold mb-2">
                {category.toUpperCase()}
              </h2>
              <div className="skills-grid grid grid-cols-1 gap-2">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="skills-section mb-2 p-2 rounded-lg shadow-sm"
                  >
                    <div className="skill-name text-lg font-semibold mb-1 flex justify-between items-center">
                      {skill.name}
                      <div className=" flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-5 h-5 rounded-full mr-1 flex items-center justify-center ${
                              i < skill.rating ? "" : ""
                            }`}
                          >
                            {i < skill.rating ? (
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <span className="w-full h-full block"></span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
