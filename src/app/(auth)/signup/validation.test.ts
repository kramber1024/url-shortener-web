import type { CreateUser } from "@/types";

import { expect, test } from "@jest/globals";

import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validateSignUpFom,
  validateTerms,
} from "./validation";

describe("validateFirstName function", () => {
  it("should return array with one error if first name is empty", () => {
    const firstNameMinLength = 3;
    const firstNameMaxLength = 16;
    const firstName = "";

    const result = validateFirstName(firstName, firstNameMinLength, firstNameMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("enter");
  });

  it("should return array with one error if first name is too short", () => {
    const firstNameMinLength = 3;
    const firstNameMaxLength = 16;
    const firstName = "a".repeat(firstNameMinLength - 1);

    const result = validateFirstName(firstName, firstNameMinLength, firstNameMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("short");
  });

  it("should return array with one error if first name is too long", () => {
    const firstNameMinLength = 3;
    const firstNameMaxLength = 16;
    const firstName = "a".repeat(firstNameMaxLength + 1);

    const result = validateFirstName(firstName, firstNameMinLength, firstNameMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("long");
  });

  it("should return empty array if first name is valid", () => {
    const firstNameMinLength = 3;
    const firstNameMaxLength = 16;
    const firstName = "John";

    const result = validateFirstName(firstName, firstNameMinLength, firstNameMaxLength);

    expect(result).toHaveLength(0);
  });
});

describe("validateLastName function", () => {
  it("should return empty array if last name is undefined", () => {
    const firstNameMinLength = 3;
    const firstNameMaxLength = 16;
    const lastName = undefined;

    const result = validateLastName(lastName, firstNameMinLength, firstNameMaxLength);

    expect(result).toHaveLength(0);
  });

  it("should return array with one error if last name is too short", () => {
    const lastNameMinLength = 3;
    const lastNameMaxLength = 16;
    const lastName = "a".repeat(lastNameMinLength - 1);

    const result = validateLastName(lastName, lastNameMinLength, lastNameMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("short");
  });

  it("should return array with one error if last name is too long", () => {
    const lastNameMinLength = 3;
    const lastNameMaxLength = 16;
    const lastName = "a".repeat(lastNameMaxLength + 1);

    const result = validateLastName(lastName, lastNameMinLength, lastNameMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("long");
  });

  it("should return empty array if last name is valid", () => {
    const lastNameMinLength = 3;
    const lastNameMaxLength = 16;
    const lastName = "Smith";

    const result = validateLastName(lastName, lastNameMinLength, lastNameMaxLength);

    expect(result).toHaveLength(0);
  });
});

describe("validateEmail function", () => {
  it("should return array with one error if email is empty", () => {
    const emailMinLength = "a@a.a".length;
    const emailMaxLength = 16;
    const email = "";

    const result = validateEmail(email, emailMinLength, emailMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("enter");
  });

  test.each([
    ["a@a"],
    ["aaaaaa"],
    ["a@.com"],
    ["@.com"],
    ["a@.com"],
    ["@a.com"],
    ["a@.com"],
    ["a@com"],
    ["a.com"],
  ])("should return array with one error if email is %s", (email: string) => {
    const emailMinLength = "a@a.a".length;
    const emailMaxLength = 16;

    const result = validateEmail(email, emailMinLength, emailMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("invalid");
  });

  it("should return array with one error if email is too long", () => {
    const emailMinLength = "a@a.a".length;
    const emailMaxLength = 16;
    const email = `${"a".repeat(emailMaxLength)}@a.a`;

    const result = validateEmail(email, emailMinLength, emailMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain(
      `at most ${emailMaxLength.toString()}`
    );
  });

  it("should return empty array if email is valid", () => {
    const emailMinLength = "a@a.a".length;
    const emailMaxLength = 16;
    const email = "email@domain.tld";

    const result = validateEmail(email, emailMinLength, emailMaxLength);

    expect(result).toHaveLength(0);
  });
});

describe("validatePassword function", () => {
  it("should return array with one error if password is empty", () => {
    const passwordMinLength = 8;
    const passwordMaxLength = 16;
    const password = "";

    const result = validatePassword(password, passwordMinLength, passwordMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("enter");
  });

  it("should return array with one error if password is too short", () => {
    const passwordMinLength = 8;
    const passwordMaxLength = 16;
    const password = "a".repeat(passwordMinLength - 1);

    const result = validatePassword(password, passwordMinLength, passwordMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain(
      `at least ${passwordMinLength.toString()}`
    );
  });

  it("should return array with one error if password is too long", () => {
    const passwordMinLength = 8;
    const passwordMaxLength = 16;
    const password = "a".repeat(passwordMaxLength + 1);

    const result = validatePassword(password, passwordMinLength, passwordMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain(
      `at most ${passwordMaxLength.toString()}`
    );
  });

  it("should return empty array if password is valid", () => {
    const passwordMinLength = 8;
    const passwordMaxLength = 16;
    const password = "password";

    const result = validatePassword(password, passwordMinLength, passwordMaxLength);

    expect(result).toHaveLength(0);
  });
});

describe("validateTerms function", () => {
  it("should return array with one error if terms is not off", () => {
    const terms = "off";

    const result = validateTerms(terms);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLocaleLowerCase()).toContain("accept");
  });

  it("should return empty array if terms is on", () => {
    const terms = "on";

    const result = validateTerms(terms);

    expect(result).toHaveLength(0);
  });
});

describe("validateSignUpForm function", () => {
  it("should return array with four errors if form is empty", () => {
    const form: CreateUser = {
      email: "",
      first_name: "",
      password: "",
      terms: "off",
    };

    const result = validateSignUpFom(form);

    expect(result).toHaveLength(4);
  });
});
