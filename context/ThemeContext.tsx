import React, { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "Dark",
  toggleTheme: () => {},
});
interface LayoutProps {
  children: ReactNode;
}
export const CustomThemeProvider: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState("Dark");
  const isDarkMode = theme === 'Dark'
  const toggleTheme = () => {
    setTheme( isDarkMode  ? "Light" : "Dark");
    if (typeof window !== undefined) {
      localStorage.setItem("theme", isDarkMode  ? "Light" : "Dark");
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      const localTheme = localStorage.getItem("theme");
      localTheme && setTheme(localTheme);
      if (!localTheme) {
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? setTheme("Dark")
          : setTheme("Light");
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
