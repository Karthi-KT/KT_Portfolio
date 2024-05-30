import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const lightTheme = {
  body: "white",
  text: "black",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "black",
  text: "white",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      theme.body
    );
    document.documentElement.style.setProperty(
      "--text-color",
      theme.text
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;