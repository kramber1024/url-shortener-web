import "@styles/global.scss";

import type { Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import type { ReactNode } from "react";

import styles from "./Layout.module.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

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
