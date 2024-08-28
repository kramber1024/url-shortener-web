import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Main } from "@/components/layouts/Main";
import { Navbar } from "@/components/layouts/Navbar";
import { Brand } from "@/components/ui/Brand";
import { constants } from "@/constants";
import "@/styles/pages/signup.scss";
import Image from "next/image";

export const metadata: Metadata = {
  description: `Create new ${constants.app.NAME} account`,
  title: `${constants.app.NAME} - Sign up`,
};

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout = ({ children }: Readonly<SignUpLayoutProps>) => {
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

export default SignUpLayout;
