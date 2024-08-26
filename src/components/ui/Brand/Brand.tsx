import type React from "react";
import type { ReactNode } from "react";

import styles from "./Brand.module.scss";

interface BrandProps {
  children: ReactNode;
  link?: string;
  name: string;
}

export const Brand = ({
  children,
  link = "/",
  name,
}: Readonly<BrandProps>): React.JSX.Element => {
  return (
    <a className={styles.brand} href={link}>
      <div>{children}</div>
      <span>{name}</span>
    </a>
  );
};
