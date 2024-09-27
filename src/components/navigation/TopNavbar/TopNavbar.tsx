import type React from "react";

import type { TopNavbarProps } from "./TopNavbar.types";

import { topNavbar, topNavbarContent } from "./TopNavbar.module.scss";

export const TopNavbar = ({
  children,
}: Readonly<TopNavbarProps>): React.JSX.Element => {
  return (
    <nav className={topNavbar}>
      <div className={topNavbarContent}>{children}</div>
    </nav>
  );
};
