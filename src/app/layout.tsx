import type { Viewport } from "next";
import type { ReactNode } from "react";

import "@/styles/global.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  width: "device-width",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body>
        <div className={`fullpage ${inter.className}`}>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
