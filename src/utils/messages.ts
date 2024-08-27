import { toTitle } from "./string";

export const errorMessageTooShort = (
  field = "",
  field_length = -1,
  short = true
): string =>
  short
    ? "Too short"
    : `${toTitle(field)} must be at most ${field_length.toString()} characters long`;

export const errorMessageTooLong = (
  field = "",
  field_length = -1,
  short = true
): string =>
  short
    ? "Too long"
    : `${toTitle(field)} must be at least ${field_length.toString()} characters long`;
