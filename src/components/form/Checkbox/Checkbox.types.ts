import type { ChangeEvent } from "react";

export interface CheckboxProps {
  id: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
