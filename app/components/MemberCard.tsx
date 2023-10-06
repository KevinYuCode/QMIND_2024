import React, { useEffect } from "react";
import Image from 'next/image'
import barcode from "../../assets/barcode.png";
import styles from "../styles/MemberCard.module.scss";

function CarouselCard({ company, headshot, team, name, position, spotlight, className, style }: any) {
  return (
    <>
    {spotlight ? (
      <> 
        <div style={style} className={`${className} 
            h-[400px] w-[275px] rounded-[23px] px-[10px] py-[15px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]`
        }>
            <div className={`scale-[175%] h-[3px] w-[33px] bg-[#707070] rounded-[33px]`}></div>
            <img src={company} alt="company" className="mb-[-40px] h-[40px]"/>
            <img src={headshot} alt={name} className="w-[70%]"/>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-[5px] font-kontrapunkt text-black text-[20px] text-center uppercase">{name}</p>
              <p className="font-kontrapunkt text-black text-[20px] font-bold text-center">{position}</p>
            </div>
            <Image src={barcode} alt="" className={`w-[60%]`}/>
        </div>
      </>
    ) : (
      <>
        <div style={style} className={`${className} 
            scale-[105%] hover:scale-[115%] hover:drop-shadow-2xl hover:z-10 hover:bg-[#E7E7E7] h-[210px] w-[140px] rounded-[9px]
            px-[10px] py-[10px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]`
        }>
          <div className={`h-[3px] w-[33px] bg-[#707070] rounded-[33px]`}></div>
          <img src={company} alt="company" className="mb-[-15px] h-[25px]"/>
          <div className="flex flex-col items-center">
            <img src={headshot} alt={name} className="w-[55%]"/>
            <p className="mt-[5px] font-kontrapunkt text-black text-[9px] text-center uppercase">{name}</p>
          </div>
          <p className="font-kontrapunkt text-black text-[10px] font-bold text-center">{position}</p>
          <Image src={barcode} alt="" className={`w-[60%]`}/>
        </div>
      </>
    )}
    </>
  );
}

export default CarouselCard;
