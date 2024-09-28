import type React from "react";

import type { SideNavbarProps } from "./SideNavbar.types";

import { sideNavbar, sideNavbarContent } from "./SideNavbar.module.scss";

export const SideNavbar = ({
  children,
}: Readonly<SideNavbarProps>): React.JSX.Element => {
  return (
    <nav className={sideNavbar}>
      <div className={sideNavbarContent}>{children}</div>
    </nav>
  );
};
