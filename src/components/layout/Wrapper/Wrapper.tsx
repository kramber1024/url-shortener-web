import type React from "react";

import type { WrapperProps } from "./Wrapper.types";

export const Wrapper = ({
  children,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}: Readonly<WrapperProps>): React.JSX.Element => {
  return (
    <div
      style={{
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
      }}
    >
      {children}
    </div>
  );
};
