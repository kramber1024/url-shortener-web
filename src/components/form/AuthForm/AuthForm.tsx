import type React from "react";

import type { AuthFormProps } from "./AuthForm.types";

import { authForm, authFormTitle } from "./AuthForm.module.scss";

export const AuthForm = ({
  children,
  name,
  onSubmit,
  title,
}: Readonly<AuthFormProps>): React.JSX.Element => {
  return (
    <div className={authForm}>
      <h1 className={authFormTitle}>{title}</h1>
      <form id={name} name={name} noValidate={true} onSubmit={onSubmit} target="_self">
        {children}
      </form>
    </div>
  );
};
