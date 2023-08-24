"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.scss";
import QMIND_NAV_LOGO from "../../assets/qmind_nav_logo.svg";
import ContentContainer from "./ContentContainer";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Navbar({ navOn = false, setNavOn }: any) {
  const closeNav = () => {
    setTimeout(() => {
      setNavOn(false);
    }, 200);
  };

  const pathname = usePathname();

  return (
    <nav
      className={` ${
        navOn ? `${"h-[100dvh] "} ${styles.navMobileOpenBg}` : `h-[90px]`
      } 
      ${styles.navbarBg}
      fixed z-10 top-0 right-0 left-0 lg:h-[90px] flex items-center `}
    >
      <ContentContainer className="flex !flex-row justify-start lg:justify-between items-start  lg:items-center font-gothic w-[100%] ">
        {/* QMIND Logo */}
        <Link
          href="/"
          className={`${
            navOn ? "hidden" : "block"
          } absolute top-[28px] lg:top-0 left-[30px] lg:left-0  lg:relative lleft-section`}
        >
          <img
            className="ml-[15px] h-[40px] lg:h-[47px]"
            src={QMIND_NAV_LOGO.src}
            alt="Qmind Nav Logo"
          />
        </Link>

        {/* Open Button */}
        <button
          className={`${
            navOn ? "hidden" : "flex"
          } absolute top-[33px] right-[30px] lg:hidden text-[30px]`}
          onClick={() => {
            setNavOn(true);
          }}
        >
          <HiMenuAlt3 />
        </button>

        {/* Right Section */}
        <motion.div
          className={`${
            navOn ? "flex" : "hidden"
          } lg:flex w-[100%] lg:w-auto h-[100%] items-center ${
            styles.mobileBg
          } lg:relative right-section  ${styles.navLinks}`}
        >
          {/* Close Button */}
          <button
            className={`${
              navOn ? "block" : "hidden"
            } lg:hidden text-[30px] absolute top-[33px] right-[30px] text-blue ${
              styles.close
            }`}
            onClick={() => {
              setNavOn(false);
            }}
          >
            <MdClose />
          </button>

          {/* Nav Links */}
          <div className="flex-col md:mt-[0] bg-transparent w-[100%] lg:flex-row flex items-center gap-[50px]">
            <Link
              href="/"
              className={pathname == "/" ? styles.activePage : ""}
              onClick={() => closeNav()}
            >
              HOME
            </Link>
            <Link
              href="/leadership"
              className={pathname == "/leadership" ? styles.activePage : ""}
              onClick={() => closeNav()}
            >
              LEADERSHIP
            </Link>
            <p
              className="!text-[#424242] cursor-not-allowed"
              onClick={() => closeNav()}
            >
              DESIGN
            </p>
            <p
              className="!text-[#424242] cursor-not-allowed"
              onClick={() => closeNav()}
            >
              OUR STORY
            </p>
            <Link
              onClick={() => closeNav()}
              href="https://medium.com/qmind-ai"
              target="_blank"
            >
              BLOG
            </Link>
            <Link
              onClick={() => closeNav()}
              href="https://discord.gg/xJx3g7H4"
              target="_blank"
            >
              DISCORD
            </Link>
          </div>
        </motion.div>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
