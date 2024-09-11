import type { ReactNode } from "react";

import { color1, color2, color3 } from "./Label.module.scss";

export type SupportedSizes = 1 | 2 | 3 | 4 | 5;
export type SupportedColors = 1 | 2 | 3;

export const fonts: Record<SupportedSizes, { fontSize: string; lineHeight: string }> = {
  1: { fontSize: "1rem", lineHeight: "1.25rem" },
  2: { fontSize: "1.25rem", lineHeight: "1.6rem" },
  3: { fontSize: "1.45rem", lineHeight: "1.8rem" },
  4: { fontSize: "1.6rem", lineHeight: "2rem" },
  5: { fontSize: "1.8rem", lineHeight: "2.25rem" },
} as const;

export const colors: Record<SupportedColors, string> = {
  1: color1,
  2: color2,
  3: color3,
} as const;

export interface LabelProps {
  children: ReactNode;
  color?: SupportedColors;
  htmlFor: string;
  size?: SupportedSizes;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}
