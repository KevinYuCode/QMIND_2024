import React, { useEffect, useRef } from "react";
import Image from 'next/image'
import barcode from "../../assets/barcode.png";
import styles from "../styles/MemberCard.module.scss";
// const fitty = require('fitty/dist/fitty.min.js')
import fitty from "fitty";
import { ReactFitty } from "react-fitty";
import { useMediaQuery } from "react-responsive";

function CompanyLogo({companyLogo, companyName, className}: any) {
  return (
    <>
    {companyName ? (
      <div className={`${className} scale-[60%] md:scale-[100%] w-full absolute top-[5px] md:top-[20px] left-0 flex flex-col items-center z-0`}>
        <div className="text-black font-sofia text-[10px] md:text-[12px] text-center font-bold">{companyName}</div>
        <img src={companyLogo.src} alt="company" className={`mt-[-10px] md:mt-0 ${companyLogo.style}`}/>
      </div>
    ) : (
      <div className={`${className} scale-[60%] md:scale-[100%] w-full absolute top-[15px] md:top-[25px] left-0 flex justify-center`}>
        <img src={companyLogo.src} alt="company" className={`${companyLogo.style}`}/>
      </div>
    )}
    </>
  )
}

function MemberCard({ company, headshot, onClick, name, position, spotlight, className, style }: any) {
  const isMobile = useMediaQuery({
    query: "(min-width:600px)",
  });
  return (
    <>
    {spotlight ? (
      <> 
        <div style={style} onClick={onClick} className={`${className} 
            scale-[70%] md:scale-[100%] h-[400px] w-[275px] rounded-[23px] px-[10px] py-[15px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]
            transition-transform hover:scale-[101%] hover:drop-shadow-2xl hover:bg-[#FCFCFC]`
        }>
            <div className={`scale-[175%] absolute left-[50%] ml-[-17px] h-[3px] w-[34px] bg-[#707070] rounded-[33px]`}></div>
            {/* <img src={company} alt="company" className="mb-[-40px] h-[40px]"/> */}
            <CompanyLogo companyLogo={company.img} companyName={company.name} className={"!scale-[160%] mt-[40px] !md:scale-[175%] md:mt-[30px]"}></CompanyLogo>
            
            <div className="absolute left-0 top-[70px] flex flex-col items-center">
              <img src={headshot} alt={name} className="w-[60%] z-10"/>
            </div>
            
            <div className="absolute w-full left-0 top-[290px] flex flex-col items-center">
              {/* <Textfit mode="single" max={22} min={17} forceSingleModeWidth={true} className="w-[80%] font-sofia text-black text-center uppercase leading-[120%]">{name}</Textfit>
              <Textfit max={22} min={17} mode="single" className="w-[80%] font-sofia text-black font-bold text-center leading-[108%]">{position}</Textfit> */}
              <div className="w-[80%] font-sofia text-black text-center uppercase leading-[120%]">
                <ReactFitty maxSize={22} minSize={17}>{name}</ReactFitty>
              </div>
              <div className="w-[80%] font-sofia text-black font-bold text-center leading-[110%]">
                <ReactFitty maxSize={22} minSize={17}>{position}</ReactFitty>
              </div>
            </div>
            <Image src={barcode} alt="" className={`absolute bottom-[15px] left-[50%] ml-[-27%] w-[54%]`}/>
        </div>
      </>
    ) : (
      <>
        <div style={style} onClick={onClick} className={`${className} 
            relative z-0 h-[120px] w-[80px] md:h-[210px] md:w-[140px] md:scale-[105%] md:hover:scale-[115%] hover:drop-shadow-2xl hover:z-10 hover:bg-[#FCFCFC] transition-transform rounded-[9px]
            px-[10px] py-[10px] bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]`
        }>
          <div className={`absolute left-[50%] ml-[-17px] h-[3px] w-[34px] bg-[#707070] rounded-[33px]`}></div>
          {/* <div className="w-full absolute top-[25px] left-0 flex justify-center">
            <img src={company} alt="company" className="mb-[-15px] h-[25px]"/>
          </div> */}
          <CompanyLogo companyLogo={company.img} companyName={company.name}></CompanyLogo>
          <div className="absolute left-0 top-[30px] md:top-[45px] flex flex-col items-center">
            <img src={headshot} alt={name} className="w-[50%]"/>
            {/* <p className="mt-[5px] whitespace-nowrap font-kontrapunkt text-black text-[9px] text-center uppercase">{name}</p> */}
          </div>
          <div className="absolute w-full left-0 top-[85px] md:top-[140px] flex flex-col items-center">
            {/* <Textfit mode="single" max={11} min={9} forceSingleModeWidth={true} className="w-[80%] font-sofia text-black text-center uppercase leading-[120%]">{name}</Textfit>
            <Textfit max={11} min={9} mode="single" className="w-[80%] font-sofia text-black font-bold text-center leading-[108%]">{position}</Textfit> */}
            {/* <ReactFitty maxSize={11} minSize={9} style={{ width: '80%', lineHeight: '120%', textTransform: "uppercase" }}>{name}</ReactFitty>
            <ReactFitty maxSize={11} minSize={9} style={{ width: '80%', lineHeight: '108%', textTransform: "uppercase", fontWeight: 700 }}>{position}</ReactFitty> */}
            
            {isMobile ? (
              <>
                <div className="w-[80%] font-sofia text-black text-center uppercase md:leading-[90%]">
                  <ReactFitty maxSize={11} minSize={9}>{name}</ReactFitty>
                </div>
                <div className="w-[80%] font-sofia text-black font-bold text-center md:leading-[30%]">
                  <ReactFitty maxSize={11} minSize={9}>{position}</ReactFitty>
                </div>
              </>
            ) : (
              <>
                <div className="w-[80%] font-sofia text-black text-center uppercase leading-[20%] md:leading-[90%]">
                  <ReactFitty maxSize={5} minSize={3}>{name}</ReactFitty>
                </div>
                <div className="w-[80%] font-sofia text-black font-bold text-center leading-[10%] md:leading-[30%]">
                  <ReactFitty maxSize={5} minSize={3}>{position}</ReactFitty>
                </div>
              </>
            )}
            
          </div>
          <Image src={barcode} alt="" className={`absolute bottom-[5px] md:bottom-[15px] left-[50%] ml-[-20%] w-[40%] md:ml-[-27%] md:w-[54%]`}/>
        </div>
      </>
    )}
    </>
  );
}

// function MemberCard({ company, headshot, onClick, name, position, spotlight, className, style }: any) {
//   return (
//     <>
//     {spotlight ? (
//       <> 
//         <div style={style} onClick={onClick} className={`${className} 
//             h-[400px] w-[275px] rounded-[23px] px-[10px] py-[15px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]`
//         }>
//             <div className={`scale-[175%] h-[3px] w-[33px] bg-[#707070] rounded-[33px]`}></div>
//             <img src={company} alt="company" className="mb-[-40px] h-[40px]"/>
//             <img src={headshot} alt={name} className="w-[70%]"/>
//             <div className="flex flex-col items-center justify-center">
//               <p className="mt-[5px] font-kontrapunkt text-black text-[20px] text-center uppercase">{name}</p>
//               <p className="font-kontrapunkt text-black text-[20px] font-bold text-center">{position}</p>
//             </div>
//             <Image src={barcode} alt="" className={`w-[60%]`}/>
//         </div>
//       </>
//     ) : (
//       <>
//         <div style={style} onClick={onClick} className={`${className} 
//             scale-[105%] z-0 hover:scale-[115%] hover:drop-shadow-2xl hover:z-10 hover:bg-[#FCFCFC] transition-transform h-[210px] w-[140px] rounded-[9px]
//             px-[10px] py-[10px] flex flex-col justify-between items-center bg-gradient-to-b from-[#FCFCFC] to-[#E7E7E7]`
//         }>
//           <div className={`h-[3px] w-[33px] bg-[#707070] rounded-[33px]`}></div>
//           <div className="h-[10%]">
//             <img src={company} alt="company" className="mb-[-15px] h-[25px]"/>
//           </div>
//           <div className="flex flex-col items-center">
//             <img src={headshot} alt={name} className="w-[55%]"/>
//             <Textfit mode="single" max={11} className="w-[90%] mt-[5px] font-kontrapunkt text-black text-center uppercase">{name}</Textfit>
//             {/* <p className="mt-[5px] whitespace-nowrap font-kontrapunkt text-black text-[9px] text-center uppercase">{name}</p> */}
//           </div>
//           <Textfit max={11} min={9} mode="multi" className="w-[95%] font-sofia text-black font-bold text-center">{position}</Textfit>
//           <Image src={barcode} alt="" className={`w-[60%]`}/>
//         </div>
//       </>
//     )}
//     </>
//   );
// }

export default MemberCard;
