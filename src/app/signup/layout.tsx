import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Main } from "@components/layouts/Main";
import { Navbar } from "@components/layouts/Navbar";
import { Brand } from "@components/ui/Brand";
import "@styles/pages/signup.scss";
import Image from "next/image";

export const metadata: Metadata = {
  description: `Create new ${process.env.NAME ?? ""} account`,
  title: `${process.env.NAME ?? ""} - Sign up`,
};

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout = ({ children }: Readonly<SignUpLayoutProps>) => {
  return (
    <>
      <Navbar>
        <Brand name={process.env.NAME ?? ""}>
          <Image
            alt={`${process.env.NAME ?? ""} brand logo`}
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
