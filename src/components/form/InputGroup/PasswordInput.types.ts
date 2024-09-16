import type { ComponentType } from "react";

import { InputGroupProps } from "./InputGroup.types";

export interface PasswordInputProps extends InputGroupProps {
  LabelInline?: ComponentType;
  type?: "newPassword" | "password";
}
