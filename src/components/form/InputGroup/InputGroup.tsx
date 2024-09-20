import type React from "react";

import type { InputGroupProps } from "./InputGroup.types";

import { Box } from "../../layout";
import { Label } from "../../typography";
import { Input } from "../Input";
import { inputGroup } from "./InputGroup.module.scss";

export const InputGroup = ({
  autocomplete,
  error,
  label,
  LabelInline,
  name,
  onChange,
  placeholder,
}: Readonly<InputGroupProps>): React.JSX.Element => {
  return (
    <div className={inputGroup}>
      {LabelInline ? (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Label htmlFor={name}>{label}</Label>
          <LabelInline />
        </Box>
      ) : (
        <Label htmlFor={name}>{label}</Label>
      )}
      <Input
        autocomplete={autocomplete}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={true}
        type={
          autocomplete === "email"
            ? "email"
            : autocomplete === "current-password" || autocomplete === "new-password"
              ? "password"
              : "text"
        }
      />
      {error ? (
        <Label color={2} htmlFor={name}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
