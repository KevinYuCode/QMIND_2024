'use client'
import React from "react";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import MICROSOFT from "../../assets/Companies/Microsoft.png";
import DELOITTE from "../../assets/Companies/Deloitte.png";
import TD from "../../assets/Companies/TD_Bank.png";
import LOBLAWS from "../../assets/Companies/Loblaws.png";
function PartnersAndClients() {
  return (
    <div className="min-w-[250px]">
      <div className="mt-[40px] pb-[10px] lg:pb-[20px]">
        <p>PAST PARTNERS & CLIENTS</p>
      </div>
      <div className={`${styles.yellowBanner}`}>
        <div
          className={`${styles.yellowBannerImage} grid  grid-rows-1 grid-cols-2 md:grid-cols-4 justify-between items-center gap-[24px] `}
        >
          <div className="flex justify-center items-center">
            <Image
              className={`2xl:h-[42px] xl:h-[34px] lg:h-[28px] md:h-[20px] sm:h-[30px] h-[30px]  w-[auto] object-contain `}
              src={MICROSOFT}
              alt="Stripes"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`2xl:h-[42px] xl:h-[34px] lg:h-[28px] md:h-[20px] sm:h-[30px] h-[30px] w-[auto] object-contain `}
              src={TD}
              alt="Stripes"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`2xl:h-[39px] xl:h-[31px] lg:h-[26px] md:h-[20px] sm:h-[25px] h-[20px] w-[auto] object-contain `}
              src={LOBLAWS}
              alt="Stripes"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`2xl:h-[39px] xl:h-[31px] lg:h-[26px] md:h-[20px] sm:h-[25px] h-[20px] w-[auto] object-contain `}
              src={DELOITTE}
              alt="Stripes"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersAndClients;