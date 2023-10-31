import React, { useEffect, useRef } from "react";
import Image from "next/image";
import barcode from "../../assets/barcode.png";
import styles from "../styles/MemberCard.module.scss";
import fitty from "fitty";
import { useMediaQuery } from "react-responsive";

function CompanyLogo({ companyLogo, companyName, className }: any) {
  return (
    <>
      {companyName ? (
        <div
          className={`${className} scale-[60%] md:scale-[100%] w-full absolute top-[5px] md:top-[20px] left-0 flex flex-col items-center z-0`}
        >
          <div className="text-black font-sofia text-[10px] md:text-[12px] text-center font-bold">
            {companyName}
          </div>
          <img
            src={companyLogo.src}
            alt="company"
            className={`mt-[-10px] md:mt-0 ${companyLogo.style}`}
          />
        </div>
      ) : (
        <div
          className={`${className} scale-[60%] md:scale-[100%] w-full absolute top-[15px] md:top-[25px] left-0 flex justify-center`}
        >
          <img
            src={companyLogo.src}
            alt="company"
            className={`${companyLogo.style}`}
          />
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
  const isMobile = useMediaQuery({
    query: "(min-width: 600px)",
  });

  return (
    <>
      {spotlight ? (
        <>
          <div
            style={style}
            onClick={onClick}
            className={`${className} 
              mb-[5px] md:mb-[60px] md:mb-0 mt-[20px] md:mt-[50px] md:mt-0 scale-[75%] h-[400px] md:h-[440px] w-[275px] rounded-[23px] px-[10px] py-[15px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]
            transition-transform md:scale-[100%] lg:hover:scale-[101%] hover:drop-shadow-2xl hover:bg-[#FCFCFC]`}
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
              <img src={headshot} alt={name} className="w-[60%] z-10" />
            </div>

            <div className="absolute w-full left-0 top-[290px] flex flex-col items-center">
              <div className="w-[90%] text-[23px] font-sofia text-black text-center uppercase leading-[120%]">
                {name}
              </div>
              <div className="whitespace-normal w-[90%] text-[20px] font-sofia text-black font-bold text-center leading-[110%] md:mt-[10px]">
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
        <>
          <div
            style={style}
            onClick={onClick}
            className={`${className} 
            relative z-0 h-[190px] min-w-[120px] w-[120px] md:h-[220px] md:w-[140px] md:scale-[105%] md:hover:scale-[115%] hover:drop-shadow-2xl hover:z-10 hover:bg-[#FCFCFC] transition-transform rounded-[9px]
            px-[10px] py-[10px]  ${
              activeCard
                ? "bg-gradient-to-b from-[#f0b542] to-[#E7E7E7]"
                : "bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]"
            } `}
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
              <img src={headshot} alt={name} className="w-[50%]" />
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
        </>
      )}
    </>
  );
}

export default MemberCard;
