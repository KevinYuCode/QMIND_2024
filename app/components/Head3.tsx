'use client'

import React from "react";
import { twMerge } from "tailwind-merge";
function Head3({ children, className }: any) {
  return <h3 className={twMerge(`h3-styles`, className)}>{children}</h3>;
}

export default Head3;
