import type { ChangeEvent } from "react";

type FormInputType = "email" | "firstName" | "lastName" | "newPassword" | "password";

export const titleMap: Record<FormInputType, string> = {
  email: "Email",
  firstName: "First name",
  lastName: "Last name",
  newPassword: "Password",
  password: "Password",
} as const;

export const inputPropsMap: Record<
  FormInputType,
  {
    autocomplete:
      | "current-password"
      | "email"
      | "family-name"
      | "given-name"
      | "new-password";
    placeholder: string;
  }
> = {
  email: {
    autocomplete: "email",
    placeholder: "name@email.tld",
  },
  firstName: {
    autocomplete: "given-name",
    placeholder: "John",
  },
  lastName: {
    autocomplete: "family-name",
    placeholder: "Smith",
  },
  newPassword: {
    autocomplete: "new-password",
    placeholder: "••••••••",
  },
  password: {
    autocomplete: "current-password",
    placeholder: "••••••••",
  },
} as const;

export interface FormInputProps {
  error?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: FormInputType;
}
