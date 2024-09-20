import type { ReactNode } from "react";

export interface LabelProps {
  children: ReactNode;
  color?: 1 | 2 | 3;
  htmlFor: string;
}
