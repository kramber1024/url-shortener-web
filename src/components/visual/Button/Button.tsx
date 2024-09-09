import type React from "react";

import type { ButtonProps } from "./Button.types";

import { button, loader } from "./Button.module.scss";

export const Button = ({
  children,
  disabled = false,
  form,
  loading = false,
  onClick,
  type = "button",
}: Readonly<ButtonProps>): React.JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 700px) {
            ${button} {
              background-color: red;
            }
          }
        `}
      </style>
      <button
        className={button}
        disabled={disabled}
        form={form}
        onClick={onClick}
        type={type}
      >
        {loading ? <div className={loader} /> : children}
      </button>
    </>
  );
};
