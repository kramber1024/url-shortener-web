import type React from "react";
import type { ReactNode } from "react";

import { Main } from "@/components/layout";
import { Navbar } from "@/components/navigation";
import { Brand } from "@/components/visual";
import { constant } from "@/constant";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: Readonly<AuthLayoutProps>): React.JSX.Element => {
  return (
    <>
      <Navbar>
        <Brand name={constant.app.NAME} />
      </Navbar>
      <Main alignItems="center" justifyContent="center">
        {children}
      </Main>
    </>
  );
};

export default AuthLayout;
