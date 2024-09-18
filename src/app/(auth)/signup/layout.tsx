import type { Metadata } from "next";
import type React from "react";
import type { ReactNode } from "react";

import { AuthFormFooter } from "@/components/form";
import { Link } from "@/components/navigation";
import { constant } from "@/constant";

export const metadata: Metadata = {
  description: `Create new ${constant.app.NAME} account`,
  title: `${constant.app.NAME} - Sign up`,
};

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout = ({ children }: Readonly<SignUpLayoutProps>): React.JSX.Element => {
  return (
    <>
      {children}
      <AuthFormFooter>
        Already have an account? <Link href="/login">Login</Link>
      </AuthFormFooter>
    </>
  );
};

export default SignUpLayout;
