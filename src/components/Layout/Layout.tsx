import "@styles/global.scss";

import type React from "react";
import type { ReactNode } from "react";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: Readonly<LayoutProps>): React.JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className={styles.fullpage}>{children}</div>
      </body>
    </html>
  );
};
