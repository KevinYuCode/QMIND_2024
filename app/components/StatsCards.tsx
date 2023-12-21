import React from "react";
import styles from "../styles/home.module.scss";
import { motion, useInView, useAnimation } from "framer-motion";

function StatsCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className="flex w-[100%] gap-[20px] lg:gap-[37px]">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-center lg:items-start lg:pl-[50px] leading-[30px] md:leading-[50px]`}
        >
          <p className="text-[35px] md:text-[45px] lg:text-[65px]">230+</p>
          <p className="text-[20px] md:text-[22px] text-center lg:text-left">
            Software Developers
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className={`${styles.redCard}  rounded-[17px] w-[100%] max-w-[380px] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-center lg:items-end px-[10px] lg:px-0 lg:pr-[50px] leading-[30px] md:leading-[50px]
       `}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-[35px] md:text-[45px] lg:text-[65px]">200+</p>
          <p className="text-[20px] md:text-[22px] text-center lg:text-right">
            AI papers & Projects
          </p>
        </motion.div>
      </div>

      {/* SECOND ROW */}
      <div className="lg:flex grid grid-cols grid-cols-2 lg:justify-normal w-[100%] gap-[20px] lg:gap-[37px] ">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`${styles.blueCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-center px-[10px] lg:px-0 lg:items-start lg:pl-[50px] lg:leading-[50px]  `}
        >
          <p className="lg:text-[65px] text-[35px] ">320+</p>
          <p className="lg:text-[25px] text-[22px] text-center lg:text-left">
            Delegates at CUCAI
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-center px-[10px] lg:px-0 lg:items-start lg:pl-[50px] lg:leading-[50px]`}
        >
          <p className="lg:text-[65px] text-[35px]">25+</p>
          <p className="lg:text-[25px] text-[22px] text-center lg:text-right">
            Industry Clients
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`${styles.blueCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-center lg:items-end lg:pr-[50px] leading-[50px] col-span-2`}
        >
          <p className="lg:text-[65px] text-[35px]">45</p>
          <p className="lg:text-[25px] text-[22px] text-center lg:text-right">
            Tech Articles
          </p>
        </motion.div>
      </div>

      {/* THIRD ROW */}
      <div className="flex w-[100%] gap-[20px] lg:gap-[37px] ">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`${styles.redCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center px-[10px] lg:px-0 items-center lg:items-start lg:pl-[50px] lg:leading-[50px]`}
        >
          <p className="lg:text-[65px] text-[35px]">35</p>
          <p className="lg:text-[25px] text-[22px] text-center lg:text-right">Projects in 2023</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-center lg:items-end lg:pr-[50px] lg:leading-[50px]`}
        >
          <p className="lg:text-[65px] text-[35px]">2600+</p>
          <p className="lg:text-[25px] text-[22px] text-center lg:text-right">Hours Read on Medium</p>
        </motion.div>
      </div>
    </>
  );
}

export default StatsCards;
