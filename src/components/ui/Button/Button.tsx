import type React from "react";

import type { ButtonProps } from "./Button.types";

import "./Button.scss";

export const Button = ({
  children,
  disabled = false,
  form,
  onClick,
  primary = true,
  type = "button",
}: Readonly<ButtonProps>): React.JSX.Element => {
  return (
    <button
      className={`button ${primary ? "" : "secondary"}`}
      disabled={disabled}
      form={form}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
