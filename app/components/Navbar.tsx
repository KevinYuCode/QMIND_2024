"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.scss";
import QMIND_NAV_LOGO from "@/assets/qmind_nav_logo.svg";
import Container from "./Container";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import DISCORD from "@/assets/icons/Discord.png";
import INSTAGRAM from "@/assets/icons/Instagram.png";
import Image from "next/image";
// import { useGlobalContext } from "@/Context/store";

import { createClient } from "../utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import { logout } from "@/actions/authActions";
import { revalidatePath } from "next/cache";
import { useGlobalContext } from "@/Context/store";

function Navbar() {
  const [navOn, setNavOn] = useState(false);
  const setNav = (value: boolean) => {
    setTimeout(() => {
      setNavOn(value);
    }, 10);
  };

  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const { user, setUser, navLoading, setNavLoading } = useGlobalContext();

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);
    }

    getUser();
  }, [router, pathname]);

  const handleLogout = async () => {
    setNavLoading(true);
    await logout();
    const { data, error } = await supabase.auth.getUser();
    setUser(data.user);
    setNavLoading(false);
  };

  useEffect(() => {
    setNavLoading(false);
  }, [user, pathname]);

  return (
    <nav
      className={` ${
        navOn ? `${"h-[100dvh] "} ${styles.navMobileOpenBg}` : `h-[90px]`
      } 
      ${styles.navbarBg}
      fixed z-10 top-0 right-0 left-0 lg:h-[90px] flex items-center `}
    >
      <Container className="flex !flex-row justify-start lg:justify-between items-start  lg:items-center font-gothic w-[100%] ">
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

            {navLoading ? (
              <></>
            ) : user ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-transparent border-[#f0b542] border-[2px] shadow-lg cursor-pointer transition-all hover:scale-[1.05]">
                    PM
                  </div>
                </DialogTrigger>
                <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">
                      Logout
                    </DialogTitle>
                  </DialogHeader>
                  <div className="w-[100%] flex justify-center mt-[30px]">
                    <Button
                      className="px-[20px]"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                asChild
                className=" hover:bg-[#f0b542] bg-transparent  border-[#f0b542] border-[2px] !transition-all cursor-pointer "
              >
                <Link href="/login" className="!opacity-100">
                  Login
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </nav>
  );
}

export default Navbar;
