import type { InputGroupProps } from "./InputGroup.types";

export interface NameInputProps extends InputGroupProps {
  type: "firstName" | "lastName";
}
