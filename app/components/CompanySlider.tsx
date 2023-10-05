import React, { useEffect, useState } from "react";
import styles from "../styles/cardSlider.module.scss";
import { motion } from "framer-motion";
function CompanySlider({ cards, slideLeft }: any) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const cardsContainer = document.getElementById("cards-container");
    const cardsWidth = cardsContainer!?.clientWidth / 2 + 17.5;
    setPosition(cardsWidth);
  }, []);

  return (
    <div className={`bg-[#2E2E2E] w-[100%] h-[106px] rounded-[16px] flex row justify-center items-center gap-[40px]`}>
      <motion.div
        id="cards-container"
        initial={{ x: 0 }}
        animate={{ x: slideLeft ? -position : position }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className={`flex gap-[96px] absolute ${slideLeft ? "" : "right-0"}`}
      >
        {cards.map((card: any, i: number) => (
          <div key={i} className={` ${styles.company}  flex flex-col justify-center`}>
            <div className="flex items-center h-[90px] md:h-[110px] w-full">
              <img src={card.image} alt="" className="h-[42px] w-[100%]"/>
            </div>
          </div>
        ))}
      </motion.div>
      <div id="" className="absolute right-0 w-0 h-0"></div>
    </div>
  );
}

export default CompanySlider;