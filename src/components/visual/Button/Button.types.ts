export interface ButtonProps {
  children: string;
  disabled?: boolean;
  form?: string;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}
