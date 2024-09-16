import type { ChangeEvent } from "react";

export interface InputGroupProps {
  error?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
