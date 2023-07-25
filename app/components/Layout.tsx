import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
