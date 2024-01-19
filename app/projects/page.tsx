import leadership_image from "../../assets/Leadership_image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { sofia_sans } from "../font";
import { kontrapunkt, tradeGothic } from "../font";
import Link from "next/link";


import ContentContainer from "@/components/ContentContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Projects({ props }: any) {

  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("Projects").select("*");
  const { data: user, error: userError } = await supabase.auth.getUser();
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();
  return (
    <ContentContainer className="flex flex-col !gap-12 md:!gap-16 lg:gap-24 pt-[40px] text-center mb-12 md:mb-16">
              <pre>{JSON.stringify(projects, null, 2)}</pre>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col justify-center gap-5 w-full lg:w-[45%] lg:text-left text-center">
            <h1 className="font-gothic font-bold text-[48px] md:text-[72px]">
              Projects
            </h1>
            <div className="text-xl flex flex-col gap-4">
              <p className={`${sofia_sans.className}`}>
              A skilled and engaged team of 4-6 students looking to disrupt current industries and practices through artificial intelligence, machine learning, and other disruptive technologies. Below you can see the projects we’ve been working on, and click on any one to learn more.
              </p>
              
            </div>
          </div>
          <Image
            src={leadership_image}
            alt=""
            width={500}
            className="w-full lg:w-[45%] rounded-[20px]"
          ></Image>
        </div>
        <div className="flex flex-col justify-start items-center gap-8">
 <div className="w-full h-[30px] justify-start items-center gap-8 inline-flex">
  <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-2 flex">
    <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">Search by name:</div>
    <div className="grow shrink basis-0 h-[30px] px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
      <div className="text-center text-neutral-500 text-sm font-normal font-['Sofia Sans'] uppercase leading-[14px]">Project name...</div>
    </div>
  </div>
  <div className="justify-start items-center gap-2 flex">
    <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">Year:</div>
    <div className="px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
      <div className="text-center text-white text-sm font-normal font-['Sofia Sans'] uppercase leading-[14px]">2023</div>
    </div>
  </div>
  <div className="justify-start items-center gap-2 flex">
    <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">Node:</div>
    <div className="px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
      <div className="text-center text-neutral-500 text-sm font-normal font-['Sofia Sans'] uppercase leading-[14px]">No node selected</div>
    </div>
  </div>
</div>
</div>
<div className="shrink w-full h-[300px] md:h-[362px] p-8 bg-stone-900 rounded-2xl border border-neutral-600 justify-start items-center gap-8 ">
  <div className="w-full h-full rounded-2xl flex justify-start items-center  ">
    <div className="w-[35%] h-[65%] md:w-[30%] md:h-[80%] bg-black rounded-2xl border border-neutral ">

    </div>
    <div className=' pl-4 h-full place-items-left bg-stone-900'>
    Secure Shell Communication using Quantum Key Distribution
    </div>

  </div>
  
</div>  
{/* <div className="shrink w-full h-[362px] p-8 bg-stone-900 rounded-2xl border border-neutral-600 justify-start items-center gap-8 ">
  <div className="w-full h-full rounded-2xl flex justify-start items-center">
    <div className="w-[35%] h-[65%] md:w-[30%] md:h-[80%] bg-black rounded-2xl border border-neutral ">

    </div>
    <div className='flex pl-4 !font-kontrapunkt text-2xl h-full bg-stone-900'>
      Secure Shell Communication using Quantum Key Distribution
    </div>
  </div>
</div> */}

        </ContentContainer>
  )
}

