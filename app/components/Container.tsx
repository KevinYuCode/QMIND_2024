import { cn } from "@/lib/utils";
import React from "react";

function Container({ children, className }: any) {
  return (
    <div
      className={cn(
        `flex flex-col gap-7 px-[20px] xs:max-w-[490px] w-[100%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1368px] mx-[auto] h-[100%]`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
