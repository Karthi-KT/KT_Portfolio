import { Route, Routes } from "react-router-dom";
import Career from "./Components/Career";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </div>
  );
};

export default App;
