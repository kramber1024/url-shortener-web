import type React from "react";

import { Label } from "../../typography";
import { Input } from "../Input";
import { inputGroup } from "./InputGroup.module.scss";
import { InputGroupProps } from "./InputGroup.types";

export const EmailInput = ({
  error,
  name,
  onChange,
}: Readonly<InputGroupProps>): React.JSX.Element => {
  return (
    <div className={inputGroup}>
      <Label htmlFor={name}>Email</Label>
      <Input
        autocomplete={"email"}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={"name@email.tld"}
        required={true}
        type={"email"}
      />
      {error ? (
        <Label color={2} htmlFor={name}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
