"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.scss";
import QMIND_NAV_LOGO from "../../assets/qmind_nav_logo.svg";
import ContentContainer from "./ContentContainer";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
function Navbar({ navOn = false, setNavOn }: any) {
  const closeNav = () => {
    setTimeout(() => {
      setNavOn(false);
    }, 200);
  };
  return (
    <nav
      className={` ${
        navOn ? "" : `${styles.navbarBg} h-[90px]`
      } fixed z-10 top-0 right-0 left-0 lg:h-[140px] z-[3] flex items-center `}
    >
      <ContentContainer className="flex justify-between font-gothic w-[100%] ">
        <Link href="/" className="left-section">
          <img
            className="h-[40px] lg:h-[47px]"
            src={QMIND_NAV_LOGO.src}
            alt="Qmind Nav Logo"
          />
        </Link>
        <button
          className="absolute top-[33px] right-[30px] flex lg:none text-[30px]"
          onClick={() => {
            setNavOn(true);
          }}
        >
          <HiMenuAlt3 />
        </button>
        <motion.div
          className={`${
            navOn ? "flex" : "hidden"
          } h-[100vh] lg:h-auto absolute lg:relative right-section  ${
            styles.navLinks
          }`}
        >
          <button
            className={` text-[30px] absolute top-[33px] right-[30px] text-blue ${styles.close}`}
            onClick={() => {
              setNavOn(false);
            }}
          >
            <MdClose />
          </button>
          <div className="flex-col mt-[140px] w-[100%] lg:flex-row flex items-center gap-[50px]">
            <Link href="/" onClick={() => closeNav()}>
              HOME
            </Link>
            <Link href="/leadership" onClick={() => closeNav()}>
              LEADERSHIP
            </Link>
            <Link href="/leadership" onClick={() => closeNav()}>
              DESIGN
            </Link>
            <Link href="/leadership" onClick={() => closeNav()}>
              OUR STORY
            </Link>
            <Link href="/leadership" onClick={() => closeNav()}>
              BLOG
            </Link>
          </div>
        </motion.div>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
