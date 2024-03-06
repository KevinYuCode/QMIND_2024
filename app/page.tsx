"use client";
import BtnLink from "@/components/Buttons/BtnLink";
import Container from "@/components/Container";
// import { EVENTS, TESTIMONIALS } from "./content/content";
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
import MemberCard from "./components/MemberCard";
import Link from "next/link";
import Image from "next/image";
import HeadlineCard from "./components/HeadlineCard";
import Title from "./components/Title";
import Head3 from "./components/Head3";

import StatsCards from "./components/StatsCards";
import Text from "./components/Text";
import AOS from "aos";
import "aos/dist/aos.css";
import PartnersAndClients from "./components/PartnersAndClients";
import { cn } from "./lib/utils";
import localFont from "next/font/local";
import { kontrapunkt, tradeGothic } from "./font";

import MICROSOFT_WHITE from "@/../assets/companies/Micosoft_white.png";
import AMAZON1 from "@/../assets/companies/Amazon1.png";
import GOVERNMENT from "@/../assets/companies/Government.png";
import CIBC from "@/../assets/companies/CIBC.png";
import TD1 from "@/../assets/companies/TD1.png";
import META from "@/../assets/companies/Meta.png";
import AMD from "@/../assets/companies/AMD.png";
import BELL from "@/../assets/companies/Bell.png";
import SCOTIABANK from "@/../assets/companies/Scotiabank.png";
import UBER1 from "@/../assets/companies/Uber1.png";
import ACCENTURE from "@/../assets/companies/Accenture.png";
import IBM from "@/../assets/companies/IBM.png";
import KONRAD from "@/../assets/companies/Konrad.png";
import MCKINSEY from "@/../assets/companies/McKinsey.png";
import NATIONAL from "@/../assets/companies/National.png";
import PWC1 from "@/../assets/companies/PWC1.png";
import EY1 from "@/../assets/companies/EY1.png";
import PG from "@/../assets/companies/PG.png";
import EY_LOGO from "@/../assets/companies/EY_Logo.png";
import INGENUITY_LOGO from "@/../assets/companies/Ingenuity_Labs.png";
import RECALC_LOGO from "@/../assets/Recalc.png";
import RBC_WHITE from "@/../assets/companies/RBC_White.png";

import MICROSOFT from "@/../assets/memberCardImages/Microsoft.png";
import TD from "@/../assets/memberCardImages/TD.png";
import AMAZON_BLACK from "@/../assets/memberCardImages/Amazon.png";
import PWC_BLACK from "@/../assets/memberCardImages/PWC.png";
import DELOITTE_WHITE from "@/../assets/memberCardImages/Deloitte_white.png";
import UBER_BLACK from "@/../assets/memberCardImages/Uber.png";
import CANSBRIDGE from "@/../assets/memberCardImages/Cansbridge_Fellowship.png";
import KATAROK from "@/../assets/companies/Katarok.png";

import MEMBER_OLIVIA_XU from "@/../assets/memberCardImages/Olivia_Xu.png";
import MEMBER_KEVIN from "@/../assets/memberCardImages/Kevin_Yu.png";
import MEMBER_RABAB from "@/../assets/memberCardImages/Rabab_Azeem.png";
import MEMBER_DANIEL from "@/../assets/memberCardImages/Daniel_Wang.png";
import MEMBER_RODRIGO from "@/../assets/memberCardImages/Rodrigo_D.png";
import MEMBER_GEORGE from "@/../assets/memberCardImages/George_Trieu.png";
import MEMBER_SAM from "@/../assets/memberCardImages/Sam_Lin.png";
import MEMBER_MARCELO from "@/../assets/memberCardImages/Marcelo_M.png";
import MEMBER_LEVI from "@/../assets/Levi_Stringer.png";
import MEMBER_HANI from "@/../assets/Hani_khatib.png";
import MEMBER_ETHAN from "@/../assets/Ethan_Callanan.png";
import MEMBER_JACOB from "@/../assets/Jacob_Laframboise.png";

import EVENT_SHOPIFY1 from "@/../assets/Industry/Shopify_1.jpg";
import EVENT_SHOPIFY2 from "@/../assets/Industry/Shopify_2.jpg";
import EVENT_SHOPIFY3 from "@/../assets/Industry/Shopify_3.jpg";
import EVENT_SMITH1 from "@/../assets/Industry/inqu_smith_1.jpg";
import EVENT_SMITH2 from "@/../assets/Industry/inqu_smith_2.jpg";
import EVENT_SMITH3 from "@/../assets/Industry/inqu_smith_3.jpg";
import EVENT_CONNECT1 from "@/../assets/Industry/connect_1.jpg";
import EVENT_CONNECT2 from "@/../assets/Industry/connect_2.jpg";
import EVENT_CONNECT3 from "@/../assets/Industry/connect_3.jpg";
const EVENTS_HALF = [
  {
    fullImage: EVENT_SHOPIFY1,
    imgDescription: "Kaz Nejatian, Shopify COO & VP Product – 160 Attendees",
  },
  {
    fullImage: EVENT_SHOPIFY2,
    imgDescription: "Kaz Nejatian, Shopify COO & VP Product – 160 Attendees",
  },
  {
    fullImage: EVENT_SHOPIFY3,
    imgDescription: "Kaz Nejatian, Shopify COO & VP Product – 160 Attendees",
  },
  {
    fullImage: EVENT_SMITH1,
    imgDescription:
      "inQUbate's Product Leaders Panel with Smith Digital Product Management Master Program – 80 Attendees",
  },
  {
    fullImage: EVENT_SMITH2,
    imgDescription:
      "inQUbate's Product Leaders Panel with Smith Digital Product Management Master Program – 80 Attendees",
  },
  {
    fullImage: EVENT_SMITH3,
    imgDescription:
      "inQUbate's Product Leaders Panel with Smith Digital Product Management Master Program – 80 Attendees",
  },
  {
    fullImage: EVENT_CONNECT1,
    imgDescription: "QMIND Connect (Monthly Townhall) – 80 attendees",
  },
  {
    fullImage: EVENT_CONNECT2,
    imgDescription: "QMIND Connect (Monthly Townhall) – 80 attendees",
  },
];

export const EVENTS = [...EVENTS_HALF, ...EVENTS_HALF];

const COMPANIES_HALF = [
  {
    image: AMAZON1,
  },
  {
    image: MICROSOFT_WHITE,
  },
  {
    image: GOVERNMENT,
  },
  {
    image: DELOITTE_WHITE,
  },
  {
    image: CIBC,
  },
  {
    image: TD1,
  },
  {
    image: META,
  },
  {
    image: AMD,
  },
  {
    image: BELL,
  },
  {
    image: RBC_WHITE,
  },
  {
    image: SCOTIABANK,
  },
  {
    image: UBER1,
  },
  {
    image: ACCENTURE,
  },
  {
    image: IBM,
  },
  {
    image: KONRAD,
  },
  {
    image: MCKINSEY,
  },
  {
    image: NATIONAL,
  },
  {
    image: PWC1,
  },
  {
    image: EY1,
  },
  {
    image: PG,
  },
];

export const COMPANIES = [...COMPANIES_HALF, ...COMPANIES_HALF];

export const TESTIMONIALS = [
  {
    name: "Daniel Wang",
    headshot: MEMBER_DANIEL.src,
    linkedin: "https://www.linkedin.com/in/itsdanielwang/",
    team: "development",
    message:
      "QMIND enhanced my first-year experience far more than any classes or competition. My experience from QMIND were key talking points that played a pivotal role in landing an internship at Microsoft. Moreover, QMIND brought me closer to my lifelong friend, co-founder, and now house-mate. It's easy to say that QMIND has shaped my career and personal relationships.",
    position: "Business Program Manager",
    companyLogo: { img: { src: MICROSOFT.src, style: "h-[20px] md:h-[20px]" } },
    company: "Microsoft",
    angle: "rotate-[-10deg] md:rotate-[3deg]",
    education: "Commerce '26",
  },
  {
    name: "Rabab Azeem",
    headshot: MEMBER_RABAB.src,
    linkedin: "https://www.linkedin.com/in/rabab-azeem/",
    team: "design",
    message:
      "Some of the best opportunities I have been given in my undergrad were snowballed from QMIND. This is such a great place to meet amazing people, grow my leadership skills and learn a ton about AI!",
    position: "Software Developer",
    companyLogo: {
      img: { src: AMAZON_BLACK.src, style: "h-[25px]" },
    },
    company: "Amazon",
    angle: "rotate-[5deg] md:rotate-[-4deg]",
    education: "Applied Sciences '24",
  },

  {
    name: "Kevin Yu",
    headshot: MEMBER_KEVIN.src,
    linkedin: "https://kevinyu.ca/",
    team: "operations",
    message:
      "QMIND provided me the opportunity to learn and develop my technical and interpersonal skills which allowed me to become a better leader and engineer throughout my undergraduate journey.",
    position: "Software Developer",
    companyLogo: {
      img: {
        src: PWC_BLACK.src,
        style: "mt-[-10px] h-[40px] md:mt-[-13px] md:h-[40px]",
      },
    },
    company: "PWC",
    angle: "rotate-[5deg] md:rotate-[3deg]",
    education: "Applied Sciences '24",
  },
  {
    name: "Marcelo Chaman Mallqui",
    headshot: MEMBER_MARCELO.src,
    linkedin: "https://www.linkedin.com/in/marc-cham/",
    team: "operations",
    message:
      "QMIND has given me so many opportunities to learn about the things I am passionate about! I have met some amazing people through this club. I can say with confidence that QMIND is a big reason for my achievements as a university student.",
    position: "AI Systems Engineer",
    companyLogo: {
      img: { src: RECALC_LOGO.src, style: "mt-[3px] h-[15px] md:h-[20px]" },
    },
    company: "Recalc Academy",
    angle: "rotate-[5deg] md:rotate-[-2deg]",
    education: "Commerce '26",
  },
  {
    name: "Olivia Xu",
    headshot: MEMBER_OLIVIA_XU.src,
    linkedin: "https://www.linkedin.com/in/olivia-chen-xu/",
    team: "development",
    message:
      "QMIND is a place where you can expect to be intellectually stimulated every day. Some of the best opportunities I have been given in my undergrad were snowballed from QMIND. This is such a great place to meet amazing people, grow my leadership skills and learn a ton about AI!",
    position: "Software Engineer",
    companyLogo: { img: { src: UBER_BLACK.src, style: "mt-[-5px] h-[30px]" } },
    company: "Uber",
    angle: "rotate-[5deg] md:rotate-[-4deg]",
    education: "Computer Science '24",
  },

  {
    name: "Jacob Laframboise",
    headshot: MEMBER_JACOB.src,
    linkedin: "https://www.linkedin.com/in/jacob-laframboise/",
    team: "development",
    message:
      "My experiences as a design team member, project manager, an director were some key talking points in interviews to land internships.",
    position: "Software Engineer",
    companyLogo: {
      name: "",
      img: { src: AMAZON_BLACK.src, style: "h-[25px] mt-[5px]" },
    },
    company: "Amazon",
    angle: "rotate-[5deg] md:rotate-[-2deg]",
    education: "Computer Science '23",
  },
  {
    name: "George Trieu",
    headshot: MEMBER_GEORGE.src,
    linkedin: "https://www.linkedin.com/in/georgetrieu/",
    team: "design",
    message:
      "QMIND helped me enhance my understanding of AI and provided me with the opportunity to manage a team of highly skilled individuals. I’m excited to see these skills applied in my professional career!",
    position: "Software Developer",
    companyLogo: {
      img: { src: AMAZON_BLACK.src, style: "h-[25px]" },
    },
    company: "Amazon",
    angle: "rotate-[5deg] md:rotate-[4deg]",
    education: "Applied Sciences '23",
  },
  {
    name: "Ethan Callanan",
    headshot: MEMBER_ETHAN.src,
    linkedin: "https://www.linkedin.com/in/ethan-callanan/",
    team: "design",
    message:
      "QMIND was easily the most valuable experience of my undergraduate career. Leading projects pushed me to learn far beyond what was taught in courses, and gave me invaluable experience in overcoming the challenges of building real world applications.",
    position: "AI Researcher",
    companyLogo: {
      img: { src: INGENUITY_LOGO.src, style: "mt-[0px] h-[35px]" },
    },
    company: "Ingenuity Labs",
    angle: "rotate-[5deg] md:rotate-[-2deg]",
    education: "Computer Science '23",
  },
  {
    name: "Hani Khatib",
    headshot: MEMBER_HANI.src,
    linkedin: "https://www.linkedin.com/in/hani-khatib/",
    team: "design",
    message:
      "At QMIND, leading a team to develop a multi-modal deep learning pipeline and co-authoring an acclaimed bioinformatics research paper were highlights that pushed my career to new heights. I came to QMIND with a passion for data science and left with a broad and adaptable approach to problem-solving. My experiences at QMIND largely shaped my career in Cybersecurity Consulting at EY, providing me with the soft skills to connect effectively in a consulting environment, and the hard skills to contribute analytically.",
    position: "Cybersecurity Consultant",
    companyLogo: { img: { src: EY_LOGO.src, style: "mt-[-5px] h-[35px]" } },
    company: "EY",
    angle: "rotate-[5deg] md:rotate-[2deg]",
    education: "Commerce '22",
  },
  {
    name: "Rodrigo Del Aguila",
    headshot: MEMBER_RODRIGO.src,
    linkedin: "https://www.linkedin.com/in/rodrigo-delaguila/",
    team: "design",
    message:
      "From being introduced to ML through a project to being able to create my own startup and make valuable connections, QMIND has been key in my professional development. It's amazing to think about the opportunities and learning experiences I have gotten from being a part of an incredibly talented and driven team in only a couple of years!",
    position: "Cybersecurity Analyst",
    companyLogo: { img: { src: TD.src, style: "mt-[-5px] !h-[25px]" } },
    company: "TD",
    angle: "rotate-[5deg] md:rotate-[1deg]",
    education: "Applied Science '25",
  },
  {
    name: "LEVI Stringer",
    headshot: MEMBER_LEVI.src,
    linkedin: "https://www.linkedin.com/in/levistringer/",
    team: "development",
    message:
      "QMIND has had such a pivotal role in my development at Queens. There I acquired skills necessary to take ML problems head on and figure it out as we went. Sometimes with my small tech firm Katarok, it feels very reminiscent of those days. Where the direction is completely open and you get to work with extremely talented and amazing individuals to accomplish big things!",
    position: "Founder",
    companyLogo: {
      name: "",
      img: { src: KATAROK.src, style: "h-[50px] !mt-[-22px]" },
    },
    company: "Katarok",
    angle: "rotate-[5deg] md:rotate-[3deg]",
    education: "Applied Science '20",
  },
  {
    name: "Sam Lin",
    headshot: MEMBER_SAM.src,
    linkedin: "https://www.linkedin.com/in/samlin12/",
    team: "development",
    message:
      "QMIND has been an incredible opporunity to learn and work alongside a team of bright and inspiring young people. Being part of QMIND has honed my leadership and communication skills in countless ways.",
    position: "Growth Strategy Analyst",
    companyLogo: {
      name: "Cansbridge Fellowship",
      img: { src: CANSBRIDGE.src, style: "h-[25px] mt-[1px]" },
    },
    company: "Cansbridge Fellowship",
    angle: "rotate-[5deg] md:rotate-[3deg]",
    education: "Ivey Business '25",
  },
];

export const DATA = [
  {
    id: 1,
    main_text: "230+",
    subtitle: "Software Developers",
  },
  {
    id: 2,
    main_text: "200+",
    subtitle: "AI papers & Projects",
  },

  {
    id: 3,
    main_text: "320+",
    subtitle: "Delegates at CUCAI",
  },

  {
    id: 4,
    main_text: "25+",
    subtitle: "Industry Clients",
  },
  {
    id: 5,
    main_text: "45",
    subtitle: "Tech Articles",
  },
  {
    id: 6,
    main_text: "35",
    subtitle: "Projects in 2023",
  },
  {
    id: 7,
    main_text: "325+",
    subtitle: "Hours Read on Medium",
  },
];

export default function Home() {
  const [spotlight, setSpotlight] = useState(4);

  const isLargeMobile = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="flex flex-col gap-16 md:gap-20 w-full min-h-[100vh] py-[3rem] 2xl:py-[5rem] relative">
      {/* Hero Panel */}
      <Container className="text-center md:text-left">
        <div className="flex 2xl:pt-[20.22px] justify-between gap-[24px]">
          {/* Hero Content */}
          <div className=" lg:w-[62%] 2xl:w-[55%] flex flex-col gap-[25px] lg:gap-[50px] relative">
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
                  href="https://discord.gg/jw94EEGyJR"
                  className="underline"
                  target="_blank"
                >
                  join our community
                </a>
                .
              </p>
            </div>

            {/* Landing Page Buttons */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-[24px]">
              <BtnLink
                isExternalLink={true}
                className={`min-w-[200px] !text-[13px] ${tradeGothic.className}`}
                text="WORK WITH US"
                href="mailto:partnerships@qmind.ca"
              />
              <BtnLink
                isExternalLink={true}
                className={`min-w-[200px] !text-[13px] ${tradeGothic.className}`}
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

        {/* Yellow banner */}
        <PartnersAndClients />
      </Container>

      {/* What is QMIND? */}
      <Container className="flex flex-col items-center gap-4">
        <Title title="What is QMIND?">
          <Head3 className="text-[16px] md:text-[22px] lg:px-[40px] text-[#d0d0d0] !font-normal">
            <Text className="mt-[20px] leading-[30px] lg:leading-[40px]">
              QMIND is Canada's largest organization on AI. Each year we lead
              250+ students on 30+ teams of 5 students through AI Research, AI
              Ethics papers, Disruptive Technology Projects, and Consulting
              projects, solving real world problems for industry clients. We
              foster students passionate about changing the world using AI and
              data science. We host CUCAI, Canada's largest AI conference, with
              320 delegates and industry leading companies. We incubate startups
              from ground up. We disrupt & innovate.
            </Text>
          </Head3>
        </Title>
        {/* View Project Lookbooks */}
        {/* <div>
          <BtnLink
            isExternalLink={true}
            text="VIEW PROJECT LOOKBOOKS"
            href="https://www.cucai.ca/"
          />
        </div> */}
      </Container>

      {/* Design Team Projects */}
      <Container className="flex flex-col items-center">
        <Title
          title="Design Team Projects"
          subtitle="In Teams of 4-6 students, we tackle real world problems."
        ></Title>
        <div className="text-center flex flex-col leading-tight lg:gap-0 gap-2">
          <HeadlineCard />
        </div>
      </Container>

      {/* Stats card */}
      <Container>
        <StatsCards />
      </Container>

      {/* Industry and Events Sliding Cards */}
      <div className="gap-7 flex flex-col text-center relative !overflow-hidden">
        <Title
          title="QMIND Events & Industry Speakers"
          subtitle="Checkout our events!"
        ></Title>

        <div className="flex flex-col items-start gap-[24px] w-full">
          <CardSlider cards={EVENTS} slideLeft={true} />
        </div>
      </div>

      {/* Our Members Love QMIND */}
      <Container className="items-center gap-[50px] w-[100%]">
        <Title
          title="Our Members Love QMIND"
          subtitle="Click On Them To See What They Think"
        />
        <div className="flex flex-col lg:flex-row justify-start md:justify-center items-center mt-[-65px] md:mt-0">
          <MemberCard
            spotlight={true}
            className="rotate-6"
            company={TESTIMONIALS[spotlight].companyLogo}
            team={TESTIMONIALS[spotlight].team}
            position={TESTIMONIALS[spotlight].position}
            name={TESTIMONIALS[spotlight].name}
            headshot={TESTIMONIALS[spotlight].headshot}
            activeCard={true}
          ></MemberCard>

          <div className="member-spotlight flex flex-col justify-center bg-[#2E2E2E] md:min-h-[320px] lg:min-h-[auto] w-[100%] lg:w-[685px] rounded-[16px] md:rounded-tr-[16px] md:rounded-br-[16px] py-[20px] md:py-[30px] px-[20px] md:px-0 md:pr-[32px] md:pl-[60px] mt-[-70px] md:mt-0 md:ml-[-30px]">
            <div className="flex flex-row flex-start items-center text-[#F7F7F7] ">
              <div className={`!font-kontrapunkt font-bold text-[24px]  `}>
                {TESTIMONIALS[spotlight].name}
              </div>
              {TESTIMONIALS[spotlight].linkedin ? (
                <Link
                  href={TESTIMONIALS[spotlight].linkedin!}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="cursor-pointer ml-[10px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              ) : (
                <></>
              )}

              <div className="hidden md:block !font-kontrapunkt opacity-50 text-[20px] md:text-[24px] ml-auto ">
                {TESTIMONIALS[spotlight].education}
              </div>
            </div>
            <div className="!font-kontrapunkt text-[24px] text-left w-[100%] mt-[-8px] ">
              {TESTIMONIALS[spotlight].position} @{" "}
              {TESTIMONIALS[spotlight].company}
            </div>
            <div className="font-sofia font-normal text-[16px] md:text-[18px] text-left mt-[16px] ">
              {TESTIMONIALS[spotlight].message}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start md:justify-center mx-[20px] md:mx-0 overflow-x-scroll md:overflow-visible w-[100dvw] md:w-[100%] md:flex-wrap lg:max-w-[1000px] items-center gap-[5px] md:gap-[15px] px-8 appearance-none	md:px-0 ">
          {TESTIMONIALS.map((card, key) => (
            <MemberCard
              className={`${card.angle}`}
              key={key}
              onClick={() => {
                setSpotlight(key);
              }}
              company={card.companyLogo}
              position={card.position}
              name={card.name}
              headshot={card.headshot}
              activeCard={TESTIMONIALS[spotlight].name == card.name}
            />
          ))}
        </div>
      </Container>

      {/* Company Slider */}
      <Container>
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
      </Container>

      {/* National Conference */}
      <Container className="text-center flex flex-col justify-center ">
        <div className="flex flex-col gap-4 text-center relative !overflow-hidden">
          <Title
            title="Our National Conference"
            subtitle="CUCAI 2023 had 320+ attendees..."
          ></Title>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <Image
            className=" absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={isLargeMobile ? CONFERENCE : CONFERENCE_MOBILE}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col xxs:flex-row gap-[15px] xxs:gap-[30px] w-auto xxs:w-[100%]">
          <BtnLink
            isExternalLink={true}
            text="LEARN MORE"
            href="https://www.cucai.ca/"
            className={`${tradeGothic.className} `}
          />
          <BtnLink
            isExternalLink={true}
            text="PROCEEDINGS"
            href="https://qmind.ca/CUCAI_Proceedings_2023.pdf"
            className={`${tradeGothic.className} `}
          />
        </div>
      </Container>

      {/* Incubator*/}
      <Container className="text-center flex flex-col justify-center ">
        <div className="flex flex-col gap-4 text-center relative !overflow-hidden">
          <Title
            title="Our Product Incubator"
            subtitle="InQUbate Was partnered with AWS Activate [‘22-’23]"
          ></Title>
        </div>
        <div className="h-[240px] md:h-[290px] lg:h-[400px] 2xl:h-[437px] w-[auto]">
          <Image
            className="absolute  left-0 right-0  md:relative h-[240px] md:h-[100%] md:w-[100%] md:rounded-[20px] object-cover drop-shadow-xl"
            src={isLargeMobile ? INCUBATOR : INCUBATOR_MOBILE}
            alt=""
          ></Image>
        </div>
        <div className="flex justify-center w-[100%]">
          <BtnLink
            isExternalLink={true}
            text="LEARN MORE"
            href="https://www.instagram.com/inqubate.ai/?hl=en"
            className={`${tradeGothic.className} `}
          />
        </div>
      </Container>
    </main>
  );
}
