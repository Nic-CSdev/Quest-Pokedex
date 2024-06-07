import { createContext, useEffect, useState } from "react";
import { themes } from "../Objects/themes";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const storedTheme = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(storedTheme || themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => 
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
