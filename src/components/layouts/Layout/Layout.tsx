import type { Viewport } from "next";
import type React from "react";
import type { ReactNode } from "react";

import "@styles/global.scss";
import { Inter } from "next/font/google";

import "./Layout.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  width: "device-width",
};

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: Readonly<LayoutProps>): React.JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className={`fullpage ${inter.className}`}>{children}</div>
      </body>
    </html>
  );
};
