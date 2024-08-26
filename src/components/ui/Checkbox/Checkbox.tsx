import type React from "react";

import "./Checkbox.scss";

interface CheckboxProps {
  name: string;
  required?: boolean;
}

export const Checkbox = ({
  name,
  required = false,
}: CheckboxProps): React.JSX.Element => {
  return (
    <input
      className="checkbox"
      id={name}
      name={name}
      required={required}
      type="checkbox"
    />
  );
};
