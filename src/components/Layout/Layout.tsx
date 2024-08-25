import "@styles/global.scss";

import { Inter } from "next/font/google";
import type React from "react";
import type { ReactNode } from "react";

import styles from "./Layout.module.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: Readonly<LayoutProps>): React.JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className={`${styles.fullpage} ${inter.className}`}>{children}</div>
      </body>
    </html>
  );
};
