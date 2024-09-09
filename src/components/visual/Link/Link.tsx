import type React from "react";

import type { LinkProps } from "./Link.types";

import "./Link.scss";

export const Link = ({
  children,
  href,
  target = "_self",
  type,
}: Readonly<LinkProps>): React.JSX.Element => {
  return (
    <a className="link" href={href} target={target} type={type}>
      {children}
    </a>
  );
};
