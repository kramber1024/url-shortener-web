import type { Length } from "./css";

interface Breakpoints {
  base: Length;
  lg: Length;
  md: Length;
  sm: Length;
  xl: Length;
  xxl: Length;
}

export const breakpoints: Breakpoints = {
  base: "0",
  lg: "992px",
  md: "768px",
  sm: "480px",
  xl: "1280px",
  xxl: "1536px",
} as const;
