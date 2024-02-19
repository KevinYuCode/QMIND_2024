import React from 'react'
import ContentContainer from "../components/ContentContainer";
import leadership_image from "../../assets/Leadership_image.jpg";
import plasma from "../../assets/plasma.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import { sofia_sans } from "../font";
import { kontrapunkt, tradeGothic } from "./font";
import Link from "next/link";


const page = () => {
  return (
    <ContentContainer className="flex flex-col !gap-12 md:!gap-16 lg:gap-24 pt-[40px] text-center mb-12 md:mb-16">
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

<div className="flex flex-row w-full h-[350px] p-8 bg-stone-900 rounded-2xl border border-neutral-600 gap-2">
  <div className="flex flex-row h-full w-[40%] md:w-[33%] items-center justify-center">
    <Image
      src={plasma}
      alt=""
      className="object-cover object-center w-[95%] h-[85%] border border-slate-700 rounded-[20px]"
    />
  </div>


    <div className="flex flex-col w-[35%] md:w-[50%] flex-grow overflow-auto items-start">
      <div className='font-kontrapunkt text-2xl text-left bg-stone-900'>
        Secure Shell Communication using Quantum Key Distribution
      </div>
      <div className='flex flex-row space-x-2 mb-4 pt-2'>
   
      <span className='bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt'>PYTHON</span>
      <span className='bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt'>TENSORFLOW</span>
      <span className='bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt'>OPENCV</span>
    </div>
    <div className='flex flex-wrap mb-4'>
      <h3 className='font-kontrapunkt text-sm text-left text-[#6E6E6E] justify-start mb-2'>SHORT PROJECT DESCRIPTION</h3>
      <p className='font-kontrapunkt text-sm text-left texl-lg  mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. </p>
    </div>
    <div className='flex flex-wrap'>
      <h3 className='font-kontrapunkt text-sm text-left text-[#6E6E6E] justify-start mb-2'>REAL WORLD IMPACT  WHAT IMPACT WILL THIS PROJECT HAVE ON THE WORLD OF AI?</h3>
      <p className='font-kontrapunkt text-sm text-left text-lg mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    
    </div>
    <div className='flex flex-grow justify-end items-start'>
      <div className='flex text-sm pt-2'>
      <Link
      href={ ''}
              target="_blank"
              rel="noreferrer"
              className="text-[#387BFF] underline pt-[10px] lg:pt-[0] text-[12px] cursor-pointer hover:opacity-60"
            >
              Distribution Technologies
            </Link>
      </div>
    </div>
  </div>
  


{/* <div className="flex flex-row w-full h-[350px] p-8 bg-stone-900 rounded-2xl border border-neutral-600 gap-2">
  <div className="flex flex-row h-full w-[40%] items-center justify-center">
    <Image
      src={plasma}
      alt=""
      className="object-cover object-center w-[90%] h-[80%] border border-slate-700 rounded-[20px]"
    />
  </div>


  <div className="flex flex-col items-start flex-grow">
    <div className='flex text-xl text-left font-kontrapunkt mb-4'>
      Secure Shell Communication using Quantum Key 
    </div>

    <div className='flex space-x-2 mb-4'>
   
      <span className='bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border font-kontrapunkt'>PYTHON</span>
      <span className='bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border font-kontrapunkt'>TENSORFLOW</span>
      <span className='bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border font-kontrapunkt'>OPENCV</span>
    </div>

    <div className='flex flex-wrap mb-4'>
      <h3 className='font-kontrapunkt text-sm text-left text-[#6E6E6E] justify-start mb-2'>SHORT PROJECT DESCRIPTION</h3>
      <p className='font-kontrapunkt text-sm text-left  mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>

    <div className='flex flex-wrap'>
      <h3 className='font-bold mb-2'>REAL WORLD IMPACT  WHAT IMPACT WILL THIS PROJECT HAVE ON THE WORLD OF AI?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  </div>

  <div className='flex flex-grow items-start'>
    <div className='text-xs pt-2'>
      Disruptive Technologies
    </div>
  </div>
</div>

  {/* <div className=' flex !font-kontrapunkt text-2xl h-full flex justify-start bg-stone-900'>
    Secure Shell Communication using Quantum Key Distribution
    
    </div>
    <div className='flex text-sm h-full items-right '>
      Disruptive Technologies 
    </div> */} 
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

export default page