import type React from "react";

import style from "./Checkbox.module.scss";

export const Checkbox = (): React.JSX.Element => {
  return <input className={style.checkbox} type="checkbox" />;
};
