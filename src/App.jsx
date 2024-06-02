import { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FaSun, FaMoon } from "react-icons/fa";
import Career from "./Components/Career";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import NotFound from "./Components/NotFound"; // Import the NotFound component
import "tailwindcss/tailwind.css";

// Create a context for the theme
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.style.setProperty("--bg-color", "#999999");
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`${darkMode ? "dark" : ""}`}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume"/>
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
