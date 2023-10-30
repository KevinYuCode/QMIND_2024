import React from "react";
import { twMerge } from "tailwind-merge";

function Text({ children, className }: any) {
  return <p className={twMerge("p-styles", className)}>{children}</p>;
}

export default Text;
