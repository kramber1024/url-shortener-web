import type React from "react";

import type { CheckboxProps } from "./Checkbox.types";

import { checkbox } from "./Checkbox.scss";

export const Checkbox = ({
  name,
  onChange,
  required,
}: CheckboxProps): React.JSX.Element => {
  return (
    <input
      className={checkbox}
      id={name}
      name={name}
      onChange={onChange}
      required={required}
      type="checkbox"
    />
  );
};
