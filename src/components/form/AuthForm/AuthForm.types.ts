import type { FormEvent, ReactNode } from "react";

export interface AuthFormProps {
  children: ReactNode;
  name: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  title: string;
}
