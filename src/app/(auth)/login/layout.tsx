import type React from "react";
import type { ReactNode } from "react";

import { FormFooter } from "@/components/ui/FormFooter";
import { Link } from "@/components/ui/Link";
import { constants } from "@/constants";
import { Metadata } from "next";

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
      <FormFooter>
        <p>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>
      </FormFooter>
    </>
  );
};

export default LoginLayout;
