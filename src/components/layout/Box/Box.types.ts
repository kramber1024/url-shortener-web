import type { ReactNode } from "react";

export interface BoxProps {
  alignItems?: `${"baseline" | "center" | "flex-end" | "flex-start" | "normal" | "stretch"}`;
  children: ReactNode;
  display?: "block" | "flex";
  flexDirection?: `${"column" | "row"}${"-reverse" | ""}`;
  height?: string;
  justifyContent?: `${"center" | "flex-end" | "flex-start" | "space-around" | "space-between"}`;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  textAlign?: "center" | "left" | "right";
  width?: string;
}
