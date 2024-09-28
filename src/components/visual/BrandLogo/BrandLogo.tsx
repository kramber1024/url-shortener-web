import type React from "react";

import Image from "next/image";

import type { BrandLogoProps } from "./BrandLogo.types";

import { brandLink } from "./BrandLogo.module.scss";

export const BrandLogo = ({
  link = "/",
  name,
}: Readonly<BrandLogoProps>): React.JSX.Element => {
  return (
    <a className={brandLink} href={link}>
      <Image alt={`${name} brand logo`} height={32} src="/svg/logo.svg" width={32} />
    </a>
  );
};
