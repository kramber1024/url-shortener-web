import type { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
