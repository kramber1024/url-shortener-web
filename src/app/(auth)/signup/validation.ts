import type { CreateUser, Error } from "@/types";

import { constants } from "@/constants";
import {
  errorMessageInvalid,
  errorMessageRequired,
  errorMessageTooLong,
  errorMessageTooShort,
} from "@/utils";

/**
 * Client-side validate the sign up form
 * @param formData - The form data to validate.
 * @returns An array of errors.
 */
export const validateForm = (formData: CreateUser): Error[] => {
  const validationErrors: Error[] = [];

  /* Validate first name */
  if (!formData.first_name) {
    validationErrors.push(errorMessageRequired("first_name"));
  } else if (formData.first_name.length < constants.data.FIRST_NAME_MIN_LENGTH) {
    validationErrors.push(errorMessageTooShort("first_name"));
  } else if (formData.first_name.length > constants.data.FIRST_NAME_MAX_LENGTH) {
    validationErrors.push(errorMessageTooLong("first_name"));
  }

  /* Validate last name */
  if (
    formData.last_name &&
    formData.last_name.length < constants.data.LAST_NAME_MIN_LENGTH
  ) {
    validationErrors.push(errorMessageTooShort("last_name"));
  } else if (
    formData.last_name &&
    formData.last_name.length > constants.data.LAST_NAME_MAX_LENGTH
  ) {
    validationErrors.push(errorMessageTooLong("last_name"));
  }

  /* Validate email */
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!formData.email) {
    validationErrors.push(errorMessageRequired("email"));
  } else if (
    !emailRegex.test(formData.email) ||
    formData.email.length < constants.data.EMAIL_MIN_LENGTH
  ) {
    validationErrors.push(errorMessageInvalid("email"));
  } else if (formData.email.length > constants.data.EMAIL_MAX_LENGTH) {
    validationErrors.push(
      errorMessageTooLong("email", constants.data.EMAIL_MAX_LENGTH)
    );
  }

  /* Validate password */
  if (!formData.password) {
    validationErrors.push(errorMessageRequired("password"));
  } else if (formData.password.length < constants.data.PASSWORD_MIN_LENGTH) {
    validationErrors.push(
      errorMessageTooShort("password", constants.data.PASSWORD_MIN_LENGTH)
    );
  } else if (formData.password.length > constants.data.PASSWORD_MAX_LENGTH) {
    validationErrors.push(
      errorMessageTooLong("password", constants.data.PASSWORD_MAX_LENGTH)
    );
  }

  /* Validate terms */
  if (formData.terms !== "on") {
    validationErrors.push({
      message: "You need to accept our terms of use",
      type: "terms",
    });
  }

  return validationErrors;
};
