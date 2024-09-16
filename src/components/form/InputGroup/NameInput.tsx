import type React from "react";

import type { NameInputProps } from "./NameInput.types";

import { Label } from "../../typography";
import { Input } from "../Input";
import { inputGroup } from "./InputGroup.module.scss";

export const NameInput = ({
  error,
  name,
  onChange,
  type,
}: Readonly<NameInputProps>): React.JSX.Element => {
  return (
    <div className={inputGroup}>
      <Label htmlFor={name}>{type === "firstName" ? "First name" : "Last name"}</Label>
      <Input
        autocomplete={type === "firstName" ? "given-name" : "family-name"}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={type === "firstName" ? "John" : "Smith"}
        required={true}
        type={"text"}
      />
      {error ? (
        <Label color={3} htmlFor={name}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
