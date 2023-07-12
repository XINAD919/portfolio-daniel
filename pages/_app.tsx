import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";
import { useContext } from "react";
import { CustomThemeProvider, ThemeContext } from "../context/ThemeContext";

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
      <CustomThemeProvider>
        <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
        <Analytics />
      </CustomThemeProvider>
  );
};

export default appWithTranslation(App);
