import type React from "react";

import { constant } from "@/constant";

const NotFound = (): React.JSX.Element => {
  return (
    <>
      {/*
        No support for metadata in not-found.tsx yet
        https://github.com/vercel/next.js/pull/47328#issuecomment-1488891093
      */}
      <title>{`${constant.app.NAME} - Not Found`}</title>
      <p>No</p>
    </>
  );
};

export default NotFound;
