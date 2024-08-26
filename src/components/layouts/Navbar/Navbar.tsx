import type React from "react";
import type { ReactNode } from "react";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: Readonly<NavbarProps>): React.JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>{children}</div>
    </nav>
  );
};
