"use client";
import React from "react";
import Container from "../components/Container";
import leadership_image from "../../assets/Leadership_image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EXAMPLE from "../../assets/Users/example.png";
import rabab_azeem from "../../assets/Headshots/Rabab_Azeem.png";
import olivia_xu from "../../assets/Headshots/Olivia_Xu.png";
import link from "../../public/external_link.png";
import "@/styles/page.scss";
import { kontrapunkt } from "../font";
import { sofia_sans } from "../font";
import plasma from "../../assets/plasma.png";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Project from "./project";
import { createClient } from "../utils/supabase/server";

export default async function Projects({ props }: any) {
  const cookieStore = cookies()
  //  const supabase = createClient(cookieStore);

  // const { data: projects } = await supabase.from("Projects").select("*");
  // const { data: user, error: userError } = await supabase.auth.getUser();
  // const { data: session, error: sessionError } =
  //   await supabase.auth.getSession();
  return (
    <Container>
      <div className="flex flex-col justify-start items-center gap-8">
        <div className="w-full h-[30px] justify-start items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-2 flex">
            <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">
              Search by name:
            </div>
            <div className="grow shrink basis-0 h-[30px] px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
              <div className="text-center text-neutral-500 text-sm font-normal font-['Sofia Sans'] uppercase leading-[14px]">
                Project name...
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">
              Year:
            </div>
            <div className="px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
              <div className="text-center text-white text-sm font-normal font-['Sofia Sans'] uppercase leading-[14px]">
                2023
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">
              Node:
            </div>
            <div className="px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
              <div className="text-center text-neutral-500 text-sm font-normal font-['Sofia Sans'] uppercase leading-[14px]">
                No node selected
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-[350px] p-8 bg-stone-900 rounded-2xl border border-neutral-600 gap-2">
        <div className="flex flex-row h-full w-[40%] md:w-[33%] items-center justify-center">
          <Image
            src={plasma}
            alt=""
            className="object-cover object-center w-[95%] h-[85%] border border-slate-700 rounded-[20px]"
          />
        </div>

        <div className="flex flex-col w-[35%] md:w-[50%] flex-grow overflow-auto items-start">
          <div className="font-kontrapunkt text-2xl text-left bg-stone-900">
            Secure Shell Communication using Quantum Key Distribution
          </div>
          <div className="flex flex-row space-x-2 mb-4 pt-2">
            <span className="bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt">
              PYTHON
            </span>
            <span className="bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt">
              TENSORFLOW
            </span>
            <span className="bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt">
              OPENCV
            </span>
          </div>
          <div className="flex flex-wrap mb-4">
            <h3 className="font-kontrapunkt text-sm text-left text-[#6E6E6E] justify-start mb-2">
              SHORT PROJECT DESCRIPTION
            </h3>
            <p className="font-kontrapunkt text-sm text-left texl-lg  mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. labore
              et dolore magna aliqua. labore et dolore magna aliqua. labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="flex flex-wrap">
            <h3 className="font-kontrapunkt text-sm text-left text-[#6E6E6E] justify-start mb-2">
              REAL WORLD IMPACT WHAT IMPACT WILL THIS PROJECT HAVE ON THE WORLD
              OF AI?
            </h3>
            <p className="font-kontrapunkt text-sm text-left text-lg mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-grow justify-end items-start">
          <div className="flex text-sm pt-2">
            <Link
              href={""}
              target="_blank"
              rel="noreferrer"
              className="text-[#387BFF] underline pt-[10px] lg:pt-[0] text-[12px] cursor-pointer hover:opacity-60"
            >
              Distribution Technologies
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
