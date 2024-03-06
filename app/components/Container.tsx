import { cn } from "@/lib/utils";
import React from "react";

function Container({ children, className }: any) {
  return (
    <div
      className={cn(
        `flex flex-col gap-7 px-[20px] lg:px-[5rem] xs:max-w-[490px] w-[100%] max-w-[1000px] lg:max-w-[1600px] 3xl:max-w-[1900px] mx-[auto] h-[100%]`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
