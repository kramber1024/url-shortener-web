import type React from "react";

import type { LinkProps } from "./Link.types";

import { link } from "./Link.module.scss";

export const Link = ({
  children,
  href,
  referrerPolicy,
  rel,
  target = "_self",
  type,
}: Readonly<LinkProps>): React.JSX.Element => {
  return (
    <a
      className={link}
      href={href}
      referrerPolicy={referrerPolicy}
      rel={rel}
      target={target}
      type={type}
    >
      {children}
    </a>
  );
};
