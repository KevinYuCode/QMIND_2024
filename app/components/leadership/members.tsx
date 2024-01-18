import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sofia_sans } from "@/font";
function Members() {
  const leadership = [
    {
      title: "Managing Directors",
      cards: [
        {
          name: "Rabab Azeem",
          title: "Managing Director, Design",
          img: "/headshots/Rabab_Azeem.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/rabab-azeem/",
        },
        {
          name: "Olivia Xu",
          title: "Managing Director, Development",
          img: "/headshots/Olivia_Xu.png",
          class: "leadershipCardDevelopment",
          social: "https://www.linkedin.com/in/olivia-chen-xu/",
        },
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshots/Marcelo_Chaman_Mallqui.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
      ],
    },
    {
      title: "Design",
      cards: [
        {
          name: "Bartek Kowalski",
          title: "Director of AI Research",
          img: "/headshots/Bartek_Kowalski.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/bartek-kowalski-68117b1ab/",
        },
        {
          name: "Max Kang",
          title: "Director of Disruptive Technology",
          img: "/headshots/Max_K.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/2001mk2001/",
        },
        {
          name: "Leo Sandler",
          title: "Director of AI Ethics",
          img: "/headshots/Leo_Sandler.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/leo-sandler/",
        },
        {
          name: "Sandindie Silva",
          title: "Director of Design, Healthcare",
          img: "/headshots/Sanindie_Silva.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/sanindie-silva/",
        },
        {
          name: "Hunter Hoogendijk",
          title: "Director of Design, Finance",
          img: "/headshots/Hunter_Hooogendijk.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/hunterhoogendijk/",
        },
        {
          name: "Khoa Nguyen",
          title: "Director of Design, Computer Vision",
          img: "/headshots/Khoa_Nguyen.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/khoa-qd-nguyen/",
        },
        {
          name: "Mercy Doan",
          title: "Director of Design, NLP",
          img: "/headshots/Mercy_Doan.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/merd/",
        },
        {
          name: "Rodrigo Del Aguila",
          title: "Director of Design, RL",
          img: "/headshots/Rodrigo_D.png",
          class: "leadershipCardDesign",
          social: "https://www.linkedin.com/in/rodrigo-delaguila/",
        },
      ],
    },
    {
      title: "Operations",
      cards: [
        {
          name: "Aren Jo",
          title: "Director of Marketing",
          img: "/headshots/Aren_Jo.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/arenjo/",
        },
        {
          name: "Rowan McDonald",
          title: "Director of Finance",
          img: "/headshots/Rowan_McDonald.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/rowan-m/",
        },
        {
          name: "Kevin Yu",
          title: "Director of Web Development",
          img: "/headshots/Kevin_Yu.png",
          class: "leadershipCardOperations",
          social: "https://kevinyu.ca/",
        },
        {
          name: "Jenn Yang",
          title: "Executive Director of InQUbate",
          img: "/headshots/Jenn_Yang.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/jenniferluyang/",
        },
        {
          name: "Sunghoon Kim",
          title: "Executive Director of InQUbate",
          img: "/headshots/Sunghoon_Kim.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/sunghoonkim17/",
        },
      ],
    },
    {
      title: "Development",
      cards: [
        {
          name: "Daniel Wang",
          title: "Director of External Relations",
          img: "/headshots/Daniel_Wang.png",
          class: "leadershipCardDevelopment",
          social: "https://www.linkedin.com/in/itsdanielwang/",
        },
        {
          name: "Sara Laker",
          title: "Director of Internal Affairs",
          img: "/headshots/Sara_Laker.png",
          class: "leadershipCardDevelopment",
          social: "https://www.linkedin.com/in/sara-laker/",
        },
        {
          name: "Sam Lin",
          title: "Director of QMIND Tech Review",
          img: "/headshots/Sam_Lin.png",
          class: "leadershipCardDevelopment",
          social: "https://www.linkedin.com/in/samlin12/",
        },
      ],
    },
  ];

  return (
    <>
      {leadership.map((section, index) => {
        return (
          <div key={index} className="flex flex-col gap-4 items-center">
            <h1 className="font-gothic font-bold text-[30px] md:text-[40px]">
              {section.title}
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 w-[100%] leading-none">
              {section.cards.map((card, index) => {
                return (
                  <Link
                    href={card.social}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className={`${card.class} w-[150px] md:w-[225px] lg:w-[275px] text-center flex flex-col gap-5 justify-center items-center rounded-[16px] p-[12px] md:p-[20px] md:rounded-[24px]  bg-[#2E2E2E]`}
                  >
                    <div
                      className={`${card.class}-img rounded-[5px] md:rounded-[10px] w-full`}
                    >
                      <Image
                        src={card.img}
                        alt="QMIND Member"
                        className={`md:rounded-[8px] aspect-square w-full rounded-[5px]`}
                        height={235}
                        width={235}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className={`${sofia_sans.className} font-semibold font-gothic tracking-tight text-[16px] md:text-[20px]`}
                      >
                        {card.name}
                      </p>

                      <p
                        className={`${sofia_sans.className} font-light font-gothic text-[12px] xl:text-[16px]`}
                      >
                        {card.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Members;
