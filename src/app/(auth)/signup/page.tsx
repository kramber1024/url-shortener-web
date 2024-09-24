"use client";

import type { ApiResponse, CreateUser, Error } from "@/types";
import type React from "react";
import type { ChangeEvent, FormEvent } from "react";

import { AuthForm, Checkbox, InputGroup } from "@/components/form";
import { Box } from "@/components/layout";
import { Link } from "@/components/navigation";
import { Label } from "@/components/typography";
import { Button } from "@/components/visual";
import { useFetch } from "@/hooks";
import { errorCustom, errorInvalid } from "@/utils";
import { useState } from "react";

import { validateSignUpFom } from "./validation";

const SignUp = (): React.JSX.Element => {
  const [formData, setFormData] = useState<CreateUser>({
    email: "",
    first_name: "",
    password: "",
    terms: "off",
  });
  const [errors, setErrors] = useState<Error[]>([]);
  const [loading, fetchData] = useFetch<ApiResponse>("POST", "/api/auth/register");

  /**
   * Handles every form input change event.
   *
   * Updates the form data state with the new value.
   * Does whitespace trimming for all fields except the password.
   * Switches the value to "on" or "off" for checkbox.
   * @param event - React form event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name, type, value } = event.target;
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

  /**
   * Handles form submission.
   *
   * Validates the form data and sends a request to the server.
   * @param event - React form event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const updatedErrors = validateSignUpFom(formData);
    setErrors(updatedErrors);
    if (updatedErrors.length > 0) {
      return;
    }

    fetchData(formData, (data: ApiResponse | null) => {
      if (data == null) {
        return;
      }
      switch (data.status) {
        case 422:
          setErrors([errorInvalid("email")]);
          break;

        case 409:
          setErrors([errorCustom("email", "This email address is already in use")]);
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
    <AuthForm name={"authForm"} onSubmit={handleSubmit} title={"Sign up"}>
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        <Box marginRight={"20px"}>
          <InputGroup
            autocomplete={"given-name"}
            error={errors.find((error) => error.type === "first_name")?.message}
            label={"First name"}
            name={"first_name"}
            onChange={handleChange}
            placeholder={"John"}
          />
        </Box>
        <InputGroup
          autocomplete={"family-name"}
          error={errors.find((error) => error.type === "last_name")?.message}
          label={"Last name"}
          name={"last_name"}
          onChange={handleChange}
          placeholder={"Smith"}
        />
      </Box>
      <InputGroup
        autocomplete={"email"}
        error={errors.find((error) => error.type === "email")?.message}
        label={"Email"}
        name={"email"}
        onChange={handleChange}
        placeholder={"name@email.tld"}
      />
      <InputGroup
        autocomplete={"new-password"}
        error={errors.find((error) => error.type === "password")?.message}
        label={"Password"}
        name={"password"}
        onChange={handleChange}
        placeholder={"••••••••"}
      />
      <Box
        alignItems={"center"}
        display={"flex"}
        flexDirection={"row"}
        marginTop={"17px"}
      >
        <Checkbox id={"terms"} name={"terms"} onChange={handleChange} required={true} />
        <Label htmlFor={"terms"}>
          I agree to the <Link href={"#"}>terms of use</Link>
        </Label>
      </Box>
      {errors.find((error) => error.type === "terms") ? (
        <Box marginTop={"3px"}>
          <Label color={2} htmlFor={"terms"}>
            You need to accept our terms of use
          </Label>
        </Box>
      ) : null}
      <Box marginTop={"15px"}>
        <Button disabled={loading} loading={loading} type={"submit"}>
          Create Account
        </Button>
      </Box>
    </AuthForm>
  );
};

export default SignUp;
