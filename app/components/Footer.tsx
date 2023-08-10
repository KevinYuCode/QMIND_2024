import Link from "next/link";
import React from "react";
import PILLARS from "../../assets/colourful-pillar.svg";
import ContentContainer from "./ContentContainer";
function Footer() {
  return (
    <div className="pb-[4rem]">
      <ContentContainer className="flex justify-between gap-[30px] md:gap-[75px] lg:gap-[50px]">
        <div className="flex flex-col self-start ">
          <h2 className="font-bold text-[20px] pb-[30px]">Menu</h2>
          <div className="flex flex-col opacity-[70%] gap-[15px]">
            <Link href="/">Home</Link>
            <Link href="/design">Design</Link>
            <Link href="/leadership">Leadership</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/our-story">Our Story</Link>
          </div>
        </div>
        <div className="hidden md:block self-end relative top-[70px] ">
          {/* <img
            className="max-w-[100%] min-w-[120px] h-[158px] object-contain h-auto"
            src={PILLARS.src}
            alt="Why do you care what this is?"
          /> */}
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
              href="https://discord.gg/UVdQ58KX"
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
