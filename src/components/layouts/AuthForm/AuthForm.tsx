import type React from "react";
import type { ReactNode } from "react";

import styles from "./AuthForm.module.scss";

interface AuthFormProps {
  title: string;
  children: ReactNode;
}

export const AuthForm = ({
  title,
  children,
}: Readonly<AuthFormProps>): React.JSX.Element => {
  return (
    <div className={styles.authForm}>
      <h1>{title}</h1>
      <form noValidate={true} target="_self">
        {children}
      </form>
    </div>
  );
};
