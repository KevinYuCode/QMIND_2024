import React, { useEffect } from "react";
import styles from "../styles/home.module.scss";
import { motion, useAnimation } from "framer-motion";
function CarouselCard({ project }: any) {
  const controls = useAnimation();
  useEffect(() => {
    controls.stop();
    controls.set("initial");
    controls.start("final");
  }, [project]);

  const carouselVariants = {
    initial: { opacity: 0 },
    final: { opacity: 1 },
  };
  return (
    <>
      <div
        className={`xl:w-[100%] 2xl:w-[1200px] text-center ${styles.carousel}`}
      >
        <motion.div
          variants={carouselVariants}
          initial="initial"
          transition={{ ease: "easeInOut", duration: 1.1 }}
          animate={controls}
          className={`w-[100%] flex flex-col items-center ${styles.img_container}`}
        >
          <img
            src={project.image}
            className={` w-[100%] h-[180px] md:h-[290px] lg:h-[390px] 2xl:h-[412px] min-w-[200px] object-cover rounded-[20px]`}
            alt="AI Banner"
          />
        </motion.div>
        <motion.div className="flex gap-[20px] justify-center">
          <div className="flex items-center flex-col mt-[30px] mb-[20px] w-[100%] lg:w-[70%] ">
            <h2 className="h2-styles">{project.title}</h2>
            <p className="hidden mt-[12px] font-light opacity-[.59]">
              By:{" "}
              {project.teamMembers.map((name: string, key: number) => (
                <span key={key}>
                  {" "}
                  {name}
                  {key === project.teamMembers.length - 1 ? "" : ","}
                </span>
              ))}
            </p>
            <p className="p-styles opacity-[.59] font-normal text-center">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CarouselCard;
