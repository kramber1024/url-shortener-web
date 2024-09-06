import type React from "react";
import type { ReactNode } from "react";

import "./Main.scss";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: Readonly<MainProps>): React.JSX.Element => {
  return <main className="content">{children}</main>;
};
