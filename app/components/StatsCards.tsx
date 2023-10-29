import React from "react";
import styles from "../styles/home.module.scss";

function StatsCards() {
  return (
    <>
      {/* First Row */}
      <div className="flex w-[100%] gap-[37px]">
        {/*Top Row of the cards section */}
        <div
          className={`${styles.yellowCard} rounded-[17px] w-[100%]  h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[30px] md:leading-[50px]`}
        >
          <p className="text-[35px] md:text-[45px] lg:text-[65px]">230+</p>
          <p className="text-[20px] md:text-[22px] text-left">
            Software Developers
          </p>
        </div>
        <div
          className={`${styles.redCard}  rounded-[17px] w-[100%] max-w-[380px] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-end pr-[50px] leading-[30px] md:leading-[50px]`}
        >
          <p className="text-[35px] md:text-[45px] lg:text-[65px]">200+</p>
          <p className="text-[20px] md:text-[22px] text-right">
            AI papers & Projects
          </p>
        </div>
      </div>
      {/*Middele row of the card section */}
      <div className="flex w-[100%] gap-[37px] ">
        <div
          className={`${styles.blueCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[50px]`}
        >
          <p className="lg:text-[65px] md:text-[45px]">320+</p>
          <p className="lg:text-[25px] md:text-[18px]">Delegates at CUCAI</p>
        </div>

        <div
          className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[50px]`}
        >
          <p className="lg:text-[65px] md:text-[45px]">25+</p>
          <p className="lg:text-[25px] md:text-[18px]">Industry Clients</p>
        </div>

        <div
          className={`${styles.blueCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-end pr-[50px] leading-[50px]`}
        >
          <p className="lg:text-[65px] md:text-[45px]">45</p>
          <p className="lg:text-[25px] md:text-[18px]">Tech Articles</p>
        </div>
      </div>
      {/*Bottom row of the card section */}
      <div className="flex w-[100%] gap-[37px] ">
        <div
          className={`${styles.redCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[50px]`}
        >
          <p className="lg:text-[65px] md:text-[45px]">35</p>
          <p className="lg:text-[25px] md:text-[22px]">Projects in 2023</p>
        </div>
        <div
          className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-end pr-[50px] leading-[50px]`}
        >
          <p className="lg:text-[65px] md:text-[45px]">325+</p>
          <p className="lg:text-[25px] md:text-[22px]">Hours Read on Medium</p>
        </div>
      </div>
    </>
  );
}

export default StatsCards;
