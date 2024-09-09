import type React from "react";

import type { NavbarProps } from "./Navbar.types";

import { navbar, navbarContent } from "./Navbar.module.scss";

export const Navbar = ({ children }: Readonly<NavbarProps>): React.JSX.Element => {
  return (
    <nav className={navbar}>
      <div className={navbarContent}>{children}</div>
    </nav>
  );
};
