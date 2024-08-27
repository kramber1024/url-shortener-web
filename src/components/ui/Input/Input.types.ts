import type { ChangeEvent } from "react";

type Autocomplete =
  | "current-password"
  | "email"
  | "family-name"
  | "given-name"
  | "new-password"
  | "off";

type InputType = "email" | "password" | "text";

export interface InputProps {
  autocomplete?: Autocomplete;
  error?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  title: string;
  type?: InputType;
}
