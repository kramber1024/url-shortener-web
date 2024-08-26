import type React from "react";
import type { ReactNode } from "react";

import "./Navbar.scss";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: Readonly<NavbarProps>): React.JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbar-content">{children}</div>
    </nav>
  );
};
