import type { ChangeEvent, ComponentType } from "react";

export interface InputGroupProps {
  autocomplete:
    | "current-password"
    | "email"
    | "family-name"
    | "given-name"
    | "new-password";
  error?: string;
  label: string;
  LabelInline?: ComponentType;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
