import type React from "react";

import type { MainProps } from "./Main.types";

import { content } from "./Main.module.scss";

export const Main = ({
  alignItems,
  children,
  justifyContent,
}: Readonly<MainProps>): React.JSX.Element => {
  return (
    <main className={content} style={{ alignItems, justifyContent }}>
      {children}
    </main>
  );
};
