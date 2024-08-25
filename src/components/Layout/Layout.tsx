import type { ReactNode } from "react";
import type React from "react";
import styles from "./Layout.module.scss";
import "@styles/global.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className={styles.fullpage}>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
