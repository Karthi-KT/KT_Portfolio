import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col md:flex-row justify-center items-center bg-white dark:bg-gray-800 shadow-lg p-10 rounded-lg space-y-6 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-start space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>
          <div>
            <h3 className="text-2xl">Mobile: +91-8220202457</h3>
          </div>
          <div>
            <h3 className="text-2xl">
              Email: your-mathtrainerkarthik@gmail.com
            </h3>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/karthikeyan-thiyagarajan-895461219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/Karthi-KT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-auto">
          <h2 className="text-2xl font-bold mb-4">Mail me</h2>
          <input
            className="w-full md:w-72 p-4 h-12 border-2 border-gray-400 dark:border-gray-600 mb-4 rounded-md"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="w-full md:w-72 p-4 h-12 border-2 border-gray-400 dark:border-gray-600 mb-4 rounded-md"
            placeholder="Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <textarea
            className="w-full md:w-72 p-4 h-40 border-2 border-gray-400 dark:border-gray-600 mb-4 rounded-md"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="w-full md:w-36 px-4 py-2 border-2 border-gray-400 dark:border-gray-600 rounded-md mt-4 font-cinzel"
            onClick={handleSendEmail}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
