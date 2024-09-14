import type { ChangeEvent, ComponentType } from "react";

export interface PasswordInputProps {
  error?: string;
  InlineComponent?: ComponentType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: "current" | "new";
}
