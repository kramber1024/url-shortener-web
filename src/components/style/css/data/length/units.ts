/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport}
 */
type RelativeVieportUnit = "svh" | "vb" | "vh" | "vi" | "vmax" | "vmin" | "vw";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#container_query_length_units}
 */
type RelativeQueryUnit = "cqb" | "cqh" | "cqi" | "cqmax" | "cqmin" | "cqw";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_font}
 */
type RelativeFontUnit = "cap" | "ch" | "em" | "ex" | "ic" | "lh";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_root_elements_font}
 */
type RelativeRootFontUnit = "rcap" | "rch" | "rem" | "rex" | "ric" | "rlh";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units}
 */
export type RelativeUnit =
  | RelativeFontUnit
  | RelativeQueryUnit
  | RelativeRootFontUnit
  | RelativeVieportUnit;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#absolute_length_units}
 */
export type AbsoluteUnit = "cm" | "in" | "mm" | "pc" | "pt" | "px" | "Q";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length}
 */
export type LengthUnit = AbsoluteUnit | RelativeUnit;
