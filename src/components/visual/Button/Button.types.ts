export interface ButtonProps {
  children: string;
  disabled?: boolean;
  form?: string;
  loading?: boolean;
  onClick?: () => void;
  primary?: boolean;
  type?: "button" | "reset" | "submit";
}
