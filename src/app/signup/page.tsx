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
import { useFetch } from "@/hooks";
import { useState } from "react";

import { validateForm } from "./validation";

const SignUp = (): React.JSX.Element => {
  const [formData, setFormData] = useState<CreateUser>({
    email: "",
    first_name: "",
    password: "",
    terms: "off",
  });
  const [errors, setErrors] = useState<Error[]>([]);
  const [loading, fetchData] = useFetch<ApiResponse>("POST", "/api/auth/register");

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

    const updatedErrors = validateForm(formData);
    setErrors(updatedErrors);
    if (updatedErrors.length > 0) {
      return;
    }

    fetchData(formData, (data) => {
      if (data == null) {
        /** Api call failed */
        return;
      }
      switch (data.status) {
        case 422:
          setErrors([{ message: "Invalid email", type: "email" }]);
          break;

        case 409:
          setErrors([
            {
              message: "This email address is already used",
              type: "email",
            },
          ]);
          break;

        case 201:
          // Continue
          break;

        default:
          break;
      }
    });
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
