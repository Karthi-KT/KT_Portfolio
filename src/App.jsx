import { Route, Routes } from "react-router-dom";
import Career from "./Components/Career";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { useState } from "react";
import ThemeContext from "../theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
