'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.scss";
import QMIND_NAV_LOGO from "../../assets/qmind_nav_logo.svg";
import ContentContainer from "./ContentContainer";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import DISCORD from "@/../assets/icons/Discord.png";
import INSTAGRAM from "@/../assets/icons/Instagram.png";
import Image from "next/image";
// import { useGlobalContext } from "@/Context/store";
import PROFILE from "@/../assets/icons/profile.svg";
import Modal from "./modal/modal";

function Navbar() {
  // const { navOn, setNavOn } = useGlobalContext();
  const [navOn, setNavOn] = useState(false);
  const setNav = (value: boolean) => {
    setTimeout(() => {
      setNavOn(value);
    }, 10);
  };

  const [loginModalOn, setLoginModalOn] = useState(false);

  // const { user } = useGlobalContext();
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
          onClick={() => setNav(true)}
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
            onClick={() => setNav(false)}
          >
            <MdClose />
          </button>

          {/* Nav Links */}
          <div className="flex-col md:mt-[0] bg-transparent w-[100%] lg:flex-row flex items-center gap-[50px]">
            <Link
              href="/"
              className={pathname == "/" ? styles.activePage : ""}
              onClick={() => setNav(false)}
            >
              HOME
            </Link>
            <Link
              href="/leadership"
              className={pathname == "/leadership" ? styles.activePage : ""}
              onClick={() => setNav(false)}
            >
              LEADERSHIP
            </Link>
            <Link
              onClick={() => setNav(false)}
              href="https://medium.com/qmind-ai"
              target="_blank"
            >
              BLOG
            </Link>
            <Link
              href="/projects"
              className={pathname == "/projects" ? styles.activePage : ""}
              onClick={() => setNav(false)}
            >
              PROJECTS
            </Link>
            <Link
              onClick={() => setNav(false)}
              href="https://www.instagram.com/p/CFZ_tICAi0i/"
              target="_blank"
            >
              <Image src={INSTAGRAM} alt="Instagram" width={24} height={18} />
            </Link>
            <Link
              onClick={() => setNav(false)}
              href="https://discord.gg/jw94EEGyJR"
              target="_blank"
            >
              <Image src={DISCORD} alt="Discord" width={25} height={25} />
            </Link>

            <Modal>
              <Image src={PROFILE} height={30} width={30} alt="profile" />
            </Modal>
          </div>
        </motion.div>

        {/* {loginModalOn && <SignInModal />} */}
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
