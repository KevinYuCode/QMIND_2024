"use client";
import CTALink from "./components/CTALink";
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
          <Image
            src={partnersImg ?? ""}
            className="w-full m-auto sm:w-[100%]"
            alt="Partners Banner"
          ></Image>
        </div>
      </ContentContainer>

      {/* About Us */}
      <ContentContainer className="flex flex-col gap-5 items-center">
        <div className="text-center flex flex-col leading-tight gap-5">
          <h2 className="h2-styles  text-[25px] md:text-[45px] lg:text-[45px] font-gothic">
            What is QMIND?
          </h2>
          <h3 className="text-[16px] md:text-[22px] lg:px-[40px] text-[#d0d0d0] italic">
            QMIND is a student run club at Queen’s University that fosters
            students passionate about changing the world using AI and data
            science. We have over 240 members each year that work on AI
            research, AI ethics and policy, design team projects, consulting
            projects, CUCAI, and more!
          </h3>
        </div>
      </ContentContainer>

      {/* Design Team Projects */}
      <ContentContainer className="flex flex-col gap-5 items-center">
        <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2">
          <h2 className="h2-styles md:text-[45px] lg:text-[45px] font-gothic">
            Design Team Projects
          </h2>
          <h3 className="h3-styles text-[15px] lg:text-[20px] font-bold font-gothic">
            In Teams of 4-6 students, we tackle real world problems.
          </h3>

          <div className="bg-[#2E2E2E] flex gap-[32px] p-[20px] rounded-[24px]">
            {/* image */}
            <div>
              <img
                src={DESIGN_PROJECTS[0].image}
                alt=""
                className="rounded-[8px]"
              />
            </div>

            {/* Content for the card */}
            <div className="text-[white] text-left flex flex-col ">
              <h3 className="text-[30px] mb-[10px]">Diabetic Risk Modelling</h3>
              <p>
                Amidst rising global diabetes rates, we developed a
                comprehensive diabetes risk model using recurrent neural
                networks on EMR data, successfully predicting ten
                diabetes-related complications and predicting the results of six
                essential diabetes tests. We achieved AUC scores greater than 85
                for 5 out of ten complication onset models, and lab value
                forecasting for risk stratification achieve satisfactory RMSE
                values.
              </p>
              <a href="/" className="mt-[10px] text-[#387BFF] underline">
                View the research paper here!
              </a>
            </div>
          </div>
          {/* Project Links */}
          <div className="mt-[20px] flex gap-[40px] flex-wrap justify-center">
            {[
              "test1fsdafjdslakf;",
              "Test2fdsafdfsdafdasfsdasa",
              "Test3fdsa",
              "Test4fdsafdsa",
              "Test5fdsagdsafdsafadsdsfasadf",
            ].map((item) => (
              <div className="p-[10px] bg-[#2E2E2E] rounded-[8px]">{item}</div>
            ))}
          </div>
          {/* Button */}
          <div className="mt-[20px]">
            <CTALink
              isExternalLink={true}
              text="VIEW PROJECT LOOKBOOKS"
              href="https://www.cucai.ca/"
            />
          </div>
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

        {/*Hover effect for the widget that brings up a smaller see more button that brings the user to the link */}

        {/*

          <div className="flex w-[100%] gap-[37px]">
          <div className="group h-[180px] w-[100%]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] hover:delay-300 leaidng-4">
                <div className="absolute inset-0"> 
                <div className={`${styles.yellowCard} h-full w-full rounded-xl object-cover font-family: Kontrapunkt; flex flex-col justify-center items-start pl-[50px] leading-[49px] `}>
                <p className="lg:text-[65px] md:text-[45px]">230+</p>
                <p className="lg:text-[25px] md:text-[18px]">Software Developers</p>
                </div>
                </div>
                <div className={`${styles.yellowCard} absolute inset-0 h-ful w-full rounded-x px-12 text-center rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">Apply By September 17th</p>
                    <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque fuga molestiae.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-[180px] w-[560px] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0"> 
                <div className={`${styles.redCard} h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 pl-[175px]`}>
                <p className="lg:text-[65px] md:text-[45px]">200+</p>
                <p className="lg:text-[25px] md:text-[18px] ">AI papers & Projects</p>
                </div>
                </div>
                <div className="absolute inset-0 h-ful w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">A lot of people</p>
                    <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque fuga molestiae.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            */}

        {/*

        


          <div className="flex w-[100%] gap-[37px]">
          <div className="group h-[180px] w-[560px] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0"> 
                <div className={`${styles.blueCard} h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 pl-[175px]`}>
                <p className="lg:text-[65px] md:text-[45px]">320+</p>
                <p className="lg:text-[25px] md:text-[18px] ">Delegates at CUCAI</p>
                </div>
                </div>
                <div className="absolute inset-0 h-ful w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">A lot of people</p>
                    <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque fuga molestiae.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="group h-[180px] w-[560px] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0"> 
                <div className={`${styles.yellowCard} h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 pl-[175px]`}>
                <p className="lg:text-[65px] md:text-[45px]">25+</p>
                <p className="lg:text-[25px] md:text-[18px] ">Industry Clients</p>
                </div>
                </div>
                <div className="absolute inset-0 h-ful w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">A lot of people</p>
                    <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque fuga molestiae.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="group h-[180px] w-[560px] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0"> 
                <div className={`${styles.blueCard} h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 pl-[175px]`}>
                <p className="lg:text-[65px] md:text-[45px]">45</p>
                <p className="lg:text-[25px] md:text-[18px] ">Tech Articles</p>
                </div>
                </div>
                <div className="absolute inset-0 h-ful w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">A lot of people</p>
                    <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque fuga molestiae.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        <div className="flex w-[100%] gap-[37px]">
        <div className="group h-[180px] w-[100%] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0"> 
                <div className={`${styles.redCard} h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 pl-[50px]`}>
                <p className="lg:text-[65px] md:text-[45px]">35</p>
                <p className="lg:text-[25px] md:text-[18px] ">Projects in 2023</p>
                </div>
                </div>
                <div className="absolute inset-0 h-ful w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">A lot of people</p>
                    <p className="text-base">From Diabetic Risk Modelling to Cancer Prediction, QMIND has done it all!</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-[180px] w-[100%] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0"> 
                <div className={`${styles.yellowCard} h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 pl-[50px]`}>
                <p className="lg:text-[65px] md:text-[45px]">325+</p>
                <p className="lg:text-[25px] md:text-[18px] ">Hours Read on Medium</p>
                </div>
                </div>
                <div className="absolute inset-0 h-ful w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Students</h1>
                    <p className="text-lg">A lot of people</p>
                    <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque fuga molestiae.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-1 text-sm hover:bg-neutral-900">See More</button>
                  </div>
                </div>
              </div>
            </div>
        </div>

          */}
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
          <CardSlider cards={TESTIMONIALS} slideLeft={true} />
          <CardSlider cards={TESTIMONIALS} slideLeft={false} />
        </div>
      </div>

      {/* Sliding Logos Animation */}
      <ContentContainer>
        <div className="flex flex-col gap-6 text-center relative !overflow-hidden">
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
          <Image
            className=" absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={conferenceImg ?? ""}
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
          <Image
            className="absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={awsImg ?? ""}
            alt=""
          ></Image>
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
        <Image src={alumniImg ?? ""} alt="Alumini Placements"></Image>
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
