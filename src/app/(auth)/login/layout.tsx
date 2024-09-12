import type { Metadata } from "next";
import type React from "react";
import type { ReactNode } from "react";

import { AuthFormFooter } from "@/components/form";
import { Link } from "@/components/navigation";
import { constants } from "@/constants";

export const metadata: Metadata = {
  description: `Sign in with ${constants.app.NAME} account"`,
  title: `${constants.app.NAME} - Login`,
};

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: Readonly<LoginLayoutProps>): React.JSX.Element => {
  return (
    <>
      {children}
      <AuthFormFooter>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </AuthFormFooter>
    </>
  );
};

export default LoginLayout;
