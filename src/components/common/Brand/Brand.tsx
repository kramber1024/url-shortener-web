import type React from "react";
import type { ReactNode } from "react";

import "./Brand.scss";

interface BrandProps {
  children: ReactNode;
  link?: string;
  name: string;
}

export const Brand = ({
  children,
  link = "/",
  name,
}: Readonly<BrandProps>): React.JSX.Element => {
  return (
    <a className="brand" href={link}>
      <div className="brand-logo">{children}</div>
      <span className="brand-name">{name}</span>
    </a>
  );
};
