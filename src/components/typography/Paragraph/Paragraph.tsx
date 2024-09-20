import type React from "react";

import { black, gray, text, white } from "./Paragraph.module.scss";
import { ParagraphProps } from "./Paragraph.types";

export const Paragraph = ({
  children,
  color = 1,
}: Readonly<ParagraphProps>): React.JSX.Element => {
  return (
    <p className={`${text} ${[black, gray, white].at(color - 1) ?? ""}`}>{children}</p>
  );
};
