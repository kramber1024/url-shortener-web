import type { ChangeEvent } from "react";

export interface InputProps {
  autocomplete?:
    | "current-password"
    | "email"
    | "family-name"
    | "given-name"
    | "new-password"
    | "off";
  id?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
}
