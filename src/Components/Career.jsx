import { useTheme } from "../App";

const Career = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`min-h-screen pt-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="p-5">
        <div className="flex-1 flex flex-col justify-center items-center">
          {[
            {
              title: "FrontEnd Developer",
              duration: "2022 - Present",
              description:
                "Developed and maintained web applications using modern frontend technologies. Worked closely with designers to create responsive and user-friendly interfaces.",
            },
            {
              title: "Technical Trainer",
              duration: "2020 - 2022",
              description:
                "Conducted technical training sessions on various software development tools and languages. Helped new hires integrate into the technical team.",
            },
            {
              title: "Training Manager",
              duration: "2018 - 2020",
              description:
                "Managed a team of trainers and developed training programs to enhance employee skills. Coordinated with various departments to identify training needs.",
            },
            {
              title: "Placement Trainer",
              duration: "2013 - 2018",
              description:
                "Responsible for conducting training sessions for students to improve their placement skills. Focused on soft skills, technical skills, and interview preparation.",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="p-3 experience text-center flex flex-col items-center justify-center border w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mb-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-none border-black dark:border-white"
            >
              <h2 className="text-2xl">{job.title}</h2>
              <h4 className="text-xl">{job.duration}</h4>
              <p className="text-base mx-4 my-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
