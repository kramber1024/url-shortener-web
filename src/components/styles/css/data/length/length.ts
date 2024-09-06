import type { LengthUnit } from "./units";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length}
 */
export type Length = "0" | `${number}${LengthUnit}`;
