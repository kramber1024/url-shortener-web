import type React from "react";
import type { ReactNode } from "react";

import styles from "./Main.module.scss";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: Readonly<MainProps>): React.JSX.Element => {
  return <main className={styles.content}>{children}</main>;
};
