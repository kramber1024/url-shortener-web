import type React from "react";
import type { ReactNode } from "react";

import styles from "./FormFooter.module.scss";

interface FormFooterProps {
  children: ReactNode;
}

export const FormFooter = ({
  children,
}: Readonly<FormFooterProps>): React.JSX.Element => {
  return <div className={styles.formFooter}>{children}</div>;
};
