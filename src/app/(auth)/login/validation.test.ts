import type { LoginUser } from "@/types";

import { expect, test } from "@jest/globals";

import { validateEmail, validateLoginForm, validatePassword } from "./validation";

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
    expect(result.at(0)?.message.toLowerCase()).toContain("invalid");
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
    expect(result.at(0)?.message.toLowerCase()).toContain("invalid");
  });

  it("should return array with one error if password is too long", () => {
    const passwordMinLength = 8;
    const passwordMaxLength = 16;
    const password = "a".repeat(passwordMaxLength + 1);

    const result = validatePassword(password, passwordMinLength, passwordMaxLength);

    expect(result).toHaveLength(1);
    expect(result.at(0)?.message.toLowerCase()).toContain("invalid");
  });

  it("should return empty array if password is valid", () => {
    const passwordMinLength = 8;
    const passwordMaxLength = 16;
    const password = "password";

    const result = validatePassword(password, passwordMinLength, passwordMaxLength);

    expect(result).toHaveLength(0);
  });
});

describe("validateLoginForm function", () => {
  it("should return array with four errors if form is empty", () => {
    const form: LoginUser = {
      email: "",
      password: "",
    };

    const result = validateLoginForm(form);

    expect(result).toHaveLength(2);
  });
});
