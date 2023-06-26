import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";
import useDarkMode from "../hooks/useDarkMode";
import { ThemeProvider } from "styled-components";

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, toggleTheme] = useDarkMode();
  const lightTheme = {
    body: "#fff",
    backgroundColor: "#fff",
    color: "#000",
  };
  const darkTheme = {
    body: "#0e0e10",
    backgroundColor: "#0e0e10",
    color: "#fff",
  };
  return (
    <>
    <ThemeProvider theme={theme === 'Dark' ? darkTheme : lightTheme}>
      <Component {...pageProps} 
       toggleTheme={toggleTheme}
        />
      <Analytics />
    </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
