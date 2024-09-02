import type React from "react";
import type { ReactNode } from "react";

import { Main } from "@/components/layouts/Main";
import { Navbar } from "@/components/layouts/Navbar";
import { Brand } from "@/components/ui/Brand";
import { constants } from "@/constants";
import Image from "next/image";

export interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: Readonly<AuthLayoutProps>): React.JSX.Element => {
  return (
    <>
      <Navbar>
        <Brand name={constants.app.NAME}>
          <Image
            alt={`${constants.app.NAME} brand logo`}
            height={32}
            src="/svg/logo.svg"
            width={32}
          />
        </Brand>
      </Navbar>
      <Main>{children}</Main>
    </>
  );
};

export default AuthLayout;
