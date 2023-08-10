import React from "react";
import { ContentContainerProps } from "../interfaces/IContentContainer";

function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div
      className={`${className} px-[15px] max-w-[360px] xs:max-w-[490px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1368px] mx-[auto]`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
