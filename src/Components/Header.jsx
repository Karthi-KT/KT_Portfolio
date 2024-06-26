import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../App"; // Adjust the import path according to your project structure

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${darkMode ? "dark" : "bg-slate-100"}`}>
      <div className="sticky top-0 w-full z-50 flex items-center justify-between p-2 dark:bg-gray-900 text-black dark:text-white">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenuOpen} className="text-xl md:hidden">
            <FaBars />
          </button>
          <a
            href="/"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <h1 className="text-xl font-bold font-cinzel">
              <span className="group-hover:hidden">
                <span>&lt;</span> K T <span>/&gt;</span>
              </span>
              <span className="hidden group-hover:inline">
                Karthikeyan Thiyagarajan
              </span>
            </h1>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/career"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-20 h-8">Career</button>
          </Link>
          <Link
            to="/about"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-20 h-8">About me</button>
          </Link>
          {/* <Link
            to="/projects"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-20 h-8">Projects</button>
          </Link> */}
          <Link
            to="/skills"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-20 h-8">Skills</button>
          </Link>
          <Link
            to="/contact"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-20 h-8">Contact</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1zCWongAm8TV_8eL1eoGWRCowr_aMy6CN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-20 h-8">Resume</button>
          </a>
        </div>
        <button onClick={toggleTheme} className="text-xl">
          {darkMode ? <FaSun className="text-white" /> : <FaMoon />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col space-y-4 p-4">
          <Link
            to="/career"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-full h-8">Career</button>
          </Link>
          <Link
            to="/about"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-full h-8">About Me</button>
          </Link>
          {/* <Link
            to="/projects"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-full h-8">Projects</button>
          </Link> */}
          <Link
            to="/skills"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-full h-8">Skills</button>
          </Link>
          <Link
            to="/contact"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-full h-8">Contact</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1zCWongAm8TV_8eL1eoGWRCowr_aMy6CN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button className="w-full h-8">Resume</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
