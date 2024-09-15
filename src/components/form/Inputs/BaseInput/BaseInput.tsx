import type { BaseInputProps } from "./BaseInput.types";

import { Label } from "../../../typography";
import { inputContainer } from "./BaseInput.module.scss";

export const BaseInput = ({
  children,
  error,
  inputId,
  title,
}: Readonly<BaseInputProps>) => {
  return (
    <div className={inputContainer}>
      <Label htmlFor={inputId}>{title}</Label>
      {children}
      {error ? (
        <Label color={3} htmlFor={inputId}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
