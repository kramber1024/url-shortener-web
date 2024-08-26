import { Main } from "@components/layouts/Main";
import { Navbar } from "@components/layouts/Navbar";
import { Brand } from "@components/ui/Brand";
import { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: `${process.env.NAME ?? ""} - Sign up`,
  description: `Create new ${process.env.NAME ?? ""} account`,
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
            src="/svg/logo.svg"
            alt={`${process.env.NAME ?? ""} brand logo`}
            width={32}
            height={32}
          />
        </Brand>
      </Navbar>
      <Main>{children}</Main>
    </>
  );
};

export default SignUpLayout;
