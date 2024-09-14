import type React from "react";

import type { InputProps } from "./Input.types";

import { input } from "./Input.module.scss";

export const Input = ({
  autocomplete = "off",
  id,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: Readonly<InputProps>): React.JSX.Element => {
  return (
    <input
      autoComplete={autocomplete}
      className={input}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
};
