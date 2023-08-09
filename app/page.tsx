"use client";
import CTALink from "./components/CTALink";
import STRIPES from "../assets/qmind_stripes.svg";
import ContentContainer from "./components/ContentContainer";
import styles from "./styles/home.module.scss";
import { TESTIMONIALS } from "./content/content";
import { DESIGN_PROJECTS } from "./content/content";
import CONFERENCE from "../assets/conference_image.png";
import INCUBATOR from "../assets/incubator_image.png";
import CardSlider from "./components/CardSlider";
import { useState } from "react";
import CarouselCard from "./components/CarouselCard";
import { useMediaQuery } from "react-responsive";
import PARTNERS_DESKTOP from "../assets/partners_desktop.svg";
import PARTNERS_MOBILE from "../assets/partners_mobile.svg";
import ALUMNI_DESKTOP from "../assets/alumni_desktop.svg";
import ALUMNI_MOBILE from "../assets/alumni_mobile.svg";

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  const isMobile = useMediaQuery({
    query: "(min-width:500px)",
  });
  const isLargeMobile = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const changeCarousel = (direction: number) => {
    setActiveProject((index) => {
      let newIndex = index + direction;
      if (newIndex >= DESIGN_PROJECTS.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = DESIGN_PROJECTS.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <main className="min-h-[100vh] py-[3rem] 2xl:py-[5rem] relative">
      {/* Hero Panel */}
      <ContentContainer className="text-center md:text-left">
        <div className="flex pt-[0px] 2xl:pt-[75.22px] justify-between gap-[24px]">
          {/* Hero Content */}
          <div className=" lg:w-[62%] 2xl:w-[55%] flex flex-col gap-[25px] lg:gap-[50px] relative">
            <img
              className={`${styles.stripes} hidden md:block w-[auto]`}
              src={STRIPES.src}
              alt=""
            />
            <h1 className="font-gothic h1-styles">
              Empowering <br /> future leaders to <br />
              <span className="text-[#F0B542]">disrupt technology</span>
            </h1>
            <p className="text-[18px] md:text-[20px]">
              265 undergraduate students building, researching, and exploring
              artificial intelligence, machine learning, blockchain and quantum
              computing. We want you to join our community.
            </p>

            <div className="flex flex-col justify-center md:justify-start items-center md:flex-row gap-[24px] justify-center md:justify-start">
              <CTALink
                isExternalLink={true}
                className="min-w-[200px] !text-[13px]"
                text="WORK WITH US"
                href="mailto:partnerships@qmind.ca"
              />
              <CTALink
                isExternalLink={true}
                className="min-w-[200px] !text-[13px]"
                text="OUR PROJECT"
                href="./2021_Lookbook.pdf"
              />
            </div>
          </div>
          {/* QMIND LOGO */}
          <div className="bg-[white] lg:w-[350px] xl:w-[500px] 2xl:w-[550px] lg:h-[350px] xl:h-[500px] 2xl:h-[550px] hidden lg:flex justify-center items-center rounded-[32px]">
            <video
              className="w-[250px] xl:w-[400px] 2xl:w-[450px] h-auto rounded-[32px]"
              autoPlay
              loop
              muted
            >
              <source src={"./QMIND_logoanim.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* Past Partners & Clients */}
        <div className="mt-[50px]">
          <img
            src={isLargeMobile ? PARTNERS_DESKTOP.src : PARTNERS_MOBILE.src}
            className="w-[85%] m-auto sm:w-[100%]"
            alt="Partners Banner"
          />
        </div>
      </ContentContainer>

      {/* Design Team Projects */}
      <ContentContainer className="mt-[50px] md:mt-[50px] text-mt-[100px] flex flex-col items-center">
        <div className="mb-[30px] md:mb-[50px] text-center">
          <h2 className="h2-styles text-[25px] md:text-[45px] lg:text-[48px] font-gothic font-bold  md:leading-[60px] lg:leading-[76.46px] text-center ">
            Design Team Projects
          </h2>
          <h3 className="text-[15px] md:text-[20px] font-bold font-gothic">
            In Teams of 4-6 students, we tackle real world problems.
          </h3>
        </div>
        <CarouselCard project={DESIGN_PROJECTS[activeProject]}></CarouselCard>
        <div className="order-1 md:order-none flex flex-wrap md:flex-nowrap gap-[20px] gap-[70px] justify-center items-center mt-[30px]">
          <button
            onClick={() => {
              changeCarousel(-1);
            }}
            className="hidden md:block md:min-w-[160px] bg-[#F7F7F7] rounded-[5px] tertiary-colour py-[6px] px-[35px] font-bold tracking-[1.6px] leading-[27.5px] text-[16px] font-gothic"
          >
            Previous
          </button>
          <div className="w-[100%] md:w-[auto] flex gap-[20px] justify-center ">
            {DESIGN_PROJECTS.map((_, key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveProject(key);
                }}
                className={`${
                  key == activeProject ? "bg-white" : "bg-[#5a5a5a]"
                } ${styles.carousel_dots} w-[10px] h-[10px] `}
              ></button>
            ))}
          </div>
          <button
            onClick={() => {
              changeCarousel(1);
            }}
            className="hidden md:block md:min-w-[160px] bg-[#F7F7F7] rounded-[5px] tertiary-colour py-[6px] px-[35px] font-bold tracking-[1.6px] leading-[27.5px] text-[16px] font-gothic"
          >
            Next
          </button>
        </div>
      </ContentContainer>

      {/* Testimonials */}
      <ContentContainer className="text-center overflow-hidden relative !max-w-[2000px] ">
        <div className="flex flex-col text-center mt-[100px] mb-[30px] md:mb-[44px] font-gothic font-bold leading-[40px] md:leading-[60px] lg:leading-[76.46px] text-center">
          <h2 className="h2-styles text-[25px] md:text-[45px] lg:text-[48px]">
            Our Partners Love QMIND
          </h2>
          <h3 className="text-[15px] md:text-[28px] lg:mt-[-30px]">
            Read What They Have To Say!
          </h3>
        </div>
        <div className="flex flex-col gap-[35px]">
          <CardSlider cards={TESTIMONIALS} slideLeft={true} />
          <CardSlider cards={TESTIMONIALS} slideLeft={false} />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer className="text-center flex flex-col justify-center ">
        <div className="flex flex-col text-center mt-[100px] mb-[30px] md:mb-[44px] font-gothic font-bold  text-center">
          <h2 className="h2-styles text-[25px] md:text-[45px] lg:text-[48px]">
            Our National Conference <br />{" "}
          </h2>
          <h3 className="text-[15px] md:text-[25px] ">
            CUCAI 2023 had 320+ attendees...
          </h3>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <img
            className=" absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover"
            src={CONFERENCE.src}
            alt=""
          />
        </div>
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink
            isExternalLink={true}
            text="LEARN MORE"
            href="https://www.cucai.ca/"
          />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer className="text-center flex flex-col justify-center ">
        <div className="flex flex-col text-center mt-[100px] mb-[30px] md:mb-[44px] font-gothic font-bold text-center">
          <h2 className="h2-styles text-[25px] md:text-[45px] lg:text-[48px]">
            Our Product Incubator
            <br />{" "}
          </h2>
          <h3 className="text-[15px] md:text-[28px] lg:mt-[30px]">
            InQUbate Was partnered with AWS Activate [‘22-’23]
          </h3>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <img
            className="absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover"
            src={INCUBATOR.src}
            alt=""
          />
        </div>
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink
            isExternalLink={true}
            className=""
            text="LEARN MORE"
            href="https://www.instagram.com/inqubate.ai/?hl=en"
          />
        </div>
      </ContentContainer>

      {/* Alumni Placements */}
      <ContentContainer className="mt-[100px]">
        <img
          className="lg:h-auto w-[100%]"
          src={isLargeMobile ? ALUMNI_DESKTOP.src : ALUMNI_MOBILE.src}
          alt="Alumini Placements"
        />
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink
            isExternalLink={true}
            className=""
            text="WORK WITH US"
            href="mailto:partnerships@qmind.ca"
          />
        </div>
      </ContentContainer>
    </main>
  );
}
