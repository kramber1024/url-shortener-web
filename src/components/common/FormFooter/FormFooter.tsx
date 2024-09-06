import type React from "react";

import type { FormFooterProps } from "./FormFooter.types";

import "./FormFooter.scss";

export const FormFooter = ({
  children,
}: Readonly<FormFooterProps>): React.JSX.Element => {
  return <div className="form-footer">{children}</div>;
};
