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
        <div className={`${styles.card} `}>
          <img
            className="rounded-[inherit] w-[100%] h-[100%] object-cover"
            src={fullImage}
            alt="Testimonial Image"
          />
        </div>
      ) : (
        <div
          className={` ${styles.card} p-[24px] flex flex-col justify-between items-start`}
        >
          <img className="h-[20px] lg:h-[30px]" src={QUOTES.src} alt="quotes" />
          <p className="my-[18px] text-left text-[15px] md:text-[18px] font-[600] tracking-[-0.36px]">
            {message}
          </p>
          <div className="flex flex-col items-start">
            <p className="mb-[10px]">
              {name} | <span className="opacity-[0.5]">{position}</span>
            </p>
            <div className="flex">
              <img
                className="object-cover w-[90px] h-[90px] rounded-[10px] bg-[#a8a2a2]"
                src={headShot}
                alt="headshot"
              />
              <div className="ml-[16px] flex flex-col  items-center justify-center">
                <img
                  className="w-[90px] h-[90px] rounded-[10px] object-cover"
                  src={companyLogo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TestimonialCard;
