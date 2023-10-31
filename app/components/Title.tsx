'use client'
import React from "react";

function Title({ title, subtitle, children }: any) {
  return (
    <div className="text-center flex flex-col leading-tight gap-[4px] ">
      {title && (
        <h2 className="h2-styles md:text-[45px] lg:text-[45px] font-gothic">
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="h3-styles text-[15px] lg:text-[20px] font-bold font-gothic">
          {subtitle}
        </h3>
      )}
      {children}
    </div>
  );
}

export default Title;
