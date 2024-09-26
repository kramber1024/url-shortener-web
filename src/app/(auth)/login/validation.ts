import type { Error, LoginUser } from "@/types";

import { constant } from "@/constant";
import { errorInvalid, errorRequired } from "@/utils";

/**
 * Validate the email by checking if it is empty, too short, too long, or invalid.
 * Shows only the required and invalid errors.
 * @param email - The email to validate.
 * @param minLength - The minimum length of the email.
 * @param maxLength - The maximum length of the email.
 * @returns An array of errors.
 */
export const validateEmail = (
  email: string,
  minLength: number,
  maxLength: number
): Error[] => {
  const validationErrors: Error[] = [];
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!email) {
    validationErrors.push(errorRequired("email"));
  } else if (
    !emailRegex.test(email) ||
    email.length < minLength ||
    email.length > maxLength
  ) {
    validationErrors.push(errorInvalid("email"));
  }
  return validationErrors;
};

/**
 * Validate the password by checking if it is empty, too short, or too long.
 * Shows only the required and invalid errors.
 * @param password - The password to validate.
 * @param minLength - The minimum length of the password.
 * @param maxLength - The maximum length of the password.
 * @returns An array of errors.
 */
export const validatePassword = (
  password: string,
  minLength: number,
  maxLength: number
): Error[] => {
  const validationErrors: Error[] = [];
  if (!password) {
    validationErrors.push(errorRequired("password"));
  } else if (password.length < minLength || password.length > maxLength) {
    validationErrors.push(errorInvalid("password"));
  }
  return validationErrors;
};

/**
 * Client-side validate the login form
 * @param formData - The form data to validate.
 * @returns An array of errors.
 */
export const validateForm = (formData: LoginUser): Error[] => {
  return [
    ...validateEmail(
      formData.email,
      constant.data.EMAIL_MIN_LENGTH,
      constant.data.EMAIL_MAX_LENGTH
    ),
    ...validatePassword(
      formData.password,
      constant.data.PASSWORD_MIN_LENGTH,
      constant.data.PASSWORD_MAX_LENGTH
    ),
  ];
};
