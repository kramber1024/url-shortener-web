import type { Error, LoginUser } from "@/types";

import { constants } from "@/constants";
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
    formData.email.length < constants.data.EMAIL_MIN_LENGTH ||
    formData.email.length > constants.data.EMAIL_MAX_LENGTH
  ) {
    validationErrors.push(errorMessageInvalid("email"));
  }

  /* Validate password */
  if (!formData.password) {
    validationErrors.push(errorMessageRequired("password"));
  } else if (
    formData.password.length < constants.data.PASSWORD_MIN_LENGTH ||
    formData.password.length > constants.data.PASSWORD_MAX_LENGTH
  ) {
    validationErrors.push(errorMessageInvalid("password"));
  }

  return validationErrors;
};
