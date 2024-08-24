import type { ReactElement, ReactNode } from "react";
import styles from "./Layout.module.scss";
import "@styles/global.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <html lang="en">
      <body>
        <div className={styles.fullpage}>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
