import type React from "react";

import type { PasswordInputProps } from "./PasswordInput.types";

import { Box } from "../../layout";
import { Label } from "../../typography";
import { Input } from "../Input";
import { inputGroup } from "./InputGroup.module.scss";

export const PasswordInput = ({
  error,
  LabelInline,
  name,
  onChange,
  type = "password",
}: Readonly<PasswordInputProps>): React.JSX.Element => {
  const inputLabel = "Password";

  return (
    <div className={inputGroup}>
      {LabelInline ? (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Label htmlFor={name}>{inputLabel}</Label>
          <LabelInline />
        </Box>
      ) : (
        <Label htmlFor={name}>{inputLabel}</Label>
      )}
      <Input
        autocomplete={type === "newPassword" ? "new-password" : "current-password"}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={"••••••••"}
        required={true}
        type={"password"}
      />
      {error ? (
        <Label color={3} htmlFor={name}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
