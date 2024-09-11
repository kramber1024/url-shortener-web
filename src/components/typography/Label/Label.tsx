import type React from "react";

import type { LabelProps } from "./Label.types";

import { text } from "./Label.module.scss";
import { colors, fonts } from "./Label.types";

export const Label = ({
  children,
  color = 1,
  htmlFor,
  size = 1,
  weight = 400,
}: Readonly<LabelProps>): React.JSX.Element => {
  return (
    <label
      className={`${text} ${colors[color]}`}
      htmlFor={htmlFor}
      style={{ ...fonts[size], fontWeight: weight }}
    >
      {children}
    </label>
  );
};
