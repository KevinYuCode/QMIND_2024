"use client";

import { useEffect, useState } from "react";
import ContentContainer from "../components/ContentContainer";
import Image from "next/image";
import leadership_image from "../../assets/leadership_team.png"
import "./page.scss";

import rabab_azeem from "../../assets/Headshots/Rabab_Azeem.png";
import marcello_mallqui from "../../assets/Headshots/Marcelo_Chaman_Mallqui.png";
import olivia_xu from "../../assets/Headshots/Olivia_Xu.png";
import aren_jo from "../../assets/Headshots/Aren_Jo.png";
import bartek_k from "../../assets/Headshots/Bartek_Kowalski.png";
import daniel_w from "../../assets/Headshots/Daniel_Wang.png";
import hunter_h from "../../assets/Headshots/Hunter_Hooogendijk.png";
import jenn_y from "../../assets/Headshots/Jenn_Yang.png";
import kevin_yu from "../../assets/Headshots/Kevin_Yu.png";
import khoa_n from "../../assets/Headshots/Khoa_Nguyen.png"
import leo_s from "../../assets/Headshots/Leo_Sandler.png"
import max_k from "../../assets/Headshots/Max_K.png"
import rodrigo_d from "../../assets/Headshots/Rodrigo_D.png"
import rowan_m from "../../assets/Headshots/Rowan_McDonald.png"
import sam_l from "../../assets/Headshots/Sam_Lin.png"
import sanindie_s from "../../assets/Headshots/Sanindie_Silva.png"
import sara_l from "../../assets/Headshots/Sara_Laker.png"
import sunghoon_k from "../../assets/Headshots/Sunghoon_Kim.png"
import mercy_d from "../../assets/Headshots/Mercy_Doan.png"

import { sofia_sans } from "../font";

export default function Leadership() {

    const leadership = [
        {
            title: "Managing Directors",
            cards: [
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui,
                    class: "leadershipCardOperations"
                },
                {
                    name: "Olivia Xu",
                    title: "Managing Director, Development",
                    img: olivia_xu,
                    class: "leadershipCardDevelopment"
                }
            ]
        },
        {
            title: "Design",
            cards: [
                {
                    name: "Bartek Kowalski",
                    title: "Director of AI Research",
                    img: bartek_k,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Max Kang",
                    title: "Director of Disruptive Technology",
                    img: max_k,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Leo Sandler",
                    title: "Director of AI Ethics",
                    img: leo_s,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Sandindie Silva",
                    title: "Director of Design, Healthcare",
                    img: sanindie_s,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Hunter Hoogendijk",
                    title: "Director of Design, Finance",
                    img: hunter_h,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Khoa Nguyen",
                    title: "Director of Design, Computer Vision",
                    img: khoa_n,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Mercy Doan",
                    title: "Director of Design, NLP",
                    img: mercy_d,
                    class: "leadershipCardDesign"
                },
                {
                    name: "Rodrigo Del Aguila",
                    title: "Director of Design, RL",
                    img: rodrigo_d,
                    class: "leadershipCardDesign"
                },
            ]
        },
        {
            title: "Operations",
            cards: [
                {
                    name: "Aren Jo",
                    title: "Director of Marketing",
                    img: aren_jo,
                    class: "leadershipCardOperations"
                },
                {
                    name: "Rowan McDonald",
                    title: "Director of Finance",
                    img: rowan_m,
                    class: "leadershipCardOperations"
                },
                {
                    name: "Kevin Yu",
                    title: "Director of Web Development",
                    img: kevin_yu,
                    class: "leadershipCardOperations"
                },
                {
                    name: "Jenn Yang",
                    title: "Executive Director of InQUbate",
                    img: jenn_y,
                    class: "leadershipCardOperations"
                },
                {
                    name: "Sunghoon Kim",
                    title: "Executive Director of InQUbate",
                    img: sunghoon_k,
                    class: "leadershipCardOperations"
                },
            ]
        },
        {
            title: "Development",
            cards: [
                {
                    name: "Daniel Wang",
                    title: "Director of External Relations",
                    img: daniel_w,
                    class: "leadershipCardDevelopment"
                },
                {
                    name: "Sara Laker",
                    title: "Director of Internal Affairs",
                    img: sara_l,
                    class: "leadershipCardDevelopment"
                },
                {
                    name: "Sam Lin",
                    title: "Director of QMIND Tech Review",
                    img: sam_l,
                    class: "leadershipCardDevelopment"
                },
            ]
        },
    ]

    return (
        <>
            <ContentContainer>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col justify-center gap-5 w-full md:w-[45%] md:text-left text-center">
                        <h1 className="font-gothic font-bold text-[50px]">Leadership</h1>
                        <p className={`${sofia_sans.className}`}>{`Our leadership team consists of the brightest minds from Queen's University, from all faculties and years.`}</p>
                        <p className={`${sofia_sans.className}`} >Below you can see our team and click to connect with them.</p>
                    </div>
                    <Image src={leadership_image} alt="" width={500} className="w-full md:w-[50%] mt-[2rem] md:mt-0"></Image>
                </div>

                {leadership.map((section,index) => {
                    return (
                        <div key={index} className="flex flex-col items-center mt-[4rem]">
                            <h1 className="font-gothic font-bold text-[30px] md:text-[40px]">{section.title}</h1>
                            <div className="flex flex-row flex-wrap justify-center gap-[16px] w-[100%] mt-[1.5rem]">
                                {section.cards.map((card,index) => {
                                    return (
                                        <div key={index} className={`${card.class} md:basis-[21%] w-[210px] md:w-[250px] text-center flex flex-col justify-center items-center rounded-[15px] p-[20px] md:rounded-[25px] md:p-[25px] bg-[#2E2E2E]`}>
                                            <div className={`${card.class}-img rounded-[5px] md:rounded-[10px]`}>
                                                <Image src={card.img} alt="" className={`noise`}/>
                                            </div>
                                            <p className={`${sofia_sans.className} font-semibold font-gothic text-[14px] md:text-[18px] mt-[0.75rem] md:mt-[1rem]`}>{card.name}</p>
                                            <p className={`${sofia_sans.className} font-light font-gothic text-[11px] md:text-[13px] mt-[0.1rem]`}>{card.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

                <div className="mb-[8rem]"></div>
            </ContentContainer>
        </>
    )
}
