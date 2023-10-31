import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";
import { motion, useAnimation } from "framer-motion";
import { DESIGN_PROJECTS } from "@/content/content";
import Image from "next/image";
import Head3 from "./Head3";
import Text from "./Text";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto_slab",
});

function HeadlineCard({ project }: any) {
  const [selectedProject, setSelectedProject]: any = useState(
    DESIGN_PROJECTS[0]
  );
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
    <div className="flex flex-col gap-5">
      <div
        className={`xl:w-[100%] 2xl:w-[1200px] p-[24px] min-h-[560px] sm:min-h-[auto] lg:max-h-[390px] text-center flex flex-col lg:flex-row justify-between gap-[32px] bg-[#2e2e2e] rounded-[2rem] drop-shadow-xl ${styles.carousel}`}
      >
        {/* Image */}
        <motion.div
          variants={carouselVariants}
          initial="initial"
          transition={{ ease: "easeInOut", duration: 1.1 }}
          animate={controls}
          className={`flex flex-col items-center ${styles.img_container}`}
        >
          <div className="overflow-hidden min-h-[200px] sm:h-[300px] w-[100%] lg:w-[510px] relative object-cover">
            <Image
              src={selectedProject.image}
              alt="project info"
              className="rounded-[10px] object-cover"
              fill={true}
            ></Image>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div className="flex gap-[20px] justify-center">
          <div className="flex flex-col justify-between items-center lg:items-start gap-[18px]">
            <div className="flex flex-col items-center lg:items-start gap-[18px]">
              <Head3
                className={`!font-kontrapunkt !font-normal text-center lg:text-left`}
              >
                {selectedProject.title}
              </Head3>

              <Text className="text-center lg:text-left overflow-ellipsis !font-normal">
                {selectedProject.description}{" "}
              </Text>
            </div>

            <Link
              href={selectedProject.href}
              target="_blank"
              rel="noreferrer"
              className="text-[#387BFF] underline pt-[10px] lg:pt-[0] text-[20px] cursor-pointer hover:opacity-60"
            >
              View the research paper here!
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Project Selection */}
      <div className="flex gap-5 justify-center flex-wrap ">
        {DESIGN_PROJECTS.map((project, key) => (
          <button
            key={key}
            onClick={() => setSelectedProject(project)}
            key={key}
            className={`bg-[#2E2E2E] rounded-[16px] py-2 px-5 ${
              project.title == selectedProject.title
                ? styles.active_project
                : ""
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HeadlineCard;
