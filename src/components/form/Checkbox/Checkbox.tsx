import type React from "react";

import type { CheckboxProps } from "./Checkbox.types";

import { checkbox } from "./Checkbox.module.scss";

export const Checkbox = ({
  id,
  name,
  onChange,
  required = false,
}: CheckboxProps): React.JSX.Element => {
  return (
    <>
      <input
        className={checkbox}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        type="checkbox"
      />
      <label htmlFor={id} />
    </>
  );
};
