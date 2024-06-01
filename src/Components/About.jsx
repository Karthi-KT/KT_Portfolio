import { useTheme } from "../App";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`pt-8 pb-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full flex justify-center mt-8 px-4">
        <div className={`max-w-4xl p-6 rounded-lg shadow-md`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl">
            I am passionate about a multitude of activities that engage my mind
            and creativity. From playing cards and performing card tricks to
            writing detailed stories about life experiences, I find joy in
            expressing myself in various forms. Creating memes to deliver
            educational content is another avenue I enjoy, as it allows me to
            combine humor with teaching, making learning a fun and engaging
            process. My empathetic nature helps me connect with people, and I
            love sharing my knowledge and experiences with others.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-screen h-full flex flex-col justify-start items-center relative mt-8">
        <h2 className="text-4xl md:text-6xl font-montserrat mt-0">
          What I Enjoy
        </h2>
        <div className="flex flex-row flex-wrap space-x-4 w-full justify-center">
          <div className="flex flex-col items-center space-y-4 p-3 flex-grow max-w-xs">
            <img
              src="/cards.png"
              alt="Hobby 1"
              className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-full hover:border-8 hover:border-green"
            />
            <h3 className="text-xl md:text-2xl font-cursive">
              Fun with Playing cards
            </h3>
            <p className="object-cover w-48 md:w-64 font-zcool text-center">
              Unleashing the skills in playing cards and good at exhibiting
              tricks using cards. Being fond of maths and calculations,
              developed a module to explain the theorems in Modular Arithmetic
              using playing cards.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 flex-grow max-w-xs">
            <img
              src="/writing.jpg"
              alt="Hobby 2"
              className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-full hover:border-8 hover:border-green"
            />
            <h3 className="text-xl md:text-2xl font-cursive">Writing</h3>
            <p className="object-cover w-48 md:w-64 font-zcool text-center">
              Being an empathetic person, I can connect with anyone so easily.
              At times, I would love to convert the incidents to stories. What
              makes it interesting is, giving detailed description of even small
              things that happened.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 flex-grow max-w-xs">
            <img
              src="/Memes.png"
              alt="Hobby 3"
              className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-full hover:border-8 hover:border-green"
            />
            <h3 className="text-xl md:text-2xl font-cursive">Meme creator</h3>
            <p className="object-cover w-48 md:w-64 font-zcool text-center">
              Teaching is fun. Teaching things in a funny way, is the biggest
              pleasure. Adapting to new generation and creating memes to deliver
              content is one thing I enjoy the most and it keeps me more engaged
              with the subject!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
