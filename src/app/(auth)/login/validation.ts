import type { Error, LoginUser } from "@/types";

import { constant } from "@/constant";
import { errorMessageInvalid, errorMessageRequired } from "@/utils";

/**
 * Client-side validate the login form
 * @param formData - The form data to validate.
 * @returns An array of errors.
 */
export const validateForm = (formData: LoginUser): Error[] => {
  const validationErrors: Error[] = [];

  /* Validate email */
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!formData.email) {
    validationErrors.push(errorMessageRequired("email"));
  } else if (
    !emailRegex.test(formData.email) ||
    formData.email.length < constant.data.EMAIL_MIN_LENGTH ||
    formData.email.length > constant.data.EMAIL_MAX_LENGTH
  ) {
    validationErrors.push(errorMessageInvalid("email"));
  }

  /* Validate password */
  if (!formData.password) {
    validationErrors.push(errorMessageRequired("password"));
  } else if (
    formData.password.length < constant.data.PASSWORD_MIN_LENGTH ||
    formData.password.length > constant.data.PASSWORD_MAX_LENGTH
  ) {
    validationErrors.push(errorMessageInvalid("password"));
  }

  return validationErrors;
};
