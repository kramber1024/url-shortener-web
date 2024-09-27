import type React from "react";
import type { ReactNode } from "react";

import { Main } from "@/components/layout";
import { TopNavbar } from "@/components/navigation";
import { Brand } from "@/components/visual";
import { constant } from "@/constant";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: Readonly<AuthLayoutProps>): React.JSX.Element => {
  return (
    <>
      <TopNavbar>
        <Brand name={constant.app.NAME} />
      </TopNavbar>
      <Main alignItems="center" justifyContent="center">
        {children}
      </Main>
    </>
  );
};

export default AuthLayout;
