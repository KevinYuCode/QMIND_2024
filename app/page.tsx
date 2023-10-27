"use client";
import CTALink from "./components/CTALink";
import STRIPES from "../assets/qmind_stripes.svg";
import ContentContainer from "./components/ContentContainer";
import styles from "./styles/home.module.scss";
import { old_TESTIMONIALS, TESTIMONIALS } from "./content/content";
import { DESIGN_PROJECTS } from "./content/content";
import CONFERENCE from "../assets/conference_image.png";
import CONFERENCE_MOBILE from "../assets/conference_mobile.png";
import INCUBATOR from "../assets/incubator_image.png";
import INCUBATOR_MOBILE from "../assets/aws_mobile.png";
import CardSlider from "./components/CardSlider";
import { useState } from "react";
import CarouselCard from "./components/CarouselCard";
import { useMediaQuery } from "react-responsive";
import PARTNERS_DESKTOP from "../assets/partners_desktop.svg";
import PARTNERS_MOBILE from "../assets/partners_mobile.svg";
import ALUMNI_DESKTOP from "../assets/alumni_desktop.svg";
import ALUMNI_MOBILE from "../assets/alumni_mobile.png";
import react, { useEffect } from "react";
import MemberCard from "./components/MemberCard";
import { tradeGothic } from "./font";
import Link from "next/link";
import { ReactFitty } from "react-fitty";

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [partnersImg, setPartnersImg] = useState("");
  const [alumniImg, setAlumniImg] = useState("");
  const [conferenceImg, setConferenceImg] = useState("");
  const [awsImg, setAwsImg] = useState("");

  const [spotlight, setSpotlight] = useState(8);

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

  useEffect(() => {
    if (isLargeMobile) {
      setAlumniImg(ALUMNI_DESKTOP.src);
      setPartnersImg(PARTNERS_DESKTOP.src);
      setConferenceImg(CONFERENCE.src);
      setAwsImg(INCUBATOR.src);
    } else {
      setAlumniImg(ALUMNI_MOBILE.src);
      setPartnersImg(PARTNERS_MOBILE.src);
      setConferenceImg(CONFERENCE_MOBILE.src);
      setAwsImg(INCUBATOR_MOBILE.src);
    }
  }, [isLargeMobile]);

  return (
    <main className="flex flex-col gap-16 md:gap-20 w-full min-h-[100vh] py-[3rem] 2xl:py-[5rem] relative">
      {/* Hero Panel */}
      <ContentContainer className="text-center md:text-left">
        <div className="flex 2xl:pt-[20.22px] justify-between gap-[24px]">
          {/* Hero Content */}
          <div className=" lg:w-[62%] 2xl:w-[55%] flex flex-col gap-[25px] lg:gap-[50px] relative">
            <img
              className={`${styles.stripes} hidden md:block w-[auto]`}
              src={STRIPES.src}
              alt=""
            />
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
              <CTALink
                isExternalLink={true}
                className="min-w-[200px] !text-[13px]"
                text="WORK WITH US"
                href="mailto:partnerships@qmind.ca"
              />
              <CTALink
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
          <img
            src={partnersImg}
            className="w-full m-auto sm:w-[100%]"
            alt="Partners Banner"
          />
        </div>
      </ContentContainer>

      {/* Design Team Projects */}
      <ContentContainer className="flex flex-col gap-5 items-center">
        <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2">
          <h2 className="h2-styles  text-[25px] md:text-[45px] lg:text-[45px] font-gothic">
            Design Team Projects
          </h2>
          <h3 className="h3-styles text-[15px] lg:text-[20px] font-bold font-gothic">
            In Teams of 4-6 students, we tackle real world problems.
          </h3>
        </div>
        <CarouselCard project={DESIGN_PROJECTS[activeProject]}></CarouselCard>
        <div className="order-1 md:order-none flex flex-wrap md:flex-nowrap gap-[20px] gap-[70px] justify-center items-center">
          <button
            onClick={() => {
              changeCarousel(-1);
            }}
            className={`${styles.btnHover} hidden md:block md:min-w-[160px] bg-[#F7F7F7] rounded-[5px] tertiary-colour py-[6px] px-[35px] font-bold tracking-[1.6px] leading-[27.5px] text-[16px] font-gothic`}
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
            className={`${styles.btnHover} hidden md:block md:min-w-[160px] bg-[#F7F7F7] rounded-[5px] tertiary-colour py-[6px] px-[35px] font-bold tracking-[1.6px] leading-[27.5px] text-[16px] font-gothic`}
          >
            Next
          </button>
        </div>
      </ContentContainer>

      {/* Testimonials */}
      <div className="flex flex-col gap-6 text-center relative !overflow-hidden">
        <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2 w-[90%] self-center">
          <h2 className="h2-styles  text-[25px] md:text-[45px] lg:text-[45px] font-gothic">
            Our Members Love QMIND
          </h2>
          <h3 className="h3-styles text-[15px] lg:text-[20px] font-bold font-gothic">
            Read What They Have To Say!
          </h3>
        </div>
        <div className="flex flex-col gap-[24px] w-full">
          <CardSlider cards={old_TESTIMONIALS} slideLeft={true} />
          <CardSlider cards={old_TESTIMONIALS} slideLeft={false} />
        </div>
      </div>

      <ContentContainer className="items-center gap-[50px] w-[100%]">
        <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2 w-[90%] self-center">
          <h2 className="h2-styles !text-[20px] md:text-[45px] lg:text-[45px] font-gothic">
            Our Members Love QMIND
          </h2>
          <h3 className="h3-styles !text-[13px] md:text-[15px] lg:text-[20px] font-bold font-gothic">
            Click On Them To See What They Think
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-center mt-[-65px]">
          <MemberCard 
            spotlight={true} 
            className="rotate-6" 
            company={TESTIMONIALS[spotlight].companyLogo} 
            team={TESTIMONIALS[spotlight].team} 
            position={TESTIMONIALS[spotlight].position} 
            name={TESTIMONIALS[spotlight].name} 
            headshot={TESTIMONIALS[spotlight].headshot}>
          </MemberCard>
          <div className="member-spotlight flex flex-col justify-center bg-[#2E2E2E] w-[370px] md:w-[685px] rounded-[16px] md:rounded-tr-[16px] md:rounded-br-[16px] py-[20px] md:py-[30px] px-[20px] md:px-0 md:pr-[32px] md:pl-[60px] mt-[-70px] md:mt-0 md:ml-[-30px]">
            <div className="flex flex-row flex-start items-center text-[#F7F7F7]">
              <div className={`!font-kontrapunkt font-bold text-[24px]`}>{TESTIMONIALS[spotlight].name}</div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path opacity="0.5" d="M13.5 16.009H2.5C1.39543 16.009 0.5 15.1136 0.5 14.009V3.00903C0.5 1.90446 1.39543 1.00903 2.5 1.00903H6.5V3.00903H2.5V14.009H13.5V10.009H15.5V14.009C15.5 15.1136 14.6046 16.009 13.5 16.009ZM8.2 9.71603L6.79 8.30203L13.083 2.00903H9.5V0.0090332H16.5V7.00903H14.5V3.42403L8.2 9.71603Z" fill="white"/>
              </svg> */}
              {TESTIMONIALS[spotlight].linkedin ? 
              (
                <Link href={TESTIMONIALS[spotlight].linkedin!} target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer ml-[10px]" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Link>
              ) : (
                <>
                </>
              )}
              
              <div className="hidden md:block !font-kontrapunkt opacity-50 text-[20px] md:text-[24px] ml-auto">{`Computer Science '25`}</div>
            </div>
            <div className="!font-kontrapunkt text-left w-[100%] mt-[-8px]">
              <ReactFitty maxSize={24} minSize={14}>{TESTIMONIALS[spotlight].position} @ {TESTIMONIALS[spotlight].company}</ReactFitty>
            </div>
            <div className="font-sofia font-semibold text-[16px] md:text-[18px] text-left mt-[16px]">{TESTIMONIALS[spotlight].message}</div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center md:gap-[10px]">
          {TESTIMONIALS.map((card, key) => {
            return(
              <MemberCard 
              className={`${card.angle} cursor-pointer`}
              key={key}
              onClick={()=>{setSpotlight(key)}}
              company={card.companyLogo}
              position={card.position} 
              name={card.name} 
              headshot={card.headshot}/>
            )
          })}
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer className="text-center flex flex-col justify-center ">
        <div className="flex flex-col gap-4 text-center relative !overflow-hidden">
          <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2">
            <h2 className="h2-styles  text-[25px] md:text-[45px] lg:text-[45px] font-gothic">
              Our National Conference
            </h2>
            <h3 className="h3-styles text-[15px] lg:text-[20px] font-bold font-gothic">
              CUCAI 2023 had 320+ attendees...
            </h3>
          </div>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <img
            className=" absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={conferenceImg}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col xxs:flex-row gap-[15px] xxs:gap-[25px] w-auto xxs:w-[100%]">
          <CTALink
            isExternalLink={true}
            text="LEARN MORE"
            href="https://www.cucai.ca/"
          />
          <CTALink
            isExternalLink={true}
            text="PROCEEDINGS"
            href="https://qmind.ca/CUCAI_Proceedings_2023.pdf"
          />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer className="text-center flex flex-col justify-center ">
        <div className="flex flex-col gap-4 text-center relative !overflow-hidden">
          <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2">
            <h2 className="h2-styles  text-[25px] md:text-[45px] lg:text-[45px] font-gothic">
              Our Product Incubator
            </h2>
            <h3 className="h3-styles text-[15px] lg:text-[20px] font-bold font-gothic">
              InQUbate Was partnered with AWS Activate [‘22-’23]
            </h3>
          </div>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <img
            className="absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={awsImg}
            alt=""
          />
        </div>
        <div className="flex justify-center w-[100%]">
          <CTALink
            isExternalLink={true}
            className=""
            text="LEARN MORE"
            href="https://www.instagram.com/inqubate.ai/?hl=en"
          />
        </div>
      </ContentContainer>

      {/* Alumni Placements */}
      <ContentContainer className="">
        <img
          className="lg:h-auto w-[100%]"
          src={alumniImg}
          alt="Alumini Placements"
        />
        <div className="flex justify-center w-[100%]">
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
