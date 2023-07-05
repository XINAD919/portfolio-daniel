import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { CustomThemeProvider, ThemeContext } from "../context/ThemeContext";

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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

  const activeTheme = theme === "Dark" ? darkTheme : lightTheme;

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={activeTheme}>
        <Component {...pageProps} toggleTheme={toggleTheme} theme={theme}/>
        <Analytics />
      </ThemeProvider>
    </CustomThemeProvider>
  );
};

export default appWithTranslation(App);
