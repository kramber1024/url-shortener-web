import type React from "react";
import type { ReactNode } from "react";

import styles from "./Link.module.scss";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link = ({ children, href }: Readonly<LinkProps>): React.JSX.Element => {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
};
