import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState('Dark');
  const isDarkMode = theme === "Dark";

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


  const toggleTheme = () => {
    setTheme(isDarkMode ? "Light" : "Dark");
    if (typeof window !== undefined) {
      localStorage.setItem("theme", isDarkMode ? "Light" : "Dark");
    }
  };

  return [theme, toggleTheme];
};

export default useDarkMode;
