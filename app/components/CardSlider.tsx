"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import HEADSHOT from "../../assets/headshot_test.png";
import COMPANY_LOGO from "../../assets/microsoft.svg";
import TESTIMONIAL_IMAGE from "../../assets/Testimonial_Card_Test.png";
import styles from "../styles/cardSlider.module.scss";
import { motion, useAnimation } from "framer-motion";
function CardSlider({ cards, slideLeft }: any) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const cardsContainer = document.getElementById("events-id");
    const cardsWidth = cardsContainer!?.clientWidth / 2 + 12;
    setPosition(cardsWidth);
    controls.start({ x: slideLeft ? -cardsWidth : cardsWidth });
  }, []);

  const controls = useAnimation();

  const pauseAnimation = () => {
    controls.stop();
  };

  const resumeAnimation = () => {
    controls.start({ x: slideLeft ? -position : position });
  };

  // { x: slideLeft ? -position : position }
  return (
    <div
      className={`min-h-[200px] sm:min-h-[290px] md:min-h-[350px] text-left`}
    >
      <motion.div
        id="events-id"
        initial={{ x: 0 }}
        animate={controls}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className={`flex gap-[24px] absolute ${slideLeft ? "" : "right-0"}`}
        onHoverStart={pauseAnimation}
        onHoverEnd={resumeAnimation}
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
              imgDescription={card.imgDescription}
            ></TestimonialCard>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardSlider;
