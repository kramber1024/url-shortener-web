import { Layout } from "@components/layouts/Layout";
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
