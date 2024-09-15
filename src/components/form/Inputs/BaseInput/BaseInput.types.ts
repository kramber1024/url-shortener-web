import type { ComponentType, ReactNode } from "react";

export interface BaseInputProps {
  children: ReactNode;
  error?: string;
  inputId: string;
  title: string;
  TitleInline?: ComponentType;
}
