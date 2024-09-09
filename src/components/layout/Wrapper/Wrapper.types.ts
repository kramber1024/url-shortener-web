import type { ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  padding?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
}
