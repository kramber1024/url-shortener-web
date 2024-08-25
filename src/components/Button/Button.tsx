import type React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: string;
}

export const Button = ({
  primary = true,
  disabled = false,
  onClick,
  children,
}: Readonly<ButtonProps>): React.JSX.Element => {
  return (
    <button
      className={`${styles.button} ${primary ? "" : styles.secondary}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
