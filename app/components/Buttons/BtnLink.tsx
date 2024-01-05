import React from "react";
import { CTAProps } from "../../interfaces/IBtnLink";
import styles from "../../styles/cta.module.scss";
import Link from "next/link";
function BtnLink({ text, href, className, isExternalLink }: CTAProps) {
  return (
    <Link
      rel={isExternalLink ? "noreferrer" : ""}
      target={isExternalLink ? "_blank" : ""}
      className={`${className} ${styles.ctaHover} min-w-[140px] text-center bg-[#F7F7F7] rounded-[5px] tertiary-colour pt-[14px] pb-[12px] md:pt-[14px] md:pb-[12px] px-[13px] md:px-[20px] lg:px-[35px] font-bold tracking-[1.6px] leading-none text-[10px] md:text-[11px] lg:text-[16px] font-gothic`}
      href={href}
    >
      {text}
    </Link>
  );
}

export default BtnLink;
