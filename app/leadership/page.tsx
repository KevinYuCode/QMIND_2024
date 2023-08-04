"use client";

import { useEffect, useState } from "react";
import ContentContainer from "../components/ContentContainer";
import Image from "next/image";
import leadership_image from "../../assets/leadership_team.png"

import rabab_azeem from "../../assets/rabab_azeem.png";
import marcello_mallqui from "../../assets/marcelo_mallqui.png";
import olivia_xu from "../../assets/olivia_xu.png";

import { sofia_sans } from "../font";

export default function Leadership() {

    const leadership = [
        {
            title: "Managing Directors",
            cards: [
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Olivia Xu",
                    title: "Managing Director, Development",
                    img: olivia_xu
                }
            ]
        },
        {
            title: "Design",
            cards: [
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
                {
                    name: "Rabab Azeem",
                    title: "Managing Director, Design",
                    img: rabab_azeem
                },
            ]
        },
        {
            title: "Operations",
            cards: [
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
                {
                    name: "Marcelo Chaman Mallqui",
                    title: "Managing Director, Operations",
                    img: marcello_mallqui
                },
            ]
        },
        {
            title: "Development",
            cards: [
                {
                    name: "Olivia Xu",
                    title: "Managing Director, Development",
                    img: olivia_xu
                },
                {
                    name: "Olivia Xu",
                    title: "Managing Director, Development",
                    img: olivia_xu
                },
                {
                    name: "Olivia Xu",
                    title: "Managing Director, Development",
                    img: olivia_xu
                },
                {
                    name: "Olivia Xu",
                    title: "Managing Director, Development",
                    img: olivia_xu
                },
            ]
        },
    ]

    return (
        <>
            <ContentContainer>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-center gap-5 w-[45%]">
                        <h1 className="font-gothic font-bold text-[50px]">Leadership</h1>
                        <p className={`${sofia_sans.className}`}>{`Our leadership team consists of the brightest minds from Queen's University, from all faculties and years.`}</p>
                        <p className={`${sofia_sans.className}`} >Below you can see our team and click to connect with them.</p>
                    </div>
                    <Image src={leadership_image} alt="" width={500} className="w-[50%]"></Image>
                </div>

                {leadership.map((section,index) => {
                    return (
                        <div key={index} className="flex flex-col items-center mt-[4rem]">
                            <h1 className="font-gothic font-bold text-[30px] md:text-[40px]">{section.title}</h1>
                            <div className="flex flex-row flex-wrap justify-center gap-[20px] md:justify-evenly w-[100%] mt-[1.5rem]">
                                {section.cards.map((card,index) => {
                                    return (
                                        <div key={index} className="w-[210px] md:w-[250px] text-center flex flex-col justify-center items-center rounded-[15px] p-[20px] md:rounded-[25px] md:p-[25px] bg-[#2E2E2E]">
                                            <Image src={card.img} alt="" className="w-full rounded-[5px] md:rounded-[10px]"/>
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
