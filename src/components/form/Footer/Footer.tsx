import type React from "react";

import type { FooterProps } from "./Footer.types";

import { footer } from "./Footer.module.scss";

export const Footer = ({ children }: Readonly<FooterProps>): React.JSX.Element => {
  return <div className={footer}>{children}</div>;
};
