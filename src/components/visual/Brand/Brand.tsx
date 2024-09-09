import type React from "react";

import type { BrandProps } from "./Brand.types";

import "./Brand.scss";

export const Brand = ({
  link = "/",
  name,
}: Readonly<BrandProps>): React.JSX.Element => {
  return (
    <a className="brand" href={link}>
      <div className="brand-logo"></div>
      <span className="brand-name">{name}</span>
    </a>
  );
};
