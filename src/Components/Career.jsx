import { useTheme } from "../App";

const Career = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`pt-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className={`p-5`}>
        <div className="flex-1 flex flex-col justify-between items-center">
          <div className="p-3 experience text-center flex flex-col items-center justify-center border w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mb-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-none border-black dark:border-white">
            <h2 className="text-2xl">FrontEnd Developer</h2>
            <h4 className="text-xl">2022 - Present</h4>
            <p className="text-base mx-4 my-2">
              Developed and maintained web applications using modern frontend
              technologies. Worked closely with designers to create responsive
              and user-friendly interfaces.
            </p>
          </div>
          <div className=" p-3 experience  text-center flex flex-col items-center justify-center border w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mb-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-none border-black dark:border-white">
            <h2 className="text-2xl">Technical Trainer</h2>
            <h4 className="text-xl">2020 - 2022</h4>
            <p className="text-base mx-4 my-2">
              Conducted technical training sessions on various software
              development tools and languages. Helped new hires integrate into
              the technical team.
            </p>
          </div>
          <div className="p-3 experience  text-center flex flex-col items-center justify-center border w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mb-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-none border-black dark:border-white">
            <h2 className="text-2xl">Training Manager</h2>
            <h4 className="text-xl">2018 - 2020</h4>
            <p className="text-base mx-4 my-2">
              Managed a team of trainers and developed training programs to
              enhance employee skills. Coordinated with various departments to
              identify training needs.
            </p>
          </div>

          <div className="p-3 experience  text-center flex flex-col items-center justify-center border w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mb-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-none border-black dark:border-white">
            <h2 className="text-2xl">Placement Trainer</h2>
            <h4 className="text-xl">2013 - 2018</h4>
            <p className="text-base mx-4 my-2">
              Responsible for conducting training sessions for students to
              improve their placement skills. Focused on soft skills, technical
              skills, and interview preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
