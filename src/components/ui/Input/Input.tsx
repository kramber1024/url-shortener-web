import type { ChangeEvent } from "react";

import React from "react";

import "./Input.scss";

type Type = "email" | "password" | "text";

type Autocomplete =
  | "current-password"
  | "email"
  | "family-name"
  | "given-name"
  | "new-password"
  | "off";

interface InputProps {
  autocomplete?: Autocomplete;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  title: string;
  type?: Type;
}

export const Input = ({
  autocomplete = "off",
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
    </>
  );
};
