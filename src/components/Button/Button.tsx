import type { ReactElement } from "react";
import styles from "./Button.module.scss";

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
}: ButtonProps): ReactElement => {
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
