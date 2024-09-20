import type React from "react";

import type { LabelProps } from "./Label.types";

import { black, green, red, text } from "./Label.module.scss";

export const Label = ({
  children,
  color = 1,
  htmlFor,
}: Readonly<LabelProps>): React.JSX.Element => {
  return (
    <label
      className={`${text} ${[black, red, green].at(color - 1) ?? ""}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
