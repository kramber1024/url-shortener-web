import type { ReactElement, ReactNode } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps): ReactElement => {
  return (
    <nav className={styles.navbar}>
      <div>{children}</div>
    </nav>
  );
};

export default Navbar;
