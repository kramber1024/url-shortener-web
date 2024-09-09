import type { ReactNode } from "react";

export type Size = 1 | 10 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface TextProps {
  children: ReactNode;
  className?: string;
  size?: Size;
  weight?: Weight;
}
