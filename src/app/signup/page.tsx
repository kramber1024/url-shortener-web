"use client";

import type { ApiResponse, CreateUser, Error } from "@/types";
import type React from "react";
import type { ChangeEvent, FormEvent } from "react";

import { AuthForm } from "@/components/layouts/AuthForm";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormFooter } from "@/components/ui/FormFooter";
import { Input } from "@/components/ui/Input";
import { Link } from "@/components/ui/Link";
import { constants } from "@/constants";
import { useFetch } from "@/hooks";
import { useState } from "react";

const SignUp = (): React.JSX.Element => {
  const [formData, setFormData] = useState<CreateUser>({
    email: "",
    first_name: "",
    password: "",
    terms: "off",
  });
  const [errors, setErrors] = useState<Error[]>([]);
  const [loading, response, refetch] = useFetch<ApiResponse>(
    "POST",
    "/api/auth/register"
  );

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name, type, value } = e.target;
    const processedValue =
      type === "checkbox"
        ? checked
          ? "on"
          : "off"
        : name !== "password"
          ? value.trim()
          : value;
    const updatedFormData = { ...formData, [name]: processedValue };
    if (name === "last_name" && !processedValue) {
      delete updatedFormData.last_name;
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const updatedErrors = validateForm();
    setErrors(updatedErrors);
    if (updatedErrors.length > 0) {
      return;
    }

    refetch(formData);
    if (response == null) {
      return;
    }

    switch (response.status) {
      case 422:
        setErrors([
          {
            message: "Invalid email",
            type: "email",
          },
        ]);
        break;

      case 409:
        console.log("conflict");
        break;

      case 201:
        console.log("User created");
        break;

      default:
        break;
    }
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
        <Button
          disabled={loading}
          form="auth-form"
          loading={loading}
          primary={true}
          type={"submit"}
        >
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
