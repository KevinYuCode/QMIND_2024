import React from "react";
import { ContentContainerProps } from "../interfaces/IContentContainer";

function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div
      className={`${className} md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1368px] mx-[auto]`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
