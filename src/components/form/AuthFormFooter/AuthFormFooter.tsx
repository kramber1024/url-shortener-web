import type React from "react";

import type { AuthFormFooterProps } from "./AuthFormFooter.types";

import { Text } from "../../typography";
import { authFormFooter } from "./AuthFormFooter.module.scss";

export const AuthFormFooter = ({
  children,
}: Readonly<AuthFormFooterProps>): React.JSX.Element => {
  return (
    <div className={authFormFooter}>
      <Text color={2} size={1} weight={400}>
        {children}
      </Text>
    </div>
  );
};
