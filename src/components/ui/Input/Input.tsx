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
  name: string;
  type: Type;
  autocomplete?: Autocomplete;
  placeholder: string;
  required: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  type,
  autocomplete = "off",
  placeholder,
  required,
}: Readonly<InputProps>): React.JSX.Element => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      className={style.input}
      placeholder={placeholder}
      autoComplete={autocomplete}
      required={required}
    />
  );
};
