
import Typewriter from "typewriter-effect"; // Correct import statement

const Home = () => {
  return (
    <div>
      <div
        className="flex md:flex-row h-screen items-center justify-center"
        style={{ height: "calc(100vh - 44px)" }}
      >
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 p-4">
          <h1 className="text-2xl md:text-4xl font-cinzel pb-3 text-center">
            <span>I'm Karthikeyan.T</span>
          </h1>
          <h6 className="text-2xl md:text-4xl font-cinzel pb-3 text-center">
            <span>and I'm a</span>
          </h6>
          <h2 className="text-xl md:text-3xl font-cursive text-center">
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "React Developer",
                  "JavaScript Developer",
                  "Technical Trainer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>
          <div className="text-base md:text-lg font-montserrat flex flex-col items-center space-y-1"></div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/KT-DP.jpg"
              alt="KT"
              className="w-3/4 md:w-1/2 h-3/4 md:h-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;