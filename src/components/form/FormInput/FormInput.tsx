import type React from "react";

import type { FormInputProps } from "./FormInput.types";

import { Label } from "../../typography";
import { Input } from "../Input";
import { formInput } from "./FormInput.module.scss";
import { inputPropsMap, titleMap } from "./FormInput.types";

export const FormInput = ({
  error,
  name,
  onChange,
  type,
}: Readonly<FormInputProps>): React.JSX.Element => {
  return (
    <div className={formInput}>
      <Label htmlFor={name}>{titleMap[type]}</Label>
      <Input
        id={name}
        name={name}
        onChange={onChange}
        required={true}
        type={type === "newPassword" || type === "password" ? "password" : "text"}
        {...inputPropsMap[type]}
      />
      {error ? (
        <Label color={3} htmlFor={name}>
          {error}
        </Label>
      ) : null}
    </div>
  );
};
