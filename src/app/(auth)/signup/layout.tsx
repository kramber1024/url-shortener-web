import type { Metadata } from "next";
import type React from "react";
import type { ReactNode } from "react";

import { FormFooter } from "@/components/ui/FormFooter";
import { Link } from "@/components/ui/Link";
import { constants } from "@/constants";
import "@/styles/pages/signup.scss";

export const metadata: Metadata = {
  description: `Create new ${constants.app.NAME} account`,
  title: `${constants.app.NAME} - Sign Up`,
};

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout = ({ children }: Readonly<SignUpLayoutProps>): React.JSX.Element => {
  return (
    <>
      {children}
      <FormFooter>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </FormFooter>
    </>
  );
};

export default SignUpLayout;
