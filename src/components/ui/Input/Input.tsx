import type { ChangeEvent } from "react";

import React from "react";

import style from "./Input.module.scss";

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
  placeholder,
  required = false,
  title,
  type = "text",
}: Readonly<InputProps>): React.JSX.Element => {
  return (
    <>
      <label className={style.inputTitle} htmlFor={name}>
        {title}
      </label>
      <input
        autoComplete={autocomplete}
        className={style.input}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </>
  );
};
