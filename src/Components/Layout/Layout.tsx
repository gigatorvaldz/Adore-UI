import React from "react";
import "./Layout.scss"

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
