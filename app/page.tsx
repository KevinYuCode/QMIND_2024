"use client";
import Image from "next/image";
import CTALink from "./components/CTALink";
import STRIPES from "../assets/qmind_stripes.svg";
import ContentContainer from "./components/ContentContainer";
import QMIND_LOGO from "../assets/qmind_logo.svg";
import PARTNERS_BANNER from "../assets/partners_banner.svg";
import styles from "./styles/home.module.scss";
import TestimonialCard from "./components/TestimonialCard";
import { TESTIMONIALS } from "./content/content";
import { DESIGN_PROJECTS } from "./content/content";
// import HEADSHOT from "../assets/headshot_test.png";
// import COMPANY_LOGO from "../assets/microsoft.svg";
// import TESTIMONIAL_IMAGE from "../assets/Testimonial_Card_Test.png";
import CONFERENCE from "../assets/conference_image.png";
import INCUBATOR from "../assets/incubator_image.png";
import ALUMINI_BANNER from "../assets/alumni_banner.png";
import CardSlider from "./components/CardSlider";
import { useEffect, useState } from "react";
import CarouselCard from "./components/CarouselCard";
export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="min-h-[100vh] py-[5rem] relative">
      {/* Hero Panel */}
      <ContentContainer>
        <div className="flex pt-[75.22px] justify-between">
          {/* Left Content */}
          <div className="w-[55%] flex flex-col gap-[50px] ">
            <img
              className="w-[auto] h-[1000px] absolute left-[0]"
              src={STRIPES.src}
              alt=""
            />
            <h1 className="font-gothic font-bold text-[70px] leading-[76.46px]">
              Empowering <br /> future leaders to <br />
              <span className="text-[#F0B542]">disrupt technology</span>
            </h1>
            <p>
              265 undergraduate students building, researching, and exploring
              artificial intelligence, machine learning, blockchain and quantum
              computing.
            </p>

            <div className="flex gap-[24px]">
              <CTALink
                isExternalLink={true}
                className=""
                text="WORK WITH US"
                href="mailto:partnerships@qmind.ca"
              />
              <CTALink
                isExternalLink={true}
                className=""
                text="OUR PROJECT"
                href="./2021_Lookbook.pdf"
              />
            </div>
          </div>
          {/* Right Content */}
          <div>
            <img
              className="h-[557px] w-auto rotate-[11.681deg]"
              src={QMIND_LOGO.src}
              alt="QMIND LOGO"
            />
          </div>
        </div>
        {/* Past Partners & Clients */}
        <div className="mt-[50px]">
          <img src={PARTNERS_BANNER.src} alt="Partners Banner" />
        </div>
      </ContentContainer>

      {/* Design Team Projects */}
      <ContentContainer className="mt-[100px] flex flex-col items-center">
        <h1 className="font-gothic font-bold text-[48px] leading-[76.46px] text-center mb-[50px]">
          Design Team Projects
        </h1>
        <CarouselCard project={DESIGN_PROJECTS[activeProject]}></CarouselCard>
        <div className="flex gap-[20px] justify-center mt-[30px]">
          {" "}
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
      </ContentContainer>

      {/* Testimonials */}
      <ContentContainer className="overflow-hidden relative !max-w-[2000px] ">
        <div className="flex flex-col text-center mt-[100px] mb-[50px] font-gothic font-bold leading-[76.46px] text-center">
          <h1 className="text-[48px]">Our Partners Love QMIND</h1>
          <h2 className="text-[32px] mt-[-30px]">
            Read What They Have To Say!
          </h2>
        </div>
        <div className="flex flex-col gap-[42.7px]">
          <CardSlider cards={TESTIMONIALS} slideLeft={true} />
          <CardSlider cards={TESTIMONIALS} slideLeft={false} />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer>
        <div className="flex flex-col text-center mt-[100px] mb-[50px] font-gothic font-bold leading-[76.46px] text-center">
          <h1 className="text-[48px]">
            Our National Conference <br />{" "}
          </h1>
          <h2 className="text-[32px] mt-[-30px]">
            CUCAI 2023 had 320+ attendees...
          </h2>
        </div>
        <img className="h-[437px] w-[auto]" src={CONFERENCE.src} alt="" />
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink
            isExternalLink={true}
            className=""
            text="LEARN MORE"
            href="https://www.cucai.ca/"
          />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer>
        <div className="flex flex-col text-center mt-[100px] mb-[50px] font-gothic font-bold leading-[76.46px] text-center">
          <h1 className="text-[48px]">
            Our Product Incubator
            <br />{" "}
          </h1>
          <h2 className="text-[32px] mt-[-30px]">
            InQUbate Is Partnered with AWS Activate
          </h2>
        </div>
        <img className="h-[437px] w-[auto]" src={INCUBATOR.src} alt="" />
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink
            isExternalLink={true}
            className=""
            text="LEARN MORE"
            href="https://www.instagram.com/inqubate.ai/?hl=en"
          />
        </div>
      </ContentContainer>
      <ContentContainer className="mt-[100px]">
        <img src={ALUMINI_BANNER.src} alt="Alumini Placements" />
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
