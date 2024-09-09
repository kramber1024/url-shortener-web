import type React from "react";

import type { InputProps } from "./Input.types";

import { input, inputLabel, inputLabelError } from "./Input.module.scss";

export const Input = ({
  autocomplete = "off",
  error,
  label,
  name,
  onChange,
  placeholder,
  required = false,
  type,
}: Readonly<InputProps>): React.JSX.Element => {
  return (
    <>
      {label ? (
        <label className={inputLabel} htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        autoComplete={autocomplete}
        className={input}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
      {error ? (
        <label className={inputLabelError} htmlFor={name}>
          {error}
        </label>
      ) : null}
    </>
  );
};
