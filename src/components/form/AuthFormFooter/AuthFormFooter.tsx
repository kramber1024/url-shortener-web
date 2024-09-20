import type React from "react";

import type { AuthFormFooterProps } from "./AuthFormFooter.types";

import { Paragraph } from "../../typography";
import { authFormFooter } from "./AuthFormFooter.module.scss";

export const AuthFormFooter = ({
  children,
}: Readonly<AuthFormFooterProps>): React.JSX.Element => {
  return (
    <div className={authFormFooter}>
      <Paragraph color={2}>{children}</Paragraph>
    </div>
  );
};
