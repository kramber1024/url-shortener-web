import type React from "react";
import type { ReactNode } from "react";

import "./Link.scss";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link = ({ children, href }: Readonly<LinkProps>): React.JSX.Element => {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
};
