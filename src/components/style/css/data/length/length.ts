import type { CSSNumber } from "../number";
import type { LengthUnit } from "./units";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length}
 */
export type CSSLength = "0" | `${CSSNumber}${LengthUnit}`;
