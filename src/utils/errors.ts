import type { Error } from "@/types";

type Field = "email" | "first_name" | "last_name" | "password";
const fieldMap: Record<Field, string> = {
  email: "Email",
  first_name: "First name",
  last_name: "Last name",
  password: "Password",
};

/**
 * Generate error message for empty required field.
 * @param field - Field to generate error message for.
 * @returns Error object with message.
 */
export const errorRequired = (field: Field): Error => {
  return { message: `Please enter ${fieldMap[field].toLowerCase()}`, type: field };
};

/**
 * Generate error message for invalid field data.
 * @param field - Field to generate error message for.
 * @returns Error object with message.
 */
export const errorInvalid = (field: Field): Error => {
  return { message: `Invalid ${fieldMap[field].toLowerCase()}`, type: field };
};

/**
 * Generate error message for field data that is too short.
 * @param field - Field to generate error message for.
 * @param length - Minimum length required. If not provided, default short message is used.
 * @returns Error object with message.
 */
export const errorTooShort = (field: Field, length?: number): Error => {
  return {
    message: length
      ? `${fieldMap[field]} must be at least ${length.toString()} characters long`
      : "Too short",
    type: field,
  };
};

/**
 * Generate error message for field data that is too long.
 * @param field - Field to generate error message for.
 * @param length - Maximum length required. If not provided, default short message is used.
 * @returns Error object with message.
 */
export const errorTooLong = (field: Field, length?: number): Error => {
  return {
    message: length
      ? `${fieldMap[field]} must be at most ${length.toString()} characters long`
      : "Too long",
    type: field,
  };
};

/**
 * Generate custom error message.
 * @param field - Field to generate error message for.
 * @param message - Custom message to display.
 * @returns Error object with message.
 */
export const errorCustom = (field: Field, message: string): Error => {
  return { message, type: field };
};
