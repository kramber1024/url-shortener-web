import type React from "react";
import type { ReactNode } from "react";

import styles from "./Brand.module.scss";

interface BrandProps {
  name: string;
  link: string;
  children: ReactNode;
}

export const Brand = ({ name, link, children }: BrandProps): React.JSX.Element => {
  return (
    <a className={styles.brand} href={link}>
      <div>{children}</div>
      <span>{name}</span>
    </a>
  );
};
