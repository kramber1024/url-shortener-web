export type RelativeVieportUnit = "svh" | "vb" | "vh" | "vi" | "vmax" | "vmin" | "vw";

export type RelativeQueryUnit = "cqb" | "cqh" | "cqi" | "cqmax" | "cqmin" | "cqw";

export type RelativeFontUnit = "cap" | "ch" | "em" | "ex" | "ic" | "lh";

export type RelativeUnit = RelativeFontUnit | RelativeQueryUnit | RelativeVieportUnit;

export type AbsoluteUnit = "cm" | "in" | "mm" | "pc" | "pt" | "px" | "Q";

export type LengthUnit = AbsoluteUnit | RelativeUnit;
