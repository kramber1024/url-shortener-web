import type React from "react";

import type { TextProps } from "./Text.types";

import { text } from "./Text.module.scss";

export const Text = ({
  children,
  size = 1,
}: Readonly<TextProps>): React.JSX.Element => {
  return <p className={`${text} Size-${String(size)}`}>{children}</p>;
};
