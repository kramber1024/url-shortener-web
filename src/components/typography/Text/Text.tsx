import type React from "react";

import type { TextProps } from "./Text.types";

import { text } from "./Text.module.scss";
import { colors, fonts } from "./Text.types";

export const Text = ({
  children,
  color = 1,
  size = 1,
  weight = 400,
}: Readonly<TextProps>): React.JSX.Element => {
  return (
    <span
      className={`${text} ${colors[color]}`}
      style={{ ...fonts[size], fontWeight: weight }}
    >
      {children}
    </span>
  );
};
