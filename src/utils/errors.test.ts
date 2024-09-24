import { expect } from "@jest/globals";

import {
  errorCustom,
  errorInvalid,
  errorRequired,
  errorTooLong,
  errorTooShort,
} from "./errors";

describe("errorRequired function", () => {
  it("should return an error object with a message and type", () => {
    const errorType = "email";

    const error = errorRequired(errorType);

    expect(error.message).toBe(`Please enter ${errorType}`);
    expect(error.type).toBe(errorType);
  });
});

describe("errorInvalid function", () => {
  it("should return an error object with a message and type", () => {
    const errorType = "email";

    const error = errorInvalid(errorType);

    expect(error.message).toBe(`Invalid ${errorType}`);
    expect(error.type).toBe(errorType);
  });
});

describe("errorTooShort function", () => {
  it("should return an error object with a type and a long message if length is provided", () => {
    const errorType = "password";
    const length = 8;

    const error = errorTooShort(errorType, length);

    expect(error.message).toBe(
      `Password must be at least ${length.toString()} characters long`
    );
    expect(error.type).toBe("password");
  });

  it("should return an error object with a type and a short message if length is not provided", () => {
    const errorType = "password";

    const error = errorTooShort(errorType);

    expect(error.message).toBe("Too short");
    expect(error.type).toBe(errorType);
  });
});

describe("errorTooLong function", () => {
  it("should return an error object with a type and a long message if length is provided", () => {
    const errorType = "password";
    const length = 8;

    const error = errorTooLong(errorType, length);

    expect(error.message).toBe(
      `Password must be at most ${length.toString()} characters long`
    );
    expect(error.type).toBe(errorType);
  });

  it("should return an error object with a type and a short message if length is not provided", () => {
    const errorType = "password";

    const error = errorTooLong(errorType);

    expect(error.message).toBe("Too long");
    expect(error.type).toBe(errorType);
  });
});

describe("errorCustom function", () => {
  it("should return an error object with a custom message and type", () => {
    const errorType = "email";
    const customMessage = "I am a custom message";

    const error = errorCustom(errorType, customMessage);

    expect(error.message).toBe(customMessage);
    expect(error.type).toBe(errorType);
  });
});
