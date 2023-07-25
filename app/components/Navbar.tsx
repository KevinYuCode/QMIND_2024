import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.scss";
import QMIND_NAV_LOGO from "../../assets/qmind_nav_logo.svg";
import ContentContainer from "./ContentContainer";
function Navbar() {
  return (
    <nav className="absolute top-0 right-0 left-0 h-[140px] z-[3] flex items-center ">
      <ContentContainer className="flex justify-between font-gothic w-[100%] ">
        <div className="left-section">
          <img src={QMIND_NAV_LOGO.src} alt="Qmind Nav Logo" />
        </div>
        <div className={`right-section flex items-center gap-[50px] ${styles.navLinks}`}>
          <Link href="/">HOME</Link>
          <Link href="/leadership">LEADERSHIP</Link>
          <Link href="/leadership">DESIGN</Link>
          <Link href="/leadership">OUR STORY</Link>
          <Link href="/leadership">BLOG</Link>
        </div>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
