import type React from "react";
import type { ReactNode } from "react";

import "./AuthForm.scss";

interface AuthFormProps {
  children: ReactNode;
  title: string;
}

export const AuthForm = ({
  children,
  title,
}: Readonly<AuthFormProps>): React.JSX.Element => {
  return (
    <div className="auth-form">
      <h1 className="auth-form-title">{title}</h1>
      <form noValidate={true} target="_self">
        {children}
      </form>
    </div>
  );
};
