'use client'
import React from "react";
import QUOTES from "@/assets/quotes.svg";
import styles from "../styles/testimonialCard.module.scss";
import Image from "next/image";
function TestimonialCard({
  children,
  message,
  name,
  position,
  companyLogo,
  headShot,
  fullImage,
  imgDescription,
}: any) {
  return (
    <>
      {fullImage ? (
        <div className={`${styles.card} relative`}>
          <Image
            className="rounded-[inherit] object-cover"
            src={fullImage}
            alt="Testimonial Image"
            fill={true}
          />
          <p
            className={`${styles.img_description} text-[10px] sm:text-[12px] py-[8px] px-[10px] absolute w-[90%] text-center bottom-[20px] left-[50%] translate-x-[-50%] bg-[#161616] opacity-[0.75] rounded-[10px]`}
          >
            {imgDescription}
          </p>
        </div>
      ) : (
        <div
          className={` ${styles.card} p-[24px] md:p-[32px] flex flex-col justify-between items-start`}
        >
          <img className="h-[20px] lg:h-[30px]" src={QUOTES.src} alt="quotes" />
          <p className="my-[10px] md:my-[14px] text-left text-[15px] md:text-[18px] font-normal tracking-[-0.36px] leading-tight">
            {message}
          </p>
          <div className="flex items-center h-[90px] md:h-[110px] w-full">
            <img
              className={`${
                styles.headshot
              } ${"object-cover h-full w-auto aspect-square rounded-[10px] bg-[#a8a2a2]"}`}
              src={headShot}
              alt="headshot"
            />
            <div className="ml-[16px] flex flex-col justify-center gap-1 h-[95%]">
              <p className="md:text-lg leading-none w-full  tracking-tight md:tracking-normal">
                {name} <span className="font-light">| {position}</span>
              </p>
              <img
                className="md:h-[55px] mt-2 h-[40px] w-auto max-w-[70%] object-scale-down"
                src={companyLogo}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TestimonialCard;
