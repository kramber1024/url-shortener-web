import type React from "react";

import type { TextProps } from "./Text.types";

import { getTextClassName } from "./Text.utils";

export const Text = ({
  children,
  className,
  size = 1,
  weight = 400,
}: Readonly<TextProps>): React.JSX.Element => {
  return <span className={getTextClassName(size, weight, className)}>{children}</span>;
};
