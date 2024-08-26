import type { ChangeEvent } from "react";
import React from "react";

import style from "./Input.module.scss";

type Type = "email" | "password" | "text";

type Autocomplete =
  | "email"
  | "current-password"
  | "new-password"
  | "given-name"
  | "family-name"
  | "off";

interface InputProps {
  title: string;
  name: string;
  placeholder?: string;
  type?: Type;
  autocomplete?: Autocomplete;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  title,
  name,
  placeholder,
  type = "text",
  autocomplete = "off",
  required = false,
}: Readonly<InputProps>): React.JSX.Element => {
  return (
    <>
      <label className={style.inputTitle} htmlFor={name}>
        {title}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={style.input}
        placeholder={placeholder}
        autoComplete={autocomplete}
        required={required}
      />
    </>
  );
};
