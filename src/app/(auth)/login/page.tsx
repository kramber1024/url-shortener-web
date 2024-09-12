"use client";

import type { ApiResponse, Error, LoginUser } from "@/types";
import type React from "react";
import type { ChangeEvent, FormEvent } from "react";

import { AuthForm, FormInput } from "@/components/form";
import { Box } from "@/components/layout";
import { Button } from "@/components/visual";
import { useFetch } from "@/hooks";
import { useState } from "react";

import { validateForm } from "./validation";

const Login = (): React.JSX.Element => {
  const [formData, setFormData] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Error[]>([]);
  const [loading, fetchData] = useFetch<ApiResponse>("POST", "/api/auth/login");

  /**
   * Handles every form input change event.
   *
   * Updates the form data state with the new value.
   * Does whitespace trimming for email input.
   * @param event - React form event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const processedValue = name !== "password" ? value.trim() : value;
    setFormData({ ...formData, [name]: processedValue });
  };

  /**
   * Handles form submission.
   *
   * Validates the form data and sends a request to the server.
   * @param event - React form event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const updatedErrors = validateForm(formData);
    setErrors(updatedErrors);
    if (updatedErrors.length > 0) {
      return;
    }

    fetchData(formData, (data: ApiResponse | null): void => {
      if (data == null) {
        return;
      }
    });
  };

  return (
    <AuthForm name="authForm" onSubmit={handleSubmit} title="Sign in">
      <FormInput
        error={errors.find((error) => error.type === "email")?.message}
        name="email"
        onChange={handleChange}
        type="email"
      />
      <FormInput
        error={errors.find((error) => error.type === "password")?.message}
        name="password"
        onChange={handleChange}
        type="password"
      />
      <Box marginTop="20px">
        <Button
          disabled={loading}
          form="authForm"
          loading={loading}
          primary={true}
          type={"submit"}
        >
          Sign In
        </Button>
      </Box>
    </AuthForm>
  );
};

export default Login;
