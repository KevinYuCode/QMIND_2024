import React from "react";
import QUOTES from "../../assets/quotes.svg";
import styles from "../styles/testimonialCard.module.scss";
function TestimonialCard({
  children,
  message,
  name,
  position,
  companyLogo,
  headShot,
  fullImage,
}: any) {
  return (
    <>
      {fullImage ? (
        <div className={`${styles.card}`}>
          <img className="rounded-[inherit]" src={fullImage} alt="" />
        </div>
      ) : (
        <div className={` ${styles.card} p-[35px]`}>
          <img src={QUOTES.src} alt="quotes" />
          <p className="my-[18px] text-[18px] font-[600] tracking-[-0.36px]">
            {message}
          </p>
          <div className="flex ">
            <img src={headShot} alt="headshot" />
            <div className="ml-[16px] flex flex-col justify-between items-start">
              <p>
                {name} <span>{position}</span>
              </p>
              <img className="h-[42px]" src={companyLogo} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TestimonialCard;
