import type React from "react";

import type { FullpageProps } from "./Fullpage.types";

import { fullpage } from "./Fullpage.module.scss";

export const Fullpage = ({ children }: Readonly<FullpageProps>): React.JSX.Element => {
  return <div className={fullpage}>{children}</div>;
};
