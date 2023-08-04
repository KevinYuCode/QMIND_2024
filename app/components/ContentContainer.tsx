import React from "react";
import { ContentContainerProps } from "../interfaces/IContentContainer";

function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div
      className={`${className} px-[15px] max-w-[380px] xs:max-w-[540px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1368px] mx-[auto]`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
