import type { ReactNode } from "react";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction}
 */
type FlexDirection = `${"column" | "row"}${"-reverse" | ""}`;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content}
 */
type JustifyContent =
  `${"center" | "flex-end" | "flex-start" | "space-around" | "space-between"}`;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items}
 */
type AlignItems =
  `${"baseline" | "center" | "flex-end" | "flex-start" | "normal" | "stretch"}`;

export interface FlexProps {
  alignItems?: AlignItems;
  children: ReactNode;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
}
