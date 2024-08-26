import type React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  primary?: boolean;
}

export const Button = ({
  children,
  disabled = false,
  onClick,
  primary = true,
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
