import type React from "react";

import Image from "next/image";

import type { BrandProps } from "./Brand.types";

import { brand, brandLogo, brandName } from "./Brand.module.scss";

export const Brand = ({
  link = "/",
  name,
}: Readonly<BrandProps>): React.JSX.Element => {
  return (
    <a className={brand} href={link}>
      <div className={brandLogo}>
        <Image alt={`${name} brand logo`} height={32} src="/svg/logo.svg" width={32} />
      </div>
      <span className={brandName}>{name}</span>
    </a>
  );
};
