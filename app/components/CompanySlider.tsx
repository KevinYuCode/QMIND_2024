import React, { useEffect, useState } from "react";
import styles from "../styles/cardSlider.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function CompanySlider({ cards, slideLeft }: any) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const cardsContainer = document.getElementById("company-logos");
    const cardsWidth = cardsContainer!?.clientWidth / 2 + 20;
    setPosition(cardsWidth);
  }, []);

  const largeScreen = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <div className={`${styles.companyParent}`}>
      <motion.div
        id="company-logos"
        initial={{ x: 0 }}
        animate={{ x: slideLeft ? -position : position }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className={`flex justify-start gap-[35px] md:gap-[2%] absolute ${
          slideLeft ? "" : "right-0"
        }`}
      >
        {cards.map((card: any, i: number) => (
          <div
            key={i}
            className={` ${styles.company} w-[100%] flex flex-col justify-center`}
          >
            <div className="flex items-center h-[90px] md:h-[40px] w-full">
              <Image
                src={card.image}
                alt="Company Logo"
                height={largeScreen ? 50 : 20}
                className="!max-w-none"
              />
            </div>
          </div>
        ))}
      </motion.div>
      <div
        className={`${styles.companyLeft} w-[100%] h-[106px] rounded-[16px]`}
      ></div>
      <div
        className={`${styles.companyRight} w-[100%] h-[106px] rounded-[16px]`}
      ></div>
    </div>
  );
}

export default CompanySlider;
