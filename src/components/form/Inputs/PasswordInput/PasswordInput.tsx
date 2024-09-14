import type React from "react";

import type { PasswordInputProps } from "./PasswordInput.types";

import { Box } from "../../../layout";
import { Label } from "../../../typography";
import { Input } from "../Input";
import { formInput } from "../styles/form_input.module.scss";

export const PasswordInput = ({
  error,
  InlineComponent,
  onChange,
  type = "current",
}: Readonly<PasswordInputProps>): React.JSX.Element => {
  const inputId = "password";

  return (
    <div className={formInput}>
      {InlineComponent ? (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Label htmlFor={inputId}>Password</Label>
          <InlineComponent />
        </Box>
      ) : (
        <Label htmlFor={inputId}>Password</Label>
      )}
      <Input
        autocomplete={type === "current" ? "current-password" : "new-password"}
        id={inputId}
        onChange={onChange}
        placeholder="••••••••"
        required={true}
        type={"password"}
      />
      {error ? (
        <Label color={3} htmlFor={inputId}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
