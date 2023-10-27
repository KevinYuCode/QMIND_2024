import React from "react";
import styles from "../styles/testimonialCard.module.scss";
function CompanyCard({
  image,
}: any) {
  return (
        <div
          className={` ${styles.company} flex flex-col justify-center`}
        >

          <div className="flex items-center h-[90px] md:h-[110px] w-full">
              <img
                className="h-[40px]"
                src={image}
                alt=""
              />
          </div>
        </div>

  );
}

export default CompanyCard;
