import type React from "react";

import type { InputProps } from "./Input.types";

import "./Input.scss";

export const Input = ({
  autocomplete = "off",
  error,
  name,
  onChange,
  placeholder,
  required = false,
  title,
  type = "text",
}: Readonly<InputProps>): React.JSX.Element => {
  return (
    <>
      <label className="input-label" htmlFor={name}>
        {title}
      </label>
      <input
        autoComplete={autocomplete}
        className="input"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
      {error ? (
        <label className="input-label--error" htmlFor={name}>
          {error}
        </label>
      ) : null}
    </>
  );
};
