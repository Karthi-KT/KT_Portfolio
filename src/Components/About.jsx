import { useTheme } from "../App";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-4 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-7xl p-6 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl">
            I am a person with a knack for bringing humor into everything I do.
            With years of experience under my belt, I've had the pleasure of
            merging creativity and subject to craft engaging ways to learn and
            work with it. I love learning things with fun, because I believe in
            "When you learn, make sure you learn such a way you're clear enough
            to explain it to anyone". Beyond my profession, I'm known for my kindness
            and my love for connecting with people. Whether it's a friendly chat
            or lending a helping hand, I enjoy making those around me smile and
            feel valued.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-screen flex flex-col justify-start items-center relative mt-8">
        <h2 className="text-4xl md:text-6xl font-montserrat mt-0">
          What I Enjoy
        </h2>
        <div className="flex flex-wrap justify-center w-full">
          {[
            {
              imgSrc: "/Memes.png",
              title: "Meme creator",
              description:
                "Teaching is fun. Teaching things in a funny way, is the biggest pleasure. Adapting to new generation and creating memes to deliver content is one thing I enjoy the most and it keeps me more engaged with the subject!",
            },
            {
              imgSrc: "/cards.png",
              title: "Fun with Playing cards",
              description:
                "Unleashing the skills in playing cards and good at exhibiting tricks using cards. Being fond of maths and calculations, developed a module to explain the theorems in Modular Arithmetic using playing cards.",
            },
            {
              imgSrc: "/writing.jpg",
              title: "Writing",
              description:
                "Being an empathetic person, I can connect with anyone so easily. At times, I would love to convert the incidents to stories. What makes it interesting is, giving detailed description of even small things that happened.",
            },
          ].map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-3 max-w-xs"
            >
              <img
                src={hobby.imgSrc}
                alt={hobby.title}
                className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-full hover:border-8 hover:border-green hover:object-contain"
              />
              <h3 className="text-xl md:text-2xl font-cursive">
                {hobby.title}
              </h3>
              <p className="object-cover w-60 md:w-72 font-zcool text-center">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
