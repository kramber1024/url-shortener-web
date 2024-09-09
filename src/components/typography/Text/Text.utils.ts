import type { Size, Weight } from "./Text.types";

import {
  size1,
  size10,
  size2,
  size3,
  size4,
  size5,
  size6,
  size7,
  size8,
  size9,
  text,
  weight100,
  weight200,
  weight300,
  weight400,
  weight500,
  weight600,
  weight700,
  weight800,
  weight900,
} from "./Text.module.scss";

const sizes = [size1, size2, size3, size4, size5, size6, size7, size8, size9, size10];
const weights = [
  weight100,
  weight200,
  weight300,
  weight400,
  weight500,
  weight600,
  weight700,
  weight800,
  weight900,
];

export const getTextClassName = (
  size: Size,
  weight: Weight,
  className?: string
): string => {
  const weightIndex = weight / 100;
  return `${text} ${sizes[size - 1] ?? size1} ${weights[weightIndex - 1] ?? weight100}${className ? ` ${className}` : ""}`;
};
