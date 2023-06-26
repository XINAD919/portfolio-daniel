import React, { ReactNode, FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
  transition: all 0.25s ease;
`;

const PublicLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledApp>
      <Header />
      <main className='w-4/5 mx-auto'>{children}</main>
      <Footer />
    </StyledApp>
  );
};

export default PublicLayout;
