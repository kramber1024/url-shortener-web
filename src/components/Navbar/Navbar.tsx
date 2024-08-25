import type { ReactNode } from "react";
import type React from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps): React.JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <div>{children}</div>
    </nav>
  );
};

export default Navbar;
