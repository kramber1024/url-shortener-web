import type { Viewport } from "next";
import type { ReactNode } from "react";

import { Fullpage } from "@/components/layout";
import "@/styles/global.css";
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
      <body className={inter.className}>
        <Fullpage>{children}</Fullpage>
      </body>
    </html>
  );
};

export default RootLayout;
