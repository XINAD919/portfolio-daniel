import React, { ReactNode, FC, useEffect, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled, { useTheme } from "styled-components";
import { CustomThemeProvider, ThemeContext } from "../context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
  transition: all 0.25s ease;
`;

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

  const PublicLayout: FC<LayoutProps> = ({ children }) => {

  const actualTheme = useTheme();
  const{theme}=useContext(ThemeContext)
  const activeTheme = theme === "Dark" ? darkTheme : lightTheme;
  
  return (
      
      <StyledApp theme={activeTheme}>
        <Header />
        <main className='w-4/5 mx-auto'>{children}</main>
        <Footer />
      </StyledApp>
  );
};

export default PublicLayout;
