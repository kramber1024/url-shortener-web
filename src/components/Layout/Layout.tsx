import type { JSX, ReactNode } from "react";
import styles from "./Layout.module.scss";
import "@styles/global.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className={styles.fullpage}>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
