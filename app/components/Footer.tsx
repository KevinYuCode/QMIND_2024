'use client'
import Link from "next/link";
import React from "react";
import PILLARS from "../../assets/colourful-pillar.png";
import ContentContainer from "./ContentContainer";
import Image from "next/image";
function Footer() {
  return (
    <div className="pb-[4rem]">
      <ContentContainer className="flex !flex-row justify-between gap-[30px] md:gap-[75px] lg:gap-[50px]">
        <div className="flex flex-col self-start ">
          <h2 className="font-bold text-[20px] pb-[30px]">Menu</h2>
          <div className="flex flex-col opacity-[70%] gap-[15px]">
            <Link href="/">Home</Link>
            <Link href="/design">Design</Link>
            <Link href="/leadership">Leadership</Link>
            <Link href="/blog">Blog</Link>
            <Link
              target="_none"
              href="https://www.queensu.ca/alumni/supporting-queens/stories-of-impact/qmind"
            >
              Our Story
            </Link>
            <Link
              rel="noreferrer"
              target="_none"
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiR5OHriJKCAxXspIkEHQR_B1wQwqsBegQICRAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU&opi=89978449"
            >
              Myspace
            </Link>
          </div>
        </div>
        <div className="hidden md:block self-end relative top-[50px] h-[210px] overflow-y-hidden ">
          <Image
            className="object-contain relative bottom-[-5px]"
            src={PILLARS}
            alt="Why do you care what this is?"
          />
        </div>
        <div className="flex flex-col text-right ">
          <h2 className="font-bold text-[20px] pb-[30px]">
            Find Us In More Places
          </h2>
          <div className="flex flex-col opacity-[70%] gap-[15px]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/qmind.ai/?hl=en"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj81fC7jauAAxUPAjQIHc-JC0YQFnoECBAQAQ&url=https%3A%2F%2Fca.linkedin.com%2Fschool%2Fqmindai%2F&usg=AOvVaw27P1wZHGlB3gwzG5Rw_iyP&opi=89978449"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/qmind-ai"
            >
              QMIND Tech Review
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/3FHfAs87"
            >
              Community Discord
            </a>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

export default Footer;
