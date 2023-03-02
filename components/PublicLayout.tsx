import React, { ReactNode, FC } from "react";
import Header from "./Header";
interface LayoutProps {
  children: ReactNode;
}
const PublicLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='w-4/5 mx-auto'>{children}</main>
    </div>
  );
};

export default PublicLayout;
