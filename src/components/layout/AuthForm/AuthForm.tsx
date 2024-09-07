import type React from "react";

import type { AuthFormProps } from "./AuthForm.types";

import "./AuthForm.scss";

export const AuthForm = ({
  children,
  name = "auth-form",
  onSubmit,
  title,
}: Readonly<AuthFormProps>): React.JSX.Element => {
  return (
    <div className="auth-form">
      <h1 className="auth-form-title">{title}</h1>
      <form id={name} name={name} noValidate={true} onSubmit={onSubmit} target="_self">
        {children}
      </form>
    </div>
  );
};