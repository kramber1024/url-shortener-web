import type React from "react";

import Image from "next/image";

import type { BrandProps } from "./Brand.types";

import { brandLink, brandLogoContainer, brandName } from "./Brand.module.scss";

export const Brand = ({
  link = "/",
  name,
}: Readonly<BrandProps>): React.JSX.Element => {
  return (
    <a className={brandLink} href={link}>
      <div className={brandLogoContainer}>
        <Image alt={`${name} brand logo`} height={32} src="/svg/logo.svg" width={32} />
      </div>
      <span className={brandName}>{name}</span>
    </a>
  );
};
