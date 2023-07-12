import React, { ReactNode, createContext, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({
  theme: "Dark",
  toggleTheme: () => {},
});
interface LayoutProps {
  children: ReactNode;
}
export const CustomThemeProvider: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState("Dark");

  const isDarkMode = theme === "Dark";

  const preferDarkMode = () => {
    if (typeof window !== undefined) {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("Dark")
        : setTheme("Light");
    }
  };

  const toggleTheme = () => {
    setTheme(isDarkMode ? "Light" : "Dark");
    if (typeof window !== undefined) {
      localStorage.setItem("theme", isDarkMode ? "Light" : "Dark");
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const localTheme = localStorage.getItem("theme");
      localTheme && setTheme(localTheme);
      if (!localTheme) {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", preferDarkMode);
      }
    }
  }, []);

  const lightTheme = {
    body: "#fff",
    backgroundColor: "#fff",
    color: "#000",
    icon: "#000",
  };
  const darkTheme = {
    body: "#0e0e10",
    backgroundColor: "#0e0e10",
    color: "#BBE1FA",
    icon: "#BBE1FA",
  };

  const activeTheme = theme === "Dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
