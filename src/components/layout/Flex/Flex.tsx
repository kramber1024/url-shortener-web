import type React from "react";
import type { CSSProperties } from "react";

import type { FlexProps } from "./Flex.types";

export const Flex = ({
  alignItems,
  children,
  flexDirection,
  justifyContent,
}: Readonly<FlexProps>): React.JSX.Element => {
  const style: CSSProperties = {
    alignItems: alignItems === "stretch" ? undefined : alignItems,
    flexDirection: flexDirection === "row" ? undefined : flexDirection,
    justifyContent: justifyContent === "flex-start" ? undefined : justifyContent,
  };

  return <div style={style}>{children}</div>;
};
