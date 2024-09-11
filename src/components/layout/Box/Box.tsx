import type React from "react";

import type { BoxProps } from "./Box.types";

import { box } from "./Box.module.scss";

export const Box = ({
  alignItems,
  children,
  display,
  flexDirection,
  height,
  justifyContent,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  textAlign,
  width,
}: Readonly<BoxProps>): React.JSX.Element => {
  return (
    <div
      className={box}
      style={{
        alignItems,
        display,
        flexDirection,
        height,
        justifyContent,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        textAlign,
        width,
      }}
    >
      {children}
    </div>
  );
};
