type ButtonType = "button" | "reset" | "submit";

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  form: string;
  onClick?: () => void;
  primary?: boolean;
  type?: ButtonType;
}
