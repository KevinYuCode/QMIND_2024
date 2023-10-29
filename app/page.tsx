"use client";
import BtnLink from "./components/BtnLink";
import STRIPES from "../assets/qmind_stripes.svg";
import ContentContainer from "./components/ContentContainer";
import styles from "./styles/home.module.scss";
import { TESTIMONIALS } from "./content/content";
import { COMPANIES } from "./content/content";
import { DESIGN_PROJECTS } from "./content/content";
import CONFERENCE from "../assets/conference_image.png";
import CONFERENCE_MOBILE from "../assets/conference_mobile.png";
import INCUBATOR from "../assets/incubator_image.png";
import INCUBATOR_MOBILE from "../assets/aws_mobile.png";
import CardSlider from "./components/CardSlider";
import CompanySlider from "./components/CompanySlider";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import PARTNERS_DESKTOP from "../assets/partners_desktop.svg";
import PARTNERS_MOBILE from "../assets/partners_mobile.svg";
import ALUMNI_DESKTOP from "../assets/alumni_desktop.svg";
import ALUMNI_MOBILE from "../assets/alumni_mobile.png";
import react, { useEffect } from "react";
import Image from "next/image";
import CarouselCard from "./components/HeadlineCard";
import Title from "./components/Title";
import Head3 from "./components/Head3";

export default function Home() {
  const [partnersImg, setPartnersImg]: any = useState(null);
  const [alumniImg, setAlumniImg]: any = useState(null);
  const [conferenceImg, setConferenceImg]: any = useState(null);
  const [awsImg, setAwsImg]: any = useState(null);

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

  useEffect(() => {
    if (isLargeMobile) {
      setAlumniImg(ALUMNI_DESKTOP);
      setPartnersImg(PARTNERS_DESKTOP);
      setConferenceImg(CONFERENCE);
      setAwsImg(INCUBATOR);
    } else {
      setAlumniImg(ALUMNI_MOBILE);
      setPartnersImg(PARTNERS_MOBILE);
      setConferenceImg(CONFERENCE_MOBILE);
      setAwsImg(INCUBATOR_MOBILE);
    }
  }, [isLargeMobile]);

  return (
    <main className="flex flex-col gap-16 md:gap-20 w-full min-h-[100vh] py-[3rem] 2xl:py-[5rem] relative">
      {/* Hero Panel */}
      <ContentContainer className="text-center md:text-left">
        <div className="flex 2xl:pt-[20.22px] justify-between gap-[24px]">
          {/* Hero Content */}
          <div className=" lg:w-[62%] 2xl:w-[55%] flex flex-col gap-[25px] lg:gap-[50px] relative">
            <Image
              className={`${styles.stripes} hidden md:block w-[auto]`}
              src={STRIPES}
              alt="Stripes"
            ></Image>
            <div className="flex flex-col gap-[32px]">
              <h1 className="font-gothic h1-styles">
                Empowering <br /> future leaders to <br />
                <span className="text-[#F0B542]">unlock the power of AI</span>
              </h1>
              <p className="p-styles text-[18px] md:text-[20px]">
                265 undergraduate students building, researching, and exploring
                artificial intelligence, machine learning, blockchain and
                quantum computing. We want you to{" "}
                <a
                  href="https://discord.gg/3FHfAs87"
                  className="underline"
                  target="_blank"
                >
                  join our community
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col justify-center md:justify-start items-center md:flex-row gap-[24px] justify-center md:justify-start">
              <BtnLink
                isExternalLink={true}
                className="min-w-[200px] !text-[13px]"
                text="WORK WITH US"
                href="mailto:partnerships@qmind.ca"
              />
              <BtnLink
                isExternalLink={true}
                className="min-w-[200px] !text-[13px]"
                text="OUR PROJECTS"
                href="./2021_Lookbook.pdf"
              />
            </div>
          </div>
          {/* QMIND LOGO */}
          <div className="bg-[white] lg:w-[350px] xl:w-[380px] 2xl:w-[400px]   lg:h-[350px] xl:h-[380px] 2xl:h-[400px] hidden lg:flex justify-center items-center rounded-[32px]">
            <video
              className="w-[250px] xl:w-[400px] 2xl:w-[350px] h-auto rounded-[32px]"
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
          <Image
            src={partnersImg ?? ""}
            className="w-full m-auto sm:w-[100%]"
            alt="Partners Banner"
          ></Image>
        </div>
      </ContentContainer>

      {/* About Us */}
      <ContentContainer className="flex flex-col items-center">
        <Title title="What is QMIND?">
          <Head3 className="text-[16px] md:text-[22px] lg:px-[40px] text-[#d0d0d0] italic">
            QMIND is a student run club at Queen’s University that fosters
            students passionate about changing the world using AI and data
            science. We have over 240 members each year that work on AI
            research, AI ethics and policy, design team projects, consulting
            projects, CUCAI, and more!"
          </Head3>
        </Title>
      </ContentContainer>

      {/* Design Team Projects */}
      <ContentContainer className="flex flex-col items-center">
        <Title
          title="Design Team Projects"
          subtitle="In Teams of 4-6 students, we tackle real world problems."
        ></Title>
        <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2">
          <CarouselCard></CarouselCard>
        </div>
      </ContentContainer>

      {/* Stats card */}
      <ContentContainer>
        {/* First Row */}
        <div className="flex w-[100%] gap-[37px]">
          {/*Top Row of the cards section */}
          <div
            className={`${styles.yellowCard} rounded-[17px] w-[100%]  h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[30px] md:leading-[50px]`}
          >
            <p className="text-[35px] md:text-[45px] lg:text-[65px]">230+</p>
            <p className="text-[20px] md:text-[22px] text-left">
              Software Developers
            </p>
          </div>
          <div
            className={`${styles.redCard}  rounded-[17px] w-[100%] max-w-[380px] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-end pr-[50px] leading-[30px] md:leading-[50px]`}
          >
            <p className="text-[35px] md:text-[45px] lg:text-[65px]">200+</p>
            <p className="text-[20px] md:text-[22px] text-right">
              AI papers & Projects
            </p>
          </div>
        </div>
        {/*Middele row of the card section */}
        <div className="flex w-[100%] gap-[37px] ">
          <div
            className={`${styles.blueCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[50px]`}
          >
            <p className="lg:text-[65px] md:text-[45px]">320+</p>
            <p className="lg:text-[25px] md:text-[18px]">Delegates at CUCAI</p>
          </div>

          <div
            className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[50px]`}
          >
            <p className="lg:text-[65px] md:text-[45px]">25+</p>
            <p className="lg:text-[25px] md:text-[18px]">Industry Clients</p>
          </div>

          <div
            className={`${styles.blueCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-end pr-[50px] leading-[50px]`}
          >
            <p className="lg:text-[65px] md:text-[45px]">45</p>
            <p className="lg:text-[25px] md:text-[18px]">Tech Articles</p>
          </div>
        </div>
        {/*Bottom row of the card section */}
        <div className="flex w-[100%] gap-[37px] ">
          <div
            className={`${styles.redCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[50px]`}
          >
            <p className="lg:text-[65px] md:text-[45px]">35</p>
            <p className="lg:text-[25px] md:text-[22px]">Projects in 2023</p>
          </div>
          <div
            className={`${styles.yellowCard} rounded-[17px] w-[100%] h-[180px] font-family: Kontrapunkt; flex flex-col justify-center items-end pr-[50px] leading-[50px]`}
          >
            <p className="lg:text-[65px] md:text-[45px]">325+</p>
            <p className="lg:text-[25px] md:text-[22px]">
              Hours Read on Medium
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Testimonials */}
      <div className="gap-7 flex flex-col text-center relative !overflow-hidden">
        <Title
          title="Our Members Love QMIND"
          subtitle="Read What They Have To Say!"
        ></Title>

        <div className="flex flex-col gap-[24px] w-full">
          <CardSlider cards={TESTIMONIALS} slideLeft={true} />
          <CardSlider cards={TESTIMONIALS} slideLeft={false} />
        </div>
      </div>

      {/* Sliding Logos Animation */}
      <ContentContainer>
        <div className="flex flex-col text-center relative !overflow-hidden">
          <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2 w-[90%] self-center">
            <p>
              QMIND ALUMNI HAVE WORKED AT INNOVATIVE COMPANIES ACROSS THE WORLD
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-full">
            <CompanySlider cards={COMPANIES} slideLeft={true} />
          </div>
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer className="text-center flex flex-col justify-center ">
        <div className="flex flex-col gap-4 text-center relative !overflow-hidden">
          <Title
            title="Our National Conference"
            subtitle="CUCAI 2023 had 320+ attendees..."
          ></Title>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <Image
            className=" absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={conferenceImg ?? ""}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col xxs:flex-row gap-[15px] xxs:gap-[25px] w-auto xxs:w-[100%]">
          <BtnLink
            isExternalLink={true}
            text="LEARN MORE"
            href="https://www.cucai.ca/"
          />
          <BtnLink
            isExternalLink={true}
            text="PROCEEDINGS"
            href="https://qmind.ca/CUCAI_Proceedings_2023.pdf"
          />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer className="text-center flex flex-col justify-center ">
        <div className="flex flex-col gap-4 text-center relative !overflow-hidden">
          <Title
            title="Our Product Incubator"
            subtitle="InQUbate Was partnered with AWS Activate [‘22-’23]"
          ></Title>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <Image
            className="absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={awsImg ?? ""}
            alt=""
          ></Image>
        </div>
        <div className="flex justify-center w-[100%]">
          <BtnLink
            isExternalLink={true}
            className=""
            text="LEARN MORE"
            href="https://www.instagram.com/inqubate.ai/?hl=en"
          />
        </div>
      </ContentContainer>

      {/* Alumni Placements */}
      {/* <ContentContainer className="">
        <Image src={alumniImg ?? ""} alt="Alumini Placements"></Image>
        <div className="flex justify-center w-[100%]">
          <BtnLink
            isExternalLink={true}
            className=""
            text="WORK WITH US"
            href="mailto:partnerships@qmind.ca"
          />
        </div>
      </ContentContainer> */}
    </main>
  );
}
