import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "../App"; 
const Contact = () => {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Message from ${name} (${number})`);
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:mathtrainerkarthik@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}>
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row justify-center items-center bg-white dark:bg-gray-800 shadow-lg p-6 md:p-10 rounded-lg space-y-6 md:space-y-0 md:space-x-12 w-full max-w-4xl">
        <div className="flex flex-col items-start space-y-4 md:space-y-6 w-full md:w-auto">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              Contact Information
            </h2>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl">Mobile: +91-8220202457</h3>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl">
              Email: your-mathtrainerkarthik@gmail.com
            </h3>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="https://www.linkedin.com/in/karthikeyan-thiyagarajan-895461219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} md:size={40} />
            </a>
            <a
              href="https://github.com/Karthi-KT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} md:size={40} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Mail me</h2>
          <input
            className="w-full md:w-72 p-2 md:p-4 h-10 md:h-12 border-2 border-gray-400 dark:border-gray-600 mb-4 rounded-md"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full md:w-72 p-2 md:p-4 h-10 md:h-12 border-2 border-gray-400 dark:border-gray-600 mb-4 rounded-md"
            placeholder="Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <textarea
            className="w-full md:w-72 p-2 md:p-4 h-32 md:h-40 border-2 border-gray-400 dark:border-gray-600 mb-4 rounded-md"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="w-full md:w-36 px-4 py-2 border-2 border-gray-400 dark:border-gray-600 rounded-md mt-4 font-cinzel"
            onClick={handleSendEmail}
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
