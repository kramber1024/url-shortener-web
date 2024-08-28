import type { ReactNode } from "react";

import { Layout } from "@/components/layouts/Layout";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
