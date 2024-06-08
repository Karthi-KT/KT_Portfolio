import { useTheme } from "../App";

const Career = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`min-h-screen pt-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <div className="p-5">
        <div className="flex-1 flex flex-col justify-center items-center">
          {[
            {
              title: "FrontEnd Developer",
              duration: "2022 - Present",
              description:
                "Developed an intuitive LMS for TERV, featuring dynamic content delivery and real-time feedback. Spearheaded frontend development with React, ensuring a responsive interface integrated with backend Spring Boot APIs. Implemented real-time code evaluation and virtual classroom features, enhancing remote learning.",
            },
            {
              title: "Technical Trainer",
              duration: "Sep 2021 – Sep 2022",
              description:
                "Provided comprehensive training in C, Python, and Full Stack development, targeting college students in both offline and online formats. Created and delivered custom content, including evaluation tests and company-specific modules, aligning with industry requirements for IT and non-IT sectors. Led sessions, managed team members, and developed detailed teaching plans to enhance the learning experience and session effectiveness.",
            },
            {
              title: "Training Manager",
              duration: "Sep 2020 - Jul 2021 ",
              description:
                "Managed a team of trainers and developed training programs to enhance employee skills across various departments. Coordinated with departments to identify and address training needs, and introduced a new self-evaluation method based on metacognitive principles to improve training quality. Designed and implemented customized training plans to ensure comprehensive skill development and operational readiness.",
            },
            {
              title: "Aptitude Trainer",
              duration: "Jul 2013 – Aug 2020",
              description:
                "Delivered focused training in aptitude and reasoning, preparing students for competitive exams and interviews with customized content and practical evaluation methods. Assessed student performance through tailored tests and provided feedback for continuous improvement. Blended programming with aptitude training to create an engaging learning environment, conducting sessions in diverse settings.",
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
