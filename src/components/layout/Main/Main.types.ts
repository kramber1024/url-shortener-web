import type { ReactNode } from "react";

export interface MainProps {
  alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "normal" | "stretch";
  children: ReactNode;
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between";
}
