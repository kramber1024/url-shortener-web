import type React from "react";

import style from "./Checkbox.module.scss";

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
      id={name}
      name={name}
      className={style.checkbox}
      type="checkbox"
      required={required}
    />
  );
};
