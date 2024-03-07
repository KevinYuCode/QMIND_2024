"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import barcode from "@../../assets/barcode.png";
import barcode from "@/assets/barcode.png";
import styles from "../styles/MemberCard.module.scss";
import fitty from "fitty";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
function CompanyLogo({ companyLogo, companyName, className }: any) {
  return (
    <>
      {companyName ? (
        <div
          className={cn(
            `scale-[60%] md:scale-[100%] w-full absolute top-[5px] md:top-[20px] flex flex-col items-center z-0  left-[50%] translate-x-[-50%] `,
            className
          )}
        >
          <div className="text-black font-sofia text-[10px] md:text-[12px] text-center font-bold">
            {companyName}
          </div>

          <div
            className={cn(
              `relative w-full`,
              companyLogo.style
            )}
          >
            <Image src={companyLogo?.src || ""} alt="company" fill  className="object-contain"/>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            ` scale-[60%] md:scale-[100%] w-full absolute top-[15px] md:top-[25px] left-[50%] translate-x-[-50%] flex justify-center max-w-[100px]`,
            className
          )}
        >
          <div className={cn(`relative w-full`, companyLogo.style)}>
            <Image src={companyLogo?.src || ""} alt="company" fill className="object-contain"/>
          </div>
        </div>
      )}
    </>
  );
}

function MemberCard({
  company,
  headshot,
  onClick,
  name,
  position,
  spotlight,
  className,
  style,
  activeCard,
}: any) {
  return (
    <>
      {spotlight ? (
        <>
          {/* SPOTLIGHT */}
          <div
            style={style}
            onClick={onClick}
            className={cn(
              `mb-[5px] md:mb-0 mt-[20px] md:mt-0 scale-[75%] h-[400px] md:h-[440px] w-[275px] rounded-[23px] px-[10px] py-[15px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]
            transition-transform md:scale-[100%] lg:hover:scale-[101%] hover:drop-shadow-2xl bg-white hover:bg-[#FCFCFC]`,
              className
            )}
          >
            {/* black horizontal line */}
            <div
              className={`scale-[175%] absolute left-[50%] ml-[-17px] h-[3px] w-[34px] bg-[#707070] rounded-[33px]`}
            ></div>
            <CompanyLogo
              companyLogo={company.img}
              companyName={company.name}
              className={
                "!scale-[160%] mt-[40px] !md:scale-[175%] md:mt-[30px]"
              }
            ></CompanyLogo>

            <div className="absolute left-0 top-[70px] flex flex-col items-center">
              <img src={headshot || ""} alt={name} className="w-[60%] z-10" />
            </div>

            <div className="absolute w-full left-0 top-[290px] flex flex-col items-center">
              <div className="w-[90%] text-[19px] sm:text-[23px] font-sofia text-black text-center uppercase leading-[120%]">
                {name}
              </div>
              <div className="whitespace-normal w-[90%] text-[18px] sm:text-[20px] font-sofia text-black font-bold text-center leading-[110%] md:mt-[10px]">
                {position}
              </div>
            </div>
            <Image
              src={barcode}
              alt=""
              width={100}
              className={`absolute bottom-[15px] left-[50%] translate-x-[-50%]`}
            />
          </div>
        </>
      ) : (
        <div
          onClick={onClick}
          className={cn(
            "cursor-pointer relative z-0 h-[190px] min-w-[120px] w-[120px] md:h-[220px] md:w-[140px] md:scale-[105%] md:hover:scale-[115%] hover:drop-shadow-2xl hover:z-10 bg-white hover:bg-[#FCFCFC] transition-all rounded-[9px] px-[10px] py-[10px]",
            className,
            {
              "active-card-spotlight": activeCard,
            },
            {
              "not-active-card-spotlight": !activeCard,
            }
          )}
        >
          <div
            className={`absolute left-[50%] ml-[-17px] h-[3px] w-[34px] bg-[#707070] rounded-[33px]`}
          ></div>
          {/* Company Logo */}
          <CompanyLogo
            companyLogo={company.img}
            companyName={company.name}
          ></CompanyLogo>
          {/* Headshot */}
          <div className="absolute left-0 top-[30px] md:top-[45px] flex flex-col items-center">
            <img src={headshot || ""} alt={name} className="w-[50%]" />
          </div>
          {/* Name and Position */}
          <div className="absolute w-full left-0 top-[118px] md:top-[142px] flex flex-col items-center leading-[10px]">
            <div className="text-[12px] w-[90%] font-sofia text-black text-center uppercase ">
              {name}
            </div>
            <div className="text-[11px] mt-[7px] w-[90%] font-sofia text-black font-bold text-center">
              {position}
            </div>
          </div>
          {/* BarCode */}
          <Image
            src={barcode}
            alt=""
            height={19}
            className={`absolute bottom-[10px] md:bottom-[15px] left-[50%] translate-x-[-50%]`}
          />
        </div>
      )}
    </>
  );
}

export default MemberCard;
