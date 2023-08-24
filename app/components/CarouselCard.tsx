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
        className={`xl:w-[100%] 2xl:w-[1200px] text-center flex flex-col gap-4 bg-[#2e2e2e] p-4 md:p-6 rounded-[2rem] drop-shadow-xl ${styles.carousel}`}
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
            className={` w-[100%] min-w-[200px] object-cover rounded-[20px] aspect-video lg:aspect-[16/4]`}
            alt="AI Banner"
          />
        </motion.div>
        <motion.div className="flex gap-[20px] justify-center">
          <div className="flex items-center flex-col w-[100%] lg:w-[70%] leading-tight ">
            <h2 className="h3-styles font-gothic">{project.title}</h2>
            <p className="hidden mt-[12px] font-light">
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
