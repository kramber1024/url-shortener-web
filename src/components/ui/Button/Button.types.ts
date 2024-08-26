type Type = "button" | "reset" | "submit";

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  form: string;
  onClick?: () => void;
  primary?: boolean;
  type?: Type;
}
