"use client";

import type { CreateUser, Error } from "@types";
import type React from "react";
import type { ChangeEvent, FormEvent } from "react";

import { AuthForm } from "@components/layouts/AuthForm";
import { Button } from "@components/ui/Button";
import { Checkbox } from "@components/ui/Checkbox";
import { FormFooter } from "@components/ui/FormFooter";
import { Input } from "@components/ui/Input";
import { Link } from "@components/ui/Link";
import { Constants } from "@constants";
import { useState } from "react";

const SignUp = (): React.JSX.Element => {
  const [formData, setFormData] = useState<CreateUser>({
    email: "",
    first_name: "",
    password: "",
    terms: "off",
  });
  const [errors, setErrors] = useState<Error[]>([]);

  const validateForm = (): Error[] => {
    const validationErrors: Error[] = [];
    const shortErrorMessageTooShort = "Too short";
    const shortErrorMessageTooLong = "Too long";

    /* Validate first name */
    if (!formData.first_name) {
      validationErrors.push({
        message: "Please enter first name",
        type: "first_name",
      });
    } else if (formData.first_name.length < Constants.FIRST_NAME_MIN_LENGTH) {
      validationErrors.push({ message: shortErrorMessageTooShort, type: "first_name" });
    } else if (formData.first_name.length > Constants.FIRST_NAME_MAX_LENGTH) {
      validationErrors.push({
        message: shortErrorMessageTooLong,
        type: "first_name",
      });
    }

    /* Validate last name */
    if (
      formData.last_name &&
      formData.last_name.length < Constants.LAST_NAME_MIN_LENGTH
    ) {
      validationErrors.push({
        message: shortErrorMessageTooShort,
        type: "last_name",
      });
    } else if (
      formData.last_name &&
      formData.last_name.length > Constants.LAST_NAME_MAX_LENGTH
    ) {
      validationErrors.push({ message: shortErrorMessageTooLong, type: "last_name" });
    }

    /* Validate email */
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!formData.email) {
      validationErrors.push({ message: "Please enter email address", type: "email" });
    } else if (
      !emailRegex.test(formData.email) ||
      formData.email.length < Constants.EMAIL_MIN_LENGTH
    ) {
      validationErrors.push({ message: "Invalid email", type: "email" });
    } else if (formData.email.length > Constants.EMAIL_MAX_LENGTH) {
      validationErrors.push({
        message: `Email must be at most ${Constants.EMAIL_MAX_LENGTH.toString()} characters long`,
        type: "email",
      });
    }

    /* Validate password */
    if (!formData.password) {
      validationErrors.push({
        message: "Please enter password",
        type: "password",
      });
    } else if (formData.password.length < Constants.PASSWORD_MIN_LENGTH) {
      validationErrors.push({
        message: `Password must be at least ${Constants.PASSWORD_MIN_LENGTH.toString()} characters long`,
        type: "password",
      });
    } else if (formData.password.length > Constants.PASSWORD_MAX_LENGTH) {
      validationErrors.push({
        message: `Password must be at most ${Constants.PASSWORD_MIN_LENGTH.toString()} characters long`,
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const trimmedValue = name !== "password" ? value.trim() : value;
    setFormData({ ...formData, [name]: trimmedValue });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    setErrors([]);
    if (formData.last_name === "") {
      delete formData.last_name;
    }
    console.log(formData);
  };

  return (
    <>
      <AuthForm name="auth-form" onSubmit={handleSubmit} title="Sign up">
        <div className="splitted-input">
          <div className="input-container">
            <Input
              autocomplete="given-name"
              error={errors.find((error) => error.type === "first_name")?.message}
              name="first_name"
              onChange={handleChange}
              placeholder="John"
              required={true}
              title="First name"
              type="text"
            />
          </div>
          <div className="input-container">
            <Input
              autocomplete="family-name"
              error={errors.find((error) => error.type === "last_name")?.message}
              name="last_name"
              onChange={handleChange}
              placeholder="Smith"
              required={true}
              title="Last name"
              type="text"
            />
          </div>
        </div>
        <Input
          autocomplete="email"
          error={errors.find((error) => error.type === "email")?.message}
          name="email"
          onChange={handleChange}
          placeholder="name@email.tld"
          required={true}
          title="Email"
          type="email"
        />
        <Input
          autocomplete="new-password"
          error={errors.find((error) => error.type === "password")?.message}
          name="password"
          onChange={handleChange}
          placeholder="••••••••"
          required={true}
          title="Password"
          type="password"
        />
        <div className="terms-container">
          <Checkbox name="terms" onChange={handleChange} required={true} />
          <label htmlFor="terms">
            I agree to the <Link href="#">terms of use</Link>
          </label>
        </div>
        {errors.find((error) => error.type === "terms") ? (
          <label className="input-label--error" htmlFor={"terms"}>
            You need to accept our terms of use
          </label>
        ) : null}
        <Button disabled={false} form="auth-form" primary={true} type={"submit"}>
          Create Account
        </Button>
      </AuthForm>
      <FormFooter>
        <p>
          Already have an account? <Link href="#">Login</Link>
        </p>
      </FormFooter>
    </>
  );
};

export default SignUp;
