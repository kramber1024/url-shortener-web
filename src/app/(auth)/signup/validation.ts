import type { CreateUser, Error } from "@/types";

import { constant } from "@/constant";
import {
  errorMessageInvalid,
  errorMessageRequired,
  errorMessageTooLong,
  errorMessageTooShort,
} from "@/utils";

/**
 * Validate the first name by checking if it is empty, too short, or too long.
 * @param firstName - The first name to validate.
 * @param minLength - The minimum length of the first name.
 * @param maxLength - The maximum length of the first name.
 * @returns An array of errors.
 */
export const validateFirstName = (
  firstName: string,
  minLength: number,
  maxLength: number
): Error[] => {
  const validationErrors: Error[] = [];
  if (!firstName) {
    validationErrors.push(errorMessageRequired("first_name"));
  } else if (firstName.length < minLength) {
    validationErrors.push(errorMessageTooShort("first_name"));
  } else if (firstName.length > maxLength) {
    validationErrors.push(errorMessageTooLong("first_name"));
  }
  return validationErrors;
};

/**
 * Validate the last name by checking if it is empty, too short, or too long.
 * @param lastName - The last name to validate.
 * @param minLength - The minimum length of the last name.
 * @param maxLength - The maximum length of the last name.
 * @returns An array of errors.
 */
export const validateLastName = (
  lastName: string | undefined,
  minLength: number,
  maxLength: number
): Error[] => {
  const validationErrors: Error[] = [];
  if (lastName) {
    if (lastName.length < minLength) {
      validationErrors.push(errorMessageTooShort("last_name"));
    }
    if (lastName.length > maxLength) {
      validationErrors.push(errorMessageTooLong("last_name"));
    }
  }
  return validationErrors;
};

export const validateEmail = (
  email: string,
  minLength: number,
  maxLength: number
): Error[] => {
  const validationErrors: Error[] = [];
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!email) {
    validationErrors.push(errorMessageRequired("email"));
  } else if (!emailRegex.test(email) || email.length < minLength) {
    validationErrors.push(errorMessageInvalid("email"));
  } else if (email.length > maxLength) {
    validationErrors.push(errorMessageTooLong("email", maxLength));
  }
  return validationErrors;
};

export const validatePassword = (
  password: string,
  minLength: number,
  maxLength: number
): Error[] => {
  const validationErrors: Error[] = [];
  if (!password) {
    validationErrors.push(errorMessageRequired("password"));
  } else if (password.length < minLength) {
    validationErrors.push(errorMessageTooShort("password", minLength));
  } else if (password.length > maxLength) {
    validationErrors.push(errorMessageTooLong("password", maxLength));
  }
  return validationErrors;
};

export const validateTerms = (terms: string): Error[] => {
  const validationErrors: Error[] = [];
  if (terms !== "on") {
    validationErrors.push({
      message: "You need to accept our terms of use",
      type: "terms",
    });
  }
  return validationErrors;
};

/**
 * Client-side validate the sign up form
 * @param formData - The form data to validate.
 * @returns An array of errors.
 */
export const validateForm = (formData: CreateUser): Error[] => {
  return [
    ...validateFirstName(
      formData.first_name,
      constant.data.FIRST_NAME_MIN_LENGTH,
      constant.data.FIRST_NAME_MAX_LENGTH
    ),
    ...validateLastName(
      formData.last_name,
      constant.data.LAST_NAME_MIN_LENGTH,
      constant.data.LAST_NAME_MAX_LENGTH
    ),
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
    ...validateTerms(formData.terms),
  ];
};
