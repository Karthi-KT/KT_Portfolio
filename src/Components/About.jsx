// import { useContext } from "react";
// import ThemeContext from "../../theme.jsx";

const About = () => {
  // const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex-shrink-0 w-screen h-full flex flex-col justify-start items-center relative">
        <h2 className="text-4xl md:text-6xl font-montserrat mt-0">
          What I Enjoy
        </h2>
        <div className="flex flex-row flex-wrap space-x-4 w-full justify-center">
          <div className="flex flex-col items-center space-y-4 p-3 flex-grow">
            <img
              src="/cards.png"
              alt="Hobby 1"
              className="object-cover w-64 h-64 md:w-80 md:h-80 rounded-full hover:border-8 hover:border-green"
            />
            <h3 className="text-xl md:text-2xl font-cursive">
              Fun with Playing cards
            </h3>
            <p className="object-cover w-64 md:w-80 font-zcool">
              Unleashing the skills in playing cards and good at exhibiting
              tricks using cards. Being fond of maths and calculations,
              developed a module to explain the theorems in Modular Arithmetic
              using playing cards.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 flex-grow">
            <img
              src="/writing.jpg"
              alt="Hobby 2"
              className="object-cover w-64 h-64 md:w-80 md:h-80 rounded-full hover:border-8 hover:border-green"
            />
            <h3 className="text-xl md:text-2xl font-cursive">Writing</h3>
            <p className="object-cover w-64 md:w-80 font-zcool">
              Being an empathetic person, I can connect with anyone so easily.
              At times, I would love to convert the incidents to stories. What
              makes it interesting is, giving detailed description of even small
              things that happened.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 flex-grow">
            <img
              src="/Memes.png"
              alt="Hobby 3"
              className="object-cover w-64 h-64 md:w-80 md:h-80 rounded-full hover:border-8 hover:border-green"
            />
            <h3 className="text-xl md:text-2xl font-cursive">Meme creator</h3>
            <p className="object-cover w-64 md:w-80 font-zcool">
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
