import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import HEADSHOT from "../../assets/headshot_test.png";
import COMPANY_LOGO from "../../assets/microsoft.svg";
import TESTIMONIAL_IMAGE from "../../assets/Testimonial_Card_Test.png";
import styles from "../styles/cardSlider.module.scss";
import { motion } from "framer-motion";
function CardSlider({ cards, slideLeft }: any) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const cardsContainer = document.getElementById("cards-container");
    const cardsWidth = cardsContainer!?.clientWidth / 2 + 17.5;
    setPosition(cardsWidth);
  }, []);

  return (
    <div className={`min-h-[270px] md:min-h-[350px] text-left`}>
      <motion.div
        id="cards-container"
        initial={{ x: 0 }}
        animate={{ x: slideLeft ? -position : position }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className={`flex gap-[24px] absolute ${slideLeft ? "" : "right-0"}`}
      >
        {cards.map((card: any, i: number) => (
          <div key={i}>
            <TestimonialCard
              message={card.message}
              headShot={card.headshot}
              name={card.name}
              position={card.position}
              companyLogo={card.companyLogo}
              fullImage={card.fullImage}
            ></TestimonialCard>
          </div>
        ))}
      </motion.div>
      <div id="" className="absolute right-0 w-0 h-0"></div>
    </div>
  );
}

export default CardSlider;
