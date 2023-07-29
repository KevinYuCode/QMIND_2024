import React from "react";
import { CTAProps } from "../interfaces/ICTALink";

function CTALink({ text, href, className, isExternalLink }: CTAProps) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      className={`${className}  bg-[#F7F7F7] rounded-[5px] tertiary-colour py-[6px] px-[35px] font-bold tracking-[1.6px] leading-[27.5px] text-[16px] font-gothic`}
      href={href}
    >
      {text}
    </a>
  );
}

export default CTALink;
