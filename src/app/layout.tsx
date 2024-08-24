import Layout from "@components/Layout";
import type { ReactNode } from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
