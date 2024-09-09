import type React from "react";

import type { FooterProps } from "./Footer.types";

import { footer, footerText } from "./Footer.module.scss";

export const Footer = ({ children }: Readonly<FooterProps>): React.JSX.Element => {
  return (
    <div className={footer}>
      <p className={footerText}>{children}</p>
    </div>
  );
};
