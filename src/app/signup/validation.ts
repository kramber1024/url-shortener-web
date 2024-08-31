import type { CreateUser, Error } from "@/types";

import { constants } from "@/constants";

const shortErrorMessageTooShort = "Too short";
const shortErrorMessageTooLong = "Too long";

export const validateForm = (formData: CreateUser): Error[] => {
  const validationErrors: Error[] = [];

  /* Validate first name */
  if (!formData.first_name) {
    validationErrors.push({
      message: "Please enter first name",
      type: "first_name",
    });
  } else if (formData.first_name.length < constants.data.FIRST_NAME_MIN_LENGTH) {
    validationErrors.push({ message: shortErrorMessageTooShort, type: "first_name" });
  } else if (formData.first_name.length > constants.data.FIRST_NAME_MAX_LENGTH) {
    validationErrors.push({
      message: shortErrorMessageTooLong,
      type: "first_name",
    });
  }

  /* Validate last name */
  if (
    formData.last_name &&
    formData.last_name.length < constants.data.LAST_NAME_MIN_LENGTH
  ) {
    validationErrors.push({
      message: shortErrorMessageTooShort,
      type: "last_name",
    });
  } else if (
    formData.last_name &&
    formData.last_name.length > constants.data.LAST_NAME_MAX_LENGTH
  ) {
    validationErrors.push({ message: shortErrorMessageTooLong, type: "last_name" });
  }

  /* Validate email */
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!formData.email) {
    validationErrors.push({ message: "Please enter email address", type: "email" });
  } else if (
    !emailRegex.test(formData.email) ||
    formData.email.length < constants.data.EMAIL_MIN_LENGTH
  ) {
    validationErrors.push({ message: "Invalid email", type: "email" });
  } else if (formData.email.length > constants.data.EMAIL_MAX_LENGTH) {
    validationErrors.push({
      message: `Email must be at most ${constants.data.EMAIL_MAX_LENGTH.toString()} characters long`,
      type: "email",
    });
  }

  /* Validate password */
  if (!formData.password) {
    validationErrors.push({
      message: "Please enter password",
      type: "password",
    });
  } else if (formData.password.length < constants.data.PASSWORD_MIN_LENGTH) {
    validationErrors.push({
      message: `Password must be at least ${constants.data.PASSWORD_MIN_LENGTH.toString()} characters long`,
      type: "password",
    });
  } else if (formData.password.length > constants.data.PASSWORD_MAX_LENGTH) {
    validationErrors.push({
      message: `Password must be at most ${constants.data.PASSWORD_MIN_LENGTH.toString()} characters long`,
      type: "password",
    });
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
