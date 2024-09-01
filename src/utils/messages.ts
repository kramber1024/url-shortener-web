import type { Error } from "@/types";

type Field = "email" | "first_name" | "last_name" | "password";
const fieldMap: Record<Field, string> = {
  email: "Email",
  first_name: "First name",
  last_name: "Last name",
  password: "Password",
};

export const errorMessageRequired = (field: Field): Error => {
  return { message: `Please enter ${fieldMap[field].toLowerCase()}`, type: field };
};

export const errorMessageInvalid = (field: Field): Error => {
  return { message: `Invalid ${fieldMap[field].toLowerCase()}`, type: field };
};

export const errorMessageTooShort = (field: Field, legth?: number): Error => {
  return {
    message: legth
      ? `${fieldMap[field]} must be at least ${legth.toString()} characters long`
      : "Too short",
    type: field,
  };
};

export const errorMessageTooLong = (field: Field, legth?: number): Error => {
  return {
    message: legth
      ? `${fieldMap[field]} must be at most ${legth.toString()} characters long`
      : "Too long",
    type: field,
  };
};

export const errorMessageCustom = (field: Field, message: string): Error => {
  return { message, type: field };
};
