import styles from "./Button.module.scss";
import type React from "react";

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: string;
}

const Button = ({
  primary = true,
  disabled = false,
  onClick,
  children,
}: ButtonProps): React.JSX.Element => {
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

export default Button;
