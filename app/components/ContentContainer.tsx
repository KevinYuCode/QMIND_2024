import React from "react";
import { ContentContainerProps } from "../interfaces/IContentContainer";

function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={`${className} max-w-[1368px] mx-[auto]`}>{children}</div>
  );
}

export default ContentContainer;
