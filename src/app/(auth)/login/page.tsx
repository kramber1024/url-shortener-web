"use client";

import type { ApiResponse, Error, LoginUser } from "@/types";
import type React from "react";
import type { ChangeEvent, FormEvent } from "react";

import { AuthForm } from "@/components/layouts/AuthForm";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useFetch } from "@/hooks";
import "@/styles/pages/login.scss";
import { useState } from "react";

import { validateForm } from "./validation";

const Login = (): React.JSX.Element => {
  const [formData, setFormData] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Error[]>([]);
  const [loading, fetchData] = useFetch<ApiResponse>("POST", "/api/auth/login");
  BREAKING_CHANGE;
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const processedValue = name !== "password" ? value.trim() : value;
    setFormData({ ...formData, [name]: processedValue });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

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
    <AuthForm name="auth-form" onSubmit={handleSubmit} title="Sign in">
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
        autocomplete="current-password"
        error={errors.find((error) => error.type === "password")?.message}
        name="password"
        onChange={handleChange}
        placeholder="••••••••"
        required={true}
        title="Password"
        type="password"
      />
      <Button
        disabled={loading}
        form="auth-form"
        loading={loading}
        primary={true}
        type={"submit"}
      >
        Sign in
      </Button>
    </AuthForm>
  );
};

export default Login;
